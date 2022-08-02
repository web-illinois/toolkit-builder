---
title: Quote
layout: layouts/component.liquid
bodyClass: il-formatted
componentName: il-quote
slug: quote
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
Either university presses will embrace new technology and offer scholarly content in new forms to researchers and under new business models, or they will follow the music industry and spend all of their resources on trying to protect their territory -- unsuccessfully.
<p slot="attributed">Laura Cerruti</p>
<p slot="secondary">Director of Digital Content Development, University of California Press, profiled in Against the Grain</p>
</div>

<div class="template-information" data-name="small">
Short and sweet.
<p slot="attributed">Melissa Waller</p>
<p slot="secondary">Director of Web Development, University of Illinois</p>
</div>

<div class="template-information" data-name="no attribution">
Lastly, she pictured to herself how this same little sister of hers would, in the after-time, be herself a grown woman; and how she would keep, through all her riper years, the simple and loving heart of her childhood: and how she would gather about her other little children, and make their eyes bright and eager with many a strange tale, perhaps even with the dream of Wonderland of long ago: and how she would feel with all their simple sorrows, and find a pleasure in all their simple joys, remembering her own child-life, and the happy summer days.</div>

<div class="template-information" data-name="no secondary attribution">
There never is a happy ending because nothing ever ends.
<p slot="attributed">Peter S. Beagle, The Last Unicorn</p>
</div>

## Technical Information

Remember to not include quote marks (") in your quote. These will be added automatically. 