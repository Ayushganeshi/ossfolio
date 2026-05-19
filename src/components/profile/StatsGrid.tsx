"use client";

import { GitPullRequest, GitCommit, MessageSquare, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ContributorStats } from "@/types";

interface StatsGridProps {
  stats: ContributorStats;
}

const statItems = [
  { key: "totalCommits" as const, label: "Commits", icon: GitCommit },
  { key: "totalPRs" as const, label: "Pull Requests", icon: GitPullRequest },
  { key: "totalIssues" as const, label: "Issues", icon: MessageSquare },
  { key: "totalReviews" as const, label: "Reviews", icon: Eye },
];

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {statItems.map(({ key, label, icon: Icon }) => (
        <Card key={key}>
          <CardContent className="flex flex-col items-center justify-center p-4 text-center">
            <Icon className="mb-1 h-5 w-5 text-primary" />
            <p className="text-2xl font-bold text-foreground">{stats[key].toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
