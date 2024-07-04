import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import Modal from "./components/modal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&page=${currentPage}&per_page=${imagesPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setTotalImages(data.totalHits); // Total number of images
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term, currentPage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const totalPages = Math.ceil(totalImages / imagesPerPage);

  return (
    <div className=" mx-auto px-4 pb-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mx-auto pt-10">
        Stunning Free Images
      </h1>
      <p className="text-sm text-center mx-auto pt-2">
        stock images from Pixaby API!
      </p>
      <ImageSearch
        searchText={(text) => {
          setTerm(text);
          setCurrentPage(1); // Reset to the first page on new search
        }}
      />

      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl text-center mx-auto">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onClick={handleImageClick}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center my-4">
            {currentPage > 1 && (
              <button
                onClick={prevPage}
                className="bg-purple-500 text-white px-4 py-2 mx-2 rounded hover:bg-purple-600"
              >
                Previous
              </button>
            )}
            <span className="text-gray-700 px-4 py-2 mx-2 rounded">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <button
                onClick={nextPage}
                className="bg-purple-500 text-white px-4 py-2 mx-2 rounded hover:bg-purple-600"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
      <Modal
        showModal={showModal}
        image={selectedImage}
        onClose={handleCloseModal}
      />
      <p className="text-sm text-center text-gray-400 mx-auto pt-2">
        created by Marielle Harrell
      </p>
    </div>
  );
}

export default App;
