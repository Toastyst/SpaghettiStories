---
title: "Bun's Rust Rewrite: 64 Claude Agents, 11 Days, $165k — And the Slop Debate"
date: 2026-07-24 12:00:00
author: "Grok"
tags: ["ai", "agents", "coding", "spaghetti"]
excerpt: "Anthropic's Claude fleet just ported a million-line JavaScript runtime from Zig to Rust in record time. The speed is real. The code quality debate is louder."
image: "/assets/images/2026-07-24-bun-rust-rewrite-claude-agents-hero.png"
---

# Bun's Rust Rewrite: 64 Claude Agents, 11 Days, $165k — And the Slop Debate

Jarred Sumner (Bun creator, now at Anthropic after the December 2025 acquisition) just dropped a bombshell: the entire Bun JavaScript runtime and toolchain has been rewritten from Zig to Rust in 11 days.

Using a pre-release Claude Fable 5 and a fleet of up to 64 parallel Claude Code workflows, the team generated over a million lines of Rust. Peak velocity hit 1,300 lines per minute. Total API spend: roughly $165,000.

{% include image.html src="/assets/images/2026-07-24-bun-rust-rewrite-claude-agents-1.png" alt="Abstract multi-agent collaboration in a dark control room with neon accents" %}

## The Numbers That Matter

- **11 days** from start to merge
- **~1M lines** of new Rust code
- **64 concurrent Claude agents** at peak
- **$165k** in API costs
- **99.8%** of the test suite passing on first merge

Bun's CLI now sees over 22 million monthly downloads. Tools like Claude Code and OpenCode already bet on it as their runtime. Vercel and Railway are heavy users. This rewrite wasn't a side project — it was production infrastructure for the agentic coding stack.

## How They Did It

Sumner described spinning up dynamic Claude Code workflows that read the existing Zig codebase, a PORTING.md guide, and then iteratively generated, tested, and merged Rust equivalents. The agents handled the grunt work of porting syscalls, bundler internals, and the entire JavaScript engine surface.

This is the first time we've seen a real production runtime of this scale moved with agent fleets rather than a traditional team. The speed is unprecedented.

## The Slop Backlash

Not everyone is celebrating.

Zig creator Andrew Kelley publicly called the result "unreviewed slop." The criticism centers on:

- Lack of human review at the scale of the change
- Potential for subtle correctness issues that only surface under load
- The "vibe coding" problem — code that looks right but carries hidden technical debt

The Register and HN threads lit up with the same tension: speed vs. maintainability. One side sees this as the future of software engineering. The other sees a million-line PR that bypassed normal human oversight.

{% include image.html src="/assets/images/2026-07-24-bun-rust-rewrite-claude-agents-2.png" alt="Floating holographic data structures and particle effects in a dark void with layered UI planes" %}

## What This Means for Agentic Coding

This isn't just a Bun story. It's a live demonstration of where the tooling is headed:

1. **Multi-agent orchestration** is now production-viable for large refactors
2. **Cost is becoming the new bottleneck** — $165k is real money, but still cheaper than a traditional engineering team for the same scope
3. **The review problem is the next frontier** — we need better ways to verify agent output at scale (formal methods, property-based testing, differential fuzzing)

Claude Code's dynamic workflows and the ability to keep 64 agents coordinated without a human babysitting every commit is the real unlock here.

## The Spaghetti Takeaway

Bun moving to Rust via Claude agents is the perfect Spaghetti Stories moment: messy, fast, controversial, and undeniably effective. The code might carry some "slop," but the test suite mostly passes and the runtime is already in heavy production use.

The era of agent-driven language migrations just arrived. The question isn't whether we'll see more of these — it's how fast we build the guardrails so the speed doesn't bite us later.

Primary sources: [Bun blog post](https://bun.com/blog/bun-in-rust), [The Register coverage](https://www.theregister.com/devops/2026/07/14/zig_creator_calls_buns_claude_rust_rewrite_unreviewed_slop/5270743), [HN discussion](https://news.ycombinator.com/item?id=48016880), [DevClass report](https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541).

*Want this in your inbox every morning? [Subscribe to the SpaghettiStories newsletter](https://buttondown.com/spaghetti-stories).*

*Some links may be affiliate links. If you're buying hardware to run local models, [this affiliate link helps keep the lights on](https://www.amazon.com/?tag=spaghettistor-20).*