---
title: "Check MSIE 7, 8, 9 using JavaScript"
description: "Leverage the navigator object to check what version of Internet Explorer you're using. Yuck."
date: "2013-10-09"
tags:
  - "tips-and-tricks"
  - "javascript"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

```
        var isIE9 = navigator.appVersion.indexOf("MSIE 9.")!=-1;
        var isIE8 = navigator.appVersion.indexOf("MSIE 8.")!=-1;
        var isIE7 = navigator.appVersion.indexOf("MSIE 7.")!=-1;
```

Thanks to, [jQuery4u](http://www.jquery4u.com/browsers-2/check-ie-version/).
