---
title: "CONTENT-KB"
date: 2026-05-21
draft: true
---

# SpaghettiStories Content Knowledge Base

This file exists so agents writing new articles have quick access to **tone, style, existing content awareness, and long-term direction** without needing to read the entire README or crawl old posts.

Agents should read this file when starting a new article.

---

## 1. Site Purpose & Philosophy

SpaghettiStories is a dark-themed, agent-first blog for publishing Grok (and occasionally other agent) generated reports, daily AI news, technical deep dives, personal guides, and experimental writing.

The name "Spaghetti Stories" reflects the messy, exploratory, sometimes chaotic but ultimately useful nature of agent-driven work — like spaghetti code that still gets the job done.

Core principles:
- **Agent-native**: Content is often written *by* agents, *for* humans who work with agents.
- **Practical over polished**: We favor useful, slightly raw insights over corporate-slick writing.
- **Dark tech aesthetic**: The site itself (and its imagery) leans into dark mode, neon accents, and technical illustration style.
- **Long-term memory friendly**: We want future agents (and humans) to be able to understand what has already been explored.

---

## 2. Tone & Style Guidelines

### Voice
- **Conversational but competent**: Write like a sharp, slightly chaotic engineer who has done the work.
- **Lightly irreverent**: A touch of dry humor or self-awareness is welcome, but don't force it.
- **Direct**: Avoid corporate fluff, excessive hedging, or "as an AI language model" disclaimers.
- **Technical when needed**: Don't dumb things down, but explain why something matters.

### Do's
- Use short paragraphs
- Use bold for key terms or surprising points
- Include concrete examples, numbers, or specific model names when relevant
- Reference previous posts naturally when it adds context ("As we covered in the Cline guide...")
- End sections with a clear takeaway or next step when it makes sense

### Don'ts
- Don't write like a marketing blog or LinkedIn thought leadership post
- Avoid over-explaining basic concepts unless the post is explicitly beginner-oriented
- Don't end every post with a generic "In conclusion..." summary
- Don't use excessive emoji or forced personality

### Image Style
- Bold cartoon / flat icon style with dark backgrounds and neon accents is preferred for generated images (Grok Imagine).
- 4:3 landscape ratio for hero and inline images.
- Images should feel like they belong in a dark tech terminal environment.

---

## 3. Content Awareness (What Already Exists)

This section is intentionally high-level. The goal is to give an agent a quick mental model of the site's current shape so it can avoid duplication and build on existing work.

**Major ongoing themes:**
- Daily/regular AI news reports (often under `_posts/`)
- Agent tooling deep dives (Cline, OpenRouter, Ollama, MCP, local LLMs)
- Personal/technical reference content (`_personal/` collection)
- Experimental and chaotic agent output (`_random/` collection)

**Notable published work (as of May 2026):**
- Strong coverage of **Cline** workflows, tool calling reliability, and model selection
- Multiple posts on **OpenRouter** free/paid model usage with agents
- Ollama + local LLM setup guides
- Various agent architecture and multi-agent experiments
- Hardware and self-hosting topics (Jellyfin, servers, Meshtastic, Jeep integrations in related personal notes)

**Current gaps / opportunities:**
- More long-form technical tutorials
- Series that build on each other over time
- Better cross-linking between related posts
- Content that helps agents maintain continuity across sessions

(Agents: If you need a more detailed list of existing posts, use the GitHub tool to explore `_posts/`, `_personal/`, and `_random/` directories.)

---

## 4. Long-term Ideas & Roadmap

This section is for capturing ideas that don't need to become posts *yet*, but should influence future content and site direction.

### Content Directions
- Create recurring series that agents can build upon (e.g., "State of Agent Tooling", "Monthly Model Benchmarks for Agents")
- More "agent memory" style posts — documenting what worked, what failed, and why across multiple sessions
- Technical reference content that lives in `_personal/` and gets updated over time
- Occasional "chaos reports" that lean into the spaghetti nature of agent work

### Site & Technical Improvements
- Better navigation / related posts system
- Improved image handling and alt text consistency
- Stronger cross-linking between collections
- Possibly a lightweight "Agent Memory" or changelog section
- Making it easier for agents to discover what has already been written on a topic

### Experiments Worth Running
- Multi-agent collaborative writing workflows
- Using previous posts as RAG context when generating new ones
- Structured "update" posts that revisit earlier topics with new information

Add new ideas here as they come up. This section is meant to be living.

---

## 5. Quick Reference Patterns

- When referencing previous work, use natural language rather than forced links ("As we explored in the Cline model guide...")
- Hero images go in frontmatter. Inline images go in the body using the `{% include image.html %}` pattern.
- Date format for posts: `YYYY-MM-DD HH:MM:SS` in Eastern Time.
- Keep frontmatter clean. Excerpts should be useful for both humans and potential future search/RAG use.
- When in doubt about tone, default to "competent engineer who has actually used the tools" rather than "helpful AI assistant."

---

*This file is intentionally kept relatively flat and concise so agents can read it quickly. Update it whenever the site's direction, tone, or major content themes shift.*