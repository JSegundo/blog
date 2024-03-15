---
slug: 'primeros-pasos-aws-cloud'
title: 'Primeros pasos - AWS Cloud'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: '/images/whatsapp-image-2024-01-30-at-11.webp_2024-02-20t20_38_42.343z_output_2-g4ND.jpeg'
description: 'Este artículo tiene la intención de introducir al desarrollador a algunos de los principales conceptos a considerar cuando decidimos aprender sobre computación en la nube'
coverImage: '/images/aws-g5Nz.png'
tags: ''
publishedAt: '2024-03-15T13:47:29.164Z'
---


Created: 21 de febrero de 2024 21:10 Tags: Basics, Cloud, Technical Writing

---

Este artículo tiene la intención de introducir al desarrollador a algunos de los **principales conceptos** a considerar cuando decidimos aprender sobre computación en la nube, una área de la tecnología que está ganando cada vez más relevancia en el mundo actual. Desde el manejo de grandes cantidades de datos hasta el alojamiento de sitios web y aplicaciones, la nube es una herramienta esencial para cualquier desarrollador.

&lt;aside&gt; 👋🏻 Tomalo como una introducción y no como una guía definitiva, yo tambien estoy aprendiendo!

&lt;/aside&gt;

# ¿Cuál es el primer paso para crear recursos en la nube?

El primer paso crucial al crear recursos en la nube es seleccionar una **región** desde la cual el proveedor de la nube (AWS) va a servir nuestros recursos. Esta decisión depende de varios factores, como la ubicación geográfica de los usuarios, las leyes y regulaciones locales, y los costos asociados con cada región.

Las regiones en AWS están diseñadas para ofrecer alta disponibilidad y redundancia. Cada región se compone de múltiples **Zonas de Disponibilidad (AZ)**, lo que permite distribuir tus recursos.

Las necesitamos para distribuir nuestros recursos. ¿Para qué? Si una zona falla, **la otra te respalda** y sirve tus recursos. **Esta distribución garantiza la resiliencia de tus aplicaciones:** si una zona se viera afectada por alguna falla, las otras zonas pueden respaldar y continuar sirviendo tus recursos. Esta es la esencia del **concepto de alta disponibilidad** (High Availability).

Cada AZ tiene uno o mas data centers con servidores.

![Cuantas más AZ tenga una región, mejor será la disponibilidad y la capacidad de recuperación de tus aplicaciones. ](images/primeros-pasos-aws/Screenshot_from_2024-02-21_23-29-31.png)

**Cuantas más AZ tenga una región, mejor será la disponibilidad y la capacidad de recuperación de tus aplicaciones.**

Una vez que seleccionaste una región, podés crear tu propio **Virtual Private Cloud (VPC)**. Un VPC te proporciona un entorno de red virtual en la nube completamente aislado y personalizable.

> Tu propio datacenter virtual

![Ejemplo de VPC distrubuído en 3 AZs](images/primeros-pasos-aws/Screenshot_from_2024-02-22_00-05-03.png)

Ejemplo de VPC distrubuído en 3 AZs

Dentro de tu VPC, podés definir **subnets** (subredes) que se extienden a través de diferentes zonas de disponibilidad, lo que te permite distribuir tus recursos de manera eficiente y garantizar la disponibilidad y el rendimiento de tus aplicaciones. Estas subredes son como salas de un edificio, donde cada sala puede tener un propósito específico y contener recursos específicos.

![Screenshot from 2024-02-28 12-12-53.png](images/primeros-pasos-aws/Screenshot_from_2024-02-28_12-12-53.png)

Pero las VPC están aisladas de forma predeterminada, **NO TIENEN ACCESO A INTERNET,** lo que puede ser un problema si tus recursos necesitan comunicarse con el mundo exterior.

&lt;aside&gt; ❓ ¿Cómo hacemos que otras personas accedan a nuestros recursos (nuestra web)?

&lt;/aside&gt;

Para permitir que tus recursos dentro de la VPC, como tu sitio web, sean accesibles desde Internet, necesitas configurar un **Internet Gateway**. Esto te permite asociar tu VPC a Internet y ubicar los recursos que querés hacer públicos en una **Public Subnet.** Este es un proceso crucial para hacer que tus aplicaciones y servicios sean accesibles para tus usuarios.

![Primeros%20pasos%20-%20AWS%20Cloud%20358118d1d6454f8881d515d617024053/Screenshot_from_2024-02-22_00-38-14.png](images/primeros-pasos-aws/Screenshot_from_2024-02-22_00-38-14.png)

En esta subred, podés desplegar **instancias EC2**, que son **máquinas virtuales (Virtual machines - VM)** escalables y personalizables que pueden servir páginas web, actuar como servidores SSH y mucho más. Las instancias EC2 son uno de los recursos más utilizados en AWS, gracias a su flexibilidad y a la gran variedad de tipos de instancias disponibles.

Ahora ya podríamos tener nuestra primera web accesible, pública para todo el mundo. Este es un gran paso para cualquier desarrollador, demuestra que uno es capaz de configurar correctamente un entorno de nube y desplegar una aplicación en él.

&lt;aside&gt; ⚠️ Pero... esto no escala

&lt;/aside&gt;

Cuando tu web empiece a tener mucho tráfico, **una sola instancia EC2 puede no ser suficiente para manejar la carga.** Necesitamos algo que escale mejor, algo elástico..

- **Elastic Load Balancers** (ELB) : Ahora podemos repartir la carga de todo el tráfico que recibimos, **entre varias instancias EC2 en diferentes Zonas de Disponibilidad**. Los ELB son una herramienta poderosa para manejar el tráfico entrante, ya que pueden distribuir la carga entre varias instancias, lo que ayuda a prevenir la sobrecarga de una sola instancia y mejora la disponibilidad y el rendimiento de tu aplicación.

![Primeros%20pasos%20-%20AWS%20Cloud%20358118d1d6454f8881d515d617024053/Screenshot_from_2024-02-22_00-51-42.png](images/primeros-pasos-aws/Screenshot_from_2024-02-22_00-51-42.png)

Un ELB también nos da seguridad, ahora podríamos poner nuestras VMs en PRIVATE SUBNETS y el ELB en una pública. Entonces, el tráfico llega ahí y nuestras VMs no son accesibles desde afuera. Este es un enfoque común para mejorar la seguridad de una aplicación en la nube, ya que limita el acceso directo a las instancias y solo permite el tráfico a través del balanceador de carga.

&lt;aside&gt; ❓ ¿Y qué pasa si nuestras VMs que tenemos en private subnets necesitan acceder a internet?

&lt;/aside&gt;

- Podés configurar un **NAT Gateway** en tus subredes públicas. Esto permite que las instancias en subredes privadas se conecten a servicios fuera de la VPC de manera segura, mientras que los servicios externos no pueden iniciar una conexión con estas instancias\*\*, lo que fortalece la seguridad de tu entorno.\*\* El NAT Gateway actúa como un intermediario entre las instancias en la VPC y el internet, lo que permite a las instancias acceder a los recursos de internet sin exponerlas directamente.

![images/primeros-pasos-aws/Screenshot_from_2024-02-22_00-55-40.png](images/primeros-pasos-aws/Screenshot_from_2024-02-22_00-55-40.png)

### ¿Y para nuestras VMs que querrían acceso a internet?

Bueno, al desplegar una aplicación web en AWS, es fundamental tener en cuenta la conectividad a Internet para garantizar el acceso a recursos externos, como integraciones de API, servicios de autenticación, actualizaciones de software y más. Configurar adecuadamente los recursos de red, como las subredes públicas y privadas, los gateways de Internet y los balanceadores de carga, te va a permitir construir aplicaciones altamente disponibles, escalables y seguras en la nube. Este es un aspecto crucial de la arquitectura de la nube y es esencial para el éxito de cualquier aplicación en la nube.

[La fuente: Morsa Programando](https://www.youtube.com/watch?v=sLptRzpPDtU&list=PLihI9s9wwCPT88FUcbfXESuzNZjY-AKR3&index=1) \*\*\*\*

Más recursos:

[AWS Public vs Private Services](https://www.youtube.com/watch?v=OJSVtgZrVsg&list=PLTk5ZYSbd9Mjb-NyMe6SRnq7a7MvYT-UZ)

[AWS VPC Basics](https://www.youtube.com/watch?v=7_NNlnH7sAg)

[el sketch](https://www.notion.so/el-sketch-8680b6cc6d10463e9354d37202a96677?pvs=21)