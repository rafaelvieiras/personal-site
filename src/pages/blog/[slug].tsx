import { GetStaticPropsContext } from "next";
import { PrismicText, SliceZone } from "@prismicio/react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/shared/Header";
import { createClient } from "@/shared/libs/prismic";
import { components } from "@/shared/components/slice";
import Image from "next/image";
import { timeAgo } from "@/shared/libs/date";
import Footer from "@/shared/Footer";

const calculateTimeToRead = (text: string) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};

export async function getStaticPaths({ locales }) {
  const client = createClient();
  const posts = await client.getAllByType("blog_post", {
    pageSize: 20,
  });

  const paths = [];

  locales.forEach((locale) => {
    posts.forEach((post) => {
      paths.push({
        params: {
          slug: post.uid,
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const post = await client.getByUID("blog_post", params.slug as string, {});

  return {
    props: {
      post,
    },
  };
}

export default function BlogPostPage({ post }) {
  const { text: title } = post?.data?.title[0] || "Carregando post...";
  return (
    <>
      <Head>
        <title>{`${title}  | Rafaelvieiras`}</title>
        <meta name="description" content={post?.data?.seo_description} />
        <meta name="keywords" content={post?.data?.seo_keywords} />
        <meta name="author" content="Rafael Vieiras" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post?.data?.title} />
        <meta property="og:description" content={post?.data?.seo_description} />
        <meta property="og:image" content={post?.data?.cover.url} />
        <meta
          property="og:url"
          content={`https://rafaelvieiras.com.br/blog/${post?.uid}`}
        />
        <meta property="og:site_name" content="Rafaelvieiras" />
        <meta
          property="article:modified_time"
          content={post?.last_publication_date}
        />
        <meta
          property="article:published_time"
          content={post?.first_publication_date}
        />
        <meta property="article:author" content="Rafael Vieiras" />
        <meta property="article:section" content={post?.data?.category} />
        <meta property="article:tag" content={post?.data?.seo_keywords} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={post?.data?.title} />
        <meta
          property="twitter:description"
          content={post?.data?.seo_description}
        />
        <meta property="twitter:image" content={post?.data?.cover.url} />
        <meta
          property="twitter:url"
          content={`https://rafaelvieiras.com.br/blog/${post?.uid}`}
        />

        <link
          rel="canonical"
          href={`https://rafaelvieiras.com.br/blog/${post?.uid}`}
        />
      </Head>
      <main className="relative scroll-smooth flex flex-col gap-8 mb-5">
        <Header action={undefined}>
          <li>
            <Link href="/" className="text-white">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white">
              Blog
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
        <article className="container max-w-5xl mx-auto md:border border-neutral-500 md:py-12 md:px-24">
          {post?.data && (
            <>
              <header className="flex flex-col gap-10 pb-10">
                <div className="">
                  <Image
                    src={post.data.cover.url}
                    alt={post.data.cover.alt || "Imagem de capa"}
                    width={post.data.cover.dimensions.width}
                    height={post.data.cover.dimensions.height}
                    priority
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  <PrismicText field={post.data.title} />
                </h1>
                <div className="flex flex-row gap-4">
                  Atualizado: {timeAgo(post.last_publication_date)}
                </div>
              </header>
              <div className="flex flex-col prose max-w-none text-white">
                <SliceZone slices={post.data.body} components={components} />
              </div>
            </>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
