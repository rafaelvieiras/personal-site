import Sidebar from "@/shared/Sidebar";
import { roboto } from "@/libs/fonts";
import Image from "next/image";
import { getLanguage } from "@/lang/languages";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}): Promise<Metadata> {
  const translation = getLanguage(lang);
  return {
    title: translation.about.TITLE,
  };
}

export default function Home({ params: { lang } }) {
  const translation = getLanguage(lang);
  const skills = [
    {
      title: "Front-end",
      image: "/skills/cub.svg",
      tools: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Bootstrap",
        "Material UI",
        "Styled Components",
      ],
    },
    {
      title: "Back-end",
      image: "/skills/image_07.svg",
      tools: [
        "Node.js",
        "Express",
        "Nest.js",
        "PHP",
        "Ruby",
        "Ruby on Rails",
        "WordPress",
      ],
    },
    {
      title: "Mobile",
      image: "/skills/image_02.svg",
      tools: ["React Native", "Native Script", "Flutter", "Ionic"],
    },
    {
      title: "Outras",
      image: "/skills/image_03.svg",
      tools: [
        "Git",
        "GitHub",
        "GitLab",
        "Jira",
        "Trello",
        "Scrum",
        "Kanban",
        "Agile",
        "Figma",
        "Invision",
        "Adobe XD",
        "Sketch",
        "Zeplin",
        "Jest",
        "Cypress",
        "Selenium",
        "BDD",
        "TDD",
        "SEO",
        "Micro Front-ends",
        "Microservices",
        "Memory Database",
        "GraphQL",
        "REST",
        "Google Analytics",
        "Google Tag Manager",
        "Google Search Console",
        "Google Services API",
      ],
    },
    {
      title: "Jogos",
      image: "/skills/image_04.svg",
      tools: ["Unity", "C#", "JavaScript", "TypeScript", "Phaser"],
    },
    {
      title: "DevOps e Infraestrutura",
      image: "/skills/image_05.svg",
      tools: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Azure",
        "Heroku",
        "Netlify",
        "Vercel",
        "Linux",
        "Nginx",
        "Serveless",
        "Apache",
        "CDN",
        "SSL",
        "Cloudflare",
        "Cloudfront",
        "S3 API",
        "Lambda or Functions",
        "Cloudnary",
      ],
    },
    {
      title: "Banco de Dados",
      image: "/skills/image_06.svg",
      tools: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQL",
        "NoSQL",
        "ORM",
        "Sequelize",
        "Mongoose",
        "TypeORM",
        "Prisma",
      ],
    },
  ];
  return (
    <div
      className={`${roboto.variable} flex flex-col container mx-auto py-5 lg:flex-row`}
    >
      <div id="top" className="absolute top-0 right-0">
        <Image
          src="/bg_union.svg"
          alt="Background Image"
          width="220"
          height="220"
          className="w-full"
        />
      </div>
      <Sidebar translation={translation} />
      <main className="w-full py-5 lg:pt-32 max-w-5xl">
        <div className="flex flex-col gap-6 max-w-5xl">
          <h1 className="text-4xl font-ubuntu font-medium pb-10">
            Experiência, habilidades e projetos
          </h1>
          <p>
            Olá, sou um desenvolvedor autodidata que iniciou sua carreira em
            2008 como desenvolvedor PHP. Desde então, tenho me especializado em
            front-end e arquitetura de infraestrutura para aplicações web, com
            sólidos conhecimentos em linguagens como Typescript, PHP e Ruby.
          </p>
          <p>
            Um dos projetos mais desafiadores em que trabalhei foi no
            desenvolvimento de um Internet Banking para o Banco Bari em 2018,
            onde pude compreender a dinâmica de segurança no Front-end e
            aprimorar ainda mais minhas habilidades em desenvolvimento.
          </p>
          <p>
            Sempre busco me desafiar e aprender formas novas de executar meu
            trabalho, o que me levou a desenvolver jogos em JS, Unity (C#) e
            aplicativos em React Native, Native Script e Flutter, além de me
            especializar em arquitetura serveless e SSR.
          </p>
          <p>
            Atualmente, atuo como tech lead com um foco na stack front-end, e
            estou sempre procurando desenvolver minhas habilidades em gestão de
            projetos e pessoas. Meu objetivo é continuar aprendendo e evoluindo
            como desenvolvedor, ajudando empresas e organizações a atingirem
            seus objetivos de forma inovadora e eficiente.
          </p>

          <h2 className="text-3xl font-bold py-10">
            Um pouco do meu histórico
          </h2>
          <p>
            Ao longo dos últimos 15 anos, Rafael vem construindo uma sólida
            carreira como desenvolvedor autodidata, acumulando uma ampla
            experiência em diferentes áreas da programação. Iniciando sua
            carreira em 2008 como desenvolvedor PHP, Rafael rapidamente se
            destacou em sua área de atuação, realizando projetos inovadores e
            desafiadores para clientes de diferentes setores.
          </p>

          <p>
            Nos anos seguintes, Rafael se dedicou ao desenvolvimento de
            aplicações web e aprimorou suas habilidades em diferentes
            linguagens, como Ruby, Ruby on Rails e WordPress. Em 2015, ele
            decidiu focar exclusivamente no desenvolvimento com a stack
            JavaScript, uma escolha que o levou a se especializar em Angular,
            React, Next.js e Nest.
          </p>

          <p>
            Ao longo dos anos, Rafael se envolveu em projetos complexos e
            desafiadores, incluindo o desenvolvimento de dois sistemas de
            Internet Banking para o RCI e o Bari, e o projeto de redes sociais
            Gotchosen. Recentemente, ele participou do desenvolvimento de um
            aplicativo móvel de educação chamado Katalista, que foi construído
            em React.
          </p>

          <p>
            Com mais de 5 anos de experiência em Angular e um sólido
            conhecimento em outras tecnologias e frameworks da stack JavaScript,
            Rafael é um desenvolvedor altamente habilidoso e experiente, capaz
            de trabalhar em projetos de diferentes níveis e áreas. Além disso,
            ele é apaixonado por aprender e experimentar novas tecnologias, o
            que o levou a desenvolver jogos em JS, Unity (C#) e a explorar
            outras plataformas como React Native, Native Script e Flutter.
          </p>

          <p>
            Com um histórico impressionante de projetos bem-sucedidos e um foco
            contínuo no aprimoramento de suas habilidades e conhecimentos,
            Rafael está sempre procurando desafios e oportunidades para fazer a
            diferença como desenvolvedor.
          </p>
        </div>
        <div className="flex flex-col py-20 gap-16">
          <h2 className="text-4xl font-ubuntu font-medium w-full">
            Com Quais Tecnologias eu Posso ajudar?
          </h2>
          <div className="flex flex-col gap-28">
            {skills.map((skill, index) => (
              <div key={index} className={`flex flex-col gap-9`}>
                <h3 className="text-3xl font-bold">{skill.title}</h3>
                <div
                  className={`flex flex-col justify-between items-center gap-6 ${
                    index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div>
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      width="200"
                      height="200"
                      className="w-full"
                    />
                  </div>
                  <ul className="grid lg:grid-cols-4 w-full gap-6">
                    {skill.tools.sort().map((tool) => (
                      <li
                        key={tool}
                        className="card flex justify-center items-center shadow-md font-montserrat font-bold text-center p-5 rounded-md bg-base-300 hover:scale-110 transition-all"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <a
        href="#top"
        className="hidden sm:flex fixed card bg-base-300 bottom-10 right-10 p-5 hover:-translate-y-3 transition-all"
      >
        <Image
          src="/icons/arrow_up.svg"
          alt="Back to top"
          width="50"
          height="50"
          className="w-full"
        />
      </a>
    </div>
  );
}
