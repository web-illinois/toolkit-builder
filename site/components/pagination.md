---
title: Pagination
layout: layouts/component-add.liquid
componentName: il-pagination
bodyClass: il-formatted headingarea text
slug: pagination
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default"></div>

## Description

The Illinois theme component il-pagination provides standardized styles for page counting links (First, Previous, a numbered set of pages with the current page highlighted, Next, and Last).

## Technical Information

The pagination starts with "1" and generates buttons that goes back to the calling page. It will add a querystring value of "page={page number}". You can add a "param" parameter that will change "page" to a custom parameter (for example, `<il-pagiation param="p">` will generate `https://xxxxx.illinois.edu/information?p={page number}`). For more complex interaction (where the links trigger an in-page process), you may need to build your own component and style it appropriately. 
