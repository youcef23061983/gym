"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },

    { name: "Terms&Conditions", href: "/terms" },
    { name: "FAQ", href: "/faq" },
  ];
  return (
    <div className="footer" style={{ backgroundColor: "white" }}>
      <div className="footerLinksLogo">
        <ul className="footerLinks">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`link ${pathname === link.href ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={140} height={140} />
        </Link>
      </div>

      <div className="rightsLogo">
        <span style={{ marginBottom: "0", fontSize: "15px" }}>
          © 2024 GYM Rester Jeune Tous droits réservés
        </span>
        <div className="footerLogos">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-pink-600  footericon"
          >
            <FaSquareInstagram />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className=" hover:text-blue-600 footericon"
          >
            <FaSquareFacebook />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className=" hover:text-red-600 footericon"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};
