const steps = [
  {
    number: "01",
    title: "Sign in with GitHub",
    description:
      "One click with your GitHub account. No forms, no manual data entry. We only request read access to public information.",
  },
  {
    number: "02",
    title: "Your profile is built automatically",
    description:
      "We pull your contributions, PRs, issues, orgs, and tech stack from the GitHub API. Your profile is ready in seconds.",
  },
  {
    number: "03",
    title: "Share your link",
    description:
      "You get a public profile at ossfolio.me/username. Drop it on your resume, LinkedIn, or anywhere you want your work to be seen.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium" style={{ color: "#3ecf8e" }}>
          Simple by design
        </p>
        <h2
          className="font-semibold"
          style={{ fontSize: "clamp(28px, 3.5vw, 36px)", color: "#171717", letterSpacing: "-0.72px", lineHeight: 1.15 }}
        >
          Up and running in 30 seconds
        </h2>
      </div>

      {/* Steps */}
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(({ number, title, description }, i) => (
          <div key={number} className="relative flex flex-col gap-4">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className="absolute left-6 top-6 hidden h-px md:block"
                style={{
                  width: "calc(100% + 24px)",
                  backgroundColor: "#ededed",
                  zIndex: 0,
                }}
              />
            )}

            <div className="relative flex items-start gap-4">
              {/* Number circle */}
              <div
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center font-semibold"
                style={{
                  border: "1px solid #dfdfdf",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  fontSize: "13px",
                  color: "#3ecf8e",
                  letterSpacing: "0",
                }}
              >
                {number}
              </div>

              <div className="pt-2">
                <h3 className="text-base font-semibold" style={{ color: "#171717" }}>
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#707070" }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
