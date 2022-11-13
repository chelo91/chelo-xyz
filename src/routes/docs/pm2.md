---
title: PM2
date: "2022-10-07"
author: "Chelo"
description: "Paquete de Node para levantar un proyecto"
slug: pm2
tags: [
]
---

## Instalacion
- Con yarn:
```bash
yarn global add pm2
```

- Con npm:
```bash
npm install pm2 -g
```

## Funciones
- Lista aplicaciones corriendo
```bash
pm2 list
```

- Levantar pm2 con comando en especial
```bash
pm2 start "yarn run dev" --name @nombre
```