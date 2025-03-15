---
title: "Connect Localhost to iPhone with MAMP"
description: "View your local test environment with MAMP on iPhone."
date: "2013-08-13"
tags:
  - "tips-and-tricks"
  - "mobile"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

1. Ensure both Macbook Pro and iPhone are on the same wireless network.
2. Verify Macbook Pro IP address, _System Preferences > Network > Wi-Fi > Status_ (ie. **10.61.0.125**).
3. Open apache httpd.conf file, _Applications > MAMP > conf > apache_.
4. On httpd.conf file, **Command+F** _Listen_ to verify the port assigned (ie. **8888**).
5. Open iPhone browser (safari/chrome, etc.).
6. Type the IP address and port assignment, **10.61.0.125:8888**.

Thanks to [Stackoverflow](http://stackoverflow.com/questions/4063119/test-local-websites-with-mamp-on-iphone)

PS: This also holds true for **ANDROID** phones with their respective browsers. As long as you are in the same network.
