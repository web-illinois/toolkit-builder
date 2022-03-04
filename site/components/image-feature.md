---
title: Image Feature
layout: layouts/component.liquid
bodyClass: il-formatted
componentName: il-image-feature
slug: image-feature
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<img slot="image" src="https://picsum.photos/1920/800">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, <a href="#">judging teams</a>, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>

<a href="#" class="il-button">Subscribe</a>
<a href="#" class="il-button">Find a departmental advisor</a>
</div>

<div class="template-information" data-name="overlay">
  <img slot="image" src="https://picsum.photos/1920/800">
  <h3>LAS Impact Award: Recognizing inspiring efforts during COVID-19</h3>
  <p>The College of LAS honors individuals and teams that have demonstrated service and sacrifice beyond expectations during the pandemic.</p>
  <p><a href="#" class="il-button">Celebrate the awardees</a></p>
</div>

## Technical Information

Note that if you want to use the Overlay feature, you need to use the "overlay" template option and you cannot use the Attributes section. The overlay option only takes class information. The Attributes section is going to be depreciated, and we did not implement it for the new overlay option. 