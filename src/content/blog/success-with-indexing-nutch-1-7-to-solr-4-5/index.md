---
title: "Success with indexing Nutch 1.7 to Solr 4.5"
description: "Pointed the crawl and index to the location of a specific collection."
date: "2013-10-30"
tags:
  - "search-projects"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

In regards to my post on [Stackoverflow](http://stackoverflow.com/questions/19551949/exception-in-thread-main-java-io-ioexception-job-failed-on-nutch-1-7), I pointed my crawl and index to the location of my collection. In this case:

```
	$ bin/nutch crawl urls -solr http://localhost:8983/solr/rockies -depth 1 -topN 5
	$ bin/nutch solrindex http://localhost:8983/solr/rockies crawl/crawldb -linkdb crawl/linkdb crawl/segments/*
```

Additionally, I updated the **\-depth** to 1 (specifies how deep to go after the link is defined. In this case 1 link from main page) and **\-topN** to 5 (how many documents will be retrieved from each level).
