import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/books');

  return (
    <div>Hello, Homies!</div>
  );
}
 
export default Home;