---
title: Getting Started
layout: layouts/page.liquid
permalink: "getting-started/"
---
# Getting Started

To add the toolkit to your website, include the following lines to the head of your HTML pages:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/3/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/3/toolkit.js"></script>
````

This will include the latest version of the toolkit, up to but not including the 3.0 release.

## Using a specific version of the toolkit

You can also specify a minor- or patch-level versions. The following lines would include the latest 2.3.x version of the toolkit, up to but not including the 2.4 release:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/3.0/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/3.0/toolkit.js"></script>
````

To use a specific patch-level version of the toolkit, specify the full version number:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/3.0.1/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/3.0.1/toolkit.js"></script>
````

The toolkit builder "Header" information includes the minor version, but not the patch version. 

## Using older versions of the toolkit

Prior to the 2.3 release, the toolkit was hosted on a different domain. **This is no longer supported for version 3.0.** To use these versions of the toolkit, use the `cdn.brand.illinois.edu` domain in your URLs:

````html
<link rel="stylesheet" href="https://cdn.brand.illinois.edu/toolkit/2.2/toolkit.css">
<script src="https://cdn.brand.illinois.edu/toolkit/2.2/toolkit.js"></script>
````
