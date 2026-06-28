---
title: "Gestione PIN SIM su MikroTik LTE"
description: "Come disabilitare il PIN, sbloccare una SIM con il PUK e abilitare/disabilitare l'interfaccia LTE da terminale RouterOS."
date: 2026-06-28
category: sysadmin
tags: [mikrotik, lte, sim, routeros]
image: /images/thumb-mikrotik.svg
---

Quando gestisci router MikroTik con interfaccia LTE, prima o poi ti trovi a dover mettere mano al PIN della SIM — o perché l'operatore lo impone di default, o perché qualcuno ha sbagliato il PIN tre volte e ora hai una SIM bloccata da sbloccare con il PUK.

Tutto si fa via comandi AT direttamente da RouterOS.

## Disabilitare il PIN

Se la SIM ha un PIN attivo e vuoi toglierlo (così il router si aggancia senza chiederlo a ogni riavvio):

```bash
/interface lte at-chat lte1 input="AT+CLCK=\"SC\",0,\"3645\""
```

Il comando usa `AT+CLCK` con facility `SC` (SIM Card), operazione `0` (disabilita) e il PIN corrente come terzo parametro. Sostituisci `3645` con il PIN della tua SIM.

## Sbloccare una SIM bloccata con il PUK

Se il PIN è stato inserito sbagliato tre volte, la SIM è bloccata e serve il PUK per ripristinarla. Contestualmente devi impostare un nuovo PIN:

```bash
/interface lte at-chat lte1 input="AT+CPIN=564897,4376"
```

Il primo valore è il PUK, il secondo è il nuovo PIN che vuoi impostare. Il comando `AT+CPIN` con due parametri è riconosciuto da RouterOS come operazione di sblocco PUK.

> **Attenzione**: il PUK è solitamente stampato sulla schedina della SIM o recuperabile chiamando l'operatore. Hai 10 tentativi — al decimo la SIM viene bruciata definitivamente.

## Abilitare e disabilitare l'interfaccia LTE

Per spegnere temporaneamente l'interfaccia senza toccare la configurazione:

```bash
/interface lte disable lte1
```

Per riattivarla:

```bash
/interface lte enable lte1
```

Utile quando devi fare debug sul modem, forzare un re-aggancio alla rete o testare il failover senza staccare fisicamente l'antenna.
