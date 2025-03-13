---
title: "Differences between constructor vs ngOnInit() method"
description: ""
date: "2018-07-25"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

| Constructor | ngOnInit |
| --- | --- |
| Typescript feature nothing to do with Angular | One of the Angular life cycle hook method |
| constructor is transformed to function with the same name as class created | ngOnInit being added to prototype of the class created |
| Called by Javascript Engine | Called by Angular |
| Constructor is automaticlly called at the time of creating object of the class | Invoked by Angular when everything in the component is ready |
| Used for Injecting dependencies | Actual business logic performed here |
| Not everything in component is initialized at the time of invocation | Everything is ready at the time of invocation |



Thanks to, [Angular js Wiki](https://www.angularjswiki.com/angular/what-is-the-difference-between-constructor-and-ngoninit-in-angular/)
