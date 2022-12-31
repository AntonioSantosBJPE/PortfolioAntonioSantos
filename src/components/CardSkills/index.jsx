import { StyledCardSkills } from "./style";

export const CardSkills = ({ infos }) => {
  return (
    <StyledCardSkills>
      <div>
        <h3>{infos.title}</h3>
      </div>
      <div>
        <h4>{infos.skills.join(", ")}</h4>
      </div>
    </StyledCardSkills>
  );
};
