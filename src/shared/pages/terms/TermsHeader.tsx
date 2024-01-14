"use client";

import Header from "@/shared/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function TermsHeader() {
  const router = useRouter();
  const back = () => {
    // Check if has a previous page
    // if (router.asPath !== router.route) {
    //   router.back();
    // }

    // If not, go to home
    router.push("/");
  };
  return (
    <Header action={undefined}>
      <li>
        <button onClick={back} className="btn btn-ghost text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>{" "}
          Voltar
        </button>
      </li>
      <li>
        <Link href="/terms/use" className="text-white">
          Termos de Uso
        </Link>
      </li>
      <li>
        <Link href="/terms/privacy" className="text-white">
          Política de Privacidade
        </Link>
      </li>
    </Header>
  );
}
