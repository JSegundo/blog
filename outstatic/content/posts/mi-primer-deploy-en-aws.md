---
title: 'Mi primer deploy en AWS'
status: 'draft'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'mi-primer-deploy-en-aws'
description: 'Después de aprender un poco de las bases, empecé a jugar un poco con algunos servicios basicos de AWS.'
coverImage: '/images/screenshot-from-2024-03-23-14-22-21-UwMj.png'
tags: [{"label":"CloudFront","value":"cloudFront"},{"label":"S3","value":"s3"},{"label":"Route53","value":"route53"},{"label":"ACM","value":"acm"},{"label":"DNS","value":"dns"},{"label":"CDN","value":"cdn"}]
publishedAt: '2024-03-17T02:24:07.596Z'
---

Plataformas cómo Vercel, te permiten desplegar en segundos. Con un par de clicks tenés tu web pública en internet y un link para compartir.

Pero si tu objetivo es ser un verdadero full-stack, al menos tenemos que saber los funcionamientos internos;

- ¿Cómo se garantiza que un dominio recién comprado pueda ser encontrado en Internet? (DNS - Route 53)
- ¿Cómo una web puede estar disponible globalmente, con baja latencia, alta velocidad de transferencia de datos, y entregada de manera segura? (CDN- CLOUDFRONT)
- ¿Cuál es la clave para asegurar una conexión segura entre el navegador del usuario y el servidor web, especialmente al transmitir datos sensibles? (ACM - Amazon Certificate Manager)

Cuando el usuario quiere acceder a mi website, al buscar mi dominio en el navegador, se inicia un **DNS lookup.** Route 53 va a resolver el nombre de dominio que corresponde a la distribución CloudFront.

Para que esto suceda tenemos que configurar ip del dominio