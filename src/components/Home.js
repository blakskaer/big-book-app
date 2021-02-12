import useFetch from "../hooks/useFetch";
import BookList from "./BookList";

const Home = () => {
  const { data: books, isPending, error } = useFetch('http://localhost:8000/books');
  console.log('books', books);

  return (
    <div className = "home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {books && <BookList books={ books } />}
    </div>
  );
}
 
export default Home;