---
title: "The Friendship Algorithm in JavaScript"
description: "I couldn't resist playing around with Sheldon's friendship algorithm."
date: "2014-06-30"
tags:
  - "personal-log"
image: '../../../../public/static/1200x630_bigbangtheory.jpg'
authors: ["marklreyes"]
---

I'm a big fan of [The Big Bang Theory](http://www.cbs.com/shows/big_bang_theory/) and I couldn't resist playing around with Sheldon's friendship algorithm. It's pretty much one object represented as `Sheldon` guided by the module pattern (thanks to [Addy Osmani](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)).

I encourage you to [fork](https://github.com/marklreyes/The-Friendship-Algorithm) this code and get some zen coding in. Since the logic is "safely" protected by `Sheldon`, you should be able to integrate any boilerplate of your choice for some fun interfaces. Also, feel free to refactor the logic when needed. It could always be better. That said, kudos to Wolowitz for plotting out the loop counter and escape.

![](images/Screenshot-2023-12-12-at-2.43.13 PM-1024x809.png)

To demo this in real-time, pop open your browser's dev tool, navigate to the console and run:

```
	//Open your console right now and run this.
	Sheldon.ask();
```
