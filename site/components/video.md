---
title: Video
layout: layouts/component-add.liquid
componentName: il-video
bodyClass: il-formatted
slug: video
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---

## Technical Notes

For readability, this is inside a container that is restricted to 800px. This component will expand to fill the container it is in, and is usually placed in a flex or grid container. 

## Description

This is a thin wrapper around a video URL that resizes the URL to meet proper dimensions while still filling the entire container. There is also code that will take a raw youtube, vimeo, or MediaSpace URL and convert it to the frame. If you do not include a YouTube, Vimeo, or MediaSpace URL, it will not display. Make sure the video is publically available and is not behind a login. 

Note that you should title your video (using the title attribute) so screen readers can read the title and allow the user to choose to hear the video or pass it by. 