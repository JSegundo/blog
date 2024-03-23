---
title: 'Mi primer deploy en AWS'
status: 'draft'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'mi-primer-deploy-en-aws'
description: 'Después de aprender un poco de las bases, empecé a jugar un poco con algunos servicios basicos de AWS.'
coverImage: ''
tags: [{"label":"CloudFront","value":"cloudFront"},{"label":"S3","value":"s3"},{"label":"Route53","value":"route53"},{"label":"ACM","value":"acm"},{"label":"DNS","value":"dns"},{"label":"CDN","value":"cdn"}]
publishedAt: '2024-03-17T02:24:07.596Z'
---

Plataformas cómo Vercel, te permiten desplegar en segundos. Con un par de clicks tenés tu web pública en internet y un link para compartir.

Pero si tu objetivo es ser un verdadero full-stack, al menos tenemos que saber los funcionamientos internos;

- que pasa cuando compramos un dominio?
- Cómo se enruta trafico a recursos como nuettra web? (DNS - ROUTE53)
- cómo una web puede estar disponible globalmente, con baja latencia, alta velocidad de transferencia de datos, y entregada de manera segura? (CDN- CLOUDFRONT)
- Cómo nos aseguramos una conexion segura entre browser y web server, encriptando data sensible? (ACM - Amazon Certificate Manager)