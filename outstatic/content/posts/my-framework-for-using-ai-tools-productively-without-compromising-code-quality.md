---
title: 'My framework for using AI tools productively—without compromising code quality'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'my-framework-for-using-ai-tools-productively-without-compromising-code-quality'
description: ''
coverImage: ''
tags: ''
aws: ''
publishedAt: '2025-09-07T14:00:03.254Z'
---



Last week, I had a talk with two very different types of people: an experienced software engineer, skeptical about AI IDEs like Cursor, and, on the other hand, a total vibe-coder—someone making money by doing projects while completely vibe-coding, with no real understanding of software.

The first one complained about not trusting an LLM to modify his code: "It can make mistakes and screw everything up" (I don't disagree). The second admitted to prompting the IDE with "do this," "fix that"—without having a clue what the generated code was actually doing.

Naturally, I found myself explaining how I use these tools in a way that improves my productivity without generating mass-trash code. I realized I had been following a framework all along, almost unconsciously. Later, I discovered that what I was doing actually aligns with best practices, as I learned while watching Ed Donner's AI Agents course.

What this article covers:
My framework for using AI tools productively—without compromising code quality.

\## My Framework for AI-Assisted Coding

1\. Don't Put Your Hands in the Fire for the LLM

Always doubt everything. The first solution is not always the right one for your problem.

\*\*Example from my codebase\*\*: I once asked it to generate a database query. The first suggestion worked—but it used a nested loop that would have been a performance nightmare with millions of records. By doubting and testing, I caught it before merging.

\*\*Another example\*\*: When implementing a modular component system, the LLM suggested hardcoding component types directly in the UI layer. I rejected this and instead implemented a configuration-driven approach where component behavior is defined in the database rather than hardcoded in components. This made the system much more maintainable and flexible.

\### 2. Planning and Context

When approaching complex tasks—like a feature implementation or a big refactor—I ask the LLM to break it into smaller tasks.

I often ask it to generate Markdown documents that outline:

\- Implementation plans
\- What's already been implemented  
\- Guidelines, folder structures, and naming conventions

These documents can be fed into future chats to provide context.

I also keep MD files listing common LLM mistakes and project-specific patterns. If I've had a long conversation about the entire codebase, I'll ask the LLM to summarize it in a file for reference.

\*\*Example from my project\*\*: One of my MD files includes patterns like:

\`\`\`markdown
Common LLM mistake: Suggesting \`any\` in TypeScript → fix: always use proper interfaces.
Common LLM mistake: Mixing async/await with .then() → fix: stick to async/await for consistency.
Project pattern: Every API call must use the custom fetchWrapper with error handling.
Database pattern: Never hardcode IDs since they're auto-incremental; use LAST_INSERT_ID() and variables.
\`\`\`

\*\*Another example\*\*: I documented a complete testing strategy that includes:
\- Which hooks are critical to test first
\- Common testing patterns for form components
\- How to mock authentication and navigation
\- Performance considerations for test execution

This documentation serves as a reference for future AI interactions and helps maintain consistency across the project.

\### 3. Getting Solutions

I always ask for at least three possible solutions. Then, I have the LLM compare them based on what's important in my project—architecture, design patterns, or principles like SOLID.

\*\*Example\*\*: When implementing a dynamic form system, I got three options:

1\. \*\*Hardcoded components\*\*: Each form section as a separate React component
2\. \*\*Configuration-driven\*\*: Component behavior defined in database with generic renderers
3\. \*\*Hybrid approach\*\*: Mix of both with gradual migration

I asked the LLM: "Which one aligns best with maintainability and scalability for a React + Node app that needs to handle complex conditional logic?"

The LLM correctly identified that option 2 (configuration-driven) was best, explaining how it would reduce code duplication and make the system more flexible.

\*\*Another example\*\*: For handling custom input options in forms, I got:

1\. \*\*Text input only\*\*: Simple but limited
2\. \*\*Predefined options\*\*: More structured but complex
3\. \*\*Hybrid system\*\*: Both text input and predefined options

The LLM helped me evaluate each based on user experience, data quality, and implementation complexity.

\### 4. Code Review Process

I never accept entire files in one go. I review every chunk of change—every diff. Then I either:

\- Accept it, or
\- Reject it with a note explaining what was wrong and what should have been done instead.

Before accepting, I always test locally.

If the code works but doesn't follow project patterns, I'll either feed the doc containing the guidelines or explain them manually.

\*\*Quick red flags I look for during review\*\*:

\- Variables with unclear names (\`data\`, \`result\`, etc.)
\- Hardcoded values instead of constants/env vars
\- Missing error handling in async code
\- Repeated logic that should be abstracted
\- Magic numbers or strings that should be constants

\*\*Example from my refactoring\*\*: When the LLM suggested hardcoding numeric IDs throughout the codebase, I rejected it and instead implemented a centralized mapping:

\`\`\`typescript
// Instead of: if (status === 1)
if (status === STATUS_TYPES.COMPLETED) { ... }
\`\`\`

This made the code much more maintainable and eliminated magic numbers.

\### 5. When Things Go Wrong

Sometimes, the LLM goes completely off track. I joke and call it stupid (maybe). But here's the truth: LLMs can fall into loops—responding with "Oh! You're completely right! I know what the problem is now—let me fix it"—and then producing the same useless code for ten messages straight.

\*\*Example\*\*: I once spent 20 messages trying to get it to correctly configure ESLint + Prettier. Every time it said "fixed," the config still broke my build.

\*\*My way of breaking out of this loop\*\*:

1\. \*\*Start a new chat\*\* and restate the problem cleanly
2\. \*\*Simplify the prompt\*\* to the smallest reproducible issue
3\. \*\*Or drop the AI entirely\*\* for 20 minutes and debug manually—then feed my findings back in

When I realize I've been going down the wrong path, I pause to re-analyze the problem and potential solutions. I'm not afraid to discard changes across several files. (I'll stash them if I'm feeling sentimental.)

\*\*Example from my project\*\*: When implementing a complex validation system, the LLM kept suggesting overly complex solutions. I stepped back, analyzed the actual requirements, and realized we needed a much simpler approach. I discarded the complex implementation and started fresh with a cleaner, more maintainable solution.

\### 6. Essential Safety Net

When dealing with complex codebases, unit tests are crucial.

\*\*My workflow looks like this\*\*:

\- If the feature already has tests, I run them before and after accepting AI changes
\- If there are no tests, I'll sometimes ask the LLM to scaffold a basic test file, then I refine it
\- Tests are my contract: if AI code breaks them, it's rejected immediately

This keeps AI contributions safe and consistent with the project's quality standards.

\*\*Example from my testing strategy\*\*: I documented a phased approach to testing:

1\. \*\*Phase 1\*\*: Test critical business logic (data processing, validation rules)
2\. \*\*Phase 2\*\*: Test UI components (input fields, user interactions)  
3\. \*\*Phase 3\*\*: Test integration flows (complete user journeys)

Each phase has specific coverage targets and focuses on the most critical functionality first.

\*\*Another example\*\*: When the LLM suggested changes to validation logic, I had existing tests that caught a regression. The AI had introduced a bug in the conditional logic, but the tests caught it before it could reach production.

\## Key Takeaways

The framework I've developed works because it:

1\. \*\*Maintains human oversight\*\* - I never blindly accept AI suggestions
2\. \*\*Builds institutional knowledge\*\* - Documentation and patterns accumulate over time
3\. \*\*Prioritizes quality\*\* - Tests and code review catch issues before they become problems
4\. \*\*Stays pragmatic\*\* - When AI goes off track, I know when to step back and debug manually

This approach has allowed me to be significantly more productive while maintaining high code quality. The AI becomes a powerful pair programming partner rather than a replacement for good engineering practices.

The key is treating AI as a tool that amplifies your capabilities, not as a replacement for critical thinking, testing, and code review. With the right framework, you can get the productivity benefits without compromising on quality.
