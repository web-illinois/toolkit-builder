---
title: Accordion
layout: layouts/component-add.liquid
componentName: il-accordion
bodyClass: headingarea text il-formatted
slug: accordion
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Technical Information
This is normally used with the il-accordion-panel component to create an accordion. Only il-accordion-panel components should be in this.  

## Description 
Accordions are described at https://www.nngroup.com/articles/accordions-complex-content/. "An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner."

### Theme colors
By default, the gray theme is used. You can switch this to a white background using the il-theme-white class. 

### Accessibility
The header slot should be used to display a header of the appropriate level. Unlike an HTML details / summary tag, this will not swallow the header information. 

<div class="template-information" data-name="default">
    <il-accordion-panel>
        <h3 slot="header">Test information</h3>
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test information #2</h3>
        <p>First paragraph #2</p>
        <p>Second paragraph</p>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test information #3</h3>
        <p>First paragraph #3</p>
        <p>Second paragraph</p>
    </il-accordion-panel>
</div>


