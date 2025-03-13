---
title: "Mighty Morphin Data Structures, Part 3"
description: ""
date: "2021-07-13"
tags:
  - "data-structures"
  - "personal-log"
  - "podcast-projects"
authors: ["marklreyes"]
---

## Introduction

The goal for this season of AllWebSD is to deconstruct lessons learned from going head first into data structures. It’s my hope that I can translate a complex topic into an easy-going format and I’ll do so by channeling my inner 10-year-old self. You see back in my day, I was a big fan of the original Mighty Morphin Power Rangers series. So I’m going to take snapshots from that show and brush it with some code.

Information on data structures are abundant. To be honest, you don’t have to invent this. And frankly, neither did I. Hence, the code is pre-baked and available on [Github](https://github.com/marklreyes/mighty-morphin-data-structures).

The additional and intentional challenge here is that this is in audio only. If you can follow along, awesome. But remember, the source code is on the repo. I’ll upload a [video](https://youtu.be/w9KROYE0Jts) as well, just in case.

That said, are you ready? Alright then. It’s Morphin Time!

* * *

https://youtu.be/w9KROYE0Jts

* * *

<iframe src="https://castbox.fm/app/castbox/player/id2933770/id403983821?v=8.22.11&amp;autoplay=0" frameborder="0" width="100%" height="500"></iframe>

* * *

## The Situation

Recall from our [last episode that Rita just deployed the Putties and Goldar](/mighty-morphin-data-structures-part-2/) to Angel Grove. They’re causing havoc very quickly and it’s time to address these problems.

## **The Data Structure**

It’s time to introduce our queue.  A linear data structure which obeys the principle of _First In, First Out_. And that’s exactly what we’ll need to consider granted what Rita just unloaded to the general public.

We’ll create our queue utilizing a function declaration which returns a JavaScript object.

```
function createQueue() {
	// Store our items in an array held in closure.
	const queue = [];

	return {
		// Use unshift(), to keep the collection of the array in order by adding items to the front.
		enqueue(x) {
			queue.unshift(x);
		},
		// Use pop(), to remove the final item from the array while maintain order.
		dequeue() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue.pop();
		},
		// Return the next item that's ready to be removed.
		peek() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue[queue.length - 1];
		},
		// Use a getter function to get the CURRENT queue's length.
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
}
```

## Conclusion

Oh no. What’s that in the sky? Rita’s wand is shooting down like a bolt of lightning. That’s not good. Let me know your thoughts on this choice thus far and other paths that could’ve been considered.

* * *

Thanks again for listening in. Remember, I’m here to foster innovation through conversation. So if you’d like to continue this discussion or any topics previously discussed, join me at San Diego Tech Hub and go head first into the AllWebSD Group. It’s totally free. Just visit this [link](https://community.sandiegotechhub.com/share/AItMm5PH3N45w7bP?utm_source=manual) or click _San Diego Tech Hub_ on the footer of [AllWebSD.com](http://allwebsd.com/). Thanks and Aloha!
