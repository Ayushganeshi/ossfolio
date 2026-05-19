import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        OSSfolio
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Your open-source identity, beyond GitHub.
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/api/auth/signin"
          className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Sign in with GitHub
        </Link>
        <Link
          href="/explore"
          className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
        >
          Explore profiles
        </Link>
      </div>
    </main>
  );
}
