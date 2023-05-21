import { CardProject } from "../../../components/CardProject";
import { LinkNavigation } from "../../../components/LinkNavigation";
import { infosProjectsHomePage } from "../../../services/dataBase";
import { StyledProjects } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import { motion } from "framer-motion";

export const SectionProjects = () => {
  return (
    <StyledProjects>
      <div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: "relative" }}
        >
          <span>#</span>Projetos
        </motion.h2>
        <span></span>
        <LinkNavigation
          name={"Todos ~~>"}
          to="/projects"
          variant="InternalNoBoardGrey0"
        />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <ul>
          {infosProjectsHomePage.map((infos, index) => {
            return (
              <SwiperSlide key={index}>
                <CardProject infos={infos} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </StyledProjects>
  );
};
