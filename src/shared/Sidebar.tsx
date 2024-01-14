"use client";

import Image from "next/image";
import Link from "next/link";
import { ITranslationsKeys } from "@/lang/languages";

interface SidebarProps {
  translation: ITranslationsKeys;
}

export default function Sidebar({ translation }: SidebarProps) {
  return (
    <aside className="flex flex-col w-full font-montserrat lg:max-w-xs sm:pr-5 gap-6">
      <div className="flex flex-col gap-5">
        <Link href="/">
          <Image
            src="/icon.svg"
            alt="Logo"
            width="55"
            height="55"
            className="w-55 h-55"
          />
        </Link>
        <Link href="/">
          <h2 className="text-4xl pt-14 pb-10 font-medium font-ubuntu">
            Rafael Vieiras
          </h2>
        </Link>
        <p>{translation.sidebar.DESCRIPTION}</p>
        <p>
          {translation.sidebar.SKILLS_DESC}
          {translation.sidebar.SKILLS.map((item, index) => (
            <strong key={index} className="font-medium">
              {`${item}${index === 6 ? "" : ","} `}
            </strong>
          ))}
        </p>
      </div>
      <div className="hidden lg:flex mt-14 border-b border-white"></div>
      <div className="flex gap-5 self-center lg:self-start">
        <Link href="https://github.com/rafaelvieiras" target="_blank">
          <Image
            src="/icons/github.svg"
            alt="Github"
            width="30"
            height="30"
            className="invert"
          />
        </Link>
        <Link
          href="https://www.instagram.com/rafaelvieiras.dev"
          target="_blank"
        >
          <Image
            src="/icons/instagram-fill.svg"
            alt="Instagram"
            width="30"
            height="30"
            className="invert"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rafaelvieiras" target="_blank">
          <Image
            src="/icons/linkedin.svg"
            alt="Linkedin"
            width="30"
            height="30"
            className="invert"
          />
        </Link>
      </div>

      <nav className="flex flex-wrap justify-center items-center gap-6 pt-5 lg:flex-col lg:items-start">
        {[
          { name: translation.sidebar.LINKS.HOME, href: "/" },
          { name: translation.sidebar.LINKS.ABOUT, href: "/about" },
          // { name: "Projetos", href: "/projects" },
          { name: translation.sidebar.LINKS.CONTACT, href: "/contact" },
          { name: translation.sidebar.LINKS.BLOG, href: "/blog" },
          { name: translation.sidebar.LINKS.SHOP, href: "/shop" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center font-bold"
          >
            {item.name}
          </Link>
        ))}
        <Link className="btn w-full lg:mt-5 lg:w-auto" href="/contact">
          {translation.sidebar.ACTION}
        </Link>
      </nav>
    </aside>
  );
}
