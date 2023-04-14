import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ContactForm from "../shared/ContactForm";
import { getLanguage } from "../shared/lang/languages";
import { roboto } from "../shared/libs/fonts";
import Sidebar from "../shared/Sidebar";

export default function Contato() {
  const { locale } = useRouter();
  const translation = getLanguage(locale);
  return (
    <div
      className={`${roboto.variable} flex flex-col container mx-auto py-5 lg:flex-row`}
    >
      <Head>
        <title>{translation.contact.TITLE}</title>
        <meta
          name="description"
          content="Entre em contato com Rafael Vieiras, um desenvolvedor de software experiente e apaixonado por tecnologia. Com mais de 15 anos de experiência em desenvolvimento de software, Rafael está pronto para ajudá-lo a criar a solução perfeita para sua empresa ou organização."
        />
        <meta
          name="keywords"
          content="desenvolvedor de software, front-end, back-end, aplicações web"
        />
      </Head>
      <div className="absolute top-0 right-0">
        <Image
          src="/bg_union.svg"
          alt="Background Image"
          width="220"
          height="220"
          className="w-full"
        />
      </div>
      <Sidebar />
      <main className="flex flex-col gap-5 w-full py-5 lg:p-0 lg:pt-32 ">
        <h1 className="w-full text-3xl font-bold lg:text-left lg:pb-11">
          Entre em contato e vamos criar algo incrível juntos!
        </h1>
        <div className="flex flex-col gap-6 lg:flex-row-reverse">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <p>
              Está procurando um{" "}
              <strong>desenvolvedor de software experiente</strong> e apaixonado
              por tecnologia? Você encontrou! Meu nome é Rafael Vieiras, e estou
              aqui para ajudá-lo a criar a solução perfeita para sua empresa ou
              organização.
            </p>
            <p>
              Com mais de <strong>15 anos de experiência</strong> em
              desenvolvimento de software, sou um especialista em front-end e
              arquitetura de infraestrutura para aplicações web, com habilidades
              sólidas em diferentes linguagens e frameworks. Além disso, estou
              sempre me atualizando e aprendendo novas tecnologias para garantir
              que posso oferecer as melhores soluções para meus clientes.
            </p>
            <p>
              Se você está procurando um desenvolvedor confiável, dedicado e
              capaz de trabalhar em projetos de diferentes níveis e áreas, você
              está no lugar certo. Entre em contato comigo hoje mesmo para
              discutirmos suas necessidades e como posso ajudar a levar seu
              projeto para o próximo nível. Vamos criar algo incrível juntos!
            </p>
          </div>
          <div className="flex lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
