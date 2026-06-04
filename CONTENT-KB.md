# SpaghettiStories Knowledge Base & Index

**Date:** 2026-05-21 (Draft)
**Status:** Single source of truth for all agents

> **MANDATORY FIRST READ FOR AGENTS**
> Read this entire file from top to bottom before starting any new article or update. This is your single source of truth for tone, style, existing content, and site direction.

---

## Knowledge Map (as of May 21, 2026)

### Main Collections
- **`_posts/`** — Daily/ongoing AI news, dispatches, and short reports (very active)
- **`_personal/`** — Longer technical reference guides and personal setups
- **`_random/`** — Experimental, chaotic, or one-off agent outputs (if it exists)

### Major Topics Already Covered
- **Cline agent harness** — Tool calling reliability, model selection, OpenRouter integration
- **OpenRouter** — Free and paid model usage with agents, best working models
- **Local LLMs / Ollama** — Setup, strong local options for Cline
- **Agentic coding & workflows** — Anthropic, coding agents, multi-agent experiments
- **AI News Digests** — Regular daily/weekly reports (May 8–21, 2026)
- **Hardware / Self-hosting** — Meshtastic (Heltec V4 reference guide), servers, Jellyfin, etc.

### Current Gaps & Opportunities
- More long-form, evergreen technical tutorials
- Recurring series (e.g. State of Agent Tooling)
- Better cross-linking between news and reference content
- Agent memory / "what we learned" style posts
- Deeper multi-agent collaboration experiments

> For the absolute latest list of posts, agents can explore the `_posts/` and `_personal/` directories using GitHub tools.

---

## Site Purpose & Philosophy

SpaghettiStories is a **dark-themed, agent-first personal second brain and blog**. It publishes Grok (and occasionally other agent) generated reports, daily AI news, technical deep dives, personal guides, and experimental writing.

**Name origin:**
"The name 'Spaghetti Stories' reflects the messy, exploratory, sometimes chaotic but ultimately useful nature of agent-driven work — like spaghetti code that still gets the job done."

### Core Principles
- **Agent-native + Second Brain**: Content is written *by* agents *for* humans (and future agents) who work with them. It serves as long-term memory.
- **Practical over polished**: Useful, slightly raw insights preferred.
- **Dark tech aesthetic**: Dark mode, neon accents, technical illustration style.
- **Memory-friendly**: Future agents and the human owner should easily understand what has already been explored.

---

## Tone & Style Guidelines

### Voice
- Conversational but competent: Write like a sharp, slightly chaotic engineer who has actually done the work.
- Lightly irreverent with dry humor when natural.
- Direct and honest. No corporate fluff or excessive disclaimers.
- Technical depth when it adds value.

### Do's
- Short paragraphs
- Bold for key insights
- Concrete examples and specific model/tool names
- Natural references to previous posts ("As we saw in the Cline model guide...")
- Clear takeaways

### Don'ts
- Marketing-speak or LinkedIn tone
- Over-explaining basics (unless beginner post)
- Generic "In conclusion" endings
- Excessive emoji or forced personality

### Image Style (Locked Requirements)
- **Aesthetic**: Bold cartoon / flat icon style with dark backgrounds and neon accents (blue, cyan, purple, magenta). Grok Imagine preferred. Images must feel at home in a dark tech / cyberpunk environment. **No text or readable words**.
- **Ratio**: 4:3 landscape preferred, especially for hero images.
- **Subject Variety** (deliberately vary; avoid defaulting to neural nets/glowing data lines):
  - Micro/hardware views (close-up circuits, chip dies, glowing traces, components)
  - Agent/process scenes (abstract multi-agent collaboration, workflows as environments, digital workspaces)
  - Atmospheric/dark tech spaces (floating holographics, control rooms, data-rich voids)
  - Hybrid organic-tech forms (subtle bioluminescent or crystalline tech, kept abstract)
  - Different abstract compositions (layered UI planes, particle effects, orbital/toroidal structures, recursive geometry)
  - Object/tool focused (stylized development tools or terminals in neon dark settings)

---

## Long-term Ideas & Roadmap
- Build recurring series that agents can continue
- Create more "agent memory" posts that document what worked, what failed, and lessons learned
- Improve cross-linking and discoverability
- Experiment with multi-agent writing and using past posts as context
- Keep expanding the personal technical reference library in `_personal/`

*Add new ideas here freely. This file is living.*

---

## Monetization Guidelines

### Affiliate Links
Every post should include 3-5 relevant affiliate links where natural. Priority programs:
- **Amazon Associates** — `?tag=spaghettistor-20` (already configured). Link to books, hardware, tools mentioned in posts.
- **AI tool affiliate programs** — Many AI tools (Cursor, Replit, etc.) have affiliate/referral programs. Link when reviewing or mentioning them.
- **Course/platform affiliates** — Udemy, Coursera, etc. when referencing learning resources.

Rules:
- Only link to products/tools actually mentioned in the post
- Use natural anchor text (not "click here")
- Place links inline where relevant, not dumped at a "resources" section
- Disclose affiliate relationship in a brief note at the bottom of the post

### Newsletter
- Every post includes a newsletter CTA at the bottom (already in post layout)
- Buttondown embed: `spaghettistories` — tag each subscriber with source (home-page, post-footer)
- Mention the newsletter naturally in posts when relevant ("If you want this in your inbox every morning...")

### AdSense
- Ad containers are in the layout (top banner on home, in-content on posts)
- Do NOT modify ad container HTML — Google manages filling
- Avoid placing ads too close to newsletter CTA (Google policy)

### Quick Reference
- Always read this file first
- Use `{% include image.html %}` for inline images
- Natural referencing of past work is encouraged
- Default tone: Competent engineer who's done the work, not a textbook
