import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import ProjectsCard from "./ProjectCard";
function Realisations() {
  const [projectsList, setProjectsList] = useState([]);
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
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex flex-col items-center justify-center pt-16 min-h-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Design Better
        </span>{" "}
      </h1>
      <p className="text-lg max-w-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Noun Designs we focus on markets where technology, innovation,
        and capital can unlock long-term value and drive economic growth to our
        customers.
      </p>
      {!projectsList ? (
        <div
          className=" m-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {projectsList.map((project) => (
              <ProjectsCard
                key={project.id}
                title={project.title}
                content={project.description}
                imageUrl={project.images}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Realisations;
