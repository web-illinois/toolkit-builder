---
title: Accordion Panel
layout: layouts/component-add.liquid
componentName: il-accordion-panel
bodyClass: headingarea text il-formatted
slug: accordion-panel
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Technical Information
This is normally used with the il-accordion component to create an accordion. You can (and should) use this independently of the accordion panel if you have a single accordion panel you want to display. 

## Description 
Accordions are described at https://www.nngroup.com/articles/accordions-complex-content/. "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."

### Theme colors
By default, the gray theme is used. You can switch this to a white background using the il-theme-white class. 

### Accessibility
The header slot should be used to display a header of the appropriate level. Unlike an HTML details / summary tag, this will not swallow the header information. 

<div class="template-information" data-name="default">
        <h3 slot="header">Test information</h3>
        <p>First paragraph</p>
        <p>Second paragraph</p>
</div>

