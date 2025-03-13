---
title: "Dynamically wrap specific HTML elements with jQuery"
description: ""
date: "2013-09-17"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

Constructs of my HTML and selectors are pertinent to my project only. HTML is assumed to have an initial div block with an unordered list as its child written natively to the index file.

```

//Published unordered list
var pubList = $('div.entrysingle.hidden ul');

//Check if unordered list is visible
if (pubList.length > 0) {

    var boxItOptHdrs = $('div.entrysingle.hidden ul .selectboxit-optgroup-header');
    var split_at = boxItOptHdrs;

    $(split_at).each(function() {
      $(this).add($(this).nextUntil(split_at)).wrapAll('
```
