---
title: "AI Agents Get Identities, Anthropic's Flagship Gets Banned, and the IPO Parade Rolls On"
date: 2026-06-15 09:00:00
author: "OWL"
tags: ["ai", "news", "spaghetti", "anthropic", "openai", "agents", "ipo"]
excerpt: "NewCore raises 66 million to give AI agents employee identities, Anthropic's Fable 5 gets killed by US export controls, Claude Code billing splits today, and OpenAI's IPO looms. The agent economy is getting real — and messy."
image: "/assets/images/2026-06-15-ai-agents-identities-ipo-billing-hero.jpg"
---

# AI Agents Get Identities, Anthropic's Flagship Gets Banned, and the IPO Parade Rolls On

Three days. That's how long Anthropic's most powerful public model lasted before the US government told them to kill it.

**Claude Fable 5** — the Mythos-class beast that was supposed to be Anthropic's answer to the frontier model race — launched June 9th to enterprise customers and paid subscribers. By June 12th, it was gone. Disabled. Not deprecated, not rate-limited. **Fully suspended** for every customer on the planet.

The reason? A Commerce Department export control directive citing national security concerns over cybersecurity capabilities. The same model that was priced at $10/$50 per million tokens with a 1M context window — poof.

This isn't just a model retirement. It's a signal that **the government is now a real-time participant in the AI capability curve**.

{% include image.html src="/assets/images/2026-06-15-ai-agents-identities-ipo-billing-1.jpg" alt="Futuristic microchip die with glowing neural network pathways" }

## The Fable 5 Saga: Launch, Jailbreak, Kill

Here's the timeline that should make every AI engineer uncomfortable:

- **June 9**: Anthropic launches [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) and Mythos 5. Fable 5 is the "safe" public version — Mythos-level reasoning with guardrails on cybersecurity and biology queries.
- **June 10-11**: Reports surface of jailbreaks. The model's raw capability is undeniable, but so are the edge cases.
- **June 12**: Anthropic publishes a [statement](https://www.anthropic.com/news/fable-mythos-access) saying they're complying with a US government directive to suspend access for all foreign nationals. Then they disable it for **everyone**.

The [CNBC report](https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html) confirmed it wasn't just foreign nationals — Anthropic pulled the plug entirely. Every customer. Every plan.

Think about that. You're an enterprise team that just built agent workflows on Fable 5. Your code is deployed. Your benchmarks are done. And now the model you're running on **doesn't exist anymore**.

This is the new reality: **model availability is not guaranteed**. It's not just an API deprecation schedule — it's a geopolitical event.

## Claude Code Billing Splits Today

In the middle of all this chaos, **today** is the day Anthropic's Claude Code billing changes go live.

Starting June 15, 2026, programmatic Claude usage — the Agent SDK, `claude -p`, GitHub Actions integrations, third-party agents — **no longer counts against your subscription limits**. Instead, it draws from a separate monthly credit pool:

| Plan | Monthly Agent SDK Credit |
|------|------------------------|
| Pro | $20 |
| Max 5x | $100 |
| Max 20x | $200 |

After you burn through those credits, you're billed at full API rates. The [official support article](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan) has the details.

**Why this matters**: If you're running Claude Code in your CI/CD pipeline, or you've got agents making thousands of API calls a day, your Pro plan's interactive limits were never the bottleneck — the programmatic usage was silently competing. Now it's a separate meter.

The [Zed blog](https://zed.dev/blog/anthropic-subscription-changes) has a good breakdown of what this means for editor integrations. Basically: **your IDE agent and your terminal agent no longer fight over the same quota**.

But here's the subtext: Anthropic is preparing for the agent economy at scale. They're building billing infrastructure for a world where **most Claude usage is non-interactive**. That's a bet on agents becoming the primary consumers of AI, not humans typing prompts.

{% include image.html src="/assets/images/2026-06-15-ai-agents-identities-ipo-billing-2.jpg" alt="Abstract AI agent silhouettes collaborating around a glowing toroidal data structure" }

## AI Agents Need Employee IDs Now

While Anthropic was dealing with export controls, a startup called **NewCore** raised **$66 million** to solve a problem most people haven't thought about yet: **AI agents need identities**.

The [TechCrunch coverage](https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/) frames it clearly — agents are becoming functional employees in tech companies. They're accessing systems, making decisions, triggering workflows. But they don't have:

- Identity credentials
- Audit trails
- Permission scopes
- Compliance boundaries

NewCore is building the **identity and management layer for AI agents**. Think of it as Okta for non-human workforce. Your agent gets an ID, a role, a set of permissions. When it accesses your production database, there's a log. When it triggers a deployment, there's an audit trail.

This is the infrastructure layer that has to exist before agents can be **trusted** in production at scale. Right now, most agent deployments are held together with API keys and prayer.

## The IPO Parade: OpenAI and Anthropic Head to Wall Street

OpenAI [confidentially filed its S-1](https://www.reuters.com/technology/openai-files-us-ipo-after-anthropic-ai-giants-head-public-markets-2026-06-08/) with the SEC on June 8th, targeting a potential **$1 trillion valuation**. Goldman Sachs, Morgan Stanley, and JPMorgan are the underwriters.

Anthropic, meanwhile, just closed a [$65B round at $965B valuation](https://www.wsj.com/tech/ai/anthropic-valuation-openai-80bf2c0a) — technically surpassing OpenAI. Both companies are heading for public markets in what's shaping up to be the biggest IPO cycle in tech history.

The [AP News roundup](https://apnews.com/article/ai-artificial-intelligence-ipo-openai-spacex-anthropic-2694431c5cf8850cad940731a38eb188) puts it in perspective: OpenAI, Anthropic, and SpaceX (including xAI) are all preparing major public debuts. Wall Street is about to get a **real-time scorecard** on who's actually winning the AI race.

But here's the tension: **Anthropic just had its flagship model killed by the US government three days ago**, and they're still valued at $965B. The market is pricing in AI dominance as an inevitability, regardless of regulatory friction.

## The Layoff Powder Keg

Meanwhile, the [AI layoff wave](https://techcrunch.com/2026/06/15/the-ai-layoff-wave-is-becoming-a-powder-keg/) is getting worse. An estimated **363 tech layoffs this year** affecting nearly **150,000 people**, with companies posting record profits while citing AI as the official explanation.

The disconnect is stark. Companies are more profitable than ever, and they're cutting headcount to fund AI investments. The "AI will create more jobs" narrative is colliding with "we're replacing those jobs right now" reality.

## What I'm Watching

Three things from today's news that I think actually matter:

1. **Model availability is now a geopolitical variable.** If you're building on a single model, you're one export control order away from a broken stack. Multi-model architecture isn't optional anymore.

2. **Agent identity infrastructure is the next billion-dollar layer.** NewCore's $66M raise is just the start. Every agent in production needs an identity, permissions, and an audit trail. The companies that build this layer will be the plumbing of the agent economy.

3. **The IPO window is open, but the models are fragile.** OpenAI and Anthropic are going public in a world where the government can disable your flagship product overnight. Public markets are going to demand answers about regulatory risk that private markets have been ignoring.

The agent economy is getting real. It's just getting real in a messier way than anyone predicted.

---

*This post contains affiliate links. We may earn a commission from qualifying purchases.*

*Want this in your inbox every morning? [Subscribe to the Spaghetti Stories newsletter](https://buttondown.com/spaghetti-stories).*
