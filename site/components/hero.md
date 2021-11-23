---
title: Hero Image
layout: layouts/component.liquid
componentName: il-hero
slug: hero-image
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div id="template-information">
<h1>Innovating solutions every year</h1>
<ul>
    <li>
        <a href="#">Link 1</a>
    </li>
    <li>
        <a href="#">Link 2</a>
    </li>
    <li>
        <a href="#">Link 3</a>
    </li>
</ul>
</div>


## Suggested Use

A main hero image at the top of the page with one or two calls to action. The image should be capable of being viewed in many different aspect ratios, and should be high quality. 

## Accessibility Requirements

Only have one of these, and this should have an h1 tag. 