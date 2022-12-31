import {
  StyledContainerHome,
  StyledInitialInfos,
  StyledProjects,
  StyledSkills,
  StyledABout,
  StyledContact,
} from "./style";
import { infosProjectsHomePage, infosSkills } from "../../services/dataBase.js";
import { CardProject } from "../../components/CardProject";
import { CardSkills } from "../../components/CardSkills";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <StyledContainerHome>
      <StyledInitialInfos>
        <div>
          <h1>
            Antonio <span>Santos</span>, Desenvolvedor <span>Front-end</span>{" "}
          </h1>
          <h3>
            Sou desenvolvedor Front-end com foco em ReactJs, monitor e estudante
            do curso de Desenvolvimento Web Full Stack da Kenzie Academy Brazil.
          </h3>
          <LinkNavigation
            name="Entre em contato!"
            to="/contact"
            variant="InternalPrimary"
          />
        </div>

        <div>
          <figure>
            <img
              src="../../../public/my-photo-perfil.png"
              alt="imagem perfil Antonio Santos"
            />
            <img src="../../../public/geometrics1.svg" alt="" />
            <img src="../../../public/geometrics2.svg" alt="" />
          </figure>
        </div>
      </StyledInitialInfos>

      <StyledProjects>
        <div>
          <h2>
            <span>#</span>Projetos
          </h2>
          <span></span>
          {/* <Link to="/projects">{"Todos ~~>"}</Link> */}
          <LinkNavigation
            name={"Todos ~~>"}
            to="/projects"
            variant="InternalNoBoardGrey0"
          />
        </div>
        <div>
          <ul>
            {infosProjectsHomePage.map((infos, index) => {
              return <CardProject key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledProjects>

      <StyledSkills>
        <div>
          <h2>
            <span>#</span>Habilidades
          </h2>
          <span></span>
        </div>

        <div>
          <figure>
            <img src="../../../public/geometricsSkills.svg" alt="" />
          </figure>
          <ul>
            {infosSkills.map((infos, index) => {
              return <CardSkills key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledSkills>

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
              Atualmente sou desenvolvedor Front-end, monitor na Kenzie Academy
              Brasil e curso Desenvolvimento Web Fullstack na mesma instituição,
              como também tenho buscado aprendizado e certificações em outras
              instituições, como a rocketseat e w3schools, procurando sempre
              aumentar a minha rede de conhecimento.
              <br></br>
              <br></br>
              Meu contato com tecnologia começou em 2009, passou por uma longa
              pausa, e retornou em 2022, quando adentrei no curso da Kenzie
              Academy Brasil. Amo a área de tecnologia primeiro porque ela está
              presente em quase tudo no nosso dia-a-dia, e por me permitir
              colocar em prática meu amor e conhecimento de lógica. Meu objetivo
              na área é tornar-se um profissional com alto nível de
              competências, capaz de desenvolver sempre a melhor experiência
              para usuário final.
            </p>
            <LinkNavigation
              name="Mais informações <~>"
              to="/about"
              variant="InternalPrimary"
            />
          </div>
          <figure>
            <img src="../../../public/geometricsSkills.svg" alt="" />
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
                <img src="../../../public/email.png" alt="imagem email" />
                <h5>netoifpe@gmail.com</h5>
              </span>
              <span>
                <img src="../../../public/whatsapp.png" alt="imagem email" />
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
