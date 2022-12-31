import { LinkNavigation } from "../LinkNavigation";
import { StyleCard } from "./style";

export const CardProject = ({ infos }) => {
  return (
    <StyleCard>
      <figure>
        <img src={infos.imgCapa} alt="foto projeto" />
      </figure>
      <div>
        <span>{infos.tags.join(", ")}</span>
      </div>
      <div>
        <h4>{infos.name}</h4>
        <p>{infos.description}</p>
      </div>
      <div>
        <LinkNavigation
          name={"Live <~>"}
          to={infos.linkSite}
          target="_blank"
          variant={"ExternalPrimary"}
        />
        <LinkNavigation
          name={"GitHub >="}
          to={infos.linkGithub}
          target="_blank"
          variant={"ExternalGray1"}
        />
      </div>
    </StyleCard>
  );
};
