import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const [searchType, setSearchType] = useState("images");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text, searchType);
  };

  return (
    <div className=" rounded overflow-hidden mb-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full">
        <div className="max-w-md mx-auto mt-6">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search for an image..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
