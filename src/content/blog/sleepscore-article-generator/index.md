---
title: "SleepScore Article Generator"
description: "Considering REST API calls for WordPress were available since version 4.7, I wanted to consume blog posts and reuse them."
date: "2020-03-15"
tags:
  - "angular-projects"
  - "project-log"
  - "sleep-projects"
  - "wordpress"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/0l6o9whvrqw?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Considering REST API calls for WordPress were available since version 4.7, to me this was an opportunity to make a new experience. I wanted to consume blog posts and reuse them.

My approach was to consume those posts into an interface which could be cut and pasted to any web page. The empowering feature would be that the user could customize the colors of the widget with just a few clicks. So I created an Angular 6 proof of concept in 2018 which I positioned to be an affiliate marketing tool for SleepScore Labs. Do note, this app never went into production.

However, because of its ability to promote the brand from as easy as a copy/paste, it inspired business development to think about integrating SleepScore offerings in other ways.

In 2019, the creation of B2B sleep programs for companies promoting health and wellness to their employees was realized and a new revenue stream for SleepScore Labs was established.

## Core Technologies

### Article Generator

- Angular 6
- Angular PWA
- Bootstrap 4
- Gulp
- Font Awesome
- ngx color picker

### Widget Embed

The code used via cut/paste also had to be built. The widget itself is a JavaScript embed. The logic is primarily DOM creation with jQuery alongside the Module Pattern as described by [Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript).
