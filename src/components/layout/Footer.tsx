import Image from "next/image";
import Link from "next/link";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Leaderboard", href: "/explore" },
  ],
  Developers: [
    { label: "GitHub", href: "https://github.com/PRODHOSH/ossfolio" },
    { label: "Contributing", href: "https://github.com/PRODHOSH/ossfolio/blob/main/CONTRIBUTING.md" },
    { label: "Issues", href: "https://github.com/PRODHOSH/ossfolio/issues" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "License (MIT)", href: "https://github.com/PRODHOSH/ossfolio/blob/main/LICENSE" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ededed" }}>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-sm font-semibold" style={{ color: "#171717" }}>OSS</span>
              <span className="text-sm font-semibold" style={{ color: "#3ecf8e" }}>folio</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#707070", maxWidth: "200px" }}>
              Your open-source identity, beyond GitHub.
            </p>
            <a
              href="https://github.com/PRODHOSH/ossfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: "#9a9a9a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#171717")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9a9a")}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#171717" }}>
                {section}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: "#707070" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#171717")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#707070")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "#ededed" }}
        >
          <p className="text-xs" style={{ color: "#9a9a9a" }}>
            © {new Date().getFullYear()} OSSfolio. MIT License.
          </p>

          {/* Credits */}
          <a
            href="https://github.com/PRODHOSH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="text-xs" style={{ color: "#9a9a9a" }}>Built by</span>
            <Image
              src="https://avatars.githubusercontent.com/u/213995806?v=4"
              alt="PRODHOSH V.S"
              width={22}
              height={22}
              className="rounded-full"
              style={{ border: "1px solid #ededed" }}
            />
            <span className="text-xs font-medium" style={{ color: "#171717" }}>PRODHOSH V.S</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
