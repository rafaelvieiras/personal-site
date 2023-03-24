import Head from "next/head";
import Image from "next/image";

import { Roboto } from "next/font/google";
import { useRef } from "react";
import BuyModal from "../../shared/book/components/BuyModal";

const roboto = Roboto({
  weight: ["700", "400", "300", "100"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function LandingPageEbook() {
  const faq = [
    {
      pergunta: "Quem pode se beneficiar com o livro?",
      resposta:
        "Este livro é para qualquer pessoa que esteja procurando um emprego como desenvolvedor, independentemente do nível de experiência. Ele abrange desde a preparação inicial, como currículo e portfólio, até habilidades técnicas e comportamentais, além de negociação salarial e muito mais.",
    },
    {
      pergunta: "O livro aborda somente a preparação para entrevistas?",
      resposta:
        "Não, o livro aborda todos os aspectos da preparação para um emprego como desenvolvedor, incluindo a criação de um portfólio forte, o desenvolvimento de habilidades técnicas e comportamentais e a negociação salarial.",
    },
    {
      pergunta:
        "O livro é voltado para iniciantes ou experientes na área de tecnologia?",
      resposta:
        "Este livro é para qualquer pessoa que esteja procurando um emprego como desenvolvedor, independentemente do nível de experiência.",
    },
    {
      pergunta: "Há alguma garantia de satisfação na compra do livro?",
      resposta:
        "Sim, você tem 7 dias para solicitar o reembolso caso não esteja satisfeito com o livro.",
    },
    {
      pergunta: "O livro está disponível em versão impressa?",
      resposta:
        "Não, o livro está disponível apenas em formato digital (PDF). Isso permite que você comece a ler imediatamente após a compra e evita os custos adicionais de impressão e envio.",
    },
  ];

  const modalRef = useRef(null);
  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      <Head>
        <title>Conquiste a sua vaga como desenvolvedor de software</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        className={`${roboto.variable} bg-[#2C2C2C] relative scroll-smooth flex flex-col gap-8`}
      >
        <header className="flex bg-[#4E4E4E] sticky top-0 z-20">
          <div className="flex container mx-auto justify-between py-5">
            <div className="flex">
              <Image
                src="/book/logo.svg"
                width={200}
                height={200}
                alt="RafaelVieiras Logo"
              />
            </div>
            <nav className="flex">
              <ul className="flex justify-between items-center uppercase gap-5 font-bold">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#beneficios">Benefícios</a>
                </li>
                <li>
                  <a href="#investimento">Investimento</a>
                </li>
                <li>
                  <a href="#autor">Autor</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </nav>

            <button
              onClick={openModal}
              className="cursor-pointer flex justify-center items-center bg-red text-white uppercase shadow-md rounded px-5 font-sans text-md font-bold animate-bounce transition-all ease-in-out hover:animate-none hover:scale-110"
            >
              Comprar Ebook
            </button>
          </div>
        </header>

        <section id="home">
          <div className="flex relative">
            <div className="flex justify-between container items-center mx-auto z-10">
              <div className="flex flex-col w-7/12 items-start bg-[#2C2C2C] bg-opacity-30 py-14 gap-7 px-14 shadow-md">
                <h1 className="flex flex-col text-4xl text-white font-bold z-10">
                  <span>Conquiste a sua vaga como</span>
                  <span className="text-green">desenvolvedor de software</span>
                </h1>
                <p className="text-1xl text-white font-serif">
                  Com o nosso ebook "Como conseguir um emprego na área de
                  desenvolvimento de software: Dicas e estratégias para se
                  destacar em entrevistas e testes técnicos", você vai aprender
                  como se preparar para as entrevistas e testes técnicos.
                </p>

                <button
                  onClick={openModal}
                  className="flex justify-center items-center cursor-pointer gap-2 bg-red text-white text-1xl font-bold uppercase shadow-md rounded p-4  transition-all ease-in-out hover:scale-110"
                >
                  quero meu exemplar agora!
                  <Image
                    src="/book/arrow-right.svg"
                    width={16}
                    height={16}
                    alt="Seta para a direita"
                  />
                </button>
              </div>
              <div className="flex w-5/12">
                <Image
                  src="/book/capa.svg"
                  width={800}
                  height={900}
                  alt="Capa do ebook 'Conquiste a sua vaga como desenvolvedor de software'"
                  className="w-full"
                />
              </div>
            </div>
            <div className="absolute left-0 bottom-0 -z-0">
              <Image
                src="/book/blob-1.svg"
                width={400}
                height={200}
                alt="Blob 1"
              />
            </div>
          </div>
        </section>

        <section id="beneficios" className="relative">
          <div className="flex container mx-auto py-20">
            <div className="flex flex-col w-1/2 gap-5">
              <span className="text-orange uppercase font-bold">
                benefícios
              </span>
              <h2 className="text-4xl text-white font-bold">
                O quê você pode aprender comigo no meu ebook?
              </h2>
              <div>
                <Image
                  src="/book/notebook.svg"
                  width={784}
                  height={690}
                  alt="Ilustração de um notebook"
                />
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-8 z-10">
              <div className="flex flex-row gap-5">
                <div className="flex w-1/2 text-white text-xl flex-col justify-center gap-5 text-center">
                  <div className="flex flex-col gap-5 p-10 bg-grafiti shadow-md rounded">
                    <Image
                      src="/book/beneficios-1.svg"
                      width={77}
                      height={77}
                      alt="Ilustração de uma Maleta"
                      className="self-center"
                    />
                    <p className="">
                      Acesso ao conhecimento de um{" "}
                      <span className="font-bold text-orange-light">
                        líder técnico com 15 anos
                      </span>{" "}
                      de experiência no mercado de desenvolvimento de software
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 p-10 bg-grafiti shadow-md rounded">
                    <Image
                      src="/book/beneficios-2.svg"
                      width={77}
                      height={77}
                      alt="Ilustração de uma Maleta"
                      className="self-center"
                    />
                    <p className="">
                      Orientação{" "}
                      <span className="font-bold text-orange-light">
                        sobre como se comportar durante a entrevista
                      </span>{" "}
                      e como lidar com perguntas difíceis
                    </p>
                  </div>
                </div>
                <div className="flex w-1/2 text-white text-xl flex-col gap-5 text-center">
                  <div className="flex flex-col gap-5 p-10 bg-grafiti shadow-md rounded">
                    <Image
                      src="/book/beneficios-3.svg"
                      width={77}
                      height={77}
                      alt="Ilustração de uma Maleta"
                      className="self-center"
                    />
                    <p className="">
                      <span className="font-bold text-orange-light">
                        Dicas práticas
                      </span>{" "}
                      e{" "}
                      <span className="font-bold text-orange-light">
                        estratégias
                      </span>{" "}
                      comprovadas para se destacar em{" "}
                      <span className="font-bold text-orange-light">
                        processos seletivos
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 p-10 bg-grafiti shadow-md rounded">
                    <Image
                      src="/book/beneficios-4.svg"
                      width={77}
                      height={77}
                      alt="Ilustração de uma Maleta"
                      className="self-center"
                    />
                    <p className="">
                      Exemplos de currículos e portfólios para se inspirar
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 p-10 bg-grafiti shadow-md rounded">
                    <Image
                      src="/book/beneficios-5.svg"
                      width={77}
                      height={77}
                      alt="Ilustração de uma Maleta"
                      className="self-center"
                    />
                    <p className="">
                      Preparação para testes técnicos com{" "}
                      <span className="font-bold text-orange-light">
                        exercícios práticos
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex justify-center items-center gap-2 bg-red text-white text-2xl font-bold uppercase shadow-md rounded p-4 transition-all ease-in-out hover:scale-110">
                quero garantir meu exemplar
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-72 -z-0">
            <Image
              src="/book/blob-2.svg"
              width={200}
              height={200}
              alt="Blob 1"
            />
          </div>
        </section>

        <section id="investimento" className="relative py-36">
          <div className="flex w-full bg-gradient-to-bl from-blue to-transparent relative z-10">
            <div className="absolute top-0 right-0 left-0 h-1 from-[#27B2C7] to-transparent bg-gradient-to-r z-10"></div>
            <div className="container flex mx-auto">
              <div className="flex flex-col w-1/2 gap-5 py-10 text-white">
                <span className="text-orange uppercase font-bold">
                  investimento
                </span>
                <h2 className="text-4xl mb-5  font-sans font-bold">
                  Quanto você precisará investir para conquistar a sua vaga?
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    "Acesso a informações exclusivas",
                    "Dicas valiosas para entrevistas",
                    "Preparação completa para processos seletivos",
                    "Conhecimento em habilidades essenciais",
                    "Respostas para perguntas frequentes",
                    "Técnicas de negociação de salário",
                  ].map((item, i) => {
                    return (
                      <div
                        className="flex flex-row gap-5 items-center font-serif font-medium text-2xl"
                        key={i}
                      >
                        <Image
                          src="/book/check.svg"
                          width={25}
                          height={25}
                          alt="Check"
                        />
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col w-1/2 gap-5 text-white font-sans pt-10 relative">
                <div className="flex flex-col absolute top-[20%] items-center  max-w-2xl gap-5 w-full border-[#00D1FF] border-[0.25rem] rounded">
                  <div className="flex flex-col items-center px-20 py-14 gap-5 w-full bg-[#69edffc4]">
                    <h4 className="text-4xl font-bold font-sans">
                      Oferta Exclusiva
                    </h4>
                    <span className="text-2xl">Por apenas:</span>
                    <div className="flex items-center justify-center p-10 my-8 bg-orange rounded-md shadow-md">
                      <span className="text-8xl font-bold">R$ 49,00</span>
                    </div>
                    <button className="flex w-full justify-center items-center gap-2 bg-red text-white text-2xl font-bold uppercase shadow-md rounded p-4 transition-all ease-in-out hover:scale-110">
                      quero comprar o meu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-full left-0 top-10 -z-0">
            <Image
              src="/book/blob-3.svg"
              width={200}
              height={400}
              alt="Blob 3"
              className="transform blur-sm h-1/2"
            />
          </div>
        </section>

        <section id="autor" className="relative py-36">
          <div className="flex container gap-5 mx-auto">
            <div className="flex flex-col w-1/2 gap-5">
              <span className="text-orange uppercase font-bold">Autor</span>
              <h2 className="text-4xl text-white font-bold">
                Quem escreveu esse livro?
              </h2>
              <div className="flex flex-col font-serif text-xl text-white font-normal gap-3">
                <p>
                  Rafael Vieiras é um experiente desenvolvedor de software, com
                  mais de <b className="text-orange">13 anos</b> de carreira e
                  diversas conquistas em seu currículo. Ele trabalhou em algumas
                  das empresas mais renomadas do mercado, como <i>Banco Bari</i>{" "}
                  e RCI Brasil, onde liderou a arquitetura de dois Internet
                  Banking, além do
                  <i>James Delivery</i> onde liderou e participou da{" "}
                  <b className="text-orange">contratação de desenvolvedores</b>.
                </p>
                <p>
                  Com sua vasta experiência em liderança técnica, Rafael sabe
                  exatamente o que é necessário para{" "}
                  <b className="text-orange">se destacar</b> em um mercado
                  altamente competitivo e conquistar a vaga dos sonhos como
                  desenvolvedor. Além disso, ele é um comunicador habilidoso e
                  sabe transmitir suas ideias de forma clara e acessível.
                </p>
                <p>
                  Se você está{" "}
                  <b className="text-orange">procurando conselhos práticos</b> e
                  valiosos de alguém que realmente sabe do que está falando, não
                  precisa procurar mais do que Rafael Vieiras e seu livro{" "}
                  <b className="text-orange">"Conquiste sua vaga como Dev"</b>.
                  Com sua vasta experiência, paixão pela tecnologia e habilidade
                  em transmitir conhecimento, ele é a escolha certa para
                  ajudá-lo a alcançar seus objetivos como desenvolvedor. Não
                  perca <b className="text-orange">a oportunidade</b> de
                  aprender com um dos melhores profissionais do mercado e
                  conquistar a vaga que você tanto deseja.
                </p>
              </div>
            </div>
            <div className="flex w-1/2">
              <Image
                src="/book/rafaelvieiras.svg"
                width={400}
                height={400}
                alt="Autor"
                className="self-center w-full"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="relative py-36">
          <div className="flex container gap-5 mx-auto">
            <div className="flex flex-col w-1/2 gap-5">
              <span className="text-orange uppercase font-bold">FAQ</span>
              <h2 className="text-4xl text-white font-bold">
                Perguntas frequentes
              </h2>
              <Image
                src="/book/computer.svg"
                width={400}
                height={400}
                alt="Autor"
                className="self-center w-full"
              />
            </div>
            <div className="flex w-1/2 items-center-center">
              <div className="flex flex-col w-full p-5 gap-5">
                {faq.map((item, i) => {
                  return (
                    <div
                      key={i}
                      tabIndex={0}
                      className="collapse collapse-arrow border text-white border-base-300 bg-[#353535] rounded-md shadow-md p-5"
                    >
                      <div className="collapse-title text-xl font-medium">
                        {item.pergunta}
                      </div>
                      <div className="collapse-content">
                        <p>{item.resposta}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex bg-[#414042] justify-center py-5"></footer>
      <BuyModal ref={modalRef} />
    </>
  );
}
