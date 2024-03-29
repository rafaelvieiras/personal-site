import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/shared/data/shop/all";
import { getLanguage } from "@/lang/languages";
import Sidebar from "@/shared/Sidebar";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}): Promise<Metadata> {
  const translation = getLanguage(lang);
  return {
    title: translation.shop.TITLE,
    description:
      "Compre os produtos de Rafael Vieiras, um desenvolvedor de software experiente e apaixonado por tecnologia.",
    keywords: "desenvolvedor de software, front-end, back-end, aplicações web",
  };
}

export default function Contato({ params: { lang } }) {
  const translation = getLanguage(lang);
  return (
    <div className={`flex flex-col container mx-auto py-5 lg:flex-row`}>
      <Sidebar translation={translation} />
      <main className="flex flex-col gap-5 w-full p-5 sm:p-0 ">
        <header className="flex flex-col lg:flex-row justify-between lg:pt-32">
          <h1 className="text-3xl font-bold lg:text-center sm:text-left py-5 lg:pb-11">
            Compre meus produtos
          </h1>
          <p>O melhor do meu trabalho em um só lugar.</p>
        </header>
        <div className="flex flex-row items-start gap-5">
          {allProducts.map((product) => (
            <div
              key={product.url}
              className="flex flex-col rounded-xl bg-base-300 p-5 gap-2 justify-between lg:w-1/2 aspect-square"
            >
              <div className="flex w-full h-2/3 lg:h-1/2 border border-white rounded overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full max-h-full scale-100 object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col w-full gap-5">
                <h2 className="text-2xl">{product.name}</h2>
                <p>{product.description}</p>
                <Link href={product.url} className="btn btn-primary self-end">
                  Comprar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
