---
title: "A framework for web performance"
description: ""
date: "2018-10-25"
tags:
  - "tips-and-tricks"
authors: ["marklreyes"]
---

A simple yet effective spreadsheet that you or your company can use to prioritize web performance goals.

table {<br /> border-collapse: collapse;<br /> width: 100%;<br /> }<br /> th {<br /> font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;<br /> font-variant: small-caps;<br /> }<br /> thead th {<br /> text-align: left;<br /> padding: 1em;<br /> }<br /> thead th:not(:first-child) {<br /> border-bottom: 0.2em solid;<br /> }<br /> tbody th {<br /> text-align: right;<br /> padding: 1em;<br /> border-right: 0.2em solid;<br /> }<br /> tbody td {<br /> padding: 0 0.5em;<br /> vertical-align: top;<br /> }<br /> tbody tr:last-child td:not(:first-child) {<br /> border-bottom: 0.2em solid;<br /> }<br /> tbody tr:not(:last-child) td {<br /> border-bottom: 0.05em dotted;<br /> }<br /> tbody td:not(:last-child) {<br /> border-right: 0.05em dotted;<br /> }<br /> tbody td:last-child {<br /> border-right: 0.2em solid;<br /> }<br /> tbody td\[contenteditable\] {<br /> padding: 1em;<br /> }<br /> @media print {<br /> @page {<br /> size: landscape;<br /> }<br /> }<br />

|  | First visit factors | Repeat visit factors | First visit time | Repeat visit time | First visit goal | Repeat visit goal | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1st byte |
- server speed
- network speed

 |

- server speed
- network speed
- caching

 |  |  |  |  |  |
| 1st render |

- network speed
- critical path assets

 |

- network speed
- critical path assets
- caching

 |  |  |  |  |  |
| 1st meaningful paint |

- network speed
- font-loading strategy
- image optimisation

 |

- network speed
- font-loading strategy
- image optimisation
- caching

 |  |  |  |  |  |
| 1st meaningful interaction |

- network speed
- device processing power
- JavaScript size

 |

- network speed
- device processing power
- JavaScript size
- caching

 |  |  |  |  |  |

Thanks to, [Jeremy Keith](https://adactio.com/journal/14355)
