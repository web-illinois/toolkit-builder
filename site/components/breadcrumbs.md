---
title: Breadcrumbs
layout: layouts/component.liquid
componentName: il-breadcrumbs
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
