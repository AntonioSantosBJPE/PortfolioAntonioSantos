import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledContact } from "./style";

export const SectionContact = () => {
  return (
    <StyledContact>
      <div>
        <h2>
          <span>#</span>Contato
        </h2>
        <span></span>
      </div>

      <div>
        <div>
          <p>
            Estou a procura de uma oportunidade como desenvolvedor Front-end
            júnior, ou como freelance. Caso esteja interessado no meu trabalho,
            ou tenha alguma dúvida sobre mim, não hesite em entrar em contato!
          </p>
          <LinkNavigation
            name="Entre em contato!"
            to="/contact"
            variant="InternalPrimary"
          />
        </div>
        <div>
          <div>
            <h4>Entre em contato por:</h4>
            <span>
              <img src="/public/email.png" alt="imagem email" />
              <h5>netoifpe@gmail.com</h5>
            </span>
            <span>
              <img src="/public/whatsapp.png" alt="imagem email" />
              <h5>(81) 9 9359-0468</h5>
            </span>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};
