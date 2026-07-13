"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "GI screenwriting", href: "/screenwriting" },
  { label: "GI doctoring", href: "/doctoring" },
  { label: "GI courses", href: "/courses" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#181818]">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-6 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/images/GI_logo.png"
            alt="Guiding Idea"
            width={80}
            height={80}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contacts"
            className="flex items-center gap-1.5 text-[15px] text-neutral-300 transition-colors hover:text-white"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contact Us
          </Link>

          <span className="flex h-8 items-center rounded-full bg-neutral-200 px-3 text-xs font-medium text-neutral-800">
            KZ
          </span>

          <button
            type="button"
            aria-label="Поиск"
            className="text-neutral-300 transition-colors hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center text-neutral-300 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 3H17M1 9H17M1 15H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-neutral-800 bg-[#181818] px-6 py-4 md:hidden">
          {[...navItems, { label: "Contact Us", href: "/contacts" }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-neutral-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
