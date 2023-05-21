import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledContact } from "./style";
import { motion } from "framer-motion";

export const SectionContact = () => {
  const whatsNumber = (phoneNumber: string) =>
    `55${phoneNumber?.replace(/[()\ \s-]+/g, "")}`;

  return (
    <StyledContact id="section__contact">
      <div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: "relative" }}
        >
          <span>#</span>Contato
        </motion.h2>

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
                  "(81) 9 9359-0468"
                )}`}
                target="_blank"
              >
                <img src="/zap.png" alt="imagem whatsapp" />{" "}
              </LinkNavigation>
              <h5>(81) 9 9359-0468</h5>
            </span>
            <span>
              <LinkNavigation
                variant="ExternalIcon"
                to="https://www.linkedin.com/in/antonio-santos-b934a479/"
                target="_blank"
              >
                <img src="/linkedin.png" alt="imagem linkedin" />
              </LinkNavigation>
              <h5>/antonio-santos-bjpe</h5>
            </span>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};
