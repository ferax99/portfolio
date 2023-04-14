import ProjectCard from "../../components/projectCard/ProjectCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.scss";

import { Projects } from "./Projects";
const Gallery = () => {
  const block = "projectGallery";

  const projectList = [];

  Projects.forEach((project, index) => {
    projectList.push(
      <SwiperSlide key={index}>
        <div className={`${block}__gallery__project`}>
          <ProjectCard props={project} />
        </div>
      </SwiperSlide>
    );
  });

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
        {projectList}
        ...
      </Swiper>
    </section>
  );
};
export default Gallery;
