---
title: "Comandi di rete che dimentico sempre"
description: "Il mio cheatsheet personale: ip, tcpdump, mtr, ss, nmap e altri amici che cerco su Google ogni volta."
date: 2025-05-09
category: note
tags: [cli, networking, cheatsheet, linux]
image: /images/thumb-cli.svg
---

## Perché questo post

Cerco gli stessi comandi ogni sei mesi. Ho deciso di smettere di cercarlI su Google e tenerli qui.

---

## `ip` — il nuovo ifconfig

```bash
# Mostra interfacce e indirizzi
ip addr show
ip a  # abbreviato

# Route table
ip route show
ip r

# Aggiungi route temporanea
ip route add 10.10.0.0/16 via 192.168.1.1

# Alza/abbassa interfaccia
ip link set eth0 up
ip link set eth0 down

# ARP table
ip neigh show
```

## `ss` — il nuovo netstat

```bash
# Porte in ascolto
ss -tlnp

# Connessioni attive TCP
ss -tnp

# UDP
ss -unp

# Tutto
ss -anp | grep :443
```

## `tcpdump` — il classico

```bash
# Traffico su interfaccia
tcpdump -i eth0

# Solo HTTP
tcpdump -i eth0 port 80 or port 443

# Cattura su file
tcpdump -i eth0 -w /tmp/capture.pcap

# Leggi il file dopo
tcpdump -r /tmp/capture.pcap
```

## `mtr` — traceroute intelligente

```bash
# Analisi hop-by-hop continua
mtr 8.8.8.8

# Report una tantum, senza reverse DNS
mtr -r -n --report-cycles 20 8.8.8.8
```

## `nmap` — discovery

```bash
# Scan subnet veloce
nmap -sn 192.168.1.0/24

# Porte aperte su host
nmap -sV 192.168.1.10

# Script vuln base
nmap --script=vuln 192.168.1.10
```

---

Aggiorno questo post ogni volta che trovo qualcosa di utile. Ultimo aggiornamento: giugno 2025.
