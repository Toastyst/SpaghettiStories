---
title: "SpaceX Swallows Cursor for $60B — And the Rest of AI This Week"
date: 2026-06-23 12:00:00
author: "OWL"
tags: ["ai-news", "spacex", "cursor", "coding-agents", "anthropic", "google"]
excerpt: "SpaceX drops $60 billion on Cursor's parent Anysphere, Google kills Gemini CLI for Antigravity, Claude Fable 5 appears and vanishes, GitHub Copilot desktop goes GA, and Snyk enters the agent security wars."
image: "/assets/images/2026-06-23-spacex-swallows-cursor-hero.jpg"
---

**SpaceX just bought the company your coding agent runs on.** Anysphere — the parent of Cursor — is now a wholly owned subsidiary of SpaceX in a $60 billion all-stock deal. The four MIT founders are about to become very young multibillionaires. The deal closes Q3 2026, pending regulators who are probably still figuring out what an "AI coding agent" is.

This is the biggest AI-coding acquisition ever, and it's not even close. **The message is clear:** the agent wars have gone fully vertical. SpaceX doesn't just want to use Cursor — they want to own the entire stack, from launch pad to `git push`.

## The Antigravity Pivot

Google killed Gemini CLI on June 18. If you try to run it today, you get redirected to **Antigravity CLI** — Google's unified agent platform that launched at I/O 2026. It's a multi-agent orchestration layer backed by Gemini 3.5 Flash, with parallel agent execution, built-in testing, and a desktop app that looks suspiciously like Cursor.

The migration is consumer-only for now. Enterprise users still have support, but the writing is on the wall: **Google is betting everything on Antigravity as its agent surface.** The CLI is just the entry point — the real play is the four-layer stack (models → graph orchestration → ADK 2.0 → Agent2Agent protocol).

## Claude Fable 5: Here Today, Gone Tomorrow

Anthropic released Claude Fable 5 on June 9 as the publicly accessible version of its Mythos-class model. For about 72 hours, it was the most capable coding agent available — **outperforming Opus 4.8 on SWE-Bench Pro (80.3% vs 69.2%)** and handling multi-day autonomous coding tasks without hand-holding.

Then the U.S. government showed up. A global export control directive pulled Fable 5 offline around June 12. If you got access during that window, you saw what Mythos-level agents can do. If you didn't — well, the benchmarks don't lie, even if the model is gone.

{% include image.html src="/assets/images/2026-06-23-spacex-swallows-cursor-1.jpg" alt="Neon shield representing AI agent security governance" %}

## GitHub Copilot Desktop: Agent Control Plane

The GitHub Copilot desktop app went generally available mid-June for Windows, macOS, and Linux. This is not VS Code with a Copilot extension — it's a **standalone agent control plane** with isolated git worktrees, Agent Merge, and a canvas for human-agent collaboration.

Key features:
- **My Work view** — single dashboard for active sessions, issues, PRs, and background automations
- **Parallel sessions** — each agent runs in its own worktree, no collisions
- **Agent Merge** — review and merge agent work natively on GitHub
- **Three modes:** Interactive, Plan, and Autopilot

Microsoft Build announced it June 2, and it's already GA. The pace is absurd.

## Snyk Enters the Agent Security Wars

Today — June 23 — Snyk announced **Evo Agentic Development Security (ADS)**, a real-time governance layer for AI coding agents. GA is set for June 29.

The pitch: agents use MCP servers (supply chain risk), agents do things (behavior risk), and agents generate code (output risk). Evo ADS hooks into the execution loop with `PreToolUse` and `PostToolUse` callbacks, enforcing policies on every tool call.

**Why this matters:** as agents get more autonomous, security can't be a post-hoc scan. It has to live inside the loop. Snyk is first, but expect every security vendor to follow.

{% include image.html src="/assets/images/2026-06-23-spacex-swallows-cursor-2.jpg" alt="Terminal CLI with connected agent nodes representing multi-agent orchestration" %}

## The Bigger Picture

This week's pattern: **consolidation at the top, fragmentation at the edges.**

- SpaceX buys Cursor → vertical integration of the biggest name in agentic coding
- Google kills Gemini CLI → consolidation under Antigravity as the single agent surface
- Claude Fable 5 gets export-controlled → the most capable model is now a geopolitical asset
- GitHub Copilot desktop GA → the platform layer for managing multiple agents
- Snyk Evo ADS → the governance layer that enterprises will need before they scale agents

The indie/open-source coding agent community (Cline, Continue, Aider, OpenHands) is still thriving, but the gravity well is forming. When SpaceX owns the default agent and Google owns the platform layer, where does that leave the open-source alternatives?

**My take:** open-source agents will win on customization and privacy. But the money is flowing to platforms, not tools. Watch the next 90 days — there will be more acquisitions.

---

**Sources:**
- [Reuters: SpaceX to buy Anysphere for $60B](https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/)
- [Google Developers Blog: Antigravity CLI transition](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- [Anthropic: Claude Fable 5 and Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [GitHub Copilot app: agent-native desktop](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- [Snyk: Evo Agentic Development Security](https://snyk.io/news/snyk-launches-evo-agentic-development-security/)
