---
title: Stylesheet Information
layout: layouts/page.liquid
permalink: "stylesheets/"
---
# Stylesheet Information

The stylesheet contains all of the formatting for the web components. 

## HTML

```html
<link rel="stylesheet" href="https://cdn.brand.illinois.edu/toolkit/2/toolkit.css" media="all">
``` 

## Special classes

### il-formatted

This sets all children of this item as formatted in Illinois colors and fonts. This includes headings, paragraphs, anchors, tables, ordered lists, unordered lists, and definitions. 

### il-invisible

This makes an item invisible to sighted users while still being available for screen readers. 

### il-page, il-main

This sets the body information with a standard `<header>` and `<footer>`. The "il-page" should be placed on the `<body>` tag, ad the "il-main" should be placed on the tag containing all the information between the `<header>` and `<footer>` tag.

### il-content-with-section-nav, il-section-nav, il-content

This sets the tags to accommodate a section navigation. 

### il-accordion, il-accordion-multiple, il-details-solid, il-details-bordered

These are special classes used in a div around a details / summary tag group. 

### il-button

This creates a button from a `<a>` or `<button>` tag. 

### il-icon, il-icon-line

This is used to generate an icon

### Theme information

See the [Theme information](/themes/index.html) for information on themes. 

## CSS Variables

* --il-content-max-width: Maximum width of the content
* --il-content-margin: Margin of the content
