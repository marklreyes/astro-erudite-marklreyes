---
title: "Crawl Metatags with Nutch 1.7"
description: ""
date: "2013-11-20"
tags:
  - "search-projects"
authors: ["marklreyes"]
---

In regards to the [Stackoverflow](http://stackoverflow.com/questions/15504828/extracting-html-meta-tags-in-nutch-2-x-and-having-solr-4-index-it) recommendation on enabling the metatag plugin, I came across a roadblock when I had to merge this solution to my integration of AJAX Solr. Unfortunately, taking the recommendation at face value caused a JavaScript error of **undefined** when accessing the the meta tag key/value pair from the JSON object. Granted the recommendation chained **metatag.description** together, it interpreted **metatag** to be an object that did not exist.

Reviewing the key/value structure of JSON, I came across this discussion on [Parsing JSON with hyphenated key names](https://developer.appcelerator.com/question/120227/parsing-json-with-hyphenated-key-names), I thought the same would hold true for mine. That said, I've augmented the [Stackoverflow](http://stackoverflow.com/questions/15504828/extracting-html-meta-tags-in-nutch-2-x-and-having-solr-4-index-it) suggestion slightly to leverage underscores versus dot syntax and came up with the following:

```

/* For schema.xml on Nutch and Solr */
<field name="metatag_description" type="text_general" stored="true" indexed="true"/>
<field name="metatag_keywords" type="text_general" stored="true" indexed="true"/>

/* For solrindex-mapping.xml on Nutch */
<field dest="metatag_description" source="metatag.serptitle"/>
<field dest="metatag_keywords" source="metatag.serpdescription"/>
```

This was implemented on Nutch 1.7 on a Solr 4.5.0 instance.

Please refer to the following for context:

1. [Extracting HTML meta tags in Nutch 2.x and having Solr 4 index it](http://stackoverflow.com/questions/15504828/extracting-html-meta-tags-in-nutch-2-x-and-having-solr-4-index-it)
2. [Parsing JSON with hyphenated key names](https://developer.appcelerator.com/question/120227/parsing-json-with-hyphenated-key-names)
3. [Nutch - Parse Metatags](http://wiki.apache.org/nutch/IndexMetatags)
