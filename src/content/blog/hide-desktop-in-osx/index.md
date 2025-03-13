---
title: "Hide Desktop in OSX"
description: ""
date: "2020-04-13"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

**To hide desktop finder (to show use TRUE) open Terminal and run:**

```
$ defaults write com.apple.finder CreateDesktop -bool false
$ killall Finder
```

Thanks to [Stack Exchange](https://superuser.com/questions/89654/is-there-a-way-to-hide-my-finder-desktop-while-making-a-screen-recording-in-maco)
