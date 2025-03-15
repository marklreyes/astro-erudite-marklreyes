---
title: "Show hidden files in Finder"
description: "Show hidden files in OSX by killing Finder."
date: "2013-03-28"
tags:
  - "tips-and-tricks"
  - "osx"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

**To show hidden files (to set back to hidden use FALSE) open Terminal and run:**

```
$ defaults write com.apple.finder AppleShowAllFiles TRUE
$ killall Finder
```

Thanks to [Lifehacker](http://lifehacker.com/188892/show-hidden-files-in-finder "Show hidden files in finder")
