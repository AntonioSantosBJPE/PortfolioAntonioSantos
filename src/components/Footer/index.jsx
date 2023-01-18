import { LinkNavigation } from "../LinkNavigation";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div>
          <img src="/logo.svg" alt="" />
          <h4>Desenvolvedor Front-end</h4>
          <h4>netoifpe@gmail.com</h4>
        </div>
        <div>
          <h2>Media</h2>
          <div>
            <LinkNavigation
              variant="ExternalIcon"
              to="https://github.com/AntonioSantosBJPE"
              target="_blank"
            >
              <img src="/github.png" alt="imagem github" />
            </LinkNavigation>
            <LinkNavigation
              variant="ExternalIcon"
              to="https://www.linkedin.com/in/antonio-santos-b934a479/"
              target="_blank"
            >
              <img src="/linkedin.png" alt="imagem linkedin" />
            </LinkNavigation>
          </div>
        </div>
      </div>
      <h3>© Copyright 2023. Made by Antonio Santos</h3>
    </StyledFooter>
  );
};
