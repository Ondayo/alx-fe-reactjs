import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'navy', padding: '10px', color: 'white' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
