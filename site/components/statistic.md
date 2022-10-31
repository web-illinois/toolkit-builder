---
title: Statistic
layout: layouts/component.liquid
componentName: il-statistic
slug: statistic
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<span slot="top">Nation's</span> <em slot="stat">Top Six</em> Overall ranking among undergraduate programs in the U.S.
<span slot="source">U.S. News and World 2022</span>
</div>

<div class="template-information" data-name="no source and heading">
<em slot="stat">97%</em> of our 2020 graduates with teaching degrees plus licensure are employed in the field of education.
</div>

## Technical Information

For readability, this is inside a container that is restricted to 500px. This component will expand to fill the container it is in, and is usually placed in a flex or grid container. 