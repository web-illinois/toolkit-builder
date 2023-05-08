---
title: Layout
layout: layouts/page.liquid
permalink: "layout/"
---
# Layout 

The toolkit layout system makes it easy to create pages and arrange components into custom layouts. 

## Creating pages

The outermost part of a layout is the page object. You can create a new page simply by wrapping content in an `<il-page>` element:

````html
<il-page>

  <h1>My new page</h1>

  <p>A very simple page using the toolkit layout system</p>

</il-page>
````

The page component has content slots for the page header and footer:

````html
<il-page>

  <il-header slot="header">
    <!-- Place your header content here -->
  </il-header>

  <!-- Place the content of your page here -->

  <il-footer slot="footer">
    <!-- Place your footer content here -->
  </il-footer>

</il-page>
````

## Adding page sections

Section components allow you to group portions of your page. You can create sections using the `<il-section>` element:

````html
<il-page>

  <il-section>
    <!-- Content for the first section goes here -->
  </il-section>

  <il-section>
    <!-- Content for the second section goes here -->
  </il-section>

</il-page>
````

By default, the contents of a section will take up the full width of the page. In some cases, you may want to restrict the maximum width of section contents to increase the readability of large sections of text. To constrain the contents of a section to a fixed width, use the `il-fixed-width` class:

````html
<il-section class="il-fixed-width">
  <!-- The contents of this section will have a fixed width -->
</il-section>
````

## Creating a section with a sidebar

To use a sidebar with a content section, use the `<il-section-with-sidebar>` element:

````html
<il-section-with-sidebar>

  <div slot="sidebar">
    <!-- The content of the sidebar goes here -->
  </div>

  <!-- The main content of the section is placed here, outside of the sidebar content slot -->

</il-section-with-sidebar>
````