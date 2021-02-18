import { useState } from "react";
import { useHistory } from 'react-router-dom';

import useFetch from "../hooks/useFetch";
import AutoComplete from "./AutoComplete";

const AddBook = () => {
  const { data: books } = useFetch('http://localhost:8000/books');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // event handlers
  const handleAuthorInput = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const authors = books.map(book => book.author)
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = authors.sort().filter(auth => regex.test(auth));
    }
    setSuggestions(suggestions);
    setAuthor(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // create the book object that should be added to the database
    const book = { title, author, description }

    setIsPending(true);

    // send new book to json server via post request
    fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    }).then(() => {
      console.log('new book added');
      setIsPending(false);
      // redirect back to home page
      history.push('/');
    })
  };

  return (
    <div className="add-book">
      <h2>Add a book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
          Author:
          <input required type="text" value={author} placeholder="type to search" onChange={handleAuthorInput} />
          <AutoComplete suggestions={suggestions} setSuggestions={setSuggestions} setAuthor={setAuthor} />
        </label>
        <label>
          Description:
          <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        { !isPending  && <button>Add book</button> }
        { isPending  && <button disabled>Adding book...</button> }
      </form>
    </div>
  );
}
 
export default AddBook;