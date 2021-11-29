---
title: Section Navigation
layout: layouts/component.liquid
componentName: il-section-nav
slug: section-nav
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div id="template-information">
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

