import { StyledContainerHome, StyledABout, StyledContact } from "./style";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Footer } from "../../components/Footer";
import { SectionInitialInfos } from "./SectionInitialInfos";
import { SectionProjects } from "./SectionProjects";
import { SectionSkills } from "./SectionSkills";

export const HomePage = () => {
  return (
    <StyledContainerHome>
      <SectionInitialInfos />
      <SectionProjects />
      <SectionSkills />
      <StyledABout>
        <div>
          <h2>
            <span>#</span>Sobre Mim
          </h2>
          <span></span>
        </div>

        <div>
          <div>
            <p>
              Olá, meu nome é Antonio Santos!
              <br></br>
              <br></br>
              Sou desenvolvedor Front-end , com boa experiência no
              desenvolvimento de aplicações utilizando, React, TypeScript,
              JavaScript, HTML e CSS, possuindo vivências em utilização de
              Metodologias ágeis, em especial Scrum, como também em
              versionamento de projetos, utilizando Git.
              <br></br>
              <br></br>
              Atualmente sou monitor na Kenzie Academy Brasil e curso o módulo
              de back-end do curso de Desenvolvimento Web Fullstack, da mesma
              instituição, como também tenho buscado aprendizado e certificações
              em outras instituições, como Freecodecamp, Rocketseat e W3schools,
              procurando sempre aumentar a minha rede de conhecimento.
              {/* <br></br>
              <br></br>
              Amo a área de tecnologia primeiro porque ela está presente em
              quase tudo no nosso dia-a-dia, e por me permitir colocar em
              prática meu amor e conhecimento de lógica. Meu objetivo na área é
              tornar-se um profissional com alto nível de competências, capaz de
              desenvolver sempre a melhor experiência para usuário final. */}
            </p>
            <LinkNavigation
              name="Mais informações <~>"
              to="/about"
              variant="InternalPrimary"
            />
          </div>
          <figure>
            <img src="/geometricsSkills.svg" alt="" />
          </figure>
        </div>
      </StyledABout>

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
              júnior, ou como freelance. Caso esteja interessado no meu
              trabalho, ou tenha alguma dúvida sobre mim, não hesite em entrar
              em contato!
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

      <Footer />
    </StyledContainerHome>
  );
};
