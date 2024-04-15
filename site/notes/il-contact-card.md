---
title: Content Card
layout: layouts/page.liquid
slug: il-content-card
permalink: "notes/{{ slug }}/"
---
This is a basic card and replaces the il-card and il-clickable-card in version 2. Most cards will have a heading, but the heading will be sized the same no matter what heading type you use. 

We have phased out the clickable card, but there is a shared component add-in that you can use to create a clickable card. 

The card is flex/column and will extend to the full width and height of the container. You can use `text-align` to align items, as well as common flex CSS commands. The class `il-card-bottom` allows you to create a section that will move text (like buttons) to the end of the card. 

You can add an icon at the top, and it will size it properly. 

There is also an `il-cards` class. If you create a div and put il-content, it will automatically format them to cards and place them in a grid. 

        <div class="il-cards">
            <il-content>...<\il-content>
            <il-content>...<\il-content>
        </div>