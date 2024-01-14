import { components } from "@/shared/components/slice";
import { timeAgo } from "@/shared/libs/date";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";

export default function BlogPost({ post }) {
  const publishTimeAgo = timeAgo(post?.last_publication_date);
  return (
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
              {`${post.data.title[0].text || "Carregando post..."}`}
            </h1>
            <div className="flex flex-row gap-4">
              {`Atualizado: ${publishTimeAgo || "Carregando..."}`}
            </div>
          </header>
          <div className="flex flex-col prose max-w-none text-white">
            <SliceZone slices={post.data.body} components={components} />
          </div>
        </>
      )}
    </article>
  );
}
