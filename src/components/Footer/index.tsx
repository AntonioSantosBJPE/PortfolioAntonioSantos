import { LinkNavigation } from "../LinkNavigation";
import { StyledFooter } from "./style";
import { personalInfos } from "../../services/dataBase";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div>
          <img src="/logo.svg" alt="logo Antonio Santos" />
          <h4>Desenvolvedor Full-stack</h4>
          <h4>{personalInfos.email}</h4>
        </div>
        <div>
          <h2>Media</h2>
          <div>
            <LinkNavigation
              variant="ExternalIcon"
              to={personalInfos.github}
              target="_blank"
            >
              <motion.img
                src="/github.png"
                alt="Logo github"
                transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                whileHover={{ scale: 1.1 }}
              />
            </LinkNavigation>
            <LinkNavigation
              variant="ExternalIcon"
              to={personalInfos.linkedin}
              target="_blank"
            >
              <motion.img
                src="/linkedin.png"
                alt="Logo linkedin"
                transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                whileHover={{ scale: 1.1 }}
              />
            </LinkNavigation>
          </div>
        </div>
      </div>
      <h3>© Copyright 2023. Made by Antonio Santos</h3>
    </StyledFooter>
  );
};
