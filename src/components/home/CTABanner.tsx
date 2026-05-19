"use client";

import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  onGetStarted: () => void;
}

export function CTABanner({ onGetStarted }: CTABannerProps) {
  return (
    <section style={{ backgroundColor: "#fafafa", borderTop: "1px solid #ededed" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2
          className="font-semibold"
          style={{ fontSize: "clamp(28px, 3.5vw, 36px)", color: "#171717", letterSpacing: "-0.72px", lineHeight: 1.15 }}
        >
          Ready to share your open-source story?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base" style={{ color: "#707070", lineHeight: 1.55 }}>
          It's free, it takes 30 seconds, and your profile is live at ossfolio.me/username the moment you sign in.
        </p>
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
            Get started for free
            <ArrowRight size={15} />
          </button>
          <a
            href="https://github.com/PRODHOSH/ossfolio"
            target="_blank"
            rel="noopener noreferrer"
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
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
