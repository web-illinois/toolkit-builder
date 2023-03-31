---
title: Image Feature
layout: layouts/component-add.liquid
bodyClass: il-formatted
componentName: il-image-feature
slug: image-feature
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Technical Information

Note that if you want to use the Overlay feature, you need to use the "overlay" template option and you cannot use the Attributes section. The overlay option only takes class information. The Attributes section is going to be depreciated, and we did not implement it for the new overlay option. 

## Description 
 The Image Feature component adds a picture on one side and text with a background on the other side. You can designate which side holds the picture and which of the themed color choices is behind the text. Image Features can be helpful for putting a spotlight on popular topics, news items, and other “featured” items.

## Customization and Notes

### Image Position

By default, the image will cover the entire area, and it will center the image vertically and horizontally (so if the image is 800px and it's scaled so its width is 600px, it will cut off the left 100px and right 100px of the image). If you want to change this behavior, add [the object-position style](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) to the image. It accepts percentages, pixels, or top/left/right/bottom. An example of this is in the "set image flush top-left" example.  

### Theme colors and alignment
By default, the il-blue-gradient theme is used. In the regular mode, this produces a blue gradient. In the overlay, it produces a solid dark blue. The text will be white. In the regular mode, il-blue theme provides a solid blue background instead of the blue gradient.

Note that if you don't specify a theme, you should specify a theme on the buttons. 

The il-orange theme and il-orange-gradient themes produces a solid orange in both regular mode and overlay mode. The text will be white in some places and black in others because white text on orange backgrounds is often not high enough contrast for accessibility needs.

The il-white theme and il-gray theme produces a white background or gray background with dark blue text.

The float meaning changes based upon your mode.
* In regular mode, il-float-left places the image on the left and the text on the right.
* In overlay mode, il-float-left places the text inset on the left and most of the image on the right. 
align=”left” is the default behavior. 

### Overlay options
By default, the text is presented side by side with the image.

The il-overlay class places the text on top of the image, which will stretch to fit the available space.

The overlay options provide some advanced CSS-based options which don’t apply to regular mode, including the ability to control the overlay width, opacity, and padding. 


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

<div class="template-information" data-name="set image flush top-left">
<img slot="image" src="https://picsum.photos/1920/800" style="object-position: top left;">
<h3>Student Life</h3>
<p>Animal sciences students extend their learning and career networks beyond
the classroom through internships, <a href="#">judging teams</a>, student organizations, undergraduate research
projects with our faculty, as well as short- and long-term study abroad opportunities all over the world. </p>

<a href="#" class="il-button">Subscribe</a>
<a href="#" class="il-button">Find a departmental advisor</a>
</div>