---
title: Image Feature
layout: layouts/component.liquid
bodyClass: il-formatted
componentName: il-image-feature-with-overlay
slug: image-feature-with-overlay
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
  <img slot="image" src="https://picsum.photos/1920/800">
  <h3>LAS Impact Award: Recognizing inspiring efforts during COVID-19</h3>
  <p>The College of LAS honors individuals and teams that have demonstrated service and sacrifice beyond expectations during the pandemic.</p>
  <p><a href="#" class="il-button">Celebrate the awardees</a></p>
</div>
