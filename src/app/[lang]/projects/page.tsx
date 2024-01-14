import Head from "next/head";
import { allProjects } from "@/shared/data/projects/all";
import ProjectsList from "@/shared/ProjectsList";
import Sidebar from "@/shared/Sidebar";
import { getLanguage } from "@/lang/languages";

export default function Contato({ params: { lang } }) {
  const translation = getLanguage(lang);
  return (
    <div className={`flex flex-col container mx-auto py-5 sm:flex-row`}>
      <Head>
        <title>Contato com Rafael Vieiras - Aka Rafaelvieiras</title>
        <meta
          name="description"
          content="Entre em contato com Rafael Vieiras, um desenvolvedor de software experiente e apaixonado por tecnologia. Com mais de 15 anos de experiência em desenvolvimento de software, Rafael está pronto para ajudá-lo a criar a solução perfeita para sua empresa ou organização."
        />
        <meta
          name="keywords"
          content="desenvolvedor de software, front-end, back-end, aplicações web"
        />
      </Head>
      <Sidebar translation={translation} />
      <main className="flex flex-col gap-5 w-full p-5 sm:p-0 ">
        <header className="flex flex-row justify-between pt-32">
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Projetos que eu já trabalhei
          </h1>
          <p>
            Está procurando um desenvolvedor de software experiente e
            apaixonado.
          </p>
        </header>

        <ProjectsList projects={allProjects} />
      </main>
    </div>
  );
}
