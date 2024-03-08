import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

function Projectsdb() {
  const [projectsList, setProjectsList] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [newProjectImages, setNewProjectImages] = useState([]);

  const projectsCollectionRef = collection(db, "Noun-projects");

  const getProjectsList = async () => {
    try {
      const data = await getDocs(projectsCollectionRef);
      const projects = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(projects);
      setProjectsList(projects);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  const uploadImage = async (imageFile) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      // Get a promise to track the upload progress
      const snapshot = await uploadTask;

      // Once the upload is complete, get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const submitNewProject = async () => {
    try {
      const imageUrls = await Promise.all(
        newProjectImages.map((image) => uploadImage(image))
      );
      await addDoc(projectsCollectionRef, {
        title: newProjectTitle,
        description: newProjectDescription,
        images: imageUrls,
      });

      getProjectsList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProject = async (id) => {
    try {
      // Get the project document
      const projectDoc = doc(db, "Noun-projects", id);
      // Get the project data
      const projectSnapshot = await getDoc(projectDoc);
      const projectData = projectSnapshot.data();
      console.log(projectData);
      // Delete images from Firebase Storage
      if (projectData && projectData.images) {
        const storage = getStorage();
        await Promise.all(
          projectData.images.map(async (imageUrl) => {
            try {
              // Get the full path of the image in Firebase Storage
              const imagePath = imageUrl.split(storage.bucket)[1];
              // Ensure imagePath is not null or empty
              if (imagePath) {
                const imageRef = ref(storage, imagePath.trim());
                // Delete the image
                await deleteObject(imageRef);
              }
            } catch (error) {
              console.error("Error deleting image:", error);
            }
          })
        );
      }
      await deleteDoc(projectDoc);

      getProjectsList();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div>
      <div className="relative  flex flex-col gap-4">
        <input
          type="text"
          placeholder="title"
          className="border-solid border-2 p-1 border-indigo-600 rounded-lg"
          onChange={(e) => setNewProjectTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          className="border-solid border-2 p-1 border-indigo-600 rounded-lg"
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />

        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
          onChange={(e) => setNewProjectImages([...e.target.files])}
        />

        {newProjectImages.length > 0 && (
          <>
            <h2>Selected Images:</h2>
            <div className="flex flex-row">
              {newProjectImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Selected Image ${index}`}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    margin: "5px",
                  }}
                />
              ))}
            </div>
          </>
        )}
        <button
          onClick={() => submitNewProject()}
          type="submit"
          className="w-full text-stone-800 font-semibold bg-yellow-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Submit project
        </button>
      </div>
      <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex flex-col items-center justify-center pt-16 lg:h-fit">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            My Projects
          </span>{" "}
        </h1>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {projectsList.map((project) => (
              <div key={project.id} className="bg-white rounded-lg border  p-4">
                <img
                  src={project.images[0]}
                  alt="Placeholder Image"
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                </div>
                <button
                  onClick={() => deleteProject(project.id)}
                  className=" bottom-0  text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectsdb;
