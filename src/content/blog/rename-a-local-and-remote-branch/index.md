---
title: "Rename a local and remote branch"
description: "Change the name of your current branch and ship it back to the remote repo."
date: "2017-03-17"
tags:
  - "tips-and-tricks"
  - "git"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

`# Rename your local branch. If you are on the branch to rename: git branch -m branch-new-name`

`# Delete the old-name remote branch and push the new-name local branch. git push origin :branch-old-name branch-new-name  ``# Reset the upstream branch for the new-name local branch. git push origin -u branch-new-name`

Thanks to, [multiplestates.wordpress.com](https://multiplestates.wordpress.com/2015/02/05/rename-a-local-and-remote-branch-in-git/).
