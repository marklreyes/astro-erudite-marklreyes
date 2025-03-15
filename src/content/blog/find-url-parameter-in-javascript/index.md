---
title: "Find URL parameter in JavaScript"
description: "Use indexOf() to find a URL parameter attached to a website address."
date: "2013-09-11"
tags:
  - "tips-and-tricks"
  - "javascript"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

```
	//Assuming a url parameter of "track=yes" is appended
	if (window.location.search.indexOf('track=yes') > -1) {
		console.log('track present');
	} else {
		console.log('track not here');
	}
```


Thanks to [Stackoverflow](http://stackoverflow.com/questions/8190260/use-javascript-to-find-parameter-in-url-and-then-apply-if-then-logic)
