// src/pages/Gallery.jsx
import React from "react";

const imageUrls = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
];

function GalleryPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
