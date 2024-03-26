---
title: 'Mi primer deploy en AWS'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'mi-primer-deploy-en-aws'
description: 'Después de aprender un poco de las bases, empecé a jugar un poco con algunos servicios basicos de AWS y desplegué un sitio estatico (HTML)'
coverImage: '/images/screenshot-from-2024-03-26-12-46-49-A4MD.png'
tags: [{"label":"CloudFront","value":"cloudFront"},{"label":"S3","value":"s3"},{"label":"Route53","value":"route53"},{"label":"ACM","value":"acm"},{"label":"DNS","value":"dns"},{"label":"CDN","value":"cdn"}]
publishedAt: '2024-03-17T02:24:07.596Z'
---

Plataformas cómo Vercel, te permiten desplegar en segundos. Con un par de clicks tenés tu web pública en internet y un link para compartir.

Deployar un simple HTML me ayudo a comprender mejor lo que pasa internamente, y aprendí sobre algunos servicios básicos de AWS;

- ¿Cómo se garantiza que un dominio recién comprado pueda ser encontrado en Internet? (DNS - Route 53)
- ¿Cómo una web puede estar disponible globalmente, con baja latencia, alta velocidad de transferencia de datos, y entregada de manera segura? (CDN- CLOUDFRONT)
- ¿Cuál es la clave para asegurar una conexión segura entre el navegador del usuario y el servidor web, especialmente al transmitir datos sensibles? (ACM - Amazon Certificate Manager)

---

Hostear un sitio en S3 puede ser tan fácil como subir el archivo HTML y usar el link que nos provee AWS [http://nombredelbucket.s3-website-region.amazonaws.com](http://nombredelbucket.s3-website-region.amazonaws.com/).

> ![](/images/screenshot-from-2024-03-26-12-15-05-MyNj.png)
> ****Amazon S3 (Simple Storage Service)** no es unicamente un servicio de almacenamiento de objetos altamente escalable, también puede servir contenido estático a través de HTTP. Es fácil de configurar y puede manejar grandes volúmenes de tráfico.

Una vez que hayas subido tu sitio web a un bucket de S3, podés configurar tu dominio para que apunte a ese bucket utilizando **Route 53**, el servicio de DNS de AWS.* 

>  Route 53 te permite asociar tu dominio con recursos en la nube de AWS, como tu bucket de S3, para que los usuarios puedan acceder a tu sitio web utilizando tu propio nombre de dominio personalizado.

Ahora podríamos acceder a nuestro sitio a través de <http://xxx.example.com>

![](/images/screenshot-from-2024-03-26-12-40-42-AxNj.png)

🔓️`Lo que no tiene un certificado SSL (HTTPS), por lo que perderíamos tráfico y credibilidad.`

> ![](/images/screenshot-from-2024-03-26-12-16-48-Y1Nz.png)
>
> Es importante tener en cuenta que, si no se utiliza HTTPS, los navegadores modernos pueden mostrar advertencias de seguridad para tu sitio web. Esto puede hacer que los usuarios se sientan inseguros y reducir la credibilidad de tu sitio. Además, los motores de búsqueda como Google también pueden penalizar los sitios web que no utilizan HTTPS en sus resultados de búsqueda.

**Podemos generar un Certificado SSL usando Amazon Certificate Manager y vincularlo con nuestro CDN (CloudFront), que es quien va a estar recibiendo las peticiones que llegan a Route 53.**

Amazon Certificate Manager (ACM) simplifica el proceso de gestión de certificados SSL/TLS al proporcionar certificados SSL gratuitos y gestionar su renovación automática. Una vez que hayas generado un certificado SSL en ACM, podés asociarlo con tu distribución de CloudFront, el servicio de CDN (Content Delivery Network) de AWS. 

CloudFront es el que recibe las peticiones que llegan a Route 53 y distribuye el contenido de tu sitio web a través de una red global de servidores para proporcionar tiempos de carga más rápidos y una mejor experiencia de usuario.

**Esto significa que ahora, las peticiones llegan encriptadas y CloudFront, usando el certificado, va a poder desencriptarlas.**

Cuando un usuario accede a tu sitio web a través de HTTPS, su navegador establece una conexión segura con CloudFront utilizando el certificado SSL asociado. CloudFront puede desencriptar las solicitudes utilizando el certificado SSL y, a continuación, entregar el contenido de tu sitio web de manera segura al usuario.

### Resultado final:

![](/images/screenshot-from-2024-03-26-12-46-49-kyMT.png)

![sitio estatico bajo domnio propio, servido a través de HTTPS](/images/screenshot-from-2024-03-26-12-19-13-QzNj.png)