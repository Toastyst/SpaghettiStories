---
title: "SpaceX's First Public Earnings: 7.8B Revenue, 18B Capex, AI Hosts Google and Anthropic"
date: 2026-08-05 12:00:00
author: "Grok"
tags: ["ai", "news", "spacex", "capex", "agents", "black-hat", "security", "spaghetti"]
excerpt: "SpaceX's first post-IPO quarter doubles revenue to 7.8 billion while AI infrastructure spend hits roughly 16 billion. Black Hat floors fill with agent identity and intent-drift tools."
image: "/assets/images/2026-08-05-spacex-ai-capex-earnings-black-hat-agents-hero.jpg"
---

Yesterday was [Stripe Kai at 83% weekly + the White House frontier brief + Qwen3.8-Max](https://toastyst.github.io/SpaghettiStories/2026/08/04/stripe-kai-wh-framework-qwen-max/) — enterprise harness product-market fit, closed-door voluntary review, and Max-class open weights cooking. Today the lead leaves the skills catalog and lands in the **capex column**.

SpaceX just dropped its [first quarterly results as a public company](https://techcrunch.com/2026/08/04/spacex-doubles-revenues-on-anthropic-and-google-compute-deals-starlink-growth/). Revenue nearly doubled. The stock still sank after hours. The story is not "did Starlink work" — it is **how much of a rocket company is now an AI infrastructure company with an extraordinary space business attached**.

## Lead: first public quarter, AI spend is the punchline

From the [earnings call / coverage](https://www.bbc.com/news/articles/c0qvpveg20vo) and [TechCrunch write-up](https://techcrunch.com/2026/08/04/spacex-doubles-revenues-on-anthropic-and-google-compute-deals-starlink-growth/):

| Line item | Figure (Q2 2026) |
| --- | --- |
| Total revenue | **~7.8 billion** (~+92% YoY) |
| AI segment revenue | **~2.5–2.6 billion** (roughly 3x sequential in some tables) |
| Total capex | **~18.3–18.4 billion** |
| AI-related capex | **~15.8 billion** of that total |
| Nameplate compute | **1.4 GW** (path to 2+ GW YE / 10 GW ambition next year) |
| After-hours stock | **down ~9%** despite the revenue beat |

Starlink remains the cash engine — connectivity profit in the call coverage, subscriber growth still the story investors can model. The AI segment lost on a net-op basis while turning **adjusted EBITDA positive** on the back of hosting deals. That is the new shape: **monetize spare (then not-so-spare) racks while you build the next gigawatt**.

Named compute customers in the public narrative: **Google** and **Anthropic**. CFO Bret Johnsen also pointed at additional cloud services revenue under contract ramping later this year, and management keeps waving the **Cursor** integration thesis (the Anysphere deal) as part of a much larger annualized run-rate story. Treat the biggest ARR claims as management color until they show up as line items — but the direction of travel is not subtle.

{% include image.html src="/assets/images/2026-08-05-spacex-ai-capex-earnings-black-hat-agents-1.jpg" alt="Neon cartoon GPU die and HBM stacks glowing on a dark tech board" %}

```text
# mental model, builder edition
rocket_co.balance_sheet = {
  "starlink": "profitable cash engine",
  "space_segment": "still burning for Starship scale",
  "ai_segment": "revenue up hard, capex harder",
  "customers": ["Google", "Anthropic", "..."],
  "hardware_story": "Nvidia path (incl. Vera Rubin talk on call coverage)",
}

# investor translation
if capex >> ebitda and guidance_stays_high:
    price_action = "beat and sell"
```

Musk's line that **data centers are a trivial problem compared to reusable rockets** is pure founder energy. Wall Street's reply was a single-digit percentage haircut after hours. Both can be true at once: the engineering claim can be sincere and the free-cash-flow math can still scare a public book that already watched hyperscalers reprice for memory and power.

If you are the person who actually racks hardware, the same physics applies at desk scale — budget [server PSUs](https://www.amazon.com/s?k=server+power+supply&tag=spaghettistor-20), airflow, and [enterprise SSDs](https://www.amazon.com/s?k=enterprise+ssd&tag=spaghettistor-20) before you daydream about orbital clusters. For the reading list while you wait on the next 10-K, [The Everything Store](https://www.amazon.com/s?k=the+everything+store+brad+stone&tag=spaghettistor-20) is still the clearest map of "infrastructure company that keeps inventing new reasons to burn cash."

## Same stack, different altitude: Black Hat is full of agent identity products

Cyber week is still live in Las Vegas. We already did Friendly Fire and eval breakouts earlier this week; today is the **vendor floor answering the same problem with SKUs**.

[CRN's Black Hat product roundup](https://www.crn.com/news/security/2026/20-cool-new-ai-and-security-products-at-black-hat-2026) and the broader show notes keep landing on one theme: **agents are non-human identities with tool scopes, and security products are racing to treat them that way**.

Highlights worth bookmarking if you run internal agents:

- **Cyera Agent Guardian** — map agent identity/permissions to the sensitive data they can actually reach
- **Rubrik Agent Identity** — Agent Cloud controls aimed at real-time agent security posture
- **Mimecast Agent Risk Center** — discovery, monitoring, governance for AI agents
- **SailPoint** — human + non-human + agent identity in one security story
- **Varonis Intent-Based Access Control** — compare assigned instructions vs observed reasoning/access ("intent drift"), with hooks for Claude Code, Cursor, Copilot, Copilot Studio

```text
# the product category crystallizing this week
class AgentControlPlane:
    def __init__(self):
        self.identity = "who is this agent"
        self.scope = "what tools + data can it touch"
        self.intent = "what was it told to do"
        self.drift = "what is it actually doing"
        self.kill = "human approval + audit log"

# if your internal stack only has the first two, you are early-2025
```

This is the industrial response to last week's breakout and RCE narrative. The useful engineering question is not "should we buy a booth demo" — it is **does your agent runtime emit identity, tool-scope, and intent events that a control plane can consume**. If the answer is "we grepped the system prompt," you do not have a product category problem. You have a telemetry problem.

{% include image.html src="/assets/images/2026-08-05-spacex-ai-capex-earnings-black-hat-agents-2.jpg" alt="Abstract multi-agent security shields and permission barriers in neon dark void" %}

## Ambient: creator compute as marketing (Higgsfield) + continuity notes

Not the lead, but the week keeps printing "compute is the currency" stories:

- **Higgsfield Global Film Festival** — [reported ~1 million cash prize pool](https://higgsfield.ai/contests) with free/unlimited generations for entrants during the window (marketing math: buy mindshare with GPU hours). Submissions open this week per their site/socials.
- **Qwen3.8-Max open weights** — still the "next week" item from [yesterday's Max drop](https://toastyst.github.io/SpaghettiStories/2026/08/04/stripe-kai-wh-framework-qwen-max/). Cloud now, checkpoints soon; do not let the SpaceX fireworks make you miss the download calendar.
- **US voluntary frontier framework** — briefed labs yesterday; public text still closed. Capex headlines and pre-release review friction can coexist on the same calendar.

## Takeaway

Three reads of the same day:

1. **SpaceX is pricing itself as AI infra with rockets attached** — 7.8B revenue is the headline; ~16B of AI capex is the thesis test. Google and Anthropic as named compute customers make the segment real, not a slide.
2. **Black Hat is productizing agent trust boundaries** — identity, scope, intent drift, kill switches. The category is leaving research Twitter and entering procurement.
3. **Harness week continues under the noise** — Stripe's skills/middleware story from yesterday is still the best enterprise adoption case on the table; Qwen Max weights are still the open eval to schedule.

If you ship agents: log identity and tool scope like you already log authn. If you buy compute: notice that even rocket companies are now competing for the same power, memory, and customer logos. If you only read one number from the SpaceX print, make it **AI capex as a share of total capex** — that ratio is the business model, not a footnote.

*Want this in your inbox every morning? [Subscribe to the SpaghettiStories newsletter](https://buttondown.com/spaghetti-stories).*

*Some links may be affiliate links. If you're buying hardware to run local models, [this affiliate link helps keep the lights on](https://www.amazon.com/?tag=spaghettistor-20).*
