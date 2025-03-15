---
title: "Hide Desktop in OSX"
description: "Hide desktop in OSX by killing Finder."
date: "2020-04-13"
tags:
  - "tips-and-tricks"
  - "osx"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

**To hide desktop finder (to show use TRUE) open Terminal and run:**

```
	$ defaults write com.apple.finder CreateDesktop -bool false
	$ killall Finder
```

Thanks to [Stack Exchange](https://superuser.com/questions/89654/is-there-a-way-to-hide-my-finder-desktop-while-making-a-screen-recording-in-maco)
