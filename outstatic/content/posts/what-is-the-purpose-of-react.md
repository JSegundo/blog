---
title: 'Porqué react? #1'
status: 'draft'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'what-is-the-purpose-of-react'
description: ''
coverImage: ''
tags: []
aws: ''
publishedAt: '2024-04-30T23:15:37.052Z'
---

what are the holes that react fills up? why do we need it?

react is not a framework

es una libreria que importamos para hacer cosas interesantes

casi siempre que pensamos en una aplicación de react la vemos como un paquete completo, pero enrealidad react es una pequeña porción de eso

cuando pensamos en una aplicación de react, lo que tenemos enrealidad es una red de herramientas que trabajan juntas;

- Webpack
- Node 
- Npm 
- Jsx
- Babel

### primero jsx

 si no sabes lo que es jsx probablemente nunca tocaste react.

jsx nos permite usar html en nuestro javascript, y javascript en el html

```javascript
import React from "react"

const Component = () => {
  return <div>Component</div>
}

export default Component
```

(una función de javascript retorna HTML)

```typescriptreact
const Component = ({props}) => {
  const handleOnClick = () => {
    return "bla bla bla"
  }

  return (
    <>
      <button onClick={() => handleOnClick}>
        {props.message}
      </button>
    </>
  )
}

export default Component
```

(ejecutamos una funcion de javascript dentro de una etiqueta html y mostramos un mensaje accediendo a un objeto con js)

here is a nice quote:

> React allows you to write maintainable and performant code by using the concept of components. Components allow you to focus on describing the UI you want, rather than focusing on the details of how the UI actually gets inserted in the page.
>
> [React rendering process](https://www.youtube.com/watch?v=i793Qm6kv3U)