---
title: "Tre settimane in Giappone con uno zaino e un cavo ethernet"
description: "SIM locale, routing, VPN e perché mi porto dietro hardware di rete anche in vacanza. Guida pratica per nerd in viaggio."
date: 2025-05-21
category: viaggi
tags: [giappone, travel, vpn, sim]
image: /images/thumb-viaggi.svg
---

## Il bagaglio tecnico

Sì, mi porto il cavo ethernet in vacanza. Giudicatemi.

Nel mio zaino, oltre ai soliti oggetti umani:
- Cavo Cat6 1.5m (piatto, ci sta ovunque)
- Mini switch 5 porte Netgear
- Raspberry Pi Zero 2W con OpenWrt
- Caricatore GaN 65W con adattatore spina JP

## SIM in Giappone

La migliore che ho trovato: **IIJmio eSIM turistica**
- 15GB per 30 giorni
- LTE veloce ovunque, anche nelle stazioni
- Acquistabile online prima di partire

```
APN: iijmio.jp
Username: mobileuser@iijmio.jp
Password: iijmio
```

## Hotspot e routing

Il Pi con OpenWrt come travel router: mi connetto alla SIM o al WiFi dell'hotel (che spesso è pessimo), e tutti i miei device vanno su una rete conosciuta con WireGuard sempre attivo.

```bash
# WireGuard sempre su, traffico italiano
wg-quick up wg0

# Verifica
curl ifconfig.me
# -> IP del mio VPS a Milano
```

## Cosa ho imparato

1. Il WiFi degli hotel a Tokyo è sorprendentemente buono
2. Le stazioni JR hanno ethernet nascosta nei totem informativi
3. I konbini (minimarket) hanno prese di corrente ai tavoli
4. Non ho mai avuto bisogno del cavo ethernet, ma c'era

Il viaggio più bello che abbia fatto. Tornerò.
