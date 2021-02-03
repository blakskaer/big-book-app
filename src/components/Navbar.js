import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Big Book App</h1>
      <div className="links">
        <Link to="/">home</Link>  
        <Link to="/add-book">add book</Link>
      </div>  
    </nav>
  );
}
 
export default Navbar;