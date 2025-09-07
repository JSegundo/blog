---
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
coverImage: ''
title: 'A framework to securely vibe-code'
status: 'draft'
slug: 'a-framework-to-securely-vibe-code'
description: 'My framework for using AI tools productively—without compromising code quality.'
tags: []
aws: ''
publishedAt: '2025-08-25T15:46:19.911Z'
---

last week i had a talk with two different types of people; an experienced software engineer, **skeptical about AI IDEs like cursor, and on the other hand, a total vibe-coder, making money by doing some projects totally vibe coding it, with no real understanding of software.**

> last week i talked with two diff types of people, an exp software engineer, and a vibe-coder. one doesn't let an ai touch its code, the other one doesn't understand a single line of what the llm is generating

> as i tried to explain them my workflow with these tools, i noticed i pretty much have been developing a framework that allows me to be a lot more productive in a safe way. I realize a lot more people are getting to the same workflows / conclusions while watching **Ed Donner AI Agents course.** . so i wrote some down and attempted to write an article on some of these rules:

the first one complained about not trusting an LLM to modify his code, it can make mistakes and screw everything up (I don't disagree). The second admitted prompting the IDE with 'do this', 'fix that' and not having a clue about what the generated code is doing.

naturally, i saw myself explaining them how I use these amazing tools in my favor, to improve my productivity without generating mass-trash code. I then came up with a list of steps that i follow, that i haven’t really thought about. i came there naturally. to then realize that is a standard while watching at Ed Donner AI Agents course.

first thing is you should never put your hands on the fire for the LLM. doubt everything. not always the first solution proposed will be the proper one for your problem.

- always remind the llm to respond with concise, short answers. they tend to be verbose and add a lot of unwanted things to the responses.

- testing is probably more important than ever. ai allows for rapid feature implementations or big refactors. the llm wont know about those line fixes for some corner cases that you or your team added a while ago.

- when approaching complex tasks such as a feature implementation / big refactor, ask to break it into tasks. 'independently testable steps' so you can test one by one instead of generating 200 new lines of code trough 6 files and having no idea why is not working. \
  when doing this, you should literally prompt to NOT GENERATE ANY CODE!

- validate with other LLMs! ask the same question, or validate an answer with other LLMs

- ask to generate MD documents about implementation plans, whats been implemented already, and guidelines / folder structure, etc. you can later feed other chats with this docs as context.

- get at least 3 possible solutions for your problem. then ask the llm to compare them considering whats important in your project. (if you follow some specific architecture, design patterns.. or simply to always aim to follow SOLID principles, otherwise you can end up with repeated logic trough your codebase)