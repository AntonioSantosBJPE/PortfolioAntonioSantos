import { PageTransitions } from "../../components/Animations/PageTransitions";
import { CardSkills } from "../../components/CardSkills";
import { Footer } from "../../components/Footer";
import { infosSkills } from "../../services/dataBase";
import {
  StyledContainerAbout,
  StyledAboutInfos,
  StyledAboutSkills,
} from "./style";

export const AboutPage = () => {
  return (
    <PageTransitions>
      <StyledContainerAbout>
        <StyledAboutInfos>
          <div>
            <h2>
              <span>/</span>Sobre Mim
            </h2>
          </div>

          <div>
            <div>
              {/* <p>
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
              <br></br>
              <br></br>
              Amo a área de tecnologia primeiro porque ela está presente em
              quase tudo no nosso dia-a-dia, e por me permitir colocar em
              prática meu amor e conhecimento de lógica. Meu objetivo na área é
              tornar-se um profissional com alto nível de competências, capaz de
              desenvolver sempre a melhor experiência para usuário final.
            </p> */}
              <p>
                Olá, meu nome é Antonio Santos!
                <br></br>
                <br></br>
                Sou um desenvolvedor full-stack com experiência em diversas
                tecnologias da web e estou entusiasmado em compartilhar com você
                meu conhecimento e projetos neste espaço.
                <br></br>
                <br></br>
                Com um sólido conjunto de habilidades, adquirido ao longo dos
                anos, estou apto a trabalhar em todas as etapas do ciclo de
                desenvolvimento de software. Desde o front-end até o back-end,
                estou familiarizado com uma ampla gama de tecnologias modernas e
                práticas recomendadas para criar aplicativos da web robustos e
                de alta qualidade.
                <br></br>
                <br></br>
                Minhas principais áreas de especialização incluem React,
                TypeScript, JavaScript, HTML e CSS para o desenvolvimento do
                front-end. Com essas ferramentas, sou capaz de criar interfaces
                de usuário interativas e responsivas, garantindo uma experiência
                de usuário agradável e intuitiva.
                <br></br>
                <br></br>
                No lado do servidor, tenho experiência com Node.js, Express,
                SQL, TypeORM, Prisma, Nest.js e Python. Essas tecnologias me
                permitem construir APIs eficientes, escaláveis e seguras, além
                de lidar com bancos de dados relacionais.
                <br></br>
                <br></br>
                Acredito firmemente na importância de escrever código limpo,
                modular e de fácil manutenção. Sempre busco seguir as melhores
                práticas de desenvolvimento e me manter atualizado com as
                últimas tendências do setor.
                <br></br>
                <br></br>
                Além disso, sou um entusiasta da resolução de problemas e estou
                sempre pronto para enfrentar desafios complexos. Tenho um olhar
                detalhista e uma abordagem orientada a resultados, o que me
                permite entregar soluções de alta qualidade no prazo estipulado.
                <br></br>
                <br></br>
                Neste site, você encontrará exemplos dos meus projetos
                anteriores, nos quais apliquei minhas habilidades e
                conhecimentos. Cada projeto é uma oportunidade de aprendizado e
                crescimento, e estou animado para compartilhar com você as
                soluções criativas e inovadoras que desenvolvi ao longo do
                tempo.
              </p>
            </div>
            <figure>
              <img
                src="/my-photo-perfil.png"
                alt="imagem perfil Antonio Santos"
              />
              <img src="/geometrics1.svg" alt="" />
              <img src="/geometrics2.svg" alt="" />
            </figure>
          </div>
        </StyledAboutInfos>
        <StyledAboutSkills>
          <div>
            <h2>
              <span>#</span>Habilidades
            </h2>
            <span></span>
          </div>

          <div>
            <ul>
              {infosSkills.map((infos, index) => {
                return <CardSkills key={index} infos={infos} />;
              })}
            </ul>
          </div>
        </StyledAboutSkills>
        <Footer />
      </StyledContainerAbout>
    </PageTransitions>
  );
};
