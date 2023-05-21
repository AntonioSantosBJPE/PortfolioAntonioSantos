import { PageTransitions } from "../../components/Animations/PageTransitions";
import { CardSkills } from "../../components/CardSkills";
import { Footer } from "../../components/Footer";
import { infosSkills } from "../../services/dataBase";
import * as styled from "./style";
import { motion } from "framer-motion";
import { TitlesSectionsAnimations } from "../../components/Animations/TitlesSectionsAnimations";
import { PhotoPerfilAnimation } from "../../components/Animations/PhotoPerfilAnimation";

export const AboutPage = () => {
  return (
    <PageTransitions>
      <styled.StyledContainerAbout>
        <styled.StyledAboutInfos>
          <div>
            <TitlesSectionsAnimations title="Sobre Min" />
          </div>

          <div>
            <div>
              <motion.span
                variants={styled.containerTransition}
                initial="hidden"
                animate="visible"
              >
                <motion.p variants={styled.variantTransition}>
                  Olá, meu nome é Antonio Santos!
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Sou um desenvolvedor full-stack com experiência em diversas
                  tecnologias da web e estou entusiasmado em compartilhar com
                  você meu conhecimento e projetos neste espaço.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Com um sólido conjunto de habilidades, adquirido ao longo dos
                  anos, estou apto a trabalhar em todas as etapas do ciclo de
                  desenvolvimento de software. Desde o front-end até o back-end,
                  estou familiarizado com uma ampla gama de tecnologias modernas
                  e práticas recomendadas para criar aplicativos da web robustos
                  e de alta qualidade.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Minhas principais áreas de especialização incluem React,
                  TypeScript, JavaScript, HTML e CSS para o desenvolvimento do
                  front-end. Com essas ferramentas, sou capaz de criar
                  interfaces de usuário interativas e responsivas, garantindo
                  uma experiência de usuário agradável e intuitiva.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  No lado do servidor, tenho experiência com Node.js, Express,
                  SQL, TypeORM, Prisma, Nest.js e Python. Essas tecnologias me
                  permitem construir APIs eficientes, escaláveis e seguras, além
                  de lidar com bancos de dados relacionais.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Acredito firmemente na importância de escrever código limpo,
                  modular e de fácil manutenção. Sempre busco seguir as melhores
                  práticas de desenvolvimento e me manter atualizado com as
                  últimas tendências do setor.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Além disso, sou um entusiasta da resolução de problemas e
                  estou sempre pronto para enfrentar desafios complexos. Tenho
                  um olhar detalhista e uma abordagem orientada a resultados, o
                  que me permite entregar soluções de alta qualidade no prazo
                  estipulado.
                </motion.p>
                <br></br>
                <motion.p variants={styled.variantTransition}>
                  Neste site, você encontrará exemplos dos meus projetos
                  anteriores, nos quais apliquei minhas habilidades e
                  conhecimentos. Cada projeto é uma oportunidade de aprendizado
                  e crescimento, e estou animado para compartilhar com você as
                  soluções criativas e inovadoras que desenvolvi ao longo do
                  tempo.
                </motion.p>
              </motion.span>
            </div>
            <PhotoPerfilAnimation />
          </div>
        </styled.StyledAboutInfos>
        <styled.StyledAboutSkills>
          <div>
            <TitlesSectionsAnimations title="Habilidades" />
            <span></span>
          </div>

          <div>
            <motion.ul
              variants={styled.containerTransition}
              initial="hidden"
              animate="visible"
            >
              {infosSkills.map((infos, index) => {
                return <CardSkills key={index} infos={infos} />;
              })}
            </motion.ul>
          </div>
        </styled.StyledAboutSkills>
        <Footer />
      </styled.StyledContainerAbout>
    </PageTransitions>
  );
};
