---
title: "4 Keys to a Clean Angular Implementation"
description: ""
date: "2016-10-17"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

**tldr**

1. Modify all model properties in the controller rather than the view; let the view have access to the capability via controller functions.
2. Keep all magic values (if you must have them at all) in the controller accessing them in the view via controller functions.
3. Evaluate all comparison, computation, and logical expressions in the controller, giving the view access to them via controller functions.
4. Pass to a controller function only what it does not already know: the loop parameter if in a loop, or no parameters at all if outside of a loop.

[4 Keys to a Clean Angular Implementation](https://www.simple-talk.com/dotnet/net-development/4-keys-clean-angular-implementation/)
