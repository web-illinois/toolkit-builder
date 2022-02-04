---
title: Breadcrumbs Page
layout: layouts/component.liquid
componentName: il-breadcrumbs-page
slug: breadcrumbs-page
bodyClass: headingarea text
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
Degree Programs
</div>

## Technical Information

Note that this is used in conjunction with the <a href="../breadcrumbs/index.html">Breadcrumbs component</a>.

Often, a CMS will have tools that automate the breadcrumb trail and can generate this automatically. Contact the team that is working with your CMS to see if this can be automated.
