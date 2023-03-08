---
title: Themes
layout: layouts/page.liquid
permalink: "themes/"
---
# Theme Infomration

The web components have a concept of color themes, or ways to style components to meet branding standards. This is a list of all themes and components that can be managed through the theme option. Providing a theme is optional. If you do not specify a theme, then one will be provided for you based on the component. 

## List of Themes

* <a href="/themes/il-theme-white/index.html">White (il-theme-white)</a>
* <a href="/themes/il-theme-blue/index.html">Blue (il-theme-blue)</a>
* <a href="/themes/il-theme-orange/index.html">Orange (il-theme-orange)</a>
* <a href="/themes/il-theme-gray/index.html">Gray (il-theme-gray)</a>
* <a href="/themes/il-theme-blue-gradient/index.html">Blue Gradient (il-theme-blue-gradient)</a>
* <a href="/themes/il-theme-orange-gradient/index.html">Orange Gradient (il-theme-orange-gradient)</a>
* <a href="/themes/il-theme-default/index.html">"Default Theme" (list of themed components when the theme is not chosen)</a>

## Implementation

You can add the themes (as classes) to either the component itself or a wrapping container. 

Note that the themes are managed through CSS variables, so you should use those to reference the theme colors. For example, this site uses the following CSS: 

    .fixed-background-color {
        background-color: var(--il-background-color);
        max-width: var(--il-content-max-width);
        margin: auto;
        padding: 50px;
    }

