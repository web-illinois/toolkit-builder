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
  <il-breadcrumbs-page href="/academics/graduate">Graduate programs</il-breadcrumbs-page>
  <il-breadcrumbs-page current>Degree programs</il-breadcrumbs-page>
</div>
