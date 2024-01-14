"use client";
import { useRef } from "react";
import BuyModal from "./BuyModal";

export function BookBuyModalButton() {
  const modalRef = useRef<any | null>(null);
  const openModal = () => {
    modalRef.current?.openModal();
  };
  return (
    <>
      <button
        onClick={openModal}
        className="flex w-full justify-center items-center gap-2 bg-red text-white text-2xl font-bold uppercase shadow-md rounded p-4 transition-all ease-in-out hover:scale-110"
      >
        quero comprar o meu
      </button>

      <BuyModal ref={modalRef} />
    </>
  );
}
