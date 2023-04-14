import Icons from "../../utils/TechIcons";
import sia from "../../assets/sia.jpg";
import Treasurer from "../../assets/treasurer.png";
import altamar from "../../assets/altamar.png";
import connect4 from "../../assets/connect4.png";

export const Projects = [
  {
    title: "Altamar",
    description:
      "Project made as a career project for TEC. Altamar it's a React native hybrid App that allows people to buy and sell products in a simpler way, connecting directly with sellers of interest or buyers interested in their product.",
    icons: [Icons["react"], Icons["node"], Icons["mongo"], Icons["mobile"]],
    image: altamar,
    youtube: "https://youtu.be/ExN-AacWR_o",
  },
  {
    title: "Connect 4",
    description:
      "This is a project I did on vacation to learn more about games using sockets and react.",
    icons: [Icons["react"], Icons["node"], Icons["sockets"]],
    image: connect4,
    git: "https://github.com/ferax99/Connect4",
    youtube: "https://youtu.be/z818CzajA64",
  },
  {
    title: "SIA",
    description:
      "This is currently under development as a freelancer project for the SIA company dedicated to the security of condominiums and communities. ",
    icons: [Icons["react"], Icons["sass"], Icons["bootsrap"]],
    image: sia,
  },
  {
    title: "Treasurer",
    description:
      "Project made for TEC in 2018 using java and mysql to administrate home expenses. In this project learned database modeling and normalization, UI experience and MVC architecture",
    icons: [Icons["java"], Icons["mysql"]],
    image: Treasurer,
    git: "https://github.com/ferax99/treasurer",
  },
];
