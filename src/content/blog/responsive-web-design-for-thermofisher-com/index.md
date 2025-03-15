---
title: "Responsive Web Design for Thermofisher.com"
description: "Generate mobile, tablet and desktop experiences from one codebase."
date: "2017-04-23"
tags:
  - "responsive-mobile-projects"
  - "responsive-web-design"
  - "mobile"
image: '../../../../public/static/1200x630_default.jpg'
authors: ["marklreyes"]
---

[![](images/mr-hero-1-thermofisher.jpg)](http://www.marklreyes.com/mobile-optimization-project-lifetechnologies-com/)

[3 years ago](http://www.marklreyes.com/mobile-optimization-project-lifetechnologies-com/), Thermo Fisher Scientific (previously Life Technologies) was tasked with enhancing its original mobile experience integration which leveraged Moovweb's cloud platform. It was a good solution in getting the domain introduced into browsers outside of desktop, specifically mobile and tablet devices but it certainly came with its own set of constraints.

While Moovweb was an excellent platform for enhancing on mobile conversion rates it came at the cost of scalability and ease of maintenance. The overall platform required you to maintain two separate codebases—your desktop HTML and [Moovweb's](https://www.moovweb.com/) SDK, which effectively transformed your HTML into mobile-friendly elements. It was also a page-by-page type deal. Every page would require its own transformation. Every transformation was its own subset of code. The first two waves for those previous projects had the strictest of intentions on mobile-optimizing eCommerce related workflows for all regions but in English only (e.g. checkout flows). It was not enough. The domain needed more flexibility in a web property that could display well to a majority of legacy and evergreen browsers as well being agnostic of device type.

Because of these limitations the Responsive Project for ThermoFisher.com was designed to effectively address the following constraints:

- Reduce dependency on additional vendor code.
- Generate mobile, tablet and desktop experiences from one codebase.
- Scale solutions which would be available globally and not just page-by-page.
- Responsive interfaces for all regions, all languages.
- Extend the experience beyond eCommerce: content authored areas and channels outside of B2C.

The domain is huge and its attached ecosystem is a collection of multiple applications owned by multiple teams with their own standard of implementation. Adding to that loophole, not every application in the domain was a candidate for this new responsive experience. From June 2016 and forward, our team had to break features down into chunks.

It was agreed that the header, navigation and footer would be the first to address as this was considered the foundation for everything else to work. Each app would rope this subset of components based under their back-end constructs (e.g. Java, ColdFusion, etc.). This took 3+ months. Not an easy feat if you consider the amount of tooling currently being offered from these areas. You have a series of controls for search tools, commerce and deep links into areas such as login and Order Support.

Real estate doesn't come cheap with smaller screen sizes. The basics needed to be in order first. In essence, an organized CSS media query strategy for an agreed set of breakpoints and a baseline approach for DOM manipulation in the event this choice ever needed to be made.

Listed below were some saving grace plugins, libraries and frameworks from the open source world which allowed us to get our job done:

- [Bootstrap 2.3.2](https://getbootstrap.com/2.3.2/) - the overall HTML, CSS and JS framework for delivering responsive enabled user interfaces. Keep in mind that support for legacy browsers in IE8+ was priority. Also, since the domain is driven from a desktop-first approach this framework was still considered standard.
- [jQuery 1.8.1](https://blog.jquery.com/2012/08/30/jquery-1-8-1-released/) - a minor upgrade path for better DOM selector performance. Originally, 1.8.0 was elected to be the global jQuery library available but that caused problems for older Internet Explorer browsers with **.ready()** firing prematurely. See jQuery defect 12282.
- [Responsive HTML Tables](https://codepen.io/anon/pen/QwPVNW) - a CSS technique which turns table elements into div blocks with labels being controlled through data attributes.
- [TableHeadFixer](https://github.com/lai32290/TableHeadFixer) - a jQuery plugin which was modified in-house to give content authors more flexibility in drafting HTML tables with features such as locked table headers or columns.
