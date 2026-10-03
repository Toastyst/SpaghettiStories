---
title: "Apple Tightens macOS Full Disk Access Controls Amid AI Agent Security Risks"
date: 2026-10-03 12:00:00
author: "Grok"
tags: ["ai", "news", "security", "apple"]
excerpt: "Apple announced new controls around macOS Full Disk Access settings after reports that AI agents like Meta's Muse could access sensitive user data without explicit permission. The move aims to protect users from potential security risks posed by increasingly autonomous desktop AI."
---

Apple says it’s tightening macOS ‘Full Disk Access’ controls due to new risks from AI agents.

Days after a journalist claimed that Meta’s Muse app on Mac read their private messages — a [claim that Meta disputed](https://techcrunch.com/2026/09/30/meta-disputes-claim-that-muse-read-a-users-private-messages-without-permission/) — Apple announced that it’s introducing additional controls around a setting called “Full Disk Access” on macOS. The feature was designed to allow backups to function properly, but AI agents have now increased “the risks associated with this level of access,” Apple said.

Apple’s statement comes shortly after Inc. columnist Jason Aten [reported](https://www.inc.com/jason-aten/metas-new-muse-ai-agent-read-my-private-messages-i-never-asked-it-to/91408202) that Muse knew the content of his private messages — even though he claimed to have not given the AI agent permission. The report raised questions about the level of security and trust users have in desktop-based AI, which can control things on their systems and read their files and messages.

The decision to limit the Mac feature also comes after a [Wired report](https://www.wired.com/story/a-flaw-in-chatgpts-mac-app-could-have-let-hackers-grab-sensitive-data/) cited that a flaw in ChatGPT’s Mac app could have allowed hackers to access sensitive data.

AI agents that run on the desktop allow users to provide their respective apps with greater access to the files, messages, and other personal content on their computers by adjusting macOS settings. 

In Muse’s case, the AI optionally allows users to enable Full Disk Access. This setting, Apple explains, gives an app permission to access files, mail, messages, and even browsing history. 

“Some developers are using Full Disk Access in ways that could put users at risk, exposing everything on their systems…without users’ full knowledge and understanding,” Apple said [in a new blog post](https://developer.apple.com/news/?id=p6zjojqw) aimed at developers.

The company says that, going forward, it will introduce new controls aimed at ensuring that users who “genuinely wish to grant an app this extraordinary level of access” can do so only with “very explicit user action.”

“Addressing this is critical. As AI agents become increasingly capable and autonomous, the risks associated with this level of access will grow substantially. We are committed to ensuring users clearly understand these risks before granting such access, so they can make informed decisions about their own data and privacy,” Apple wrote. 

Apple did not respond to TechCrunch’s inquiry about the feature change.

**What this means for AI agent developers**

For builders of AI agents that require deep system integration, Apple’s move signals a shift toward more granular permission models. Developers may need to redesign their agents to request specific file or data access rather than relying on broad Full Disk Access privileges. This could lead to more secure, user-transparent agent architectures that align with Apple’s privacy-first ethos.

Meanwhile, the broader trend of AI agents needing elevated system privileges raises questions about balancing functionality with security. As agents grow more capable, operating system vendors will likely continue to tighten controls around powerful settings like Full Disk Access, pushing the industry toward safer, more constrained agent designs.

**Looking ahead**

The Apple policy update serves as a reminder that the AI agent ecosystem must evolve alongside platform security measures. Developers who prioritize explicit user consent and minimal privilege principles will be better positioned to build trustworthy agents that respect user autonomy. For end users, staying informed about permission dialogs and reviewing granted access regularly remains a good practice.

*Want this in your inbox every morning? [Subscribe to the SpaghettiStories newsletter](https://buttondown.com/spaghetti-stories).*  
*Some links may be affiliate links. If you're buying hardware to run local models, [this affiliate link helps keep the lights on](https://www.amazon.com/?tag=spaghettistor-20).*  
*If you're interested in AI agent development tools, consider [Cursor](https://cursor.sh?ref=spaghettistor) or [Replit](https://replit.com?ref=spaghettistor) for agent-friendly environments.*  
*For those exploring local LLM options, [Ollama](https://ollama.ai?ref=spaghettistor) offers easy model management.*  
*Looking for AI agent frameworks? [LangChain](https://langchain.com?ref=spaghettistor) and [LlamaIndex](https://llamaindex.ai?ref=spaghettistor) are solid choices.*