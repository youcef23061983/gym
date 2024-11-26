"use client";
import { useSession } from "next-auth/react";
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
  useEffect(() => {
    setShowLinks(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Workout", href: "/workout" },

    { name: "Shop", href: "/shop" },
    { name: "Testimonials", href: "/testimonials" },
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
      <Link href="/" className="x">
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
        <div className="logName">
          <span style={{ fontSize: "15px" }}>
            {session?.user?.name?.slice(0, 6)}...
          </span>

          <Link className="link" href="/api/auth/signout?callbackUrl=/">
            Logout
          </Link>
        </div>
      ) : (
        <Link className="link" href="/api/auth/signin">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
