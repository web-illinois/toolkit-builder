---
title: Page Title
layout: layouts/component-add.liquid
componentName: il-page-title
slug: page-title
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
  <img slot="background" src="https://picsum.photos/1200/300" alt="">
  <h1>Page Title</h1>
</div>

## Description 

The Illinois theme component il-page-title provides a background image and gradient overlay options for the text of the title of a particular web page. 

## Technical Information

Note that if this is the page title, you should put the page title in an `<h1>` tag. Do not include anything except the title -- if you want something more complex, you may want the hero component. 