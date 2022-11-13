---
title: "SCP"
date: "2022-10-07"
author: "Chelo"
description: "Manual del comando de la terminal"
tags: [
]
---

## Comandos básicos
- Archivo local a una ubicación remota
```bash
scp /users/Chelo/desktop/scp.zip root@IP_REMOTA_DESTINO:/root/
```
- Archivo remoto a máquina local
```bash
scp root@IP_REMOTA_ORIGEN:/root/SCP.zip /users/Chelo/desktop/
```
- Archivo remoto a otra ubicación remota
```bash
scp root@IP_REMOTA_ORIGEN:/root/SCP.zip chelo@IP_REMOTA_DESTINO:/root/
```