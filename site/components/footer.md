---
title: Footer
layout: layouts/component-add.liquid
componentName: il-footer
slug: footer
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
  <div slot="contact" class="il-footer-contact uofi_address">
    <p><a href="/" id="link-1">Animal Science</a></p>
    <p>174 Bevier Hall, MC-000</p>
    <p>905 S. Goodwin Ave</p>
    <p>Urbana, IL 61801</p>
    <p>217-333-3165</p>
    <p>Email: <a href="mailto:ACES-ALEC@illinois.edu">ACES-ALEC@illinois.edu</a></p>
  </div>

  <div slot="social" class="il-footer-social">
    <ul>
      <li><a href="https://www.instagram.com/educationillinois/">Instagram</a></li>
      <li><a href="https://www.facebook.com/educationatillinois?ref=ts">Facebook</a></li>
      <li><a href="https://twitter.com/edILLINOIS">Animal Science Twitter Account that is long</a></li>
      <li><a href="https://www.youtube.com/user/educationatillinois">Youtube</a></li>
      <li><a href="https://www.linkedin.com/in/educationatillinois">LinkedIn</a></li>
    </ul>
  </div>

  <div slot="parent" class="il-footer-parent">
    <p><a href="#">College of Agricultural, Consumer and Environmental Sciences</a></p>
    <p><a href="#">Grainger College of Engineering</a></p>
    <p><a href="#">College of Education</a></p>
  </div>

  <div class="il-footer-navigation">
    <div class="il-footer-navigation-column">
      <nav aria-labelledby="dept-resources">
        <h2 id="dept-resources">Department Resources:</h2>
        <ul>
          <li><a href="#">Faculty & Staff</a></li>
          <li><a href="#">Undergraduate Studies</a></li>
          <li><a href="#">Graduate Students</a></li>
          <li><a href="#">Give to Department</a></li>
        </ul>
      </nav>
      <nav aria-label="Campus Footer Links 2">
        <h2>College Resources</h2>
        <ul>
          <li><a href="#">Contact ACES</a></li>
          <li><a href="#">About the College</a></li>
          <li><a href="#">Future Students</a></li>
        </ul>
      </nav>
    </div>
    <div class="il-footer-navigation-column">
      <nav aria-labelledby="more-resources">
        <h2 id="more-resources">More Resources:</h2>
        <ul>
          <li><a href="#">One</a></li>
          <li><a href="#">Two is a Really Really Long Item That Wraps Around</a></li>
        </ul>
      </nav>
      <nav aria-label="Campus Footer Links 4">
        <h2>University of Illinois Long Title of Resources</h2>
        <ul>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Covid Resources</a></li>
          <li><a href="#">Graduate Students</a></li>
          <li><a href="#">Give to Department</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <nav slot="links" class="il-footer-links" aria-label="Legal notices">
    <ul>
      <li><button data-il="cookies"></button></li>
      <li><a data-il="privacy"></a></li>
      <li><a data-il="copyright"></a></li>
      <li><a data-il="accessibility"></a></li>
      <li><a href="#">College Bylaws</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
</div>

<div class="template-information" data-name="single column">
  <div slot="contact" class="il-footer-contact uofi_address">
    <p><a href="/" id="link-1">Animal Science</a></p>
    <p>174 Bevier Hall, MC-000</p>
    <p>905 S. Goodwin Ave</p>
    <p>Urbana, IL 61801</p>
    <p>217-333-3165</p>
    <p>Email: <a href="mailto:ACES-ALEC@illinois.edu">ACES-ALEC@illinois.edu</a></p>
  </div>

  <div slot="social" class="il-footer-social">
    <ul>
      <li><a href="https://www.instagram.com/educationillinois/">Instagram</a></li>
      <li><a href="https://www.facebook.com/educationatillinois?ref=ts">Facebook</a></li>
      <li><a href="https://twitter.com/edILLINOIS">Animal Science Twitter Account that is long</a></li>
      <li><a href="https://www.youtube.com/user/educationatillinois">Youtube</a></li>
      <li><a href="https://www.linkedin.com/in/educationatillinois">LinkedIn</a></li>
    </ul>
  </div>

  <div slot="parent" class="il-footer-parent">
    <p><a href="#">College of Agricultural, Consumer and Environmental Sciences</a></p>
    <p><a href="#">Grainger College of Engineering</a></p>
    <p><a href="#">College of Education</a></p>
  </div>

  <div class="il-footer-navigation-single">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium massa id elit ultrices maximus. Vestibulum leo erat, accumsan vitae justo vel, vehicula bibendum enim. Duis mi nibh, interdum vitae est id, gravida suscipit nibh. Nam sodales mattis felis eget aliquet. Curabitur et enim metus. Maecenas auctor hendrerit lacinia. Curabitur vitae risus a velit euismod tincidunt et nec tellus. 
      Quisque et suscipit urna. Nullam pellentesque turpis a pharetra feugiat. In hac habitasse platea dictumst. Cras rutrum convallis ligula, eu malesuada ex maximus sit amet. Vestibulum vulputate mi nibh, vel facilisis augue pharetra at. Fusce tempor, velit ut pellentesque pretium, mi massa cursus elit, id fermentum orci metus at turpis. Nunc consequat fermentum varius. </p>
  </div>

  <nav slot="links" class="il-footer-links" aria-label="Legal notices">
    <ul>
      <li><button data-il="cookies"></button></li>
      <li><a data-il="privacy"></a></li>
      <li><a data-il="copyright"></a></li>
      <li><a data-il="accessibility"></a></li>
      <li><a href="#">College Bylaws</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
</div>

## Description

The Illinois Components Footer defines an area at the bottom of the page which should contain (at a minimum) the site’s contact information and University-wide footer links. Additional features like social media icons, extra site navigation, and special highlighted content can be added either in columns or in a two-thirds-wide freeform area.

## Customizations and notes
### Structured additions: Social media, University footer links

* Social media section: The following sites’ URLs will be recognized and automatically replaced with the correct icon when contained in a Social Media div. (See the Syntax guide for more details.)
   *   Instagram
   *   Twitter
   *   YouTube
   *   Facebook
* University standard footer elements: The following tags will automatically populate with the University-wide link for these items.  
   *   Cookies management (necessary for GDPR compliance)
   *   Privacy statement
   *   Copyright statement
   *   Accessibility statement

### Columns or freeform space 

*  You can choose between a multi-column layout or a freeform space in the right two-thirds of the footer.
*  Any standard HTML is allowed in this space, though it is recommended to focus on information of site-wide importance that doesn’t fit in the header. 
*  For sites with multiple sponsorships, this is a common location to collect up the iconography of the various sponsors.

