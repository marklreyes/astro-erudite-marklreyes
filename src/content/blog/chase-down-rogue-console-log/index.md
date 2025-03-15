---
title: "Chase down rogue console.log(); statements"
description: "Find console statements line-by-line by loading this JavaScript snippet."
date: "2014-05-30"
tags:
  - "tips-and-tricks"
  - "javascript"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

Find `console.log();` statements line-by-line by loading this JavaScript snippet to the top of your code (the higher the better):

```

['log', 'warn'].forEach(function(method) {
  var old = console[method];
  console[method] = function() {
    var stack = (new Error()).stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
      stack = stack.slice(1);
    }
    var args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
  };
});
```

Be sure to remove this before entering production!

Thanks to, [Remy Sharp](http://remysharp.com/2014/05/23/where-is-that-console-log/).
