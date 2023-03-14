---
title: Hero Image
layout: layouts/component-add.liquid
componentName: il-hero
slug: hero-image
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<img src="https://picsum.photos/1920/1280" alt="" slot="background">
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

<div class="template-information" data-name="using-old-attributes">
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

<div class="template-information" data-name="using-picture">
<picture slot="background">
  <source media="(max-width: 799px)" srcset="https://picsum.photos/800/800" />
  <source media="(min-width: 800px)" srcset="https://picsum.photos/1920/1280" />
  <img src="https://picsum.photos/1920/1280" alt="" />
</picture>
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

## Technical Information

The hero component uses both attributes and slots for images. Please use the slots; the attributes are not as flexible and are depreciated. 

## Description

The Hero Image component adds a large picture at the top of the page.

### Customizations and notes
*  By default, the il-theme-blue theme is used. Any exposed background area would be blue, and the buttons would be orange.
*  The il-theme-orange theme would have an orange background with blue buttons.
*  Horizontal and vertical alignments are separately available.
*     il-align-center is the default behavior for both.
*     Vertical: Choose between top, center, and bottom options.
*     Horizontal: Choose between left, center, and right options.

### Accessibility
This will most likely be the title of the page, so the headline should be wrapped in an `<h1>`.
