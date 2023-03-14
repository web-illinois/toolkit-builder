---
title: Video Feature
layout: layouts/component-add.liquid
componentName: il-video-feature
bodyClass: il-formatted
slug: video-feature
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<h3>Career Possibilities</h3>
<p>Whether you see yourself working as a veterinarian or running the family farm, a degree from 
Animal Sciences will provide you with a hands-on education that will help you identify and solve 
the challenges of the future. </p>
<a href="#" class="il-button">Career Possibilities</a>
<a href="#" class="il-button">Internships</a>
</div>

## Description

The Video Feature component an externally-hosted video on one side and text with a background on the other side. You can designate which side holds the video and which of the themed color choices is behind the text. 

This will resize the video to meet proper dimensions while still filling the entire container. 

There is also code that will take a raw YouTube, Vimeo, or MediaSpace URL and convert it to the frame URL. If you do not include a YouTube, Vimeo, or MediaSpace URL, it will display a black screen. Make sure the video is publically available and is not behind a login.