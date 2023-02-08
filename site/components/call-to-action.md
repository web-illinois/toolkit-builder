---
title: Call To Action
layout: layouts/component.liquid
bodyClass: il-formatted
componentName: il-call-to-action
slug: call-to-action
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<span slot="icon" class="il-icon-line">faq</span>
<h3>Get started today!</h3>
<p>Enroll in a class after you are admitted as a non-degree student.</p>
<p><a href="#" class="il-button">Registration overview</a><a href="#" class="il-button">Contact Us</a><a href="#" class="il-button">Accessing email/Compass</a></p>
</div>

<div class="template-information" data-name="no icon">
<h3>Get started today!</h3>
<p>Enroll in a class after you are admitted as a non-degree student.</p>
<p><a href="#" class="il-button">Registration overview</a><a href="#" class="il-button">Contact Us</a><a href="#" class="il-button">Accessing email/Compass</a></p>
</div>

## Description 
The Illinois components call to action gives a colored background with areas for text, buttons, and an optional icon. You can choose alternate Illinois brand colors and change icons. (If you want to use an image instead of an icon, look at Image Feature instead.) 

## Customizations and notes 
### Changing icons and icon styles
There are two visual weights of icons available:
* il-icon presents a solid icon against whichever background color you have chosen.
* il-icon-line presents an icon outline.

Changing icons:
* The keyword inside the `<span></span>` tag indicates which icon will be displayed.
* The list of icons and their keywords are shown in the Component Builder’s Icon Preview page.

### Changing colors and alignments 
The Call to Action Component Builder offers several color patterns and two text alignments. You can choose from several options based on campus color selections which have been vetted for accessibility.

## About this component 
* *Type:* Custom Element 
* *Introduced in:* v2.3.0; 9/29/2021 
* *Deprecated?:* No 
