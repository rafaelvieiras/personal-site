import Image from "next/image";
import Link from "next/link";

export default function Header({ children, action }) {
  return (
    <div className="navbar bg-base-100 z-20 gap-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-auto"
          >
            {children}
          </ul>
        </div>
        <Link href="/" className="normal-case text-xl">
          <Image
            src="/logo.png"
            width={200}
            height={34}
            priority
            alt="RafaelVieiras Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{children}</ul>
      </div>
      <div className="navbar-end">{action}</div>
    </div>
  );
}
