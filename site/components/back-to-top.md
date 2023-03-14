---
title: Back to Top
layout: layouts/component-add.liquid
componentName: il-back-to-top
slug: back-to-top
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Technical Information
This automatically goes to the bottom of the page and disappears when the user is at the top of the page. So this won't show up in the regular spot in the builder. 

## Description 
The Illinois components back-to-top allows you to provide a simple way to skip either to the top of a page or to a designated point in the page (such as the page content area). You can choose alternate Illinois brand colors and adjust the position of the arrow. 

## Recommended patterns 
* We encourage using a back-to-top element on every page. 
* The tag should be placed at the very end of the page, even after the footer content. 
* By default, the tag will scroll the page up to the top of the page.  
* If you wish to jump to the top of the content body rather than the top of the page, you can use the content body ID as the target and alter the alt text from “back to top” to “go to content” (or something similar). 
