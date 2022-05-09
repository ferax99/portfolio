import './style.css';
import './animations.css';
import mail from '../media/mail.png';
import git from '../media/github.png';
import LI from '../media/lin.png';
import fiver from '../media/fiv2.png';


const About = () => {


  return (
    <div>

      <div className="screen2">
        <h1 className="title">Contact</h1>
        <div className='contactos' >
          <div className='contacto'  >
            <a href="https://us11.list-manage.com/contact-form?u=8b3c8a6fcafe30907def2005d&form_id=8f3692c6e4c5cb142d89638f2744bdf4" target="_blank" rel="noreferrer noopener">
              <img src={mail} alt="xd" />
            </a>
          </div>
          <div className='contacto'>
            <a href="https://www.linkedin.com/in/fernando-binda-9298721b3/" target="_blank" rel="noreferrer noopener">
              <img src={LI} alt="xd" />
            </a>
          </div>
          <div className='contacto'>
            <a href="https://github.com/ferax99" target="_blank" rel="noreferrer noopener">
              <img src={git} alt="xd" />
            </a>
          </div>



        </div>
        <div className='contactos' >
          <div className='contacto'  >
            <a href="https://www.fiverr.com/ferax99?public_mode=true" target="_blank" rel="noreferrer noopener">
              <img src={fiver} alt="xd" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}


export default About;
