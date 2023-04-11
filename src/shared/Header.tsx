import Image from "next/image";
import Link from "next/link";

export default function Header({ children }) {
  return (
    <header className="flex bg-[#4E4E4E] sticky top-0 z-20">
      <div className="flex container mx-auto justify-between py-5">
        <Link href="/" className="flex">
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt="RafaelVieiras Logo"
          />
        </Link>
        {children}
      </div>
    </header>
  );
}
