---
title: "Mighty Morphin Data Structures, Part 2"
description: "AllWebSD.com Season 6 demo, part 2, on data structures with a mighty morphin twist. Here we go head first into extending our array."
date: "2021-07-08"
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

The additional and intentional challenge here is that this is in audio only. If you can follow along, awesome. But remember, the source code is on the repo. I’ll upload a [video](https://youtu.be/3CNubmgdFmc) as well, just in case.

That said, are you ready? Alright then. It’s Morphin Time!

* * *

## The Situation

[5 ordinary teenagers are now at the command center](https://www.marklreyes.com/mighty-morphin-data-structures-part-1/). After initial shock, they’re starting to gather their senses and are willing to give this Power Ranger thing a try. The viewing globe lights up and we see that Rita’s sent these clay-like spandex goons called Putties and a Golden Armored Monkey to Angel Grove, a city wedged between LA and San Diego. Just kidding. Maybe.

Before they leave to address the issue, Zordon still needs to issue each Ranger their power.

Zack will bestow the powers of Mastodon, Kimberly receives Pterodactyl, Billy gets Triceratops, Trini inherits Sabertooth Tiger and Jason will kick it into high gear with Tyrannosaurus.

* * *

<figure>

https://youtu.be/3CNubmgdFmc

<figcaption>

Typos for Mastodon and Pterodactyl have been updated on GIthub.

</figcaption>



</figure>

* * *

<iframe src="https://castbox.fm/app/castbox/player/id2933770/id402452285?v=8.22.11&amp;autoplay=0" frameborder="0" width="100%" height="500"></iframe>

## The Data Structure

### Array Of Objects

```
const arrayOfRangers = [
	{
		name: 'Zack',
		power: 'Mastodon',
		isMorphed: false
	},
	{
		name: 'Kimberly',
		power: 'Pterodactyl',
		isMorphed: false
	},
	{
		name: 'Billy',
		power: 'Triceratops',
		isMorphed: false
	},
	{
		name: 'Trini',
		power: 'Sabertooth',
		isMorphed: false
	},
	{
		name: 'Jason',
		power: 'Tyrannosaurus',
		isMorphed: false
	}
];
```

Glossing over this it looks like I can still quickly access any member of the team by indexes of 0 through 4 and each member of the team now has their power.

## Conclusion

Putties are at the park and Goldar is wreaking havoc in down town Angel Grove. There’s no time to waste. Let me know your thoughts on this choice thus far and other paths that could’ve been considered.

* * *

Thanks again for listening in. Remember, I’m here to foster innovation through conversation. So if you’d like to continue this discussion or any topics previously discussed, join me at San Diego Tech Hub and go head first into the AllWebSD Group. It’s totally free. Just visit this [link](https://community.sandiegotechhub.com/share/AItMm5PH3N45w7bP?utm_source=manual) or click _San Diego Tech Hub_ on the footer of [AllWebSD.com](http://allwebsd.com/). Thanks and Aloha!
