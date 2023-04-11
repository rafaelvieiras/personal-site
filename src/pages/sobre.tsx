import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";

import { Roboto } from "next/font/google";
import Sidebar from "../shared/Sidebar";

const roboto = Roboto({
  weight: ["700", "400", "300", "100"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/rafaelvieiras`);
  const data = await response.json();

  // console.warn(data);
  return {
    props: {
      name: data.name,
      username: data.login,
      bio: data.bio,
      imageProfile: data.avatar_url,
    },
  };
};

export default function Home({ name, username, bio, imageProfile }) {
  return (
    <div
      className={`${roboto.variable} flex flex-col container mx-auto py-5 sm:flex-row`}
    >
      <Head>
        <title>
          Sobre o Desenvolvedor Freelancer e Consultor Web, Front-end, Back-end,
          Full-Stack Rafael Vieira - Aka Rafaelvieiras
        </title>
      </Head>

      <Sidebar />
      <main className="w-full p-5 sm:p-0">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">
            Sobre Rafael Vieiras: Experiência, habilidades e projetos
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

          <h2 className="text-2xl font-bold">Um pouco do Histórico</h2>
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
        <div>
          <h2 className="text-2xl font-bold w-full text-center p-5">
            Com Quais Tecnologias eu Posso ajudar?
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Front-end</h3>
              <ul className="flex gap-5 flex-wrap">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Angular",
                  "Vue.js",
                  "Bootstrap",
                  "Material UI",
                  "Styled Components",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Back-end</h3>
              <ul className="flex gap-5 flex-wrap">
                {[
                  "Node.js",
                  "Express",
                  "Nest.js",
                  "PHP",
                  "Ruby",
                  "Ruby on Rails",
                  "WordPress",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Mobile</h3>
              <ul className="flex gap-5 flex-wrap">
                {["React Native", "Native Script", "Flutter", "Ionic"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="card shadow-md p-5 rounded-md bg-base-300"
                    >
                      {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Outras</h3>
              <ul className="flex gap-5 flex-wrap">
                {[
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
                ].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Jogos</h3>
              <ul className="flex gap-5 flex-wrap">
                {["Unity", "C#", "JavaScript", "TypeScript"].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">DevOps e Infraestrutura</h3>
              <ul className="flex gap-5 flex-wrap">
                {[
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "Google Cloud",
                  "Azure",
                  "Heroku",
                  "Netlify",
                  "Vercel",
                  "Linux",
                  "Serveless",
                  "Nginx",
                  "Apache",
                  "CDN",
                  "Cloudflare",
                  "Cloudfront",
                  "S3 API",
                  "Cloudnary",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Banco de Dados</h3>
              <ul className="flex gap-5 flex-wrap">
                {[
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Firebase",
                  "Redis",
                  "SQL Server",
                  "SQLite",
                  "NoSQL",
                  "SQL",
                  "ORM",
                  "Sequelize",
                  "Mongoose",
                  "TypeORM",
                  "Prisma",
                  "Migrations",
                  "Seeds",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="card shadow-md p-5 rounded-md bg-base-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
