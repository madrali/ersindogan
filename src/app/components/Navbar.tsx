"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-base-100 shadow-lg rounded-lg p-4 w-full relative">
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Aversindogan
          </Link>
        </div>
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-4 absolute lg:relative top-full left-0 right-0 lg:top-0 lg:left-auto lg:right-auto bg-base-100 lg:bg-transparent shadow-lg lg:shadow-none rounded-lg lg:rounded-none mt-2 lg:mt-0`}
        >
          <ul className="menu menu-vertical lg:menu-horizontal p-0 w-full lg:w-auto text-center lg:text-left">
            <li>
              <Link href="/hakkimda">Hakkımda</Link>
            </li>
            <li>
              <Link href="/hizmetler">Çalışma Alanları</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
            <li>
              <Link href="/hukuki-yayinlar">Hukuki Yayınlar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
