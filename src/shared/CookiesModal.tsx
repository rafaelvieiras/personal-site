"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ITranslationsKeys } from "@/lang/languages";

interface CookiesModalProps {
  translation: ITranslationsKeys;
}

export default function CookiesModal({ translation }: CookiesModalProps) {
  const [showModal, setShowModal] = useState(false);

  const closeCookies = () => {
    if (typeof window !== "undefined") {
      setShowModal(false);
      window.localStorage.setItem("cookies", "accept");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.getItem("cookies") === null && setShowModal(true);
    }
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed right-0 bottom-0 md:bottom-4 md:px-20 ease-in-out transition-all md:hover:scale-105 z-50">
          <div>
            <div className="bg-base-300 md:rounded-lg shadow-md p-3 md:p-6">
              <div className="w-16 mx-auto relative -mt-10 mb-3">
                <Image
                  className="-mt-1"
                  width={64}
                  height={64}
                  src="/cookie.svg"
                  alt="Cookie Icon SVG"
                />
              </div>
              <span className="w-full md:w-48 block leading-normal text-gray-800 text-md mb-3">
                {translation.cookiesModal.DESCRIPTION}
              </span>
              <div className="flex items-center justify-between gap-5">
                <Link
                  className="text-xs text-gray-400 mr-1 hover:text-gray-800"
                  href="/terms/privacy"
                >
                  {translation.cookiesModal.POLICY}
                </Link>
                <div>
                  <button onClick={closeCookies} className="btn">
                    {translation.cookiesModal.CLOSE}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
