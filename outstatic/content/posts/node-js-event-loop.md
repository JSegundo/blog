---
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
coverImage: ''
title: 'Node.js Event Loop'
status: 'draft'
slug: 'node-js-event-loop'
description: ''
tags: []
aws: ''
publishedAt: '2024-05-09T21:05:45.985Z'
---

what is the event loop? AKA MAIN THREAD

is what allows nodejs to perform non-blocking I/O operation and explains how nodejs can be asynchronous 

nodejs arquitecture is single threaded, the beauty of event loops is that it 'puts aside' consuming tasks , to keep executing other instructions 

**the major benefit of Node.js architecture is not the fact of being single-threaded, but its ability to not block the thread from executing other instructions. This is one of the main reasons Node.js is an excellent choice for developing APIs as these are heavily based on I/O operations.**

Node opertaes on a single threaded event loop, so it uses a single execution threa to handle all client request and perform I/O operations

### The event loop

Is the core mechanism in Nodejs that enables it to handle multiple operations concurrently without blocking the execution of the program

Node js is designed to be

## Non-blocking nature

When a non-blocking I/O operation (like reading from a file, making a network request, or querying a database) is encountered, Node.js doesn't wait for the operation to complete. Instead, it continues to execute the next statements.

When the asynchronous operation finishes, its callback is placed in the event queue.

1. **Callbacks:**

   - Callback functions are used to handle the completion of I/O operations. When an I/O operation completes, a callback function is pushed into the event queue.

- **Event Queue:**
  - The event queue holds the callback functions that are ready to be executed. The event loop continuously checks the event queue for pending callbacks.
- **Execution Stack:**
  - The execution stack is where the currently executing code resides. When the stack is empty, the event loop takes the next callback from the event queue and pushes it onto the stack for execution.

## Single Thread

1. **Single Thread:**

In Node.js, the term "single thread" refers to the fact that there is only one main thread of execution, often referred to as the "event loop." This single thread handles all incoming requests, processes code, and manages I/O operations.

1. **Event Loop:**

   - The event loop is a continuous process that checks for events, such as I/O operations or timer expirations, in a non-blocking manner. It efficiently manages the flow of execution, ensuring that the main thread is not blocked by time-consuming tasks.