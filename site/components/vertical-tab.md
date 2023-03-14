---
title: Vertical Tab
layout: layouts/component-add.liquid
bodyClass: il-formatted
componentName: il-vertical-tab
slug: vertical-tab
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
<h2 slot="title">Academics</h2>
    <il-vertical-tab-panel>
        <h3 slot="header">Degree Programs</h3>
        <p>There’s no <a href="#">academic experience</a> quite like Grainger Engineering. Ranked the #6 college of engineering with 13 top 5 programs from US News and World Report, we have a reputation of being the best of the best. But a lot goes into those numbers. Engaging professors. State-of-the-art facilities. Groundbreaking student resources. Brilliant classmates. Supportive environment. Endless opportunities. Whether you’re a first year undergraduate or working toward a PhD, our programs are designed to help you become the engineer you want to be.</p>
        <p>Second paragraph</p>
        <p><a href="#" class="il-button">Sample button</a></p>
    </il-vertical-tab-panel>
    <il-vertical-tab-panel>
        <h3 slot="header">Non-degree programs</h3>
        <p>The University of Illinois offers a variety of non-degree programs for individuals who want to expand their knowledge and skills without enrolling in a full degree program. These programs are designed to provide students with specialized training in a particular area of study or profession. Some of the non-degree programs offered at the University of Illinois include certificate programs, professional development courses, and continuing education programs.</p>
        <p>These programs are available in a wide range of fields, from business and technology to education and healthcare. The non-degree programs at the University of Illinois are a great way for individuals to gain new skills, improve their career prospects, or simply pursue a personal interest.</p>
    </il-vertical-tab-panel>
    <il-vertical-tab-panel>
        <h3 slot="header">Student Organizations</h3>
        <p>We offer a wide variety of extracurricular activities for students to get involved in. These activities range from sports and fitness programs to student organizations and community service projects. The university has over 1,000 registered student organizations, providing opportunities for students to explore their interests and engage with their peers.</p>
    </il-vertical-tab-panel>
</div>

## Technical Notes

The `<il-vertical-tab>` should only contain a title and `<il-vertical-tab-panel>` components. The `<il-vertical-tab-panel>` should not be used outside of the `<il-vertical-tab>` component.

## Description

The Vertical Tab Component is used to display a sidebar of headings along with text. The headings should be HTML headings at the same level (`<h2>`, `<h3>`, etc.). In a mobile format, this will turn into a traditional accordion. 