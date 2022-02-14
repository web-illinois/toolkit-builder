---
title: Page Title
layout: layouts/preview.liquid
componentName: il-page-title
slug: page-title
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}-preview/"
---
<div class="template-information" data-name="default">
  <img slot="background" src="https://picsum.photos/1200/300" alt="">
  <h1>Page Title</h1>
</div>
