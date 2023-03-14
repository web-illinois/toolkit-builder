---
title: Card
layout: layouts/component-add.liquid
bodyClass: il-formatted
componentName: il-card
slug: card
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, judging teams, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>
<p class="il-buttons"><a href="#" class="il-button">Learn More</a><a href="#" class="il-button">Contact Us</a></p>
</div>

<div class="template-information" data-name="with-image">
<img src="https://picsum.photos/300/300" alt="">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, judging teams, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>
<p class="il-buttons"><a href="#" class="il-button">Learn More</a><a href="#" class="il-button">Contact Us</a></p>
</div>

<div class="template-information" data-name="with-icon">
<div class="il-icon">alumni</div>
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, judging teams, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>
<p class="il-buttons"><a href="#" class="il-button">Learn More</a><a href="#" class="il-button">Contact Us</a></p>
</div>

## Technical Information

For readability, this is inside a container that is restricted to 500px. This component will expand to fill the container it is in, and is usually placed in a flex or grid container. 

## Description

The Illinois Components Card gives a box containing an image and a freeform area for text, links, and buttons. The image will be on top, and the text underneath. 

If you want to use an icon instead of an image, you may want to consider Call to Action instead. If you want side by side image and text placement, look at Image Feature. If you want a card that acts as a link, consider the Clickable Card (however, do not mix the Clickable Card and Card in the same section).

The image is optional. 
