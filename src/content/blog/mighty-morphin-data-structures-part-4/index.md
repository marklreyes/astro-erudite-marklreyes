---
title: "Mighty Morphin Data Structures, Part 4"
description: "AllWebSD.com Season 6 demo, part 4, on data structures with a mighty morphin twist. Here we'll modify our queue into a priority queue."
date: "2021-07-22"
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

The additional and intentional challenge here is that this is in audio only. If you can follow along, awesome. But remember, the source code is on the repo. I’ll upload a [video](https://youtu.be/MQD6cJkKIYo) as well, just in case.

That said, are you ready? Alright then. It’s Morphin Time!

* * *

https://youtu.be/MQD6cJkKIYo

* * *

<iframe src="https://castbox.fm/app/castbox/player/id2933770/id406925199?v=8.22.11&amp;autoplay=0" frameborder="0" width="100%" height="500"></iframe>

* * *

## The Situation

Recall from our [last episode that Rita threw her magic wand down from the moon](https://www.marklreyes.com/mighty-morphin-data-structures-part-3/) and it looks like she sent Scorpina to do her bidding. And yikes, she’s 300 feet tall.

## **The Data Structure**

It's time to introduce our priority queue.

```
function createPriorityQueue() {
// Make two queues held in closure to determine priority.
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();

  return {
	// Set high priority to false by default. Ternary operator will determine if it's high/low priority.
    enqueue(item, isHighPriority = false) {
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue;
      queue.enqueue(item);
    },
	// Make sure high priority queue is emptied first BEFORE attempting to dequeue from low priority queue.
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
	// Similar to dequeue(), let's peek from the high priority queue first.
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
	// Conjunction of our 2 queues.
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  }
}
```

## Conclusion

Scorpina is 300 feet tall. We can't do this alone. We'll need DinoZord power. Join me in the finale where we introduce MegaZord by way of a stack data structure.

* * *

Thanks again for listening in. Remember, I’m here to foster innovation through conversation. So if you’d like to continue this discussion or any topics previously discussed, join me at San Diego Tech Hub and go head first into the AllWebSD Group. It’s totally free. Just visit this [link](https://community.sandiegotechhub.com/share/AItMm5PH3N45w7bP?utm_source=manual) or click _San Diego Tech Hub_ on the footer of [AllWebSD.com](http://allwebsd.com/). Thanks and Aloha!
