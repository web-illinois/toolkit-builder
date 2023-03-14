---
title: Profile Card (Directory)
layout: layouts/component-add.liquid
componentName: il-profile-card
bodyClass: headingarea text
slug: profile-card
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<img src="https://picsum.photos/4608/3072" alt="">
<h2><a href="#">Zaphod Beeblebrox</a></h2>
<p>Director of Clinical Imaging Research Stephens Family Clinical Research Institute Carle Foundation Hospital</p>
<p class="il-contact-department">Very Very Very Long Department Name</p>
<p class="il-contact-phone"><a href="#">000-000-0000</a></p>
<p class="il-contact-email"><a href="#">WWWWWWWWWW@illinois.edu</a></p>
</div>

## Description

This is a profile card specifically tailored to a faculty, staff member, or student. It is basically a Card component with specific styling. 

## Technical Notes

For readability, this is inside a container that is restricted to 500px. This component will expand to fill the container it is in, and is usually placed in a flex or grid container. 

Currently, this does not work well if in an il-formatted section.

