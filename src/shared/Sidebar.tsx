import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const callToWhatsApp = () => {
    window.open("https://wa.me/5541999015649", "_blank");
  };

  const sendEmail = () => {
    window.open("mailto:hello@rafaelvieiras.com", "_blank");
  };

  return (
    <aside className="flex flex-col w-full p-5 sm:max-w-xs sm:pr-5 gap-5">
      <div className="flex flex-col gap-5">
        <Link href="/">
          <Image
            src="/icon.svg"
            alt="Logo"
            width="55"
            height="55"
            className="w-55 h-55"
          />
        </Link>
        <h2 className="text-4xl font-bold">Rafael Vieiras</h2>
        <p>
          Atualmente trabalho com desenvolvimento de sites e sistemas web,
          utilizando as tecnologias mais modernas do mercado.
        </p>
        <p>
          Atuo como:{" "}
          <strong className="font-bold">Desenvolvedor Freelancer</strong>,{" "}
          <strong className="font-bold">Consultor Web</strong>,{" "}
          <strong className="font-bold">Front-end</strong>,{" "}
          <strong className="font-bold">Back-end</strong>,{" "}
          <strong className="font-bold">Full-Stack</strong>,{" "}
          <strong className="font-bold">Full-Cycle</strong> e{" "}
          <strong className="font-bold">Tech Lead</strong>.
        </p>
      </div>
      <div className="border-b border-neutral-700"></div>
      <div className="flex gap-5">
        <button onClick={sendEmail}>
          <Image
            src="/icons/email.svg"
            alt="Github"
            width="30"
            height="30"
            className="invert"
          />
        </button>
      </div>

      <nav className="flex flex-col gap-3 pt-5">
        <Link href="/sobre">Sobre</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/shop">Shop</Link>
        <button className="btn" onClick={callToWhatsApp}>
          Converse comigo
        </button>
      </nav>
    </aside>
  );
}
