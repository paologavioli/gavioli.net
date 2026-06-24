---
title: "Segmentare la rete con VLAN su MikroTik"
description: "Ufficio, ospiti e server su sottoreti separate: come isolo i reparti senza complicare la vita agli utenti."
date: 2025-06-12
category: sysadmin
tags: [vlan, mikrotik, networking]
---

## Il problema

Un cliente con 20 dipendenti mi chiama: i tecnici lavorano sulla stessa rete dei tablet in reception. Ovviamente qualcuno stava sniffando il traffico con Wireshark "per divertimento".

Soluzione: VLAN. Costo aggiuntivo: zero, il RouterBoard aveva già tutto.

## Schema finale

```
VLAN 10 — Ufficio  (192.168.10.0/24)
VLAN 20 — Ospiti   (192.168.20.0/24)
VLAN 30 — Server   (192.168.30.0/24)
```

## Configurazione su RouterOS

```bash
# Creo le bridge
/interface bridge add name=bridge-ufficio
/interface bridge add name=bridge-ospiti

# VLAN sul trunk verso lo switch
/interface vlan add interface=ether1 vlan-id=10 name=vlan10
/interface vlan add interface=ether1 vlan-id=20 name=vlan20

# Assegno indirizzi
/ip address add address=192.168.10.1/24 interface=vlan10
/ip address add address=192.168.20.1/24 interface=vlan20

# DHCP per ogni segmento
/ip pool add name=pool-ufficio ranges=192.168.10.100-192.168.10.200
/ip dhcp-server add interface=vlan10 address-pool=pool-ufficio name=dhcp-ufficio
```

## Firewall: isolare gli ospiti

```bash
# Gli ospiti non vedono l'ufficio
/ip firewall filter add chain=forward \
  src-address=192.168.20.0/24 \
  dst-address=192.168.10.0/24 \
  action=drop comment="Ospiti -> Ufficio: VIETATO"
```

## Risultato

Tre reti, un solo router, zero hardware aggiuntivo. Gli ospiti hanno internet, i tecnici hanno pace.

> **Nota pratica**: ricordati di testare sempre che gli stampanti siano raggiungibili dal segmento giusto prima di andartene. Fidati.
