---
title: "Simple PHP Proxy returns incorrect JSON from Apache Solr"
description: "Implemented simple proxy to communicate to an Apache Solr instance outside of my domain."
date: "2014-04-16"
tags:
  - "search-projects"
  - "php"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

I've implemented Ben Alman's [simple-proxy.php](//github.com/cowboy/php-simple-proxy) to communicate to an Apache Solr instance (in this case my local) outside of my domain.

I’ve followed the instructions in full, the core of which is to set the simple-proxy.php on my domain’s file server.

I’m curious on if there are any modifications that must be made to the proxy in order for the response to be in the correct format?

View on [Stackoverflow](//stackoverflow.com/questions/23116878/simple-php-proxy-returns-incorrect-json-from-apache-solr-instance).
