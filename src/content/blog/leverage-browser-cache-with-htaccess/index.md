---
title: "Leverage browser cache with .htaccess"
description: ""
date: "2013-10-24"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

A **quick** win for web performance. Modify your root directory's .htaccess file to leverage browser cache. I've applied this solution several times and you receive instant results when testing on Google PageSpeed. This example illustrates this solution in seconds - in this case 2592000 (30 days).

```

<ifModule mod_expires.c>
	ExpiresActive On
	ExpiresDefault "access plus 2592000 seconds"
	ExpiresByType image/x-icon "access plus 2592000 seconds"
	ExpiresByType image/jpeg "access plus 2592000 seconds"
	ExpiresByType image/png "access plus 2592000 seconds"
	ExpiresByType image/gif "access plus 2592000 seconds"
	ExpiresByType application/x-shockwave-flash "access plus 2592000 seconds"
	ExpiresByType text/css "access plus 2592000 seconds"
	ExpiresByType text/javascript "access plus 2592000 seconds"
	ExpiresByType application/javascript "access plus 2592000 seconds"
	ExpiresByType application/x-javascript "access plus 2592000 seconds"
	ExpiresByType text/html "access plus 2592000 seconds"
	ExpiresByType application/xhtml+xml "access plus 2592000 seconds"
</ifModule>
```

Thanks to, [Samuel Santos](http://www.samaxes.com/2011/05/improving-web-performance-with-apache-and-htaccess/)
