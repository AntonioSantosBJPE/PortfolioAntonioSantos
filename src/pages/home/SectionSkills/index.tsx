import { CardSkills } from "../../../components/CardSkills";
import { infosSkills } from "../../../services/dataBase";
import { StyledSkills } from "./style";
import { TitlesSectionsAnimations } from "../../../components/Animations/TitlesSectionsAnimations";
import { motion } from "framer-motion";
import { containerTransition } from "../../about/style";

export const SectionSkills = () => {
  return (
    <>
      <StyledSkills>
        <div>
          <TitlesSectionsAnimations title="Habilidades" />
          <span></span>
        </div>

        <div>
          <figure>
            <img src="/geometricsSkills.svg" alt="" />
          </figure>
          <motion.ul
            variants={containerTransition}
            initial="hidden"
            animate="visible"
          >
            {infosSkills.map((infos, index) => {
              return <CardSkills key={index} infos={infos} />;
            })}
          </motion.ul>
        </div>
      </StyledSkills>
    </>
  );
};
