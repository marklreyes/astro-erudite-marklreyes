---
title: "PageSpeed: here.ashford.edu"
description: ""
date: "2014-04-07"
tags:
  - "page-speed-projects"
authors: ["marklreyes"]
---

Page speed seems to be one of the bigger priorities as of late and I was designated with the RND task in making one of our subdomains, [here.ashford.edu](http://here.ashford.edu) a bit...faster. In summary, this is a single-page design intended to support our Marketing campaigns during the 2014 Winter Olympics.

In one sprint (2 weeks in my case), we were able to set some benchmarks and reduce our network requests, optimize our images, minify our CSS, minify our JavaScript, compress and cache our assets by tweaking our server-side configurations.

The **before** benchmarks are listed below for 03/19/2014 unless otherwise stated:

1. Google PageSpeed - Mobile: 55/100
2. Google PageSpeed - Desktop: 71/100
3. Y-SLOW: 67/100
4. Network Requests: 112 (03/21/2014)

The **after** benchmarks are listed below for 03/27/2014:

1. Google PageSpeed - Mobile: 64/100
2. Google PageSpeed - Desktop: 83/100
3. Y-SLOW: 79/100
4. Network Requests: 87

Tools and methods I used to compliment our page speed via server-side:

- [Minify](http://www.marklreyes.com/207/)
- [Browser caching](http://www.marklreyes.com/leverage-browser-cache-with-htaccess/)

Tools and methods I used to compliment our page speed via client-side,:

- [Stitches](http://www.marklreyes.com/create-image-sprites-fast-w-stitches/)
- [ImageOptim](http://imageoptim.com/)

I still have some items to solve—Youtube iframes ultimately being the culprit. Getting into a 1-second threshold with mobile is another instigator. I'm suspecting a JavaScript solution is on the horizon but we shall see.
