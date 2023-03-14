---
title: Breadcrumbs
layout: layouts/component-add.liquid
componentName: il-breadcrumbs
bodyClass: headingarea text
slug: breadcrumbs
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
  <il-breadcrumbs-page home href="/" />Home</il-breadcrumbs-page>
  <il-breadcrumbs-page href="/academics">Academics</il-breadcrumbs-page>
  <il-breadcrumbs-page href="/academics/undergraduate">Undergraduate programs</il-breadcrumbs-page>
  <il-breadcrumbs-page current>Degree programs</il-breadcrumbs-page>
</div>

## Technical Information

Note that this is used in conjunction with the <a href="../breadcrumbs-page/index.html">Breadcrumbs Page component</a>.

Often, a CMS will have tools that automate the breadcrumb trail and can generate this automatically. Contact the team that is working with your CMS to see if this can be automated.

## Description 

The Illinois components implementation of breadcrumbs provides a list of formatted links that provide the path between the site’s home page and the page the reader is currently viewing.  

The tag `<il-breadcrumbs>` is used for the container which will include one or more `<il-breadcrumb-page>` items in order to provide a navigable path for users to move to different points in the website’s structure. 

### Recommended patterns 

* The entire group of breadcrumbs should be enclosed within the `<il-breadcrumbs>` tag. 
* Each breadcrumb item should get its own `<il-breadcrumbs-page>` tag. 
* The site’s home page should be the first item in the list of breadcrumbs and should link to the site root. 
* Pages used to navigate between the home page and the current page should also be listed and linked. 
* The current page item should contain the “current” tag in code and should not be linked, since following a link to the current page would just reload the page. 

### Customizations and notes 

* There’s not much to change about breadcrumbs. The dividers between the breadcrumbs are an SVG icon which looks like the greater-than symbol ( `>` ), and this is not alterable. 
* `<il-breadcrumbs>` creates a labelled `<nav>` tag so you don’t need to add a `<nav>` tag separately. 