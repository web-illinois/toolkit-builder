---
title: Accordion
layout: layouts/preview.liquid
componentName: div
bodyClass: headingarea text il-formatted
slug: accordion
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}-preview/"
---
<div class="template-information" data-name="default">
    <details open>
        <summary>
            (( First item title -- this individual item starts open ))
        </summary>
        <p> (( First item information )) </p>
    </details>
    <details>
        <summary>
            (( Second item title -- this item and other items will start closed unless you add 'open' to the details tag ))
        </summary>
        <p> (( Second item information )) </p>
    </details>
</div>