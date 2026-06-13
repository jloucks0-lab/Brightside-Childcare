"use client";

import { useState } from "react";
import Link from "next/link";
import SunMark from "./SunMark";
import { brightwheel } from "@/lib/brightwheel";

const links = [
  { href: "/locations/fairport", label: "Brightside Childcare" },
  { href: "/locations/east", label: "Brightside East", badge: "New!" },
  { href: "/teachers", label: "Meet the Teachers" },
  { href: "/about", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cloud/95 backdrop-blur border-b-2 border-sun">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between gap-4 h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <SunMark className="w-9 h-9" />
          <span className="font-display font-bold text-lg leading-tight">
            Brightside <span className="text-coral">Childcare</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-pine-soft hover:text-pine transition-colors"
            >
              {l.label}
              {l.badge && (
                <span className="ml-1 text-[10px] font-bold uppercase bg-coral text-white rounded-full px-1.5 py-0.5 align-middle">
                  {l.badge}
                </span>
              )}
            </Link>
          ))}
          <a
            href={brightwheel.parentLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-pine-soft hover:text-pine transition-colors"
            title="Sign in to brightwheel"
          >
            Family login
          </a>
          <Link
            href="/enroll"
            className="bg-coral hover:bg-coral-deep text-white font-display font-bold text-sm rounded-full px-4 py-2 transition-colors"
          >
            Enroll your child
          </Link>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-sun/40 bg-cloud px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold text-pine-soft"
            >
              {l.label}
              {l.badge && (
                <span className="ml-2 text-[10px] font-bold uppercase bg-coral text-white rounded-full px-1.5 py-0.5">
                  {l.badge}
                </span>
              )}
            </Link>
          ))}
          <a
            href={brightwheel.parentLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="py-2 font-semibold text-pine-soft"
          >
            Family login (brightwheel)
          </a>
          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="mt-2 bg-coral text-white font-display font-bold rounded-full px-4 py-2 text-center"
          >
            Enroll your child
          </Link>
        </nav>
      )}
    </header>
  );
}
