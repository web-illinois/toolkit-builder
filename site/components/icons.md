---
title: Icon
layout: layouts/icons.liquid
componentName: div
slug: icon
bodyClass: headingarea text il-formatted
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Technical Information

This is a CSS class that is used to generate icons. These icons can be placed on your page. These icons use custom fonts and ligatures, so you can use them via CSS ligature (the name like `admissions`) or entites (the code like `&#xe900;`). Names are preferred so screen readers will read them correctly. If you do use the raw entity, make sure you use an aria-described attribute for accessibility. 

Because these are fonts, you can style them via CSS (color and font size).

Note that the il-icon and il-icon-line are two separate fonts, so some icons may not appear in one or the other. 