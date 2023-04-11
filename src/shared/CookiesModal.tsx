import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookiesModal() {
  const [showModal, setShowModal] = useState(false);

  const acceptCookies = () => {
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
        <div className="fixed right-0 bottom-4 px-20 ease-in-out transition-all scale-100 hover:scale-105">
          <div>
            <div className="bg-base-300 rounded-lg shadow-md p-6">
              <div className="w-16 mx-auto relative -mt-10 mb-3">
                <Image
                  className="-mt-1"
                  width={64}
                  height={64}
                  src="/cookie.svg"
                  alt="Cookie Icon SVG"
                />
              </div>
              <span className="w-full sm:w-48 block leading-normal text-gray-800 text-md mb-3">
                Nos usamos cookies para melhorar a sua experiência de navegação.
              </span>
              <div className="flex items-center justify-between">
                <Link
                  className="text-xs text-gray-400 mr-1 hover:text-gray-800"
                  href="/terms/privacy"
                >
                  Politicas de privacidade
                </Link>
                <div className="w-1/2">
                  <button onClick={acceptCookies} className="btn">
                    Aceitar
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
