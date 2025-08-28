---
title: 'Debugging mindset'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'debugging-mindset'
description: 'Notes on owning your bugs'
coverImage: ''
tags: [{"value":"debugging","label":"Debugging"}]
aws: ''
publishedAt: '2025-08-27T22:09:23.000Z'
---

This post is made from excerpts of the book "The pragmatic programmer"

> It is a painful thing To look at your own trouble and know That you yourself and no one else has made it
>
> - Sophocles, Ajax

## The Emotional Side of Debugging

When I first started my current job, I was completely overwhelmed. Users were reporting the weirdest bugs - corner cases so obscure that even our team, who worked on the app full-time, would look at each other in surprise. "How is this even possible?" we'd ask.

The logs were confusing and didn't seem to be related or in order. Chains of functions executing multiple times, race conditions, and mysterious failures that seemed to come from nowhere. I thought I would never find the reasons behind these bugs.

So I did what many developers do: I started making excuses.

"Something is wrong with the logs." "There are logs missing." "The system must be corrupted."

Whatever excuse I could find to avoid the uncomfortable truth that these bugs were, somehow, our responsibility.

## The Psychology Behind the Excuses

As "The Pragmatic Programmer" points out, debugging is a sensitive, emotional subject for many developers. Instead of attacking it as a puzzle to be solved, we encounter denial, finger pointing, lame excuses, or just plain apathy. It's natural - nobody likes discovering they've created a problem.

But here's the thing: spending time laying blame on whoever created the bug is energy wasted. While it might feel cathartic to point fingers, in the technical arena, you want to concentrate on fixing the problem, not assigning blame.

## The Turning Point

My perspective started to change when I began working closely with the senior engineer on my team. When I'd encounter those impossible bugs, I'd ask for his help. He would sit with me and walk through his debugging process.

Sometimes it seemed like he knew the app like the palm of his hand, but more often than not, he was just as confused as I was. We'd look at each other and be like "wtf is going on here..."

But here's what made him different: **that confusion didn't stop him.**

He would methodically work through the problem, following every thread, checking every assumption. He approached debugging the same way every time - as problem solving, pure and simple.

## The Core Insight

The breakthrough for me wasn't learning a specific debugging technique or tool. It was a fundamental mindset shift:

**"If it's failing, it's because of something. Code can't just decide to not work."**

This connects directly to what "The Pragmatic Programmer" emphasizes:

> if your first reaction to witnessing a bug is "that's impossible," you are plainly wrong. Don't waste a single neuron on the train of thought that begins "but that can't happen" - because quite clearly it *can*, and *has*.

Those impossible race conditions I encountered? They weren't impossible at all. That weird user behavior that seemed to break our app in ways we'd never seen? It was entirely possible - the evidence was right there in the bug report.

## 

## Embracing Debugging as Problem Solving

Once I accepted that debugging is just problem solving, everything became clearer. Instead of looking for someone or something to blame, I started looking for clues. Instead of feeling frustrated by complex failure chains, I got curious about what they were trying to tell me.

The same logs that once overwhelmed me became a treasure map. Each error message was a breadcrumb leading toward the solution.

## What's Next

This mindset shift was just the beginning. The first practical technique that flows from this thinking is making bugs reproducible. After all, if you can't reproduce it, how will you know if it's ever fixed?

I learned to dig deeper: What specific sequence of actions? What data was involved? Can we create a minimal test case that triggers the same failure?

Sometimes, by forcing yourself to isolate the circumstances that display the bug, you'll gain insight into how to fix it. **The act of reproduction becomes part of the solution.**

There are other techniques that build on this foundation - learning to split and analyze logs effectively, getting better at regex to parse through noise, keeping detailed notes about what you've discovered during investigation.

But the right mindset is necessary to do these techniques well. Before you can solve the puzzle, you have to accept that it *is* a puzzle - not a cosmic injustice or someone else's fault.