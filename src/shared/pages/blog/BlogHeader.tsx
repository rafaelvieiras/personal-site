import Header from "@/shared/Header";
import Link from "next/link";

export function BlogHeader() {
  return (
    <Header action={undefined}>
      <li>
        <Link href="/" className="text-white">
          Inicio
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-white">
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-white">
          Contato
        </Link>
      </li>
    </Header>
  );
}
