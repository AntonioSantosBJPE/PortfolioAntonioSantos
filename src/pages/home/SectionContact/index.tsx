import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledContact } from "./style";
import { TitlesSectionsAnimations } from "../../../components/Animations/TitlesSectionsAnimations";
import { personalInfos } from "../../../services/dataBase";
import { motion } from "framer-motion";

export const SectionContact = () => {
  const whatsNumber = (phoneNumber: string) =>
    `55${phoneNumber?.replace(/[()\ \s-]+/g, "")}`;

  return (
    <StyledContact id="section__contact">
      <div>
        <TitlesSectionsAnimations title="Contato" />
        <span></span>
      </div>

      <div>
        <div>
          <p>
            Estou a procura de uma oportunidade como desenvolvedor Full-stack
            júnior. Caso esteja interessado no meu trabalho, ou tenha alguma
            dúvida sobre mim, não hesite em entrar em contato!
          </p>
          <LinkNavigation
            name="Baixar Currículo"
            to="/Currículo-Antonio-Santos-FullStack.pdf"
            variant="ExternalPrimaryDownload"
          />
        </div>
        <div>
          <div>
            <h4>Entre em contato por:</h4>
            <span>
              <img src="/contact.png" alt="imagem email" />
              <h5>netoifpe@gmail.com</h5>
            </span>
            <span>
              <LinkNavigation
                variant="ExternalIcon"
                to={`https://api.whatsapp.com/send?phone=${whatsNumber(
                  personalInfos.phone
                )}`}
                target="_blank"
              >
                <motion.img
                  src="/zap.png"
                  alt="Logo whatsapp"
                  transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                  whileHover={{ scale: 1.1 }}
                />
              </LinkNavigation>
              <h5>{personalInfos.phone}</h5>
            </span>
            <span>
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
              <h5>/antonio-santos-bjpe</h5>
            </span>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};
