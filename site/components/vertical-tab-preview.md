---
title: Vertical Tab
layout: layouts/preview.liquid
bodyClass: il-formatted
componentName: il-vertical-tab
slug: vertical-tab
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}-preview/"
---
<div class="template-information" data-name="default">
<h2 slot="title">Academics</h2>
    <il-vertical-tab-panel>
        <h3 slot="header">Degree Programs</h3>
        <p>There’s no <a href="#">academic experience</a> quite like Grainger Engineering. Ranked the #6 college of engineering with 13 top 5 programs from US News and World Report, we have a reputation of being the best of the best. But a lot goes into those numbers. Engaging professors. State-of-the-art facilities. Groundbreaking student resources. Brilliant classmates. Supportive environment. Endless opportunities. Whether you’re a first year undergraduate or working toward a PhD, our programs are designed to help you become the engineer you want to be.</p>
        <p>Second paragraph</p>
        <p><a href="#" class="il-button il-theme-blue">Sample button</a></p>
    </il-vertical-tab-panel>
    <il-vertical-tab-panel>
        <h3 slot="header">Test #2 information</h3>
        <p>First paragraph with test #2 information</p>
        <p>Second paragraph</p>
    </il-vertical-tab-panel>
    <il-vertical-tab-panel>
        <h3 slot="header">Test #3 information</h3>
        <p>First paragraph with test #3 information</p>
        <p>Second paragraph</p>
    </il-vertical-tab-panel>
</div>

