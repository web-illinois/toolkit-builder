---
title: Accordion
layout: layouts/component.liquid
componentName: il-accordion
bodyClass: headingarea text il-formatted
slug: accordion
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
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


