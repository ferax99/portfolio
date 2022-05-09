import './style.css';
import './animations.css';

import React from 'react';

import git from '../media/github.png';
import yt from '../media/yt.png';
import altamarApp from '../media/altamarApp.png';
import connect4 from '../media/connect4_pic.png';
// Render a YouTube video player
const Projects = () => {


  const altamarcss = {
    "with": 400,
    "height": 400,
    "border-radius": 26

  };
  const connectcss = {
    "with": 200,
    "height": 200,
    "border-radius": 26

  };
  return (
    <div>
      <h1 className='project-title'> Some of my projects</h1>
    
<div className='screenP'>

<div className='projects'>
  <div className='project'>
    <h1>Altamar</h1>
    <div>
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
    </div>
    <img src={altamarApp} style={altamarcss} alt="xd" />


    <div className='descrip'>

      <h3>Altamar it's a React native hybrid App that allows people to buy and sell products in a simpler way, connecting directly with sellers of interest or buyers interested in their product.</h3>

      <a href="https://github.com/ferax99/AltamarApp" target="_blank" rel="noreferrer noopener">
        <img src={git} className="git" alt="xd" />
      </a>
      <a href="https://youtu.be/ExN-AacWR_o" target="_blank" rel="noreferrer noopener">
        <img src={yt} className="git" alt="xd" />
      </a>

    </div>

  </div>


  <div className='project'>
    <h1>Connect 4</h1>
    <div>
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />


    </div>
    <img src={connect4} style={connectcss} alt="xd" />


    <div className='descrip'>

      <h3>This is a project I did on vacation to learn more about games using sockets and react.</h3>

      <a href="https://github.com/ferax99/Connect4" target="_blank" rel="noreferrer noopener">
        <img src={git} className="git" alt="xd" />
      </a>
      <a href="https://youtu.be/z818CzajA64" target="_blank" rel="noreferrer noopener">
        <img src={yt} className="git" alt="xd" />
      </a>

    </div>

  </div>

  <div className='project'>
    <h1>Airline - C and SQL </h1>
    <div>

      <img  className='devicon' alt=""src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
      
      <img className='devicon' alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
    

    </div>
    <img src={"https://cdn.pixabay.com/photo/2013/07/13/13/20/plane-160861_960_720.png"} style={connectcss} alt="xd" />


    <div className='descrip'>

      <h3>This a the simulator of an airline ticket booking software implemented with C and Mysql</h3>

      <a href="https://github.com/ferax99/aerolinea" target="_blank" rel="noreferrer noopener">
        <img src={git} className="git" alt="xd" />
      </a>
     

    </div>

  </div>




</div>








</div>

    </div>
    
  );
}


export default Projects;
