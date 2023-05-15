import { StyledContainerHome } from "./style";
import { Footer } from "../../components/Footer";
import { SectionInitialInfos } from "./SectionInitialInfos";
import { SectionProjects } from "./SectionProjects";
import { SectionSkills } from "./SectionSkills";
import { SectionAbout } from "./SectionAbout";
import { SectionContact } from "./SectionContact";

export const HomePage = () => {
  return (
    <StyledContainerHome>
      <SectionInitialInfos />
      <SectionProjects />
      <SectionSkills />
      <SectionAbout />
      <SectionContact />
      <Footer />
    </StyledContainerHome>
  );
};
