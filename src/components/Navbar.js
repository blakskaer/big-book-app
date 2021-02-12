import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Big Book App</h1>
      </Link>
      <div className="links">
        <Link to="/">home</Link>  
        <Link to="/add-book">add book</Link>
      </div>  
    </nav>
  );
}
 
export default Navbar;