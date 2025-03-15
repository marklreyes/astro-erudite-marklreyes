---
title: "nth:child CSS Selectors"
description: "CSS3 and IE7/8 versions of nth:child CSS selections."
date: "2013-09-20"
tags:
  - "tips-and-tricks"
  - "css"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

CSS3 and IE7/8 versions of nth:child CSS selections,

```
	/* standard nth */
	ul.menu li:nth-child(3)
	{
			/* styles for the 3rd LI */
	}

	/* IE nth */
	ul.menu>li + li + li
```

Thanks to, [Michael Barrett @ Abouthalf.com](http://abouthalf.com/development/poor-mans-nth-child-selector-for-ie-7-and-8/)
