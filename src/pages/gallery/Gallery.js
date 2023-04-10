import ProjectCard from "../../components/projectCard/ProjectCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.scss";

import Icons from "../../utils/TechIcons";
import sia from "../../assets/sia.jpg";
import Treasurer from "../../assets/treasurer.png";
import altamar from "../../assets/altamar.png";
import connect4 from "../../assets/connect4.png";
const Gallery = () => {
  const block = "projectGallery";
  return (
    <section className={block}>
      <h1 className={`${block}__title`}>My projects</h1>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={`${block}__gallery`}
      >
        <SwiperSlide>
          <div className={`${block}__gallery__project`}>
            <ProjectCard
              props={{
                title: "Altamar",
                description:
                  "Altamar it's a React native hybrid App that allows people to buy and sell products in a simpler way, connecting directly with sellers of interest or buyers interested in their product.",
                icons: [
                  Icons["react"],
                  Icons["node"],
                  Icons["mongo"],
                  Icons["mobile"],
                ],
                image: altamar,
                youtube: "https://youtu.be/ExN-AacWR_o",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${block}__gallery__project`}>
            <ProjectCard
              props={{
                title: "Connect 4",
                description:
                  "This is a project I did on vacation to learn more about games using sockets and react.",
                icons: [Icons["react"], Icons["node"], Icons["sockets"]],
                image: connect4,
                git: "https://github.com/ferax99/Connect4",
                youtube: "https://youtu.be/z818CzajA64",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${block}__gallery__project`}>
            <ProjectCard
              props={{
                title: "SIA",
                description:
                  "This is currently under development as a freelancer project for the SIA company dedicated to the security of condominiums and communities. ",
                icons: [Icons["react"], Icons["sass"], Icons["bootsrap"]],
                image: sia,
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${block}__gallery__project`}>
            <ProjectCard
              props={{
                title: "Treasurer",
                description:
                  "Project made for TEC in 2018 using java and mysql to administrate home expenses. In this project learned database modeling and normalization, UI experience and MVC architecture",
                icons: [Icons["java"], Icons["mysql"]],
                image: Treasurer,
                git: "https://github.com/ferax99/treasurer",
              }}
            />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};
export default Gallery;
