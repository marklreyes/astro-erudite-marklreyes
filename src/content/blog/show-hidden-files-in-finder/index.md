---
title: "Show hidden files in Finder"
description: ""
date: "2013-03-28"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

**To show hidden files (to set back to hidden use FALSE) open Terminal and run:**

```
$ defaults write com.apple.finder AppleShowAllFiles TRUE
$ killall Finder
```

Thanks to [Lifehacker](http://lifehacker.com/188892/show-hidden-files-in-finder "Show hidden files in finder")
