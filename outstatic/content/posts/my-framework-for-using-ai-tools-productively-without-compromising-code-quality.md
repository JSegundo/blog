---
title: 'Vibe code without compromising code quality'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'my-framework-for-using-ai-tools-productively-without-compromising-code-quality'
description: ''
coverImage: ''
tags: [{"label":"AI tools","value":"aiTools"},{"label":"Productivity","value":"productivity"}]
aws: ''
publishedAt: '2025-09-07T14:00:03.254Z'
---

Last week I had talks with two very different types of people: an experienced software engineer, skeptical about AI IDEs like Cursor, and on the other hand, a total vibe-coder making money doing projects with no real understanding of software.

The first complained about not trusting an LLM to modify his code - it can make mistakes and screw everything up (I don't disagree). The second admitted to prompting the IDE with 'do this', 'fix that' and having no clue what the generated code actually does.

Naturally, I found myself explaining how I use these tools to improve productivity without generating mass-trash code. Turns out I'd been following a framework without realizing it. Later watching Ed Donner's AI Agents course, I discovered it actually aligns with standard practices.

&nbsp;

## My Framework for AI-Assisted Coding

### 1. Never Put Your Hands on the Fire for the LLM

- Doubt everything. The first solution is rarely the right one for your problem.
- **Always remind the LLM to respond with concise, short answers.** They tend to be verbose and add unwanted fluff to responses.

**example fix a bug in a React component**. The first suggestion “worked,” but it silently removed a piece of state logic that broke another part of the app two pages away. Looked fine at first glance—but I only caught it because I tested around.

&nbsp;

### 2. Planning and Context

- When approaching complex tasks like feature implementation or big refactors, ask to break it into smaller tasks first.
- Generate MD documents about implementation plans, what's been implemented, guidelines, folder structures.
- Keep MD files with common LLM mistakes and project patterns:

```markdown
Common LLM mistake: Suggesting `any` in TypeScript → fix: use proper interfaces
Project pattern: Every API call uses custom fetchWrapper with error handling  
```

&nbsp;

### 3. Getting Multiple Solutions

- Always ask for at least 3 solutions, then have the LLM compare them based on what matters in your project.
- **Validate with other LLMs!** Ask the same question or validate an answer with different models.

&nbsp;

### 4. Code Review Process

- Never accept entire files. Review every diff.
- Either accept it or reject with notes about what's wrong.
- Test locally before accepting.

**Red flags I look for**:

- Variables with unclear names (`data`, `result`)
- Hardcoded values instead of constants
- Missing error handling in async code
- Repeated logic that should be abstracted

&nbsp;

### 5. When Things Go Wrong

- Sometimes it goes completely off track. LLMs get stuck in loops saying "Oh! You're completely right! I know what the problem is now" and then generate the same useless code for 10 messages straight.

**My way out**:

- Start a new chat and restate the problem cleanly
- Simplify the prompt to the smallest issue
- Drop the AI for 20 minutes and debug manually


- When I realize I've been going down the wrong path, I stop and re-analyze. Not afraid to discard changes across multiple files.

&nbsp;

### 6. Testing is More Important Than Ever

- **AI allows for rapid feature implementations or big refactors, but the LLM won't know about those corner case fixes you or your team added months ago.**
- If feature has tests, run them before and after AI changes.
- Tests are my contract: if AI code breaks them, it gets rejected immediately.

&nbsp;

Treat AI as a tool that amplifies your capabilities, not as a replacement for critical thinking, testing, and code review.