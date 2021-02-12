import { useState } from "react";
import useFetch from "../hooks/useFetch";

const AddBook = () => {
  const { data: books } = useFetch('http://localhost:8000/books');
  console.log('books', books);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  console.log(author);
  const [description, setDescription] = useState('');

  const authorsList = () => books.map(book => (
    <option key={ book.id } value={ book.author }>{ book.author }</option>
  ));

  return (
    <div className="add-book">
      <h2>Add a book</h2>
      <form>
        <label>
          Title:
          <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
          Author:
          <input required type="text" value={ author } placeholder="create or choose" onChange={(e) => setAuthor(e.target.value)}/>
          <select value={ author } onChange={(e) => setAuthor(e.target.value)}>
            { books && authorsList() }
          </select>
        </label>
        <label>
          Description:
          <textarea value={ description } onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <button>Add book</button>
      </form>
    </div>
  );
}
 
export default AddBook;