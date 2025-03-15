---
title: "Importing CSS Breakpoints Into Javascript"
description: "Have JavaScript import breakpoints directly from the CSS values in the DOM."
date: "2017-02-12"
tags:
  - "tips-and-tricks"
  - "javascript"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

A quick and easy solution to this problem is to have your JS import the breakpoints directly from the CSS values in the DOM. This solution brings the current breakpoint variable into your JS in a way that's:

- Simple & Lightweight
- DRY
- Compatible with all browsers that support media queries (IE9+)

<iframe height="300" style="width: 100%;" scrolling="no" title="Importing CSS Breakpoints Into Javascript" src="https://codepen.io/mherchel/embed/gbygBd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mherchel/pen/gbygBd">
  Importing CSS Breakpoints Into Javascript</a> by Mike Herchel (<a href="https://codepen.io/mherchel">@mherchel</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

See Lullabot article, [Importing CSS Breakpoints Into Javascript](https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript)
