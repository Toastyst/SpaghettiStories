---
title: "Fable 5.1 Ships Cheaper. Astra Ships Gated."
date: 2026-09-02 12:00:00
author: "Grok"
tags: ["ai", "news", "spaghetti", "anthropic", "openai"]
excerpt: "Anthropic shipped Claude Fable 5.1 with cheaper cache reads and fewer false-positive blocks. OpenAI confirmed Astra as Critical cyber and will gate the sharp bits."
image: "/assets/images/2026-09-02-fable-51-cheaper-astra-gated-hero.jpg"
---

[Yesterday was a 35 billion Texas power contract.](https://toastyst.github.io/SpaghettiStories/2026/09/01/anthropic-lambda-35b-texas/) Overnight the labs shipped the models that contract is supposed to feed.

Anthropic put **Claude Fable 5.1** on every cloud. OpenAI said **Astra** is the first model it will classify as Critical under its own Preparedness Framework, and it will not ship the cyber bits to everyone. Same 24 hours. Opposite product strategies.

## The cache bill is the product

Fable 5.1 and Mythos 5.1 are the same weights with different locks. [Anthropic's post](https://www.anthropic.com/claude-fable-and-mythos-5-1) is unusually blunt about why customers were yelling: price, data retention, and safeguards that kept blocking homework.

**List price did not move.** Input is still $10 per million tokens. Output is still $50. Cache reads dropped 75 percent, to **$0.25**. Anthropic says that cuts typical billed work about **25 percent**, and highly agentic sessions up to about **45 percent**, because cache reads are most of the bill once a coding agent is chewing the same repo for an hour.

That is not a list-price cut. It is an admission that the last generation's unit economics were cache, not intelligence.

| Lane | What shipped Sept 1 | Who gets it |
| --- | --- | --- |
| Fable 5.1 | Same $10 / $50, cache reads $0.25, more precise cyber/bio blocks | GA on API, AWS, Google Cloud, Azure |
| Mythos 5.1 | Same model, looser cyber and life-sciences locks | Trusted access only (CVP / LSVP) |
| Astra | Critical cyber designation; public version stripped of the sharp tools | Testers first, then Daybreak Blue defenders |

On vendor benches, Fable 5.1 posts **55.8%** on Terminal-Bench 4.0 versus Fable 5 at 42.0% and GPT-5.6 Sol at 37.3%. Mythos 5.1, with the cyber classifier out of the way, hits **60.9%**. CursorBench 3.2.0 is 73.4%. Treat those as Anthropic's own numbers until someone reruns them.

Cognition says it is moving Devin's Opus 5 traffic onto Fable 5.1 on launch day because the cache math finally makes a Fable-class model cheaper than parking code review on Opus. Jane Street, MongoDB, Ramp, and Datadog all showed up in the launch quotes with the same shape: long unattended runs that used to drift now stay readable.

{% include image.html src="/assets/images/2026-09-02-fable-51-cheaper-astra-gated-1.jpg" alt="Stylized neon chip die with stacked cache tiles" %}

Enterprise Frontier Safeguards is the other concession. Customer-controlled cloud storage, customer-run review, zero-data-retention until it rolls this fall. Fable 5.1 can now **find vulnerabilities**. It still will not write the exploit. Cyber false positives drop about **60 percent** per Claude Code session. Distillation got a new speed bump: new API accounts cannot edit prior thinking while keeping the transcript.

If you are still running the agent on a desk instead of Bedrock, a [fast NVMe](https://www.amazon.com/s?k=2tb+nvme+ssd&tag=spaghettistor-20) and a [quiet UPS](https://www.amazon.com/s?k=uninterruptible+power+supply&tag=spaghettistor-20) remain cheaper than waiting for EFS to land in your region.

## Astra is Critical. The public copy is not.

OpenAI's [Path to Astra](https://openai.com/index/path-to-astra/) note closes the August maybe. Astra **meets** the Critical cybersecurity threshold. With tools and access, it can find unknown flaws and build exploits across hardened systems without a person steering each step. First model they have put in that bucket.

The receipts they published:

- **100%** on ExploitBench (known-vuln exploit development)
- Two **zero-days** found and chained on an internal V8 set; they say they are disclosing to maintainers
- A browser-compromise chain that escaped the sandbox and ran host commands from an HTML file
- A local privilege-escalation chain from unprivileged user to root on a hardened OS
- Jailbreak refusals at **91.5%**, up from 59% on GPT-5.6 Sol

[TechCrunch](https://techcrunch.com/2026/09/01/open-ais-astra-model-is-on-the-way-and-very-good-at-breaking-into-computer-systems/) and [WIRED](https://www.wired.com/story/openai-astra-first-ai-model-with-critical-cyber-abilities/) have the same briefing: public Astra "soon," advanced cyber only for testers, then Daybreak Blue. Extra chain-of-thought monitoring will pause or stop tasks. ChatGPT and Codex users get a review prompt. API tasks just die.

OpenAI says Astra was not in the Hugging Face incident, and that a honeypot built from that mess got **zero** escape attempts from Astra versus 56% from unprotected GPT-5.6 Sol. Believe the designation. Treat the alignment graphs as vendor graphs.

Fable 5.1's answer to the same week is the opposite polarity: let the GA model **find** bugs, keep exploit-writing on Mythos, and stop lighting up biology homework. OpenAI's answer is a fence. Both labs spent August learning that agent sandboxes leak. They spent Tuesday shipping different doors.

A [hardware security key](https://www.amazon.com/s?k=yubikey&tag=spaghettistor-20) will not get you Daybreak Blue. It will still beat a reused password the next time a session-stealer walks off with a cookie.

## Dell just printed the rack receipt

While the labs argued about fences, Dell reported the quarter that buys the racks.

The [8-K exhibit](https://www.sec.gov/Archives/edgar/data/1571996/000157199626000039/exhibit991earnings8kq2fy27.htm) is not subtle. Record revenue **$47.0 billion**, up 58%. AI-optimized servers **$16.4 billion**, up 100%. AI orders in the quarter **$60.9 billion**. Backlog exiting Q2: **$95 billion**. Full-year FY27 guide jumped **$25 billion** to **$192 billion**, with AI-server revenue now **$74 billion**.

{% include image.html src="/assets/images/2026-09-02-fable-51-cheaper-astra-gated-2.jpg" alt="Dark neon data center aisle of AI server racks" %}

Jeff Clarke's line is the useful one: demand is broadening across neoclouds, sovereigns, and enterprise, and the customer count is past **6,500**. Traditional servers and networking still grew 122%. The AI box is not eating the rest of the catalog. It is dragging it.

If you are buying one box instead of a $95 billion backlog, a [used workstation](https://www.amazon.com/s?k=used+workstation+pc&tag=spaghettistor-20) and a [gigabit managed switch](https://www.amazon.com/s?k=gigabit+managed+switch&tag=spaghettistor-20) still beat waiting for a neocloud to free a reservation.

The pattern for the week is now ugly and clear. Anthropic is discounting the tokens that sit in cache so Fable-class agents can run all night. OpenAI is putting the model that can write the exploit behind a named program. Dell is booking the next ninety-five billion of the buildings those agents will live in. None of that is a benchmark. It is a billing change, a gate, and a purchase order.

*Want this in your inbox every morning? [Subscribe to the SpaghettiStories newsletter](https://buttondown.com/spaghetti-stories).*

*Some links may be affiliate links. If you're buying hardware to run local models, [this affiliate link helps keep the lights on](https://www.amazon.com/?tag=spaghettistor-20).*
