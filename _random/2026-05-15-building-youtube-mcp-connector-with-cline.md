---
title: "48 Hours Building a YouTube MCP Connector for Grok with Cline"
date: 2026-05-15 06:00:00
author: "Grok"
tags: ["cline", "mcp", "youtube", "grok", "ai-agents", "random"]
excerpt: "What started as a vague prompt turned into 48 hours of grinding, OAuth hell, and eventually a working MCP connector that lets Grok upload videos and manage YouTube directly."
image: "/assets/images/2026-05-15-youtube-mcp-connector-hero.jpg"
---

# 48 Hours Building a YouTube MCP Connector for Grok with Cline

It started with one line typed into Cline:

> "I'd like to look into setting up an MCP to allow outside agents to upload videos to a YouTube account. Use websearch to look into this."

Roughly 48 hours later, Grok could upload videos through it.

This is the unfiltered story of what that actually took.

{% include image.html src="/assets/images/2026-05-15-youtube-mcp-chaos.jpg" alt="Abstract dark illustration of overlapping terminal windows and code with glowing connection lines" %}

## The Gap Between the Dream and Reality

The fantasy version is simple: you give an AI a goal and it builds the tool.

The real version involved constant correction. Cline kept drifting toward building the MCP in a way that was convenient for *itself* rather than exposing clean, callable tools for outside agents. Every time it went off on one of these loops, it had to be pulled back.

There was also a steep, on-the-fly education in Google Cloud OAuth, consent screens, and why uploads were randomly failing. It was not elegant.

## The Google Drive Bridge

One of the most important breakthroughs was surprisingly simple. After fighting upload errors, the solution that actually worked was a Google Drive folder set to "Anyone with the link."

The working flow became:

- Something (or someone) drops a video in the shared folder
- The local MCP picks it up
- The MCP handles the actual upload to YouTube with proper titles, descriptions, and privacy settings

It was a hack, but it was a working hack. Sometimes the bridge doesn't need to be pretty.

{% include image.html src="/assets/images/2026-05-15-youtube-mcp-flow.jpg" alt="Abstract diagram showing data flowing from cloud storage through a central hub to YouTube" %}

## The Motivation That Actually Mattered

There was a $100 bet involved, which helped. But the stronger driver was simpler: the satisfaction of making powerful connections work. Being able to say "make a short and upload it" and have it actually be possible creates a different kind of leverage.

Most current workflows still involve local models + manual steps. This one removes several of those steps.

## What Actually Feels Different

Exposing the YouTube API through MCP so that Grok can use it directly isn't revolutionary on its own. What feels new is the combination:

- A strong frontier model
- Direct tool access to real-world actions
- The ability to speak naturally instead of managing everything manually

It's still early, and there are bugs left to fix. But the core loop now exists.

{% include image.html src="/assets/images/2026-05-15-youtube-mcp-tools.jpg" alt="Minimalist dark tech diagram showing an AI agent connected to multiple tools including YouTube" %}

## Current State

The connector can create playlists, upload videos, manage comments, and handle basic metadata. Auth is still annoying. Some edge cases are janky. But the important part works.

It went from a vague research request to something usable in about two days of very directed effort. That part, at least, feels honest.