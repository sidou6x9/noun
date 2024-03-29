import React from "react";

function ProjectsCard({ imageUrl, title, content, images }) {
  return (
    <div className="bg-white rounded-lg border  p-4">
      <img
        src={imageUrl}
        alt="Placeholder Image"
        className="w-full h-48 rounded-md object-cover"
      />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-1 py-4">
        <a href="#" className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}
export default ProjectsCard;
