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
<div id="template-information">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, <a href="#">judging teams</a>, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>

<a href="#" class="il-button">Subscribe</a>
<a href="#" class="il-button">Find a departmental advisor</a>
</div>

## Suggested Use

Use these as a main focus of your webpage. You can have multiple types of these on the same page. If you are using this as a call to action, make sure you have a button using the il-button. Remember that the picture you use may be scaled oddly, so make sure the picture's main focus is in the center of the picture and can be cropped without problems. 

## Accessibility Requirements

If you have a header in this, make sure your heading tags are nested correctly (see https://www.w3.org/WAI/tutorials/page-structure/headings/ for more information). If you have many of these in a row, they will most likely be the same heading level. 