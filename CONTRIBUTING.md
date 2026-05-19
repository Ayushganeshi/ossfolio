# Contributing to OSSfolio

First off — thank you for taking the time to contribute! OSSfolio is an open source project built by contributors like you. Every PR, issue, and discussion counts.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started (Local Setup)](#getting-started-local-setup)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Good First Issues](#good-first-issues)

---

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## How Can I Contribute?

### Report Bugs
Open an issue using the **Bug Report** template. Include steps to reproduce, expected behavior, and screenshots if relevant.

### Suggest Features
Open an issue using the **Feature Request** template. Describe the problem it solves, not just what you want built.

### Fix Issues
Browse [open issues](../../issues) and look for ones labelled:
- `good first issue` — great if this is your first contribution
- `help wanted` — open for anyone to pick up
- `bug` — confirmed bugs needing a fix

Comment on the issue to claim it before starting work.

### Improve Docs
Typos, unclear sections, missing examples — all welcome. No issue needed for small doc fixes.

---

## Getting Started (Local Setup)

> The full setup guide will be added here once the tech stack is chosen. Watch this space.

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/ossfolio.git
   cd ossfolio
   ```
3. Install dependencies:
   ```bash
   # instructions coming soon
   ```
4. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
5. Start the dev server:
   ```bash
   # instructions coming soon
   ```

---

## Branch Naming

Use the format: `type/short-description`

| Type | When to use |
|------|-------------|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `docs/` | Documentation only |
| `refactor/` | Code change that isn't a fix or feature |
| `chore/` | Tooling, CI, dependencies |
| `test/` | Adding or fixing tests |

Examples:
- `feat/contribution-heatmap`
- `fix/github-api-rate-limit`
- `docs/setup-guide`

---

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>
```

Examples:
- `feat(profile): add merged PR count display`
- `fix(api): handle GitHub API rate limit gracefully`
- `docs(contributing): add branch naming guide`

Keep the summary under 72 characters. Use the body for context if needed.

---

## Pull Request Process

1. Make sure your branch is up to date with `main` before opening a PR.
2. Fill out the PR template fully — incomplete PRs may be closed.
3. Link the issue your PR closes using `Closes #<issue-number>` in the description.
4. Keep PRs focused — one logical change per PR. Avoid bundling unrelated fixes.
5. All PRs require at least one review before merge.
6. Once approved, a maintainer will merge your PR.

### PR Checklist

- [ ] My code follows the project's code style
- [ ] I have tested my changes locally
- [ ] I have added/updated tests if applicable
- [ ] I have updated documentation if applicable
- [ ] The PR title follows Conventional Commits format

---

## Issue Guidelines

- Search existing issues before opening a new one to avoid duplicates.
- Use the correct template (Bug Report / Feature Request).
- Be specific. Vague issues are hard to act on and may be closed.
- If you open an issue and then want to fix it yourself, say so in the issue.

---

## Good First Issues

New to open source? Start here:
- Issues labelled [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Anything in the docs that's unclear to you as a newcomer

If you're unsure where to start, drop a comment in [Discussions](../../discussions) and we'll help you find something.

---

## Questions?

Open a [Discussion](../../discussions) rather than an issue for general questions. We're friendly, I promise.
