---
title: "Success integrating AJAX Solr with Solr 4.5"
description: ""
date: "2013-10-30"
tags:
  - "search-projects"
authors: ["marklreyes"]
---

In regards to my post on [Stackoverflow](http://stackoverflow.com/questions/19691535/ajax-solr-returning-the-default-wildcard-and-not-what-i-query), my resolution to this problem was to update **search.js** and check the window.location object:

```

//Old code - from reuters.js example
Manager.store.addByValue('q', '*:*');

//Custom query by end-user for my search.js file
var userQuery = window.location.search.replace( "?query=", "" );
Manager.store.addByValue('q', userQuery);
```
