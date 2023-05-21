import { StyledContainerHome } from "./style";
import { Footer } from "../../components/Footer";
import { SectionInitialInfos } from "./SectionInitialInfos";
import { SectionProjects } from "./SectionProjects";
import { SectionSkills } from "./SectionSkills";
import { SectionAbout } from "./SectionAbout";
import { SectionContact } from "./SectionContact";
import { PageTransitions } from "../../components/Animations/PageTransitions";

export const HomePage = () => {
  return (
    <PageTransitions>
      <StyledContainerHome>
        <SectionInitialInfos />
        <SectionProjects />
        <SectionSkills />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </StyledContainerHome>
    </PageTransitions>
  );
};
