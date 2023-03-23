import './Home.scss';
import logo from '../../assets/shadow.png';
import { useEffect, useState } from 'react';

const Home = () => {
  const [slogan,setSlogan] = useState(`'I like programming'`);


  useEffect(() => {
    let index= 0;
    const interval =  setInterval(() => {
      const catchyPhrases = [`'I like programming'`, `Coffe at 11pm`,`not a Bug ... is a feature`,`react > angular? 1:0`];
      index++;
      setSlogan(catchyPhrases[Math.floor(Math.random() * catchyPhrases.length)]);
      if(index>8){clearInterval(interval)};
    }, 2500);
  
    return () => clearInterval(interval) ;

  }, []);


  return (
    <section>

    <div className="screen1">
    <h1 className="nombre">Fernando Binda</h1>
      <div className="info">

        <img className="logo move" src={logo} alt="description" />
        <h1>Full Stack Developer </h1>
        <p >{slogan}</p>
      </div>
     
    </div>
    
    </section>
  );
}

export default Home;
