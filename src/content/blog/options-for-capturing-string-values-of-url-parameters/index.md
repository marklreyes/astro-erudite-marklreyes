---
title: "JavaScript Window Location Options"
description: ""
date: "2014-01-08"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

```
/*******************************************************************
* JavaScript Window Location Options
* URL: http://www.sample.com/sample.htm?query=accreditation
*******************************************************************/
window.location.search.substr(7); //'accreditation'
window.location.href.slice(window.location.href.indexOf('?') + 7).split('&'); //'accreditation'
(window.location.href.indexOf('query=') > -1); //true
(window.location.href.indexOf('jumpTo=') > -1); //false

```
