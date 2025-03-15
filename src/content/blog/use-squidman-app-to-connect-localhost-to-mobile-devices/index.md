---
title: "Use SquidMan.app to connect localhost to mobile devices"
description: "Step-by-step guide using SquidMan to connect localhost to mobile devices."
date: "2014-02-20"
tags:
  - "tips-and-tricks"
  - "mobile"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

This step-by-step guide assumes you have MAC OSX installed and are troubleshooting from an iPad/iPhone. This should work in a similar fashion if your mobile device is Android based. Ensure your localhost's URL is aliased such as, myproject.dev

1. Download [SquidMan](//squidman.net/squidman/).
2. Run SquidMan.app.
3. On iPad/iPhone open **Settings > Wi-Fi** and select your Wi-Fi network.
4. Take note of the Wi-Fi network's IP address. For example, 10.61.1.92.
5. In SquidMan open your **Preferences**, _Command + ,_.
6. In **General** ensure that HTTP Port is **8080**.
7. In **Clients** add IP address 10.61.1.92, then click save.
8. In **Template** comment out `http_access deny to_localhost` and click save.
9. Open **System Preferences > Network** on your Macbook and note its IP address. For example, 10.61.1.86.
10. On iPad/iPhone open **Settings > Wi-Fi** and select your Wi-Fi network.
11. Switch the **HTTP PROXY** by pasting your Macbook's IP address, 10.61.1.86.
12. On iPad/iPhone open your localhost URL.

Thanks to, [egalo](//egalo.com/2012/05/29/testing-mac-web-site-using-local-hostname-on-mobile-device/)
