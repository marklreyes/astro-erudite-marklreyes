---
title: "Check html element for inline CSS"
description: "Check an HTML element for inline styles of display block with jQuery."
date: "2013-09-11"
tags:
  - "tips-and-tricks"
  - "jquery"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

```
		/**
		*	Check all div elements for inline CSS display block.
		*	Should output 'Do stuff.' if display block is true.
		*	Requires jQuery to leverage: $ alias and .css() method
		*/
		if (($('div').css('display') == 'block')) {
			console.log('Do stuff.');
		}

		/**
		*	Select div element(s) with inline CSS display block.
		*	Should return div element(s) if executed in dev console.
		*	Requires jQuery to leverage: $ alias
		*/
		$('div[style="display: block;"]');
```

Thanks to: [Stackoverflow](http://stackoverflow.com/questions/1875403/jquery-how-to-get-the-style-display-attribute-none-block) and [jsfiddle](http://jsfiddle.net/bipen/g7Pqr/)
