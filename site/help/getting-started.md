---
title: Getting Started
layout: layouts/page.liquid
permalink: "getting-started/"
---
# Getting Started

To add the toolkit to your website, include the following lines to the head of your HTML pages:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/2/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/2/toolkit.js"></script>
````

This will include the latest version of the toolkit, up to but not including the 3.0 release.

## Using a specific version of the toolkit

You can also specify a minor- or patch-level versions. The following lines would include the latest 2.3.x version of the toolkit, up to but not including the 2.4 release:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/2.3/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/2.3/toolkit.js"></script>
````

To use a specific patch-level version of the toolkit, specify the full version number:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/2.3.1/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/2.3.1/toolkit.js"></script>
````

The toolkit builder "Header" information includes the minor version, but not the patch version. 

## Using older versions of the toolkit

Prior to the 2.3 release, the toolkit was hosted on a different domain. To use these versions of the toolkit, use the `cdn.brand.illinois.edu` domain in your URLs:

````html
<link rel="stylesheet" href="https://cdn.brand.illinois.edu/toolkit/2.2/toolkit.css">
<script src="https://cdn.brand.illinois.edu/toolkit/2.2/toolkit.js"></script>
````

## Using the development version of the toolkit

The development version contains upcoming and untested features which are not guaranteed to be included in future releases. **The development version is not intended for use in production environments.**

To include the development version in your website, add the following lines to your page:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/dev/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/dev/toolkit.js"></script>
````
