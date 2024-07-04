import React from "react";

const Modal = ({ showModal, image, onClose }) => {
  if (!showModal) return null;

  const tags = image.tags.split(",");

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl z-50">
        <button
          className="text-white bg-red-500 rounded-full  absolute top-0 right-0 m-4 w-9 h-9 hover:bg-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image.webformatURL}
          alt={image.webformatURL}
          className="w-full"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">Photo by {image.user}</h2>
          <ul className="my-4">
            <li>
              <strong>Views:</strong> {image.views}
            </li>
            <li>
              <strong>Downloads:</strong> {image.downloads}
            </li>
            <li>
              <strong>Likes:</strong> {image.likes}
            </li>
          </ul>
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-4"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
