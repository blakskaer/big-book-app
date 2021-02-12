import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BookDetails = () => {
  const { id } = useParams();
  console.log('iiiiddd', id, typeof(id))
  const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);

  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { book && (
        <article>
          <h2>{ book.title }</h2>
          <p>by { book.author }</p>
          <div>{ book.description }</div>
          <button>delete</button>
        </article>
      ) }
    </div>
  );
}
 
export default BookDetails;