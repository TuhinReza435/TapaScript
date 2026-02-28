import React from "react";
import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

const BookRow = ({ book, ontoggleFeature }) => {
  return (
    <div className="mx-[20%] flex m-3 justify-between bg-slate-100 px-5 py-2  rounded-xs">
      <BookDetails name={book.title} authore={book.author} />
      <FeatureBook book={book} ontoggleFeature={ontoggleFeature} />
    </div>
  );
};

export default BookRow;
