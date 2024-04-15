---
title: Content
layout: layouts/page.liquid
slug: il-content
permalink: "notes/{{ slug }}/"
---

This is the basic content item, and is intended to replace the "il-formatted" class in version 2. 

If you are hardcoding your HTML, you can use this to ensure your text is using the correct fonts, sizes, etc. 

The base heading size is 1.125em (for an `h6`), and we increase the size of the elements by a ratio of 1.2/1 (so an h5 is 1.125 * 1.2, an h4 is 1.125 * 1.2 * 1.2, etc.). You can set the ratio to "1" to make the headings all the same size (and we do this when appropriate).

We use relative (em) measurements only. This allows you to update the sizes easily, but it also means that if your CSS has a font size update, it will affect the toolkit. 

Block elements should not have any padding unless they have a border or background.

Spacing between elements is controlled *exclusively* by the `margin-top` property

The "il-small" and "il-large" classes are a work in progress. The "il-small" should only be used on "black on white", as smaller text will not meet color contrast requirements. 