import {
  GitPullRequest,
  Activity,
  Code2,
  Building2,
  Award,
  Trophy,
  Share2,
  Flame,
} from "lucide-react";

const features = [
  {
    icon: GitPullRequest,
    title: "Merged PRs & Issues",
    description:
      "Every PR you've merged into any public repo, every issue you've filed — counted, surfaced, and credited to you.",
  },
  {
    icon: Activity,
    title: "Contribution Heatmap",
    description:
      "A full-year heatmap of your activity across all repos, not just your own. Your streak and longest run are highlighted.",
  },
  {
    icon: Code2,
    title: "Tech Stack Detection",
    description:
      "Languages auto-detected from every repo you've contributed to — no tagging, no manual input, just your actual work.",
  },
  {
    icon: Building2,
    title: "Organization History",
    description:
      "Every open-source organization you've contributed to, displayed with their logo and a link. Your network, made visible.",
  },
  {
    icon: Award,
    title: "GSoC & GSSoC Badges",
    description:
      "Participated in Google Summer of Code, GSSoC, or other programs? Your badges show up automatically on your profile.",
  },
  {
    icon: Trophy,
    title: "Contributor Score",
    description:
      "A single number that summarises your impact — commits, PRs, reviews, stars earned — calibrated across the community.",
  },
  {
    icon: Flame,
    title: "Leaderboard",
    description:
      "See how you rank globally and within your stack. Filter by language, org, or program. Compete, get noticed.",
  },
  {
    icon: Share2,
    title: "Shareable Profile Link",
    description:
      "One link — ossfolio.me/username — that shows everything. Share it on your resume, LinkedIn, or anywhere else.",
  },
];

export function Features() {
  return (
    <section id="features" style={{ backgroundColor: "#fafafa", borderTop: "1px solid #ededed", borderBottom: "1px solid #ededed" }}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium" style={{ color: "#3ecf8e" }}>
            What you get
          </p>
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)", color: "#171717", letterSpacing: "-0.72px", lineHeight: 1.15 }}
          >
            Everything GitHub doesn't show
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base" style={{ color: "#707070", lineHeight: 1.55 }}>
            OSSfolio pulls from the GitHub GraphQL API to build a complete picture of your contributions — automatically.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #dfdfdf",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center"
                style={{ backgroundColor: "#3ecf8e1a", borderRadius: "8px" }}
              >
                <Icon size={18} style={{ color: "#3ecf8e" }} />
              </div>
              <h3 className="text-sm font-semibold" style={{ color: "#171717" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
