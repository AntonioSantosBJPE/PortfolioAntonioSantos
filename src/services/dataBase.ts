export interface IinfosProjects {
  name: string;
  tags: string[];
  imgCapa: string;
  linkSite: string;
  linkGithub: string;
  description: string;
}

export interface IinfosSkilss {
  title: string;
  skills: string[];
}

export const infosProjectsHomePage: IinfosProjects[] = [
  {
    name: "Close Worker",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaCloseWorker.png",
    linkSite: "https://close-work.vercel.app/home",
    linkGithub: "https://github.com/AntonioSantosBJPE/closeWorker",
    description:
      "A aplicação Close Worker, visa aproximar o prestador de serviço autônomo, de possíveis clientes, de uma mesma localidade, afim de gerar mais visibilidade para estes profissionais, tendo como foco inicial a região de Jacarepaguá, na cidade do Rio de Janeiro – RJ.",
  },
  {
    name: "Kenzie Hub",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaKenzieHub.png",
    linkSite:
      "https://react-entrega-kenzie-hub-complete-antonio-santos-bjpe.vercel.app/login",
    linkGithub: "https://github.com/AntonioSantosBJPE/Kenzie-Hub",
    description:
      "O kenzie Hub é um hub de portfólios de programadores, fictícios, onde o usuário pode realizar o seu cadastro na plataforma, o seu login, e posteriormente cadastrar suas habilidades em tecnologia, ou seja possui todas as funcionalidade de um CRUD.",
  },
  {
    name: "Hamburgueria",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaBburguerkenzie.png",
    linkSite:
      "https://react-entrega-template-hamburgueria-da-kenzie-antoniosantosbjpe.vercel.app/",
    linkGithub: "https://github.com/AntonioSantosBJPE/Hamburgueria-da-Kenzie",
    description:
      "O projeto Hamburgueria da Kenzie simula a página de pedidos de uma lanchonete , tornando possível adicionar e excluir itens no carrinho de compras, como também filtrar os itens do catálogo.",
  },
];

export const infosSkills: IinfosSkilss[] = [
  {
    title: "Linguagens",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["React"],
  },
  {
    title: "Outros",
    skills: ["HTML", "CSS", "Styled-components"],
  },
  {
    title: "Ferramentas",
    skills: ["VSCode", "Figma", "Git", "GitHub"],
  },
];

export const infosProjectsPageProjects: IinfosProjects[] = [
  {
    name: "Close Worker",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaCloseWorker.png",
    linkSite: "https://close-work.vercel.app/home",
    linkGithub: "https://github.com/AntonioSantosBJPE/closeWorker",
    description:
      "A aplicação Close Worker, visa aproximar o prestador de serviço autônomo, de possíveis clientes, de uma mesma localidade, afim de gerar mais visibilidade para estes profissionais, tendo como foco inicial a região de Jacarepaguá, na cidade do Rio de Janeiro – RJ.",
  },
  {
    name: "Kenzie Hub",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaKenzieHub.png",
    linkSite:
      "https://react-entrega-kenzie-hub-complete-antonio-santos-bjpe.vercel.app/login",
    linkGithub: "https://github.com/AntonioSantosBJPE/Kenzie-Hub",
    description:
      "O kenzie Hub é um hub de portfólios de programadores, fictícios, onde o usuário pode realizar o seu cadastro na plataforma, o seu login, e posteriormente cadastrar suas habilidades em tecnologia, ou seja possui todas as funcionalidade de um CRUD.",
  },
  {
    name: "Hamburgueria",
    tags: ["ReactJs", "Styled-components", "HTML", "API"],
    imgCapa: "/capaBburguerkenzie.png",
    linkSite:
      "https://react-entrega-template-hamburgueria-da-kenzie-antoniosantosbjpe.vercel.app/",
    linkGithub: "https://github.com/AntonioSantosBJPE/Hamburgueria-da-Kenzie",
    description:
      "O projeto Hamburgueria da Kenzie simula a página de pedidos de uma lanchonete , tornando possível adicionar e excluir itens no carrinho de compras, como também filtrar os itens do catálogo.",
  },
  {
    name: "GitSearch",
    tags: ["HTML", "CSS", "JS", "API"],
    imgCapa: "/capaGitSearch.png",
    linkSite: "https://antoniosantosbjpe.github.io/GitSearch/",
    linkGithub: "https://github.com/AntonioSantosBJPE/GitSearch",
    description:
      "Projeto de um sistema de pesquisa de usuário e seus repositórios, utilizando a api do GitHub.",
  },
  {
    name: "Calculadora",
    tags: ["HTML", "CSS", "JS"],
    imgCapa: "/capaCalculadora.png",
    linkSite: "https://antoniosantosbjpe.github.io/Calculadora/",
    linkGithub: "https://github.com/AntonioSantosBJPE/Calculadora",
    description:
      "Projeto de uma calculadora, capaz de realizar as operações básicas da matemática, contendo três diferentes temas de página, utilizando HTML, CSS e JavaScript.",
  },
  {
    name: "RocketFlix",
    tags: ["HTML", "CSS", "JS", "API"],
    imgCapa: "/capaRocketFlix.png",
    linkSite: "https://antoniosantosbjpe.github.io/RocketFlix/",
    linkGithub: "https://github.com/AntonioSantosBJPE/RocketFlix",
    description:
      "Neste projeto foi utilizada a API do themoviedb.org para exibir um filme aleatório em tela, sempre que for realizado o click no botão (Encontrar Filme).",
  },
];
