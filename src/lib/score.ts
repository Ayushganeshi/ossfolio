import type { ContributorStats, Repo } from "@/types";

export function calculateScore(stats: ContributorStats, repos: Repo[]): number {
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const score =
    stats.totalCommits * 1 +
    stats.totalPRs * 3 +
    stats.totalIssues * 2 +
    stats.totalReviews * 2 +
    Math.min(totalStars, 1000) * 0.1;
  return Math.round(score);
}
