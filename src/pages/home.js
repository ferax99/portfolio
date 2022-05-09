import './style.css';
import './animations.css';
import logo from '../media/foto.png';

const Home = () => {

  return (
    <div>
      
    <div className="screen1">
    <h1 className="nombre">Fernando Binda</h1>
      <div className="info">

        <img className="logo move" src={logo} alt="description" />
        <h1>Full Stack Developer </h1>
        <p >'I like programming'</p>
      </div>
      <svg className="arrows">
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
    </div>
    </div>
  );
}

export default Home;
