import Header from "./Header";
import Search from "./Search";
import BookLIst from "./BookLIst";
import { useState } from "react";

const Books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false,
  },
  {
    id: 2,
    title: "Pather Panchali",
    author: "Bibhutibhushan Bandyopadhyay",
    featured: true,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    featured: false,
  },
  {
    id: 4,
    title: "Shesher Kobita",
    author: "Rabindranath Tagore",
    featured: true,
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },
  {
    id: 6,
    title: "Himu",
    author: "Humayun Ahmed",
    featured: true,
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },
  {
    id: 8,
    title: "Lalsalu",
    author: "Syed Waliullah",
    featured: false,
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    featured: false,
  },
  {
    id: 10,
    title: "Goyenda Borodachoron",
    author: "Shirshendu Mukhopadhyay",
    featured: true,
  },
  {
    id: 11,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    featured: false,
  },
  {
    id: 12,
    title: "Chander Pahar",
    author: "Bibhutibhushan Bandyopadhyay",
    featured: true,
  },
  {
    id: 13,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    featured: false,
  },
  {
    id: 14,
    title: "Misir Ali series",
    author: "Humayun Ahmed",
    featured: true,
  },
  {
    id: 15,
    title: "Animal Farm",
    author: "George Orwell",
    featured: false,
  },
  {
    id: 16,
    title: "Byomkesh Bakshi",
    author: "Sharadindu Bandyopadhyay",
    featured: true,
  },
  {
    id: 17,
    title: "Lord of the Flies",
    author: "William Golding",
    featured: false,
  },
  {
    id: 18,
    title: "Feluda Series",
    author: "Satyajit Ray",
    featured: true,
  },
  {
    id: 19,
    title: "The Alchemist",
    author: "Paulo Coelho",
    featured: false,
  },
  {
    id: 20,
    title: "Koto Nodi Soroboro",
    author: "Humayun Azad",
    featured: false,
  },
];
const Boimela = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(Books);
  const toggleFeature = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, featured: !book.featured } : book,
      ),
    );
  };
  return (
    <div>
      <div className="font-bold text-3xl mt-3 ml-3">Boimela</div>
      <Header />
      <Search serachTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <BookLIst
        serachTerm={searchTerm}
        Books={books}
        ontoggleFeature={toggleFeature}
      />
    </div>
  );
};

export default Boimela;
