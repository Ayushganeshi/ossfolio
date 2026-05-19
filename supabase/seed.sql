-- Seed data for local development
-- Run automatically with: supabase db reset

-- Sample profile for local testing (not inserted into prod)
insert into public.profiles (id, username, name, bio, avatar_url, github_url, score)
values (
  '00000000-0000-0000-0000-000000000001',
  'testuser',
  'Test Contributor',
  'A sample contributor for local dev.',
  'https://avatars.githubusercontent.com/u/0',
  'https://github.com/testuser',
  420
);

insert into public.contributor_stats (profile_id, total_commits, total_prs, total_issues, total_reviews, total_contributions)
values (
  '00000000-0000-0000-0000-000000000001',
  312, 47, 23, 18, 400
);
