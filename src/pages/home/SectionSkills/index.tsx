import { CardSkills } from "../../../components/CardSkills";
import { infosSkills } from "../../../services/dataBase";
import { StyledSkills } from "./style";
import { motion } from "framer-motion";

export const SectionSkills = () => {
  return (
    <>
      <StyledSkills>
        <div>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ position: "relative" }}
          >
            <span>#</span>Habilidades
          </motion.h2>
          <span></span>
        </div>

        <div>
          <figure>
            <img src="/geometricsSkills.svg" alt="" />
          </figure>
          <ul>
            {infosSkills.map((infos, index) => {
              return <CardSkills key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledSkills>
    </>
  );
};
