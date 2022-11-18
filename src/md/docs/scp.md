---
title: "SCP"
date: "2022-10-07"
author: "Chelo"
description: "Manual del comando de la terminal"
tags: ["linux"
]
---

## Qué es SCP?
Es un comando para la terminal de Linux que sirve para hacer una transferencia de archivo entre 2 host.

## Para que sirve SCP?
Facilita la transferencia entre servidores, ej tenemos un respaldo que tenemos que pasar de un servidor al otro, en vez de descargar el mismo ej por Filezilla o alguno programa similar podemos hacer la transferencia de servidor a servidor en un par de lineas de comando, todavia mas sencillo si tienen las claves ssh.

## Comandos
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