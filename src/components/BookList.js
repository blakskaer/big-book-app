import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const matches = !searchTerm 
    ? books
    : books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        || book.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );


  return (
    <div className="book-list">
      <div className="search-field">
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        />
      </div>
      {matches.map(book => (
          <div className="book-preview" key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h2>{ book.title }</h2>
              <p>{ book.author }</p>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
 
export default BookList;