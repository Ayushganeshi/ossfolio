"use client";

import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 text-center">
      {/* Pill tag */}
      <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1" style={{
        backgroundColor: "#3ecf8e",
        color: "#171717",
        borderRadius: "9999px",
        fontSize: "12px",
        fontWeight: 500,
      }}>
        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#171717" }} />
        Open Source · Free Forever
      </div>

      {/* Headline */}
      <h1
        className="mx-auto max-w-3xl font-semibold"
        style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          color: "#171717",
        }}
      >
        Your open-source identity,{" "}
        <span style={{ color: "#3ecf8e" }}>beyond GitHub.</span>
      </h1>

      {/* Sub */}
      <p
        className="mx-auto mt-5 max-w-xl"
        style={{ fontSize: "18px", lineHeight: 1.55, color: "#707070" }}
      >
        Sign in once. Get a shareable profile at{" "}
        <span style={{ color: "#171717", fontWeight: 500 }}>ossfolio.me/username</span>{" "}
        showing your real open-source impact — merged PRs, streaks, orgs, badges, and more.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onGetStarted}
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#3ecf8e",
            color: "#171717",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          Get your profile free
          <ArrowRight size={15} />
        </button>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #dfdfdf",
            color: "#171717",
            backgroundColor: "#ffffff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
        >
          See how it works
        </a>
      </div>

      {/* Stats bar */}
      <div
        className="mx-auto mt-14 flex max-w-lg flex-wrap items-center justify-center gap-8 border-t pt-8"
        style={{ borderColor: "#ededed" }}
      >
        {[
          { value: "10K+", label: "Contributors" },
          { value: "500K+", label: "PRs tracked" },
          { value: "100%", label: "Free & open source" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="font-semibold" style={{ fontSize: "22px", color: "#171717", letterSpacing: "-0.4px" }}>
              {value}
            </p>
            <p className="mt-0.5 text-sm" style={{ color: "#707070" }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
