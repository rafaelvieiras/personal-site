import Image from "next/image";

import { getLanguage } from "@/shared/lang/languages";
import Sidebar from "@/shared/Sidebar";
import { roboto } from "@/shared/libs/fonts";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}): Promise<Metadata> {
  const translation = getLanguage(lang);
  return {
    title: translation.home.TITLE,
  };
}

export default async function Home({ params: { lang } }) {
  const translation = getLanguage(lang);

  return (
    <div
      className={`${roboto.variable} flex flex-col lg:flex-row container mx-auto py-5`}
    >
      <Sidebar translation={translation} />
      <main className="hidden lg:flex items-start relative w-full pb-10 pt-32 overflow-hidden">
        <div className="absolute top-0 right-0">
          <Image
            src="/bg_square.svg"
            alt="Logo"
            width="628"
            height="644"
            className="w-auto"
          />
        </div>
        <div className="hidden lg:flex relative w-full">
          <Image
            src="/bg_image.jpg"
            alt="Imagem do Setup"
            width="1216"
            height="859"
            className="w-full max-h-full object-contain rounded-lg rounded-tr-none rounded-br-none"
          />
          <div className="absolute w-full h-full border border-white top-6 left-10 -z-10 rounded-lg rounded-tr-none rounded-br-none"></div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
