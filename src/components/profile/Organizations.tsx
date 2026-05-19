"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Org } from "@/types";

interface OrganizationsProps {
  orgs: Org[];
}

export function Organizations({ orgs }: OrganizationsProps) {
  if (orgs.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Organizations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {orgs.map((org) => (
          <a
            key={org.login}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            title={org.name ?? org.login}
          >
            <Image
              src={org.avatarUrl}
              alt={org.login}
              width={32}
              height={32}
              className="rounded-md border border-border hover:border-primary/50 transition-colors"
            />
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
