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