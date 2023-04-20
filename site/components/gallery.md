---
title: Gallery
layout: layouts/component-add.liquid
bodyClass: il-formatted
componentName: il-gallery
slug: gallery
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
## Description 
 The Gallery consists of multiple gallery items and arranges them in a grid. This is used for images or video (although it only has been tested in images).

## Customization and Notes

### Themes

This is not used with a theme option. You will need to change the text through CSS variables. 

### Size

You can use the il-size-xsmall, il-size-small, and il-size-large to change the size of the photos. This should be placed on the il-gallery class to make sure the sizes are the same. 

## Gallery Item information

The gallery item has a link attribute (link to the detail), a title slot and a caption slot. Everything else is raw HTML (like an image or a video). 

<div class="template-information" data-name="default">
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/600/600" />
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/600/800">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/800/600">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/800/800">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/400/400">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/600/800">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/800/600">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/600/600">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
<il-gallery-item href="#">
    <img alt="" src="https://picsum.photos/800/600">
    <p slot="title">Title</p>
    <p slot="caption">Subtitle</p>
</il-gallery-item>
</div>