import "./Home.scss";
import logo from "../../assets/shadow.png";
import { useEffect, useState } from "react";

const catchyPhrases = [
  `'I like programming'`,
  `'light attracts bugs'`,
  `'not a Bug ... is a feature'`,
  `'A machine that turns coffee into code'`,
  `'light attracts bugs'`,
  `'Don't test your code in production, use mockito ;)'`,
  `'The best thing about a boolean is even if you are wrong, you are only off by a bit'`,
  `'ChatGpt also made this caption'`,
  `'Sometimes i use glasses cuase i can't C#'`,
];

const Home = () => {
  const [slogan, setSlogan] = useState(`'I like programming'`);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setSlogan(
        catchyPhrases[Math.floor(Math.random() * catchyPhrases.length)]
      );
      if (index > 8) {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  const block = "home";

  return (
    <section>
      <div className={`${block}`}>
        <h1 className={`${block}__title`}>Fernando Binda</h1>
        <div className={`${block}__container`}>
          <img
            className={`${block}__container__logo`}
            src={logo}
            alt="description"
          />
          <h1>Full Stack Developer </h1>
          <p className={`${block}__container__description`}>{slogan}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
