---
title: 'Typescript cool things '
status: 'draft'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'typescript-without-any'
description: ''
coverImage: '/images/ts-Q5ND.png'
tags: [{"label":"Typescript","value":"typescript"}]
aws: ''
publishedAt: '2024-05-09T18:17:59.852Z'
---

## Generic Types

When a function is generic, it has a "type hole", just like Array does. The hole must be filled by a type, like how number fills Array&lt;number&gt;.

In the example below, we name the type hole T. This is a common generic type parameter name, and it works well enough in simple situations.

```js
function first<T>(elements: Array<T>): T {
  return elements[0];
}
```

we can then fill the type hole when we call the function. At each step, it replaces the T type parameter with the actual type.

```js
first<boolean>([true, false]);
```

## Literal Types

A variable of tipe 1 can only hold the numer 1. Any other thing throws a type error.

```javascript
let one:1 = 1 // works
one = 2 // TYPE ERROR
```