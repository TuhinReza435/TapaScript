import React from "react";
import BookRow from "./BookRow";

const BookLIst = ({ serachTerm, Books, ontoggleFeature }) => {
  serachTerm = serachTerm.toUpperCase();

  const newArray = Books.filter((element) => {
    return element.title.toUpperCase().includes(serachTerm);
  });
  console.log(serachTerm);
  return (
    <ul>
      {newArray.map((book) => (
        <li key={book.id}>
          <BookRow book={book} ontoggleFeature={ontoggleFeature} />
        </li>
      ))}
    </ul>
  );
};

export default BookLIst;
