"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TechEntry } from "@/types";

interface TechStackProps {
  techStack: TechEntry[];
}

export function TechStack({ techStack }: TechStackProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {techStack.map(({ language, repoCount }) => (
          <Badge key={language} variant="secondary" className="gap-1">
            {language}
            <span className="text-muted-foreground">×{repoCount}</span>
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
