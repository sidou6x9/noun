import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ProjectsCard({ imageUrl, title, content }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "unset"; // Enable scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = "unset"; // Re-enable scrolling when component unmounts
    };
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg border p-4">
      <img
        src={imageUrl[0]}
        alt="Placeholder Image"
        className="w-full h-48 rounded-md object-cover"
      />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-1 py-4">
        <a
          href="#"
          className="text-blue-500 hover:underline"
          onClick={openModal}
        >
          Read More
        </a>
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center w-3/5  overflow-hidden">
            <div className="text-center mb-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{content}</p>
            </div>
            <div className="relative w-full h-80">
              {/* The paddingBottom style ensures that the aspect ratio is maintained (e.g., 4:3 aspect ratio = 75%) */}
              <img
                src={imageUrl[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <button
                className="absolute top-1/2 left-0 text-stone-950 hover:underline transform -translate-y-1/2 p-4"
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 text-stone-950 hover:underline transform -translate-y-1/2 p-4"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
            <button
              className="text-stone-950 hover:underline mt-auto"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsCard;
