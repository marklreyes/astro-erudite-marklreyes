---
title: "How to edit hosts file in OSX"
description: ""
date: "2013-03-19"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

**Step 1 – Open the Terminal.app**

**Step 2 – Open the hosts file** _$ sudo nano /private/etc/hosts_ Type your user password when prompted.

**Step 3 – Edit the hosts file** The hosts file contains some comments (lines starting with the # symbol), as well as some default hostname mappings (e.g. 127.0.0.1 – localhost). Simply append your new mappings underneath the default ones. Or edit one of the default values if you know what you are doing! You can navigate the file using the arrow keys.

**Step 4 – Save the hosts file** When done editing the hosts file, press control-o to save the file. Press enter on the filename prompt, and control-x to exit the editor.

**Step 5 – Flush the DNS cache** On Leopard you can issue a simple Terminal command to flush the DNS cache, and have your host file changes to take immediate effect: _$ dscacheutil -flushcache_

Thanks to [decoding the web](http://decoding.wordpress.com/2009/04/06/how-to-edit-the-hosts-file-in-mac-os-x-leopard/ "How to edit the host files in mac osx leopard")
