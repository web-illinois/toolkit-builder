---
title: Header
layout: layouts/component.liquid
componentName: il-header
slug: header
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
    <div slot="wordmark">
        <il-unit-wordmark>
            <h1>College of Agricultural, Consumer & Environmental Sciences</h1>
        </il-unit-wordmark>
    </div>
    <il-search slot="search"></il-search>
    <nav slot="links" class="il-links" aria-label="Top">
        <ul>
            <li><a id="link-1" href="#">Apply</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <il-nav slot="navigation">
        <il-nav-section>
            <a href="https://www.google.com" slot="label">About</a>
            <ul class="il-subnav">
                <li>
                    <a href="https://www.google.com">Overview of ACES</a>
                </li>
                <li>
                    <a href="#">Programs of Study</a>
                </li>
                <li>
                    <a href="#">Diversity</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Visit</a>
                </li>
            </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">Academics</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">Programs of Study</a>
                    </li>
                    <li>
                        <a href="#">Future Students</a>
                    </li>
                    <li>
                        <a href="#">Admissions</a>
                    </li>
                    <li>
                        <a href="#">Student Life</a>
                    </li>
                    <li>
                        <a href="#">Current Students</a>
                    </li>
                    <li>
                        <a href="#">Study Abroad</a>
                    </li>
                    <li>
                        <a href="#">Career Services</a>
                    </li>
                    <li>
                        <a href="#">Student Diversity and Inclusion</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">Research</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">Research Areas</a>
                    </li>
                    <li>
                        <a href="#">Research History</a>
                    </li>
                    <li>
                        <a href="#">Facilities</a>
                    </li>
                    <li>
                        <a href="#">Resources</a>
                    </li>
                    <li>
                        <a href="#">Safety and Compliance</a>
                    </li>
                    <li>
                        <a href="#">Civil Rights</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">Extension</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                    <li>
                        <a href="#">Programs</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">International</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">International Engagements</a>
                    </li>
                    <li>
                        <a href="#">Resources</a>
                    </li>
                    <li>
                        <a href="#">Newsletter &amp; Publications</a>
                    </li>
                    <li>
                        <a href="#">Study Abroad</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">News</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">#askACES Podcast</a>
                    </li>
                    <li>
                        <a href="#">Voices of ACES Blog</a>
                    </li>
                    <li>
                        <a href="#">Subscribe</a>
                    </li>
                    <li>
                        <a href="#">ACES Seminars</a>
                    </li>
                    <li>
                        <a href="#">COVID-19</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">People</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">College Leadership</a>
                    </li>
                    <li>
                        <a href="#">Academic Department Heads</a>
                    </li>
                    <li>
                        <a href="#">Academic Units</a>
                    </li>
                    <li>
                        <a href="#">Administrative Units</a>
                    </li>
                </ul>
        </il-nav-section>
        <il-nav-section>
                <a href="#" slot="label">Giving</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">With ACES Priorities</a>
                    </li>
                    <li>
                        <a href="#">Ways to Give</a>
                    </li>
                    <li>
                        <a href="#">Give Now</a>
                    </li>
                    <li>
                        <a href="#">Alumni Association</a>
                    </li>
                    <li>
                        <a href="#">Student Committee</a>
                    </li>
                    <li>
                        <a href="#">4-H Foundation</a>
                    </li>
                </ul>
        </il-nav-section>
    </il-nav>
</div>

<div class="template-information" data-name="with primary unit">
    <div slot="wordmark">
        <il-unit-wordmark>
            <p class="il-primary-unit"><a href="/">College of Education </a></p>
            <h1><a href="/">Council on Teacher Education</a></h1>
        </il-unit-wordmark>
    </div>
    <il-search slot="search"></il-search>
    <nav slot="links" class="il-links" aria-label="Top">
        <ul>
            <li><a id="link-1" href="#">Apply</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <il-nav slot="navigation">
        <il-nav-section>
            <a href="#" slot="label">About</a>
            <ul class="il-subnav">
                <li>
                    <a href="#">Calendar</a>
                </li>
                <li>
                    <a href="#">Awards</a>
                </li>
                <li>
                    <a href="#">Diversity</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Visit</a>
                </li>
            </ul>
        </il-nav-section>
        <il-nav-link>
            <a href="#">Accreditation</a>
        </il-nav-link>
        <il-nav-link>
            <a href="#">Research and Outreach of a Long Button Name</a>
        </il-nav-link>
        <il-nav-section>
                <a href="#" slot="label">Academics and Admissions of a Long Button Name</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">Programs of Study</a>
                    </li>
                    <li>
                        <a href="#">Future Students</a>
                    </li>
                    <li>
                        <a href="#">Admissions</a>
                    </li>
                    <li>
                        <a href="#">Student Life</a>
                    </li>
                    <li>
                        <a href="#">Current Students</a>
                    </li>
                    <li>
                        <a href="#">Study Abroad</a>
                    </li>
                    <li>
                        <a href="#">Career Services</a>
                    </li>
                    <li>
                        <a href="#">Student Diversity and Inclusion and Broadening Participation</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                </ul>
        </il-nav-section>
    </il-nav>
</div>

<div class="template-information" data-name="flyout unit">
    <div slot="wordmark">
        <il-unit-wordmark>
            <p class="il-primary-unit"><a href="/">College of Education </a></p>
            <h1><a href="/">Council on Teacher Education</a></h1>
        </il-unit-wordmark>
    </div>
    <il-search slot="search"></il-search>
    <nav slot="links" class="il-links" aria-label="Top">
        <ul>
            <li><a id="link-1" href="#">Apply</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <il-nav slot="navigation">
        <il-nav-section>
            <a href="#" slot="label">Expanded Items</a>
            <ul class="il-subnav">
                <li>
                    <il-nav-section id="section">
                        <span slot="label">Reprehenderit in Voluptate</span>
                        <ul>
                            <li><a href="#">Parturient Montes</a></li>
                            <li><a href="#">Tellus at Urna Condimentum</a></li>
                            <li><a href="#">Velit Egestas</a></li>
                            <li><a href="#">Tellus Pellentesque</a></li>
                        </ul>
                    </il-nav-section>
                </li>
                <li>
                    <a href="#">Awards</a>
                </li>
                <li>
                    <a href="#">Diversity</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Visit</a>
                </li>
            </ul>
        </il-nav-section>
        <il-nav-link>
            <a href="#">Accreditation</a>
        </il-nav-link>
        <il-nav-link>
            <a href="#">Research and Outreach of a Long Button Name</a>
        </il-nav-link>
        <il-nav-section>
                <a href="#" slot="label">Academics and Admissions of a Long Button Name</a>
                <ul class="il-subnav">
                    <li>
                        <a href="#">Programs of Study</a>
                    </li>
                    <li>
                        <a href="#">Future Students</a>
                    </li>
                    <li>
                        <a href="#">Admissions</a>
                    </li>
                    <li>
                        <a href="#">Student Life</a>
                    </li>
                    <li>
                        <a href="#">Current Students</a>
                    </li>
                    <li>
                        <a href="#">Study Abroad</a>
                    </li>
                    <li>
                        <a href="#">Career Services</a>
                    </li>
                    <li>
                        <a href="#">Student Diversity and Inclusion and Broadening Participation</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Staff</a>
                    </li>
                </ul>
        </il-nav-section>
    </il-nav>
</div>

<div class="template-information" data-name="no menu">
    <div slot="wordmark">
        <il-unit-wordmark>
            <p class="il-primary-unit"><a href="/">College of Education</a></p>
            <h1><a href="/">Impact Report 2021</a></h1>
        </il-unit-wordmark>
    </div>

    <il-search slot="search"></il-search>

    <nav slot="links" class="il-links" aria-label="Top">
        <ul>
            <li><a href="#">Apply</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Give</a></li>
        </ul>
    </nav>
</div>

## Technical Information

Note that this is used in conjunction with the Navigation, Navigation Section, Unit Wordmark, and Search component.

Often, a CMS will have tools that automate the navigation and can generate this automatically. Contact the team that is working with your CMS to see if this can be automated.
