import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";

import { Roboto } from "next/font/google";
import Sidebar from "../shared/Sidebar";

const roboto = Roboto({
  weight: ["700", "400", "300", "100"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/rafaelvieiras`);
  const data = await response.json();

  // console.warn(data);
  return {
    props: {
      name: data.name,
      username: data.login,
      bio: data.bio,
      imageProfile: data.avatar_url,
    },
  };
};

export default function Home({ name, username, bio, imageProfile }) {
  return (
    <div
      className={`${roboto.variable} flex flex-col sm:flex-row container mx-auto py-5`}
    >
      <Head>
        <title>
          Desenvolvedor Freelancer e Consultor Web, Front-end, Back-end,
          Full-Stack | Rafael Vieira - Aka Rafaelvieiras
        </title>
      </Head>

      <Sidebar />
      <main className="w-full p-5 sm:p-0">
        <Image
          src="/setup.jpg"
          alt="Imagem do Setup"
          width="1000"
          height="500"
          className="w-full rounded-lg shadow-lg"
        />
      </main>

      <footer></footer>
    </div>
  );
}
