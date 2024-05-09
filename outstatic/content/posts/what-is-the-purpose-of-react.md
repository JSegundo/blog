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
    doSomething()
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

### Babel

JavaScript es un lenguage que recibe mantenimiento y actualizaciones. Nosotros cómo devs queremos usar las últimas features y mejoras.

Pero los navegadores se van quedando atras, no siempre dan suport a las mejoras de javascript.

Ahí entra Babel, que nos permite usar las últimas features de JavaScript y nos asegura que todo browser entienda nuestro código.

Ese proceso de convertir código nuevo en código entendible para todos los browsers se llama Transpilación.

Y Babel no se queda ahí, también nos permite transpilar JSX a versiones viejas de JavaScript

### Webpack

se ejecuta por ejemplo si corremos el comando npm run build

webpack (o el bundler que sea) va por nuestros archivos y los bundlea? los achica? que pasa?

antes de seguir hay que hablar un poco de;

### Node y NPM

JavaScript fue creado para el navegador.

Node nos permite ejecutar JavaScript en nuestro sistema operativo

##### Node package manager

here is a nice quote:

> React allows you to write maintainable and performant code by using the concept of components. Components allow you to focus on describing the UI you want, rather than focusing on the details of how the UI actually gets inserted in the page.
>
> [React rendering process](https://www.youtube.com/watch?v=i793Qm6kv3U)