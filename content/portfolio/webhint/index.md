---
path: "/webhint"
date: "2020-07-23"
title: "Webhint IO, A Testing Engine for the Web"
category: "portfolio"
tags: ["nodeJS", "postCSS", "browserslist"]
clients: ["OpenJS Foundation"]
buttonText: "View on Github"
featuredImage: webhint-featured.png
projectLink: https://webhint.io/
showMasonry: true
---

I contributed to two packages to Webhint.io, a NodeJS CLI tool that tests websites for accessibility, speed, compatibility and more. The first package checked if a website has a valid doctype declaration, the second checked for CSS compatibility.

For the hint-doctype package, I worked with another developer to come up with the strategy for the algorithm. I then implemented the algorithm and wrote the tests.

The hint-compat-api package was a much larger package, and three developers worked on it. I wrote one of the core algorithms, wrote the tests and fixed bugs in the overall code of the package. The algorithm I wrote checked for browser compatibility of different CSS rules with the help of a CSS parser utilising PostCSS.

## Tech Stack

- TypeScript
- NodeJS
- AVA (for unit tests)
- PostCSS
