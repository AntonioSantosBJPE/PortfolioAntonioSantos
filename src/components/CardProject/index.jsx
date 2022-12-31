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
        <a href={infos.linkSite} target="_blank">
          {"Live <~>"}
        </a>
        <a href={infos.linkGithub} target="_blank">
          {"GitHub >="}
        </a>
      </div>
    </StyleCard>
  );
};
