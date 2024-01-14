import Header from "@/shared/Header";

export function BookHeader() {
  return (
    <Header
      action={
        <a
          href="#investimento-compra"
          className="cursor-pointer flex justify-center items-center bg-red text-white uppercase shadow-md rounded px-5 py-2 font-sans text-md font-bold animate-bounce transition-all ease-in-out hover:animate-none hover:scale-110 hover:-translate-x-1 z-20"
        >
          Comprar Ebook
        </a>
      }
    >
      <li>
        <a href="#beneficios">Benefícios</a>
      </li>
      <li>
        <a href="#investimento-compra">Investimento</a>
      </li>
      <li>
        <a href="#autor">Autor</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
    </Header>
  );
}
