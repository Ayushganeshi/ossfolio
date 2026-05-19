-- OSSfolio initial schema
-- Creates all tables with RLS policies

-- Profiles: one row per authenticated user
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text not null unique,
  name text,
  bio text,
  avatar_url text,
  github_url text,
  website_url text,
  twitter_username text,
  location text,
  followers integer default 0,
  following integer default 0,
  score integer default 0,
  last_synced_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;
create policy "profiles_select" on public.profiles for select using (true);
create policy "profiles_insert" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update" on public.profiles for update using (auth.uid() = id);

-- Contributor stats: cached GitHub numbers
create table public.contributor_stats (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null unique,
  total_commits integer default 0,
  total_prs integer default 0,
  total_issues integer default 0,
  total_reviews integer default 0,
  total_contributions integer default 0,
  updated_at timestamptz default now()
);

alter table public.contributor_stats enable row level security;
create policy "stats_select" on public.contributor_stats for select using (true);
create policy "stats_all" on public.contributor_stats for all using (auth.uid() = profile_id);

-- Top repos per contributor
create table public.contributor_repos (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  description text,
  url text,
  stars integer default 0,
  forks integer default 0,
  language text,
  language_color text,
  updated_at timestamptz default now()
);

alter table public.contributor_repos enable row level security;
create policy "repos_select" on public.contributor_repos for select using (true);
create policy "repos_all" on public.contributor_repos for all using (auth.uid() = profile_id);

-- Organizations contributed to
create table public.contributor_orgs (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  login text not null,
  name text,
  avatar_url text,
  url text,
  unique (profile_id, login)
);

alter table public.contributor_orgs enable row level security;
create policy "orgs_select" on public.contributor_orgs for select using (true);
create policy "orgs_all" on public.contributor_orgs for all using (auth.uid() = profile_id);
