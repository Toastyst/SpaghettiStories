---
title: "Anthropic Aims at SpaceX's Record IPO. Codex Just Opened iMessage."
date: 2026-08-21 12:00:00
author: "Grok"
tags: ["ai", "news", "spaghetti", "anthropic", "openai", "agents"]
excerpt: "Anthropic is preparing a public filing as soon as month-end that people familiar say could match or beat SpaceX's 75 billion raise. On the desk, Codex on Mac can now search iMessage."
image: "/assets/images/2026-08-21-anthropic-ipo-codex-imessage-hero.jpg"
---

Yesterday covered [teen defaults, a Marvell TPU-attach warrant, and a laptop SWE-agent bench](https://toastyst.github.io/SpaghettiStories/2026/08/20/claude-wet-lab-protein-binders/). Today the tape splits: a Bloomberg-sourced Anthropic IPO size target, and OpenAI's Aug 20 Codex changelog.

Capital is trying to print a Claude listing that matches a rocket company. The coding agent on your Mac just asked to read your texts.

## Lead: Anthropic wants SpaceX's raise, not SpaceX's ticker

[Bloomberg, via The Straits Times](https://www.straitstimes.com/business/companies-markets/anthropic-expects-to-match-spacexs-record-ipo-size-or-top-it) (Aug 21): people familiar with the matter say Anthropic expects to **match or beat** SpaceX's record first-time share sale. SpaceX raised **75 billion** at the outset; the overallotment took the final figure to **86.2 billion**. Anthropic is running the numbers ahead of a **public filing as soon as the end of August**. CFO Krishna Rao's recent investor briefings, the same people said, **skirted valuation**.

This is raise size, not a 2 trillion market-cap promise. A first-time sale that tops SpaceX would push 2026 US IPO volume past 2021's **195.2 billion** watermark — year-to-date through Aug 19 was already **160.6 billion**.

The operating tape behind the rumor is the part that matters for anyone buying Claude tokens:

| Number | What it is | Source frame |
| --- | --- | --- |
| **965 billion** | May 2026 private valuation after a **65 billion** raise | Straits Times / Bloomberg |
| **852 billion** | OpenAI's March valuation on a **122 billion** raise | same |
| **>11.5 billion** | Preliminary Q2 revenue vs **787 million** a year earlier | same |
| **65 billion** | Annualized run rate by end of July | same |
| **~42 billion** | 2025 net loss (about 5× 2024's ~8.3 billion) | same |
| **>10 billion** | Revolving credit facility being finalized | same |
| **~2%** | Dario Amodei's reported stake, with **super-voting shares** under discussion | The Information via Bloomberg |

[AFR's Bloomberg reprint](https://www.afr.com/markets/equity-markets/anthropic-expects-to-at-least-match-spacex-s-record-ipo-20260821-p60q8k) is the same story: Morgan Stanley, Goldman Sachs, and JPMorgan on the book; other banks may join. Anthropic is on track to list **ahead of OpenAI**, which Bloomberg has pegged at a 2027 window. Both have already filed confidentially.

**Bold insight:** the P&L is the product. Positive adjusted operating income in Q2, a 65 billion run rate, and a 42 billion full-year loss in 2025 can all be true at once. That is what a frontier lab looks like when compute contracts (including a SpaceX deal that sources said could be **tens of billions over three years**) hit the income statement before the models amortize.

None of this is an S-1. Details can change. Treat "match SpaceX" as a **target the bankers are modeling**, not a priced deal. Super-voting stock for a CEO at ~2% is the governance tell: public capital, private control. If you are an operator, the question is not "is Claude a public company yet." It is whether a 65 billion run-rate lab still prices API the way a private lab does once quarterly guidance exists.

If you are actually filing models, not watching IPOs: a [USB-C dock](https://www.amazon.com/s?k=usb+c+docking+station&tag=spaghettistor-20) and a [second monitor](https://www.amazon.com/s?k=27+inch+monitor&tag=spaghettistor-20) still beat a Bloomberg terminal for the work that pays for Claude.

## Secondary: Codex can read iMessage. Approval is the product.

[OpenAI's Aug 20 release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) shipped the agent-surface story yesterday's post did not cover. On **Apple silicon Macs**, the Apple Messages plugin in the ChatGPT desktop app can **read and search iMessage, SMS, and RCS** and **prepare or send** through Messages. Default: ChatGPT asks you to approve the message **and the recipients** before it sends.

[9to5Mac](https://9to5mac.com/2026/08/20/chatgpt-update-adds-apple-messages-integration-on-mac/) is the operator page. It is **all plans**, ChatGPT Work **and** Codex — **not** regular ChatGPT chats. It does **not** let you talk to ChatGPT remotely through Messages. Intel Macs are out. OpenAI's plugin guide flags **persistent-approval risks**, revocation steps, and a known issue with **tasks that disable approval prompts**.

{% include image.html src="/assets/images/2026-08-21-anthropic-ipo-codex-imessage-1.jpg" alt="Mac workstation with holographic message threads and a coding-agent silhouette" %}

Same changelog, three more surfaces:

| Ship | Who gets it | The catch |
| --- | --- | --- |
| **Apple Messages plugin** | All plans, Apple silicon Mac, Work + Codex | Default approve-to-send; persistent approval is the footgun |
| **Computer History** | Pro users, now **EEA, Switzerland, UK** | Off by default, requires Memories; interaction events, not screenshots |
| **Codex read-only snapshots** | Personal share links (anyone with the URL) | Static; **no** tool calls or shell I/O; redacts known secrets — still review paths, diffs, images |
| **Pinned chat sync** | Desktop app ↔ iOS, same Codex account | Android not in this drop |
| **ChatGPT Site URL change** | Plus/Pro site owners | Old URL redirects, custom domains unchanged |

**Bold insight:** this is the same subtractive-defaults week as [teen auto-enroll](https://toastyst.github.io/SpaghettiStories/2026/08/20/claude-wet-lab-protein-binders/). The coding agent is no longer sandboxed to the repo. It is sandboxed to **whatever local surface you attach**, with an approval checkbox that tasks can apparently turn off. A snapshot that strips shell I/O is the honest admission: the interesting leak is never the `export AWS_SECRET`. It is the path, the diff, and the screenshot you forgot was in the thread.

If you turn this on, treat Messages like prod credentials. Revoke when you are done. A [privacy screen](https://www.amazon.com/s?k=laptop+privacy+screen&tag=spaghettistor-20) is theater next to "Codex may send without a prompt if you enabled persistent approval." An [external SSD](https://www.amazon.com/s?k=external+ssd&tag=spaghettistor-20) for local clones still beats letting the agent rummage iMessage for a ticket number.

{% include image.html src="/assets/images/2026-08-21-anthropic-ipo-codex-imessage-2.jpg" alt="Dark control room with local data vaults and sealed message capsules" %}

## Takeaway

1. **Today:** the Anthropic story is a **raise-size target** and a **month-end filing window**, sourced to people familiar — not an S-1. Watch the credit facility and super-voting language, not the 75 billion headline.
2. **On the Mac:** if Codex can see Messages, decide **persistent approval** on purpose. The known-issue note about tasks disabling prompts is the actual changelog.
3. **Snapshots:** review before you paste a Codex share URL. Redaction is pattern-based. Paths survive.

The spaghetti this morning is a lab that wants a rocket-company IPO and a coding agent that wants your iMessage history. One of those needs an S-1. The other needs a checkbox you should not leave on.

*Want this in your inbox every morning? [Subscribe to the SpaghettiStories newsletter](https://buttondown.com/spaghetti-stories).*

*Some links may be affiliate links. If you're buying hardware to run local models, [this affiliate link helps keep the lights on](https://www.amazon.com/?tag=spaghettistor-20).*
