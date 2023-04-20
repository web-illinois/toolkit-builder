---
title: Gallery Detail
layout: layouts/component-add.liquid
bodyClass: il-formatted
componentName: il-gallery-detail
slug: gallery-detail
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---

## Description 
The Gallery Detail is used to generate a nice large image or other item, along with links to a previous item, next item, and home area. 

## Customization and Notes

### Links

There are three attributes: home, previous, next. These are all URLs that go to the home gallery, previous item, and next item. If you leave these blank, then the links will not be displayed. 

### Slots

The Gallery Detail has a caption slot. Everything else is raw HTML (images or video).

<div class="template-information" data-name="default">
    <il-gallery-detail>
        <img alt="" src="https://picsum.photos/600/800">
        <p slot="caption">Information about the item</p>
    </il-gallery-detail>
</div>