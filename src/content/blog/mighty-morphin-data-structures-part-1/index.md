---
title: "Mighty Morphin Data Structures, Part 1"
description: "AllWebSD.com Season 6 demo, part 1, on data structures with a mighty morphin twist. Here we go head first into linked lists and arrays."
date: "2021-07-03"
tags:
  - "data-structures"
  - "personal-log"
  - "podcast-projects"
image: '../../../../public/static/1200x630_allwebsd.jpg'
authors: ["marklreyes"]
---

## Introduction

The goal for this season of AllWebSD is to deconstruct lessons learned from going head first into data structures. It's my hope that I can translate a complex topic into an easy-going format and I'll do so by channeling my inner 10-year-old self. You see back in my day, I was a big fan of the original Mighty Morphin Power Rangers series. So I’m going to take snapshots from that show and brush it with some code.

Information on data structures are abundant. To be honest, you don’t have to invent this. And frankly, neither did I. Hence, the code is pre-baked and available on [Github](https://github.com/marklreyes/mighty-morphin-data-structures).

The additional and intentional challenge here is that this is in audio only. If you can follow along, awesome. But remember, the source code is on the repo. I’ll upload a [video](https://youtu.be/ZKR7ZfJfTwA) as well, just in case.

That said, are you ready? Alright then. It’s Morphin Time!

* * *

https://youtu.be/ZKR7ZfJfTwA

* * *

<iframe src="https://castbox.fm/app/castbox/player/id2933770/id400635440?v=8.22.11&amp;autoplay=0" frameborder="0" width="100%" height="500"></iframe>

* * *

## The Situation

“Alpha, Rita’s escaped! Recruit a team of teenagers with attitude.”

## The Data Structure

Okay, before I go into teleporting underage kids to the top of a mountain without their consent, I’m going to change the original storyline and instead ask Alpha to contact one person. Hopefully, that alongside word-of-mouth is enough to make a team.

I’m looking at the viewing globe and it looks like this guy Zack teaching Hip Hop Kido at Ernie’s Juice Bar is available. Okay, so I lied. I guess I’m going to have to teleport at least one person without their consent. Hopefully we can do some convincing and the remaining teens will follow.

Minutes pass and the convincing is done, Zack is going to rope in 4 of his other friends to see if they want in on this.

I’ve consulted with Alpha and knowing that we’re assembling this team, Zordon’s going to need a data structure which would allow him quick access to any Ranger should an emergency take place. Alpha offers me two choices, a _linked list_ or an _array_.

### Linked List

```
const linkedListOfRangers = {
	head: {
		value: 'Zack',
		next: {
			value: 'Kimberly',
			next: {
				value: 'Billy',
				next: {
					value: 'Trini',
					next: {
						value: 'Jason',
						next: null
					}
				}
			}
		}
	}
};
```

### Array

```
const arrayOfRangers = ['Zack', 'Kimberly', 'Billy', 'Trini', 'Jason'];
```

## Conclusion

Sirens are going off and the viewing globe just activated. Let’s pause on this for now and address the emergency on hand. For today, assembling the team was hard enough. Based on Zordon’s current need, we’ll conclude that an array data structure is the way to go.

Let me know your thoughts on this choice thus far and other paths that could’ve been considered.

* * *

Thanks again for listening in. Remember, I’m here to foster innovation through conversation. So if you’d like to continue this discussion or any topics previously discussed, join me at San Diego Tech Hub and go head first into the AllWebSD Group. It’s totally free. Just visit this [link](https://community.sandiegotechhub.com/share/AItMm5PH3N45w7bP?utm_source=manual) or click _San Diego Tech Hub_ on the footer of [AllWebSD.com](http://allwebsd.com/). Thanks and Aloha!
