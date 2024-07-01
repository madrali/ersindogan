import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg p-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Aversindogan
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
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
  );
};

export default Navbar;
