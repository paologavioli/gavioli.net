---
title: "Firewall fanless per lo studio: OPNsense su mini-PC"
description: "Mini-PC senza ventole, OPNsense e zero rumore sotto la scrivania. Setup completo con costo sotto i 200€."
date: 2025-06-03
category: hardware
tags: [firewall, opnsense, mini-pc]
---

## Perché un firewall dedicato

Il router dell'ISP fa schifo. Lo sanno tutti. Ma spiegarlo al cliente è un'altra storia.

Strategia: installo un mini-PC davanti al modem, lo chiamo "il firewall", il cliente è felice e io dormo.

## Hardware scelto

**Beelink EQ12** — Intel N100, 8GB RAM, 256GB SSD, 2x 2.5GbE
- Prezzo: ~120€ su Amazon
- Consumo: 6W idle
- Rumore: zero, fanless

Perfetto per stare in una cassettina tecnica o sopra uno switch.

## Installazione OPNsense

1. Scarica l'immagine da [opnsense.org](https://opnsense.org)
2. Flashla su USB con Rufus o `dd`
3. Boot, segui il wizard

```bash
# Su Linux per flashare
dd if=OPNsense-24.7-dvd-amd64.iso of=/dev/sdb bs=4M status=progress
```

## Configurazione base

```
WAN → rete ISP (DHCP o PPPoE)
LAN → 192.168.1.0/24
```

Quello che aggiungo sempre:
- Unbound DNS con blocklist per i domini pubblicitari
- IDS/IPS con Suricata (regole ET Open, gratis)
- VLAN per separare WiFi ospiti
- WireGuard per accesso remoto mio

## Conclusione

200€ di hardware, qualche ora di config, cliente protetto e contento. ROI immediato alla prima volta che blocca un malware.
