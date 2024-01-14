import { GetStaticPropsContext, Metadata } from "next";
import { PrismicText, SliceZone } from "@prismicio/react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/shared/Header";
import { createClient } from "@/shared/libs/prismic";
import { components } from "@/shared/components/slice";
import Image from "next/image";
import { timeAgo } from "@/shared/libs/date";
import Footer from "@/shared/Footer";
import BlogPost from "@/shared/pages/blog/BlogPost";
import { BlogHeader } from "@/shared/pages/blog/BlogHeader";

const calculateTimeToRead = (text: string) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};

async function getPost({ slug }: { slug: string }) {
  const client = createClient();

  const post = await client.getByUID("blog_post", slug, {});

  return post;
}

export async function generateMetadata({
  params: { slug },
}): Promise<Metadata> {
  const post = await getPost({ slug });
  const title = post?.data?.title[0]?.text || "Carregando post...";
  return {
    metadataBase: new URL("https://rafaelvieiras.com.br/blog"),
    title: `${title}  | Rafaelvieiras`,
    description: post?.data?.seo_description || "",
    keywords: post?.data?.seo_keywords || "",
    alternates: {
      canonical: `/${post?.uid}`,
    },
    authors: [
      {
        name: "Rafael Vieiras",
      },
    ],
    robots: "index, follow",
    openGraph: {
      type: "article",
      title: title,
      description: post?.data?.seo_description || "",
      images: [post?.data?.cover.url || ""],
      url: `/${post?.uid}`,
      siteName: "Rafaelvieiras",
      publishedTime: post?.first_publication_date || "",
      modifiedTime: post?.last_publication_date || "",
      authors: ["Rafael Vieiras"],
      tags: post?.data?.seo_keywords || "",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: post?.data?.seo_description || "",
      images: [post?.data?.cover.url || ""],
    },
  };
}

export default async function BlogPostPage({ params: { slug } }) {
  const post = await getPost({ slug });
  const title = post?.data?.title[0]?.text || "Carregando post...";
  return (
    <>
      <main className="relative scroll-smooth flex flex-col gap-8 mb-5">
        <BlogHeader />
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  );
}
