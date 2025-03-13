---
title: "CSS Font Subsetting"
description: ""
date: "2014-05-30"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

In short, depending on what foundry/font provider you choose to use (ie. Google Fonts, Font Squirrel, etc.) you can be selective in terms of what glyphs you want to leverage versus calling the entire set of glyphs in one large request. By being selective, you can craft a much lighter request by using additional parameters in your `src`.

The trade-offs are evident. This has to be applied to a set of glyphs that are more predictable to manage and which don't change that often (ie logos).

It's a very nickel-and-dimed approach in my opinion, but it's definitely useful.

Thanks to, [demosthenes](http://demosthenes.info/blog/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting?utm_source=CSS-Weekly&utm_campaign=Issue-112&utm_medium=web).
