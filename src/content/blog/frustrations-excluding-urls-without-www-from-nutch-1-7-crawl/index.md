---
title: "Frustrations excluding urls from Nutch 1.7 crawl"
description: ""
date: "2013-11-01"
tags:
  - "search-projects"
authors: ["marklreyes"]
---

I'm currently using Nutch 1.7 to crawl my domain. My issue is specific to URLs being indexed as www vs. non-www.

Specifically, after firing the crawl and index to Solr 4.5 then validating the results on the front-end with AJAX Solr, the search results page lists results/pages that are both 'www' and '' urls such as:

```

www.mywebsite.com
mywebsite.com
www.mywebsite.com/page1.html
mywebsite.com/page1.html
```

My understanding is that the url filtering aka regex-urlfilter.txt needs modification. Are there any regex/nutch experts that could suggest a solution?

```

# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


# The default url filter.
# Better for whole-internet crawling.

# Each non-comment, non-blank line contains a regular expression
# prefixed by '+' or '-'.  The first matching pattern in the file
# determines whether a URL is included or ignored.  If no pattern
# matches, the URL is ignored.

# skip file: ftp: and mailto: urls
-^(file|ftp|mailto):

# skip image and other suffixes we can't yet parse
# for a more extensive coverage use the urlfilter-suffix plugin
-\.(gif|GIF|jpg|JPG|png|PNG|ico|ICO|css|CSS|sit|SIT|eps|EPS|wmf|WMF|zip|ZIP|ppt|PPT|mpg|MPG|xls|XLS|gz|GZ|rpm|RPM|tgz|TGZ|mov|MOV|exe|EXE|jpeg|JPEG|bmp|BMP|js|JS)$

# skip URLs containing certain characters as probable queries, etc.
-[?*!@=]

# skip URLs with slash-delimited segment that repeats 3+ times, to break loops
-.*(/[^/]+)/[^/]+\1/[^/]+\1/

# accept anything else
+^http://([a-z0-9]*\.)*mywebsite.com/
```

Also on [Stackoverflow](http://stackoverflow.com/questions/19731904/exclude-urls-without-www-from-nutch-1-7-crawl) and [pastebin](http://pastebin.com/Cp6vUxPR).
