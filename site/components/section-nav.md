---
title: Section Navigation
layout: layouts/component-add.liquid
componentName: il-section-nav
slug: section-nav
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
  <h3>
    <a href="#">Programs of Study</a>
  </h3>
  <ul>
    <li>
      <a href="#">Undergraduate Degrees</a>
      <ul>
        <li>
          <a href="#">Animal Sciences Major</a>
          <ul>
            <li>
              <a href="#" id="link">Companion Animal Equine Science Active Page</a>
            </li>
            <li>
              <a href="#">Food Animal Production and Management</a>
            </li>
            <li>
              <a href="#">Science, Pre-Veterinary, and Medical</a>
            </li>
          </ul>
         </li>
         <li>
            <a href="#">Computer Science &amp; Animal Science</a>
         </li>
         <li>
            <a href="#">Some Third Thing</a>
         </li>
      </ul>
    </li>
  </ul>
</div>

## Description

The section navigation component provides extended navigation links for a section of a website, organized in a tree-like stucture. Compared to the main navigation, it provides more levels of navigation and more items at a glance, making it easier to browse the contents of a section of a website.

The section navigation is meant to be placed in a sidebar next to the main page content. On smaller screens, it collapsed to a dropdown widget labeled "In This Section".

### Usage

The section navigation contains one area for content. It should contain:

* A heading that describes the content of the section, likely the title of the home page of the section. The heading should have the appropriate outline level (H2, H3, etc.) and may contain a link to a page.
* An unordered list of links that represent the contents of the site section. There is no hard limit to the levels of nesting for this list, but display issues may occur when exceeding 4 or 5 levels.

### Current page
Use the aria-current attribute to denote the current page.

`<a href="http://example.com/about" aria-current="page">About Us</a>`

### Layout

Use the "section with sidebar" layout component to place a section navigation in a sidebar

```html
<il-section-with-sidebar>
  <il-section-nav slot="sidebar">
    <!-- Section navigation content would go here -->
  </il-section-nav>
  <!-- Main page content would go here -->
</il-section-with-sidebar>
```