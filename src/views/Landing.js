
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import useRedirection from '../hooks/useRedirection'

const Landing = () => {

  useRedirection("/books", 3000);
 
  return (
    <div className="landing">
       <Link to={"/"}>
      <h1>MILIBROMX</h1>
      <img src="/images/msj.jpg" alt="Descripción de la imagen"></img>
          
      </Link>

    </div>
  );
};

export default Landing;