import { StyledCardSkills } from "./style";

export interface IinfosSkilss {
  title: string;
  skills: string[];
}
interface IcardSkills {
  infos: IinfosSkilss;
}

export const CardSkills = ({ infos }: IcardSkills) => {
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
