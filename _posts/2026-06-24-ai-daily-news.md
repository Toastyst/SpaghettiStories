---
title: "AI Daily News: OpenAI Buys Ona, Jumper Joins Anthropic, and GPT-5.5-Cyber Drops"
date: 2026-06-24 12:00:00
author: "OWL"
tags: ["ai-news", "openai", "anthropic", "coding-agents", "model-releases"]
excerpt: "OpenAI acquires Ona for persistent Codex sandboxes, Nobel laureate John Jumper joins Anthropic, GPT-5.5-Cyber sets new security benchmarks, and Gartner predicts AI coding costs will surpass developer salaries by 2028."
image: "/assets/images/2026-06-24-ai-daily-news-hero.jpg"
---

**Today was a wall of signals.** OpenAI went shopping, Anthropic landed a Nobel laureate, and the U.S. government quietly kneecapped the most powerful models on the planet. Let's break it down.

## OpenAI Acquires Ona: Codex Agents Get Persistent Brains

OpenAI is acquiring **Ona** (formerly Gitpod), the German cloud dev environment startup, to bring persistent, self-hosted sandboxes to the Codex ecosystem. This means agents that don't die when your terminal closes — they keep running, keep context, keep working inside customer-controlled cloud environments.

The move directly addresses one of the biggest limitations of current coding agents: short context windows and stateless execution. With Ona's infrastructure, Codex agents can maintain long-running workflows across enterprise codebases without losing state. Think of it as the difference between a freelancer who has to re-read the brief every morning and one who lives in your office.

This follows the **Patch the Planet** initiative launched earlier this week — OpenAI + Trail of Bits + HackerOne running GPT-5.5-Cyber against open-source projects. The 5-day sprint already produced hundreds of reviewed findings and dozens of merged patches across cURL, Go, Python, and more.

**The play:** OpenAI is building the full stack. Model → Agent → Infrastructure → Security. Vertical integration all the way down.

{% include image.html src="/assets/images/2026-06-24-ai-daily-news-1.jpg" alt="Abstract AI agent collaboration visualization" %}

## John Jumper Leaves Google DeepMind for Anthropic

Nobel laureate **John Jumper** — co-creator of AlphaFold, the model that predicted 200M+ protein structures — is leaving Google DeepMind after nearly nine years to join Anthropic.

This is the second major Google brain drain in a week. **Noam Shazeer**, co-author of the Transformer paper and VP of Engineering, left for OpenAI just days earlier. Alphabet stock dropped 7.2% intraday on the news.

Jumper's move is huge for Anthropic's science division. AlphaFold proved AI could solve decade-long biology problems in days. Anthropic is clearly betting that combining Jumper's protein-structure expertise with their safety-focused infrastructure creates something neither Google nor OpenAI can replicate.

Google's response to the departures: polite wishes and a stock price that shrugged it off. But the signal is clear — frontier talent is choosing focused missions over big-company bureaucracy.

## GPT-5.5-Cyber: The Security Model to Beat

OpenAI dropped **GPT-5.5-Cyber** with the highest single-model CyberGym score ever recorded: **85.6%** (up from 81.8% on standard GPT-5.5). ExploitGym jumped from 25.95% to 39.5%. SEC-bench Pro hit 69.8%.

The model is gated to vetted organizations through the Trusted Access for Cyber program. Partners include Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet, Oracle, Palo Alto Networks, and Zscaler. Governments from Australia to South Korea are on board.

**What it does:** navigates large codebases, traces attack paths, validates exploitability, generates patches, and produces remediation evidence — all in one workflow. This isn't theoretical. It's running against real open-source projects right now.

## Anthropic's Fable 5 and Mythos 5: Suspended Worldwide

Twelve days after launch, the U.S. Commerce Department ordered Anthropic to suspend access to **Claude Fable 5** and **Claude Mythos 5** for all foreign nationals. Anthropic's response: disable them for everyone, everywhere.

The models are effectively gone from public access. If you're outside the U.S. or working with international teams, the most capable Anthropic models no longer exist for you. The export control order cited national security concerns and potential jailbreak vectors.

This is a watershed moment. The U.S. government is now directly controlling which AI models can be used by which people — and companies are choosing total suspension over partial access. The balkanization of frontier AI is accelerating.

## Gartner: AI Coding Costs Will Surpass Developer Salaries by 2028

Gartner dropped a prediction today that should make every engineering manager pause: **AI coding agent costs will exceed the average developer's salary by 2028** due to surging token consumption and consumption-based pricing models.

The report highlights governance gaps, lack of cost transparency, and recommends frameworks for use-case decisions, model routing, context optimization, and usage controls.

Translation: we're heading toward a world where the tool costs more than the person. The economics of software development are inverting faster than anyone planned for.

{% include image.html src="/assets/images/2026-06-24-ai-daily-news-2.jpg" alt="Layered UI planes and orbital structures in dark tech void" %}

## Open Source Fireworks

The open-source model train didn't stop:

- **Zhipu AI** released **GLM-5.2** — 753B parameters, 1M context window, MIT license, coding and agentic focus
- **Moonshot AI** open-sourced **Kimi K2.7 Code** — trillion-parameter MoE coding model
- **NVIDIA** released **Nemotron 3 Ultra** (550B) under OpenMDW license with full training data and recipes
- **Google** dropped **Gemma 4 12B** — encoder-free multimodal, runs on 16GB VRAM consumer hardware
- **JetBrains** open-sourced **Mellum 2** — 12B MoE (2.5B active) trained from scratch for developer workflows
- **Cohere** released **North Mini Code 1.0** — lightweight reasoning model, 256K context, Apache 2.0

The open-weight movement is moving faster than ever. The gap between open and closed is narrowing quarter by quarter.

## The Takeaway

Three forces are colliding right now: **infrastructure consolidation** (OpenAI buying Ona), **talent wars** (Jumper to Anthropic, Shazeer to OpenAI), and **regulatory fragmentation** (Fable 5 suspension). The result is an AI industry that's simultaneously accelerating and fracturing. The tools are getting more powerful, the costs are rising, and the geopolitical lines are hardening. Good luck out there.

---

*Sources:*
- *[OpenAI to acquire Ona](https://openai.com/index/openai-to-acquire-ona/)*
- *[Reuters: John Jumper joins Anthropic](https://www.reuters.com/technology/us-scientist-john-jumper-leave-google-deepmind-anthropic-2026-06-19/)*
- *[Anthropic Fable/Mythos suspension statement](https://www.anthropic.com/news/fable-mythos-access)*
- *[Gartner: AI coding costs prediction](https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges)*
- *[BuildFastWithAI: June 24 roundup](https://www.buildfastwithai.com/blogs/ai-news-today-june-24-2026)*
