---
title: "What the heck is the event loop anyway?"
description: "The event loop deconstructed in full by Philip Roberts - packed with an easy going narrative, slides and illustrations."
date: "2021-11-16"
tags:
  - "tips-and-tricks"
  - "javascript"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

<div style="--aspect-ratio: 16/9;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ?si=O673Mknuv4RNLN-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> The event loops job is to look at the stack and look at the task queue. If that stack is empty it takes the first thing on the queue and pushes it on to the stack.
>
-- <cite>Philip Roberts, JSConf EU</cite>
