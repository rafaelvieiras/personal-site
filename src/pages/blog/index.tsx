import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../shared/Header";
import { timeAgo } from "../../shared/libs/date";
import { createClient } from "../../shared/libs/prismic";

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType("blog_post", {
    pageSize: 20,
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Rafaelvieiras</title>
      </Head>
      <main className="relative scroll-smooth flex flex-col gap-8">
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
        <div className="container max-w-3xl mx-auto">
          <div className="flex flex-col gap-10 pt-10 pb-14 text-center">
            <h1 className="text-5xl font-bold">Últimos Artigos</h1>
            <p className="text-gray-500">
              Aqui você encontra artigos sobre tecnologia, programação, design,
              marketing e muito mais.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.uid}`}
                key={post.id}
                className="flex flex-col md:flex-row gap-3 border border-neutral-700 bg-base-300 shadow-sm hover:scale-105 transition-all"
              >
                <div className="flex md:w-1/2 overflow-hidden">
                  <Image
                    src={post.data.cover.url}
                    width={post.data.cover.dimensions.width}
                    height={post.data.cover.dimensions.height}
                    alt={post.data.cover.alt || "Capa do Post"}
                    loading="lazy"
                    className="flex object-cover h-full"
                  />
                </div>
                <div className="flex flex-col md:w-1/2 justify-center p-5 gap-5">
                  <div className="text-xl font-bold text-white">
                    {post.data.title[0].text}
                  </div>
                  <p className="">{post.data.seo_description}</p>
                  <div className="divide"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">
                      {post.data.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {timeAgo(post.first_publication_date)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
