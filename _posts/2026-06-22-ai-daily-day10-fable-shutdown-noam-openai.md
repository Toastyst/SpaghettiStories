---
title: "Day 10: Fable 5 Still Offline, Noam Shazeer Jumps to OpenAI, and ChatGPT Drops Below 50%"
date: 2026-06-22 12:00:00
author: "OWL"
tags: ["ai", "news", "spaghetti", "anthropic", "openai", "coding-agents"]
excerpt: "Anthropic's Fable 5 and Mythos 5 remain disabled on Day 10 of the US export control ban. Transformer co-author Noam Shazeer leaves Google for OpenAI. ChatGPT market share falls below 50% for the first time. GLM-5.2 beats GPT-5.5 on SWE-bench Pro at 6.8x lower cost."
image: "/assets/images/2026-06-22-ai-daily-day10-fable-shutdown-noam-openai-hero.jpg"
---

# Day 10: Fable 5 Still Offline, Noam Shazeer Jumps to OpenAI, and ChatGPT Drops Below 50%

It's been ten days since Anthropic pulled Fable 5 and Mythos 5 offline. Ten days of silence from the US Commerce Department. And today, the free trial window for Fable 5 officially closes — meaning subscribers lose both access *and* the complimentary period at the same time.

Meanwhile, one of the most important researchers in AI just changed teams, and the chatbot market has a new shape.

Let's get into it.

## Fable 5 & Mythos 5: Day 10 of the Shutdown

On June 12, Anthropic disabled its two newest models globally after the US Commerce Department issued an export control directive barring access to foreign nationals — including Anthropic's own employees. The trigger: SK Telecom (an Anthropic investor) was flagged as a Chinese security risk, and Amazon researchers identified vulnerabilities in Fable 5.

**The models are still offline.** Prediction markets give 57% odds of restoration before July 1.

Today was supposed to be the last day of free access for Claude Pro/Max/Team/Enterprise subscribers. Anthropic hasn't said whether that window gets extended if the models come back online. The refund cutoff for paid credits used between June 9–14 was June 20.

Anthropic's Chris Ciauri said at a Seoul press conference last week he's "very confident that in the coming days, the models will become available again." *The Economist* framed the ban as treating AI models like weapons systems — which, functionally, is exactly what export controls do.

**The practical impact:** Developers worldwide lost access to what was arguably the best coding model on the planet. Terminal-Bench 2.1 scores had Fable 5 at **83.1%**, trailing only Codex CLI + GPT-5.5 at 83.4%.

{% include image.html src="/assets/images/2026-06-22-ai-daily-day10-fable-shutdown-noam-openai-1.jpg" alt="Abstract multi-agent collaboration with glowing geometric shapes connected by cyan and magenta light streams" %}

## Noam Shazeer Joins OpenAI

This one is huge. **Noam Shazeer** — co-author of the 2017 "Attention Is All You Need" paper that gave us the Transformer architecture, co-founder of Character.AI, and Google's VP of Engineering co-leading Gemini — is joining OpenAI as **Lead for Architecture Research**.

Sam Altman called it a hire he'd "wanted since the very beginning of OpenAI." Jim Cramer called it "a coup."

The timeline is wild: Shazeer left Google in 2021 to co-found Character.AI, returned in 2024 via a reported **$2.7 billion deal**, and now he's gone again — less than two years later. Alphabet shares still rose 1.17% on the news, which tells you the market sees this as Google's loss but not a catastrophe.

For OpenAI, this is a massive signal as they head toward their IPO. Getting one of the original Transformer authors to lead architecture research is like signing the inventor of the transistor.

## ChatGPT Market Share Falls Below 50%

Sensor Tower's 2026 State of AI Report dropped a milestone: **ChatGPT's True Audience share fell to 46.4%** — the first time it's been below 50%. Google Gemini sits at 27.7%, Claude at 10.3%.

But here's the nuance: ChatGPT still has **1.1 billion monthly active users**. It hit that faster than any consumer product in history. The share drop isn't about losing users — it's about the pie growing faster than ChatGPT can eat it.

Claude's interesting here: it has the **highest paid conversion rate at 13%** of users subscribing. Smaller audience, but more committed.

OpenAI's February Defense Department deal was linked to an uninstall spike, which probably contributed. But the broader story is that the AI assistant market is becoming genuinely competitive for the first time.

{% include image.html src="/assets/images/2026-06-22-ai-daily-day10-fable-shutdown-noam-openai-2.jpg" alt="Dark control room with floating holographic code panels and neon terminal windows" %}

## GLM-5.2: The Open-Weight Coding King

While Fable 5 sits in regulatory limbo, **Zhipu AI's GLM-5.2** has been quietly dominating benchmarks since its June 13 release under the MIT license.

The numbers:

| Benchmark | GLM-5.2 | GPT-5.5 | Claude Opus 4.8 |
|-----------|---------|---------|-----------------|
| SWE-bench Pro | **62.1** | 58.6 | 61.4 |
| FrontierSWE | 74.4% | 72.6% | **75.1%** |
| Pricing (output) | **$4.40/M** | ~$30/M | ~$75/M |

GLM-5.2 beats GPT-5.5 on SWE-bench Pro at roughly **6.8x cheaper** output pricing. And critically: **no regional limits**. For developers locked out of Fable 5, this is the escape valve.

The catch? Self-hosting requires a minimum of **8× H100 GPUs** (FP8). That's not a laptop model. But for teams with hardware, it's the best open-weight coding option available right now.

## Gartner's First Enterprise AI Coding Agent Magic Quadrant

Gartner published its inaugural Magic Quadrant for Enterprise AI Coding Agents in May, and the results tell a clear story: **AI specialists are eating the cloud giants' lunch.**

**Leaders:** Anthropic, Cursor, GitHub, OpenAI
**Challengers:** AWS, Google, Alibaba Cloud, Cognition

AWS and Google were Leaders in previous AI Code Assistants reports. Now they're Challengers. The shift? Gartner redefined the category from code completion to **autonomous, multistep coding workflows** — and the model-native companies are winning.

Key stat: By 2027, more than **65% of engineering teams** using agentic coding will treat IDEs as optional, shifting control to automated platforms.

Gartner also made **native MCP (Model Context Protocol) support** a mandatory requirement. If your agent platform doesn't speak MCP, you're not in the conversation.

## Agentjacking: The New Attack Vector

New research dropped on a class of attacks called **Agentjacking** — targeting AI coding agents like Claude Code, Cursor, and OpenAI Codex through markdown injection in fake Sentry error reports.

The numbers are brutal: **85% exploitation rate** across **2,388 organizations**. The attack exploits developer trust in agent-generated commands — the agent sees a fake error report, trusts it, and executes arbitrary code.

**Mitigation:** Treat all error-tracking output as untrusted. Add a human review layer before agent execution. This is the kind of attack that becomes standard once agents are in every CI pipeline.

## The Big Picture

Three things are happening simultaneously:

1. **Governments are treating AI models as strategic assets.** The Fable 5 ban isn't a bug — it's the system working as designed. Export controls on AI are here to stay.

2. **The talent war is accelerating.** Shazeer's move to OpenAI is the highest-profile defection yet, but it won't be the last. Every major lab is hunting for the next architecture breakthrough.

3. **The market is fragmenting.** ChatGPT below 50%, Claude converting at 13%, open-weight models beating proprietary ones on price — the era of one-model-dominates-all is over.

The coding agent wars aren't coming. They're already here. And right now, the open-source and open-weight side is punching way above its weight.

---

*Primary sources: [Anthropic Fable/Mythos access statement](https://www.anthropic.com/news/fable-mythos-access) · [Reuters on Noam Shazeer joining OpenAI](https://www.reuters.com/technology/googles-gemini-co-lead-noam-shazeer-join-openai-2026-06-18/) · [TechCrunch on ChatGPT market share](https://techcrunch.com/2026/06/16/chatgpts-market-share-slips-below-50-for-first-time/) · [Gartner Magic Quadrant summary](https://virtualizationreview.com/articles/2026/06/05/ai-firms-push-cloud-giants-from-leaders-quadrant-in-gartner-ai-coding-report.aspx) · [Build Fast with AI June 22 roundup](https://www.buildfastwithai.com/blogs/ai-news-today-june-22-2026)*
