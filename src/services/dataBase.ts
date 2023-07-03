export interface IinfosProjects {
  name: string;
  tags: string[];
  imgCapa: string;
  linkSite?: string;
  linkGithub: string;
  description: string;
}

export interface IinfosSkilss {
  title: string;
  skills: string[];
}

export interface IpersonalInfos {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export const personalInfos: IpersonalInfos = {
  email: "netoifpe@gmail.com",
  phone: "(81) 9 9359-0468",
  linkedin: "https://www.linkedin.com/in/antonio-santos-bjpe/",
  github: "https://github.com/AntonioSantosBJPE",
};

export const infosSkills: IinfosSkilss[] = [
  {
    title: "Linguagens",
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Bibliotecas",
    skills: ["React"],
  },
  {
    title: "Frameworks",
    skills: ["Next.Js", "Express", "Nest.Js", "Django"],
  },
  {
    title: "Outros",
    skills: [
      "Node.Js",
      "HTML",
      "CSS",
      "Styled-components",
      "Tailwind",
      "Sass",
      "SQL",
      "Postgres",
      "MongoDB",
      "TypeORM",
      "Prisma",
      "Jest",
      "AWS",
    ],
  },
  {
    title: "Soft skills",
    skills: ["VSCode", "Figma", "Git", "GitHub"],
  },
  {
    title: "Ferramentas",
    skills: ["VSCode", "Figma", "Git", "GitHub"],
  },
];

export const infosProjectsPageProjects: IinfosProjects[] = [
  {
    name: "Contacts-Book",
    tags: ["NextJs", "Tailwind", "NodeJs", "Express", "Prisma", "Postgres"],
    imgCapa:
      "https://camo.githubusercontent.com/e1e0df77be067971ed603de2db4ca253b876bef24b06871076e1e26b3be74307/68747470733a2f2f692e696d6775722e636f6d2f6e7044514766582e706e67",
    linkSite: "https://motor-shop-front-lac.vercel.app/",
    linkGithub: "https://github.com/AntonioSantosBJPE/motor-shop-front",
    description:
      "Motors Shop é uma aplicação para compra e venda de veículos, permitindo que os usuários se cadastrem como clientes ou anunciantes, façam login na aplicação, atualizem suas informações de perfil e gerenciem sua lista de anúncios.",
  },
  {
    name: "Contacts-Book",
    tags: ["NextJs", "Sass", "NodeJs", "Express"],
    imgCapa:
      "https://camo.githubusercontent.com/a1228f76f185eba7ae903aaec622e5ba6d5c553fcc88d12630741ec1450f94ad/68747470733a2f2f692e6962622e636f2f6d386e674658392f686f6d652d706167652d636f6e74616374732d626f6f6b2e706e67",
    linkSite: "https://contacts-books-pi.vercel.app/",
    linkGithub: "https://github.com/AntonioSantosBJPE/contacts-books-fullstack",
    description:
      "Contacts-book é uma aplicação para gerenciar sua agenda de contatos, permitindo que os usuários se cadastrem como clientes, façam login na aplicação, atualizem suas informações de perfil e gerenciem sua lista de contatos. Os usuários podem criar, atualizar, excluir e listar todos os seus contatos criados.",
  },
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
    name: "InSync-API",
    tags: ["Node.Js", "Typescript", "Express", "SQL", "Postgres", "TypeORM"],
    imgCapa: "/insync-api.png",
    linkGithub: "https://github.com/AntonioSantosBJPE/InSync-project",
    description: `InSync-API é uma API RESTful construída com Node.js e PostgreSQL. 
     Ela permite que os usuários se cadastrem, criem perfis, publiquem projetos, 
     busquem por projetos e profissionais, e façam parcerias.`,
  },
  {
    name: "News-API",
    tags: ["Node.Js", "Typescript", "Express", "SQL", "Postgres", "Prisma"],
    imgCapa: "/news-api.png",
    linkGithub: "https://github.com/AntonioSantosBJPE/newsApi",
    description: `News-API é uma API RESTful desenvolvida utilizando Node.js, 
    Express, Prisma e um banco de dados PostgreSQL. A API permite o cadastro 
    de usuários, do tipo administrador ou padrão, a criação e listagem de 
    notícias, com tags personalizadas, e a criação de comentários nas notícias.`,
  },
  {
    name: "Developed Market API",
    tags: ["Python", "Django", "SQL", "Postgres"],
    imgCapa: "/developed-market-api.png",
    linkGithub: "https://github.com/AntonioSantosBJPE/newsApi",
    description: `Developed Market API é uma API RESTFul desenvolvida em pyhton,
      com django, possuindo três níveis de acesso e permissão, a aplicação permite
      criar e atualizar usuários, criar produtos e movimentar seu estoque, 
      adicionar produtos a um carrinho de compras e realizar pedidos. Também 
      é possivel listar pedidos realizados ou vendidos e gerar relatórios de 
      vendas em pdf.`,
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

export const infosProjectsHomePage: IinfosProjects[] = [
  ...infosProjectsPageProjects,
];
