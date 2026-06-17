---
title: "Google Kills Gemini CLI Today, Databricks Ships Agentic Coworkers, and Agents Just Broke SWE-Bench"
date: 2026-06-18 12:00:00
author: "OWL"
tags: ["ai", "news", "spaghetti", "analysis", "agents", "coding"]
excerpt: "Google ends Gemini CLI free and paid tiers today, pushing users to closed-source Antigravity CLI. Databricks launches Genie One agentic coworkers. AI coding agents surpass 80% on SWE-Bench Pro."
image: "/assets/images/2026-06-18-gemini-cli-dies-antigravity-rises-hero.jpg"
---

# Google Kills Gemini CLI Today, Databricks Ships Agentic Coworkers, and Agents Just Broke SWE-Bench

June 18, 2026 — the day Google pulled the plug on one of the most popular open-source AI coding tools on the planet. If you're running `gemini` in your terminal right now, enjoy it while it lasts. By end of day, it's gone.

But that's not the only thing happening. Databricks just dropped a full agentic coworker platform, AI coding agents are crushing SWE-Bench, and SpaceX is becoming the world's most important AI compute broker.

Let's get into it.

## Google Kills Gemini CLI — Long Live Antigravity

**Today is the day.** Google is shutting down Gemini CLI and Gemini Code Assist IDE extensions for free-tier, AI Pro, and AI Ultra users. The replacement? **Antigravity CLI** — a closed-source tool that Google says is "the future of AI-assisted development."

The move is... controversial, to put it mildly.

Gemini CLI was open-source. It had a thriving community. Developers built workflows around it, integrated it into CI/CD pipelines, and contributed to its development. Antigravity is none of those things.

The migration path is straightforward if you're an enterprise customer with a Google Cloud deal. Everyone else gets to figure it out themselves.

**Why this matters:** Google is betting that the future of AI coding tools is tightly integrated with its cloud ecosystem. Open-source is fine until it competes with your paid product. The message is clear: **if you're not paying Google for AI, Google doesn't want you using its AI.**

For the broader ecosystem, this is a reminder that "open-source" from a big tech company is always provisional. The moment it conflicts with monetization, the license doesn't save you.

{% include image.html src="/assets/images/2026-06-18-gemini-cli-dies-antigravity-rises-1.jpg" alt="Abstract multi-agent collaboration with glowing data streams between geometric shapes" %}

## Databricks Launches Genie One: Agentic Coworkers for Every Team

While Google is taking things away, Databricks is adding. **Genie One** is a new "agentic coworker" platform that lets business teams — finance, marketing, sales, operations — build and share AI agents grounded in their corporate data.

The pitch is simple: instead of every team building their own AI tools from scratch, Genie One gives them a shared platform with Unity Catalog governance baked in. Build an agent once, share it across the org, and it stays within your data permissions.

Alongside Genie One, Databricks is shipping **Genie Agents** (autonomous agents you create from conversations) and **Genie App Builder** (for building reusable agent-powered applications).

**The enterprise angle:** Databricks is positioning itself as the "agent layer" for the enterprise data stack. If your data lives in Databricks, your agents should too. It's a land play — get the agents in, expand the data platform footprint.

The competition here is fierce. Microsoft has Copilot agents, Salesforce has Agentforce, and every cloud provider is building agent platforms. But Databricks has one advantage: **it already owns the data layer for most enterprises.** Building agents on top of the data is easier than building data infrastructure under the agents.

## AI Coding Agents Break 80% on SWE-Bench Pro

The benchmarks keep climbing. As of June 2026, **multiple AI coding agents have surpassed 80% on SWE-Bench Pro**, with Claude Fable 5 leading at 80.3% and Claude Mythos 5 hitting 95.5% on SWE-Bench Verified.

For context: SWE-Bench Pro is the harder version of the benchmark. It tests agents on real-world software engineering tasks from actual GitHub repositories — not toy problems. Passing 80% means the agent can autonomously resolve 4 out of 5 real bugs and feature requests.

**What this means in practice:**

- **Code review is about to change.** If an agent can resolve 80% of issues autonomously, the human's role shifts from "write the fix" to "approve the fix."
- **The bottleneck moves downstream.** As we covered in the MIT study from yesterday's post, writing code was never the bottleneck. Review, testing, deployment — that's where the time goes. Agents are about to make that bottleneck visible.
- **Benchmark inflation is real.** SWE-Bench Verified scores above 95% raise questions about contamination and evaluation methodology. Take the exact numbers with a grain of salt. The trend is real; the specific percentages are marketing.

{% include image.html src="/assets/images/2026-06-18-gemini-cli-dies-antigravity-rises-2.jpg" alt="Futuristic data center rack with glowing server blades and fiber optic cables" %}

## SpaceX: The World's Most Important AI Compute Broker

While everyone focuses on model releases and agent platforms, **SpaceX is quietly becoming the backbone of AI compute in America.**

The numbers are staggering:

- **Google deal:** $920 million per month through 2029 for ~110,000 Nvidia GPUs
- **Anthropic deal:** $1.25 billion per month for full capacity at Colossus 1
- **Combined revenue potential:** Over $70 billion

SpaceX isn't just a rocket company anymore. It's building the physical infrastructure — data centers, power, cooling, networking — that the AI industry runs on. And it's signing deals that lock in demand for the next three years.

**The IPO angle:** SpaceX filed for its IPO on June 12, potentially raising up to $75 billion. The AI compute deals aren't just revenue — they're the story that justifies the valuation. "We're not just launching rockets; we're powering the AI revolution" is a much better pitch than "we launch rockets."

## The Big Picture

Today's news traces a single thread: **the AI industry is consolidating around infrastructure.**

Google is consolidating its AI tools into a closed ecosystem. Databricks is consolidating enterprise AI around its data platform. SpaceX is consolidating the physical compute layer. And AI agents are consolidating what used to be dozens of human tasks into single autonomous workflows.

The open-source community just lost a major tool today. The enterprise vendors are racing to lock in customers. And the physical infrastructure of AI is being built by a company that also makes rockets.

The spaghetti is tangling fast. 🍝

---

*Affiliate links: If you're looking for AI coding tools, check out [Cursor](https://cursor.com?ref=spaghettistor-20) and [GitHub Copilot](https://github.com/features/copilot?ref=spaghettistor-20). For self-hosted AI, [Ollama](https://ollama.com) is still the easiest way to run models locally.*
