
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import useRedirection from '../hooks/useRedirection'

const Landing = () => {

  useRedirection("/books", 3000);
 
  return (
    <div className="landing">
       <Link to={"/"}>
      <h1>Bienvenidos A MILIBROMX</h1>
      <p>Encuentra Tu Libro Aqui</p>
      </Link>
    </div>
  );
};

export default Landing;