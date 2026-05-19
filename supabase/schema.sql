-- OSSfolio — Master Schema
-- Run this entire file in your Supabase SQL editor to set up the database.
-- Dashboard → SQL Editor → New query → paste → Run

-- ============================================================
-- PROFILES
-- One row per user. Extended from Supabase auth.users.
-- ============================================================

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

create policy "Profiles are publicly viewable"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

-- ============================================================
-- CONTRIBUTOR STATS
-- Cached GitHub contribution numbers per user.
-- ============================================================

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

create policy "Stats are publicly viewable"
  on public.contributor_stats for select using (true);

create policy "Users manage own stats"
  on public.contributor_stats for all using (auth.uid() = profile_id);

-- ============================================================
-- REPOS
-- Top repos per contributor, cached from GitHub.
-- ============================================================

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

create policy "Repos are publicly viewable"
  on public.contributor_repos for select using (true);

create policy "Users manage own repos"
  on public.contributor_repos for all using (auth.uid() = profile_id);

-- ============================================================
-- ORGANIZATIONS
-- Orgs the contributor has contributed to.
-- ============================================================

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

create policy "Orgs are publicly viewable"
  on public.contributor_orgs for select using (true);

create policy "Users manage own orgs"
  on public.contributor_orgs for all using (auth.uid() = profile_id);
