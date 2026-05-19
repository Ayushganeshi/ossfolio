"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onSignIn: () => void;
  onGetStarted: () => void;
}

export function Navbar({ onSignIn, onGetStarted }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full bg-canvas border-b border-hairline"
      style={{ backgroundColor: "#ffffff", borderColor: "#ededed" }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span
            className="text-base font-semibold"
            style={{ color: "#171717", letterSpacing: "-0.3px" }}
          >
            OSS
          </span>
          <span
            className="text-base font-semibold"
            style={{ color: "#3ecf8e", letterSpacing: "-0.3px" }}
          >
            folio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {["Features", "How it works", "Leaderboard"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "#707070" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#171717")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#707070")
              }
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onSignIn}
            className="text-sm font-medium transition-colors"
            style={{ color: "#707070" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#171717")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#707070")}
          >
            Sign in
          </button>
          <button
            onClick={onGetStarted}
            className="text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#3ecf8e",
              color: "#171717",
              padding: "7px 16px",
              borderRadius: "6px",
            }}
          >
            Get started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: "#171717" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "#ededed", backgroundColor: "#ffffff" }}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {["Features", "How it works", "Leaderboard"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="py-2 text-sm font-medium"
                style={{ color: "#707070" }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t pt-3" style={{ borderColor: "#ededed" }}>
              <button
                onClick={() => { setMobileOpen(false); onSignIn(); }}
                className="w-full py-2 text-sm font-medium text-left"
                style={{ color: "#171717" }}
              >
                Sign in
              </button>
              <button
                onClick={() => { setMobileOpen(false); onGetStarted(); }}
                className="w-full rounded py-2 text-sm font-medium"
                style={{
                  backgroundColor: "#3ecf8e",
                  color: "#171717",
                  borderRadius: "6px",
                }}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
