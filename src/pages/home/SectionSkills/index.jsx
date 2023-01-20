import { CardSkills } from "../../../components/CardSkills";
import { infosSkills } from "../../../services/dataBase";
import { StyledSkills } from "./style";

export const SectionSkills = () => {
  return (
    <>
      <StyledSkills>
        <div>
          <h2>
            <span>#</span>Habilidades
          </h2>
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
