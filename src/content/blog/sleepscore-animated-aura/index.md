---
title: "SleepScore Animated Aura"
description: ""
date: "2020-02-18"
tags:
  - "data-visualizations"
  - "project-log"
  - "sleep-projects"
authors: ["marklreyes"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/njjVPhQMSVo?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A reusable JavaScript animation I developed for web and mobile platforms. This is currently the visual centerpiece of the SleepScore App available for FREE on [iOS](https://apps.apple.com/app/apple-store/id1364781299) and [Android](https://play.google.com/store/apps/details?id=com.sleepscore.drive).

<iframe width="560" height="315" src="https://www.youtube.com/embed/b2p7-UUigQw?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The fundamentals for this were based on Addy Osmani's explanation of [The Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript). A developer would call the object `Aura` and pass in an object literal of key-values to kickstart the animation. I used gulp for build tasks such as minifying code. Then each platform could host the final build artifacts on their respective app.

## Core Technologies

- jQuery v3
- Sass
- Gulp

## Bonus Video (as seen on _Today with Hoda and Jenna_)

<iframe width="560" height="315" src="https://www.today.com/today/embedded-video/mmvo98678853698" scrolling="no" frameborder="0" allowfullscreen></iframe>
