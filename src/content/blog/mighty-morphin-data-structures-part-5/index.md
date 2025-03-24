---
title: "Mighty Morphin Data Structures, Part 5"
description: "AllWebSD.com Season 6 demo, part 5, on data structures with a mighty morphin twist. Here we'll introduce a stack data structure."
date: "2021-07-26"
tags:
  - "data-structures"
  - "personal-log"
  - "podcast-projects"
image: '../../../../public/static/1200x630_allwebsd.jpg'
authors: ["marklreyes"]
---

## Introduction

The goal for this season of AllWebSD is to deconstruct lessons learned from going head first into data structures. It’s my hope that I can translate a complex topic into an easy-going format and I’ll do so by channeling my inner 10-year-old self. You see back in my day, I was a big fan of the original Mighty Morphin Power Rangers series. So I’m going to take snapshots from that show and brush it with some code.

Information on data structures are abundant. To be honest, you don’t have to invent this. And frankly, neither did I. Hence, the code is pre-baked and available on [Github](https://github.com/marklreyes/mighty-morphin-data-structures).

The additional and intentional challenge here is that this is in audio only. If you can follow along, awesome. But remember, the source code is on the repo. I’ll upload a [video](https://youtu.be/QyThH77KZ2k) as well, just in case.

That said, are you ready? Alright then. It’s Morphin Time!

* * *

<div style="--aspect-ratio: 16/9;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QyThH77KZ2k?si=ZkM_S4ub_L02i1s2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

* * *

<iframe src="https://castbox.fm/app/castbox/player/id2933770/id408205168?v=8.22.11&amp;autoplay=0" frameborder="0" width="100%" height="500"></iframe>

* * *

## The Situation

_We need DinoZord power now!_

[Recall from our last episode](/mighty-morphin-data-structures-part-4/) that we’ve reprioritized the emergencies based on our priority queue. Now it’s time to call on the power of MegaZord by assembling the DinoZords. We’ll do so with a stacked data structure.

This introduces us to the concept of LAST IN FIRST OUT.

## **The Data Structure**

```
function createStack() {
	// Store our items in an array held in closure.
	const stack = [];

	// Return our stack as a plain JS object.
	return {
		// Place new items at the end of the array.
		push(x) {
			stack.push(x);
		},
		// Remove the final item in the array. This ensures order is maintained.
		pop() {
			if (stack.length === 0) {
				return undefined;
			}
			return stack.pop()
		},
		// Return the last item in the array.
		peek() {
			if (stack.length === 0) {
				return undefined;
			}
			if (stack.length === 5) {
				return 'MegaZord activated!';
			}
			return stack[stack.length - 1]
		},
		// Use a getter ensures we always get the current length.
		get length() {
			return stack.length;
		},
		isEmpty() {
			return stack.length === 0;
		}
	}
}
```

## **Conclusion**

That's it! I hope you enjoyed learning about data structures with a mighty morphin twist. Let me know your thoughts on this choice thus far and other paths that could’ve been considered.

* * *

Thanks again for listening in. Remember, I’m here to foster innovation through conversation. So if you’d like to continue this discussion or any topics previously discussed, join me at San Diego Tech Hub and go head first into the AllWebSD Group. It’s totally free. Just visit this [link](https://community.sandiegotechhub.com/share/AItMm5PH3N45w7bP?utm_source=manual) or click _San Diego Tech Hub_ on the footer of [AllWebSD.com](http://allwebsd.com/). Thanks and Aloha!
