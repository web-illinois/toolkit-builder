---
title: Clickable Card
layout: layouts/component-add.liquid
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

## Description

The Illinois Components Clickable Card gives a box containing an image and a freeform area for text. The image will be on top, and the text underneath. The entire card will be a link. Because of this, do not include links or buttons in the clickable card area. 

If you want to use an icon instead of an image, you may want to consider Call to Action instead. If you want side by side image and text placement, look at Image Feature. If you want a card with multiple buttons, consider the Card (however, do not mix the Clickable Card and Card in the same section).

The image is optional. 
