---
title: Clickable Card
layout: layouts/component.liquid
bodyClass: il-formatted
componentName: il-clickable-card
slug: clickable-card
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<img src="https://picsum.photos/1920/1280" alt="" slot="image">
<h3 slot="header">Student Life</h3>
    <p>Animal sciences students extend their learning and career networks beyond
    the classroom through internships, judging teams, student organizations, undergraduate research
    projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>
</div>

## Technical Information

The clickable card is going to eventually be merged into the card component. At this point, it will be depreciated. 

For readability, this is inside a container that is restricted to 500px. This component will expand to fill the container it is in, and is usually placed in a flex or grid container. 

