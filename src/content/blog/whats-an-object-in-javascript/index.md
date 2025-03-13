---
title: "What's an Object in JavaScript?"
description: ""
date: "2014-05-24"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

## Almost everything is an object.

- Primitives: numbers, booleans, strings, null, undefined
- Objects: Math, Date, JSON, window, document, objects you create, array, function, numbers, booleans, strings

## Functions are "first class" values.

- Assign a function to a variable.
- Store a function as a value in an array or object.
- Pass a function to a function.
- Return a function from a function.

## Primitives don't look like objects.

```

var phoneNumber = "555-1212";	//phoneNumber is a primitive.
console.log(phoneNumber.length);//Now we need phoneNumber to be an object.
/*********************
*	BEHIND THE SCENES
*
*	phoneNumber is converted to a string object.
*	.length property is then accessed
*
**********************/
console.log(phoneNumber);		//phoneNumber is a primitive again.
```
