import React from "react";
import { FaStar } from "react-icons/fa";

const FeatureBook = ({ book, ontoggleFeature }) => {
  return (
    <button onClick={() => ontoggleFeature(book.id)}>
      <FaStar
        className={`drop-shadow-md ${book.featured ? "text-green-400" : "text-red-300"}`}
        size={25}
      />
    </button>
  );
};

export default FeatureBook;
