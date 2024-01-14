import { GetStaticPropsContext, Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "@/shared/Header";
import { createClient } from "@/shared/libs/prismic";
import BlogHome from "@/shared/pages/blog/BlogHome";
import { BlogHeader } from "../../../shared/pages/blog/BlogHeader";

export const metadata: Metadata = {
  title: "Blog | Rafaelvieiras",
};

async function getPosts() {
  const client = createClient();

  const posts = await client.getAllByType("blog_post", {
    pageSize: 20,
  });

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="relative scroll-smooth flex flex-col gap-8">
      <BlogHeader />
      <BlogHome posts={posts} />
    </main>
  );
}
