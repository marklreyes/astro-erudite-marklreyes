---
title: "Minify, a PHP5 app for client-side performance"
description: ""
date: "2014-03-25"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

If you need a minifier for CSS and JS assets, feel free to explore [Minify](https://github.com/mrclay/minify).

Minify is a PHP5 app that helps you follow several rules for client-side performance. It combines multiple CSS or Javascript files, removes unnecessary whitespace and comments, and serves them with gzip encoding and optimal client-side cache headers.

Ensure the **min** directory lives at the project root of your file server, then you can begin concatenating and minifiying your css and js assets into one source. See below,

```

//If you externally link assets such as,
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css">
<script src="js/jquery-1.8.0.min.js"></script>
<script src="js/jquery.total-storage.min.js"></script>

//Concatenate them like so,
<link rel="stylesheet" href="min/?f=css/bootstrap.min.css,css/main.css">
<script src="min/?f=js/jquery-1.8.0.min.js,js/jquery.total-storage.min.js,js"></script>
```
