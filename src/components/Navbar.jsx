"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { FaX } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navCenter = useRef(null);
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    setShowLinks(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Shop", href: "/shop" },
    { name: "Membership", href: "/membership" },
  ];

  const { data: session } = useSession();

  useLayoutEffect(() => {
    let isMounted = true;

    const handleScroll = () => {
      if (!isMounted) return;

      const scrollHeight = window.scrollY;
      const navCenterHeight = navCenter.current.getBoundingClientRect().height;

      if (scrollHeight > navCenterHeight) {
        navCenter.current.style.position = "fixed";
        navCenter.current.style.background = "white";
        navCenter.current.style.transition = "all 0.8s linear";
      } else {
        navCenter.current.style.background = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navCenter} className="nav">
      <button
        type="button"
        onClick={() => setShowLinks(!showLinks)}
        className="ham"
      >
        {showLinks ? (
          <FaX className="logo" />
        ) : (
          <FaAlignJustify className="logo" />
        )}
      </button>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Link>
      <ul className={`${showLinks ? "links show-nav" : "links"}`}>
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
      {session ? (
        <div>
          <Link
            className="link"
            href="/api/auth/signout"
            onClick={() => signOut()}
          >
            Logout
          </Link>
          <p>{session?.user?.name}</p>
        </div>
      ) : (
        <Link className="link" href="/api/auth/signin" onClick={() => signIn()}>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
