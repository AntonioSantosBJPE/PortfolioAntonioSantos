import { CardProject } from "../../components/CardProject";
import { Footer } from "../../components/Footer";
import { infosProjectsPageProjects } from "../../services/dataBase";
import { StyledContainerProjects, StyledPageProjects } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import { PageTransitions } from "../../components/Animations/PageTransitions";
import { TitlesSectionsAnimations } from "../../components/Animations/TitlesSectionsAnimations";

export const ProjectsPage = () => {
  return (
    <PageTransitions>
      <StyledContainerProjects>
        <StyledPageProjects>
          <div>
            <TitlesSectionsAnimations title="Projetos" />
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
              {infosProjectsPageProjects.map((infos, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardProject infos={infos} />
                  </SwiperSlide>
                );
              })}
            </ul>
          </Swiper>
        </StyledPageProjects>

        <Footer />
      </StyledContainerProjects>
    </PageTransitions>
  );
};
