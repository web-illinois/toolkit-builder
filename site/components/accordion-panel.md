---
title: Accordion Panel
layout: layouts/component.liquid
componentName: il-accordion-panel
bodyClass: headingarea text il-formatted
slug: accordion-panel
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
        <h3 slot="header">Test information</h3>
        <p>First paragraph</p>
        <p>Second paragraph</p>
</div>

