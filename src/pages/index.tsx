import Head from "next/head";
import Image from "next/image";
import Sidebar from "../shared/Sidebar";
import { roboto } from "../shared/libs/fonts";
import { useRouter } from "next/router";
import { getLanguage } from "../shared/lang/languages";

export default function Home() {
  const { locale } = useRouter();
  const translation = getLanguage(locale);

  return (
    <div
      className={`${roboto.variable} flex flex-col lg:flex-row container mx-auto py-5`}
    >
      <Head>
        <title>{translation.home.TITLE}</title>
      </Head>

      <Sidebar />
      <main className="hidden lg:flex items-start relative w-full pb-10 pt-32 overflow-hidden">
        <div className="absolute top-0 right-0">
          <Image
            src="/bg_square.svg"
            alt="Logo"
            width="644"
            height="644"
            className="w-auto"
          />
        </div>
        <div className="hidden lg:flex relative w-full">
          <Image
            src="/bg_image.jpg"
            alt="Imagem do Setup"
            width="1000"
            height="500"
            className="w-full max-h-full object-contain rounded-lg rounded-tr-none rounded-br-none"
          />
          <div className="absolute w-full h-full border border-white top-6 left-10 -z-10 rounded-lg rounded-tr-none rounded-br-none"></div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
