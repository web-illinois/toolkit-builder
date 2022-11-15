---
title: Profile (Directory)
layout: layouts/component.liquid
componentName: il-profile
bodyClass: headingarea text
slug: profile
pagination:
    data: environments
    size: 1
    alias: environment
permalink: "{{ environment.slug }}/{{ slug }}/"
---
<div class="template-information" data-name="default">
   <section slot="primary">
        <h1>Sheeba Rani Arnold Anteraper</h1>
        <p>Director of Clinical Imaging Research Stephens Family Clinical Research Institute Carle Foundation Hospital</p>
        <p class="il-contact-department">Very Very Very Long Department Name</p>
    </section>
    <section slot="contact">
        <img src="https://picsum.photos/4608/3072" alt="">
        <h2>Contact Information</h2>
        <div class="il-contact-photo"></div>
        <div class="il-contact-address">
            <p>239 Bevier Hall</p>
            <p>905 S Goodwin Ave</p>
            <p>Urbana 61801</p>
        </div>
        <p class="il-contact-phone"><a href="#">000-000-0000</a></p>
        <p class="il-contact-email"><a href="#">WWWWWWWWWW@illinois.edu</a></p>
        <p class="il-contact-website"><a href="#">Illinois Experts</a></p>
    </section>
    <section>
        <h2>Information Title</h2>
        <p>Earth is unique in our solar system having a bimodal distribution of crust: a basaltic oceanic crust and a more silicic continental crust. The buoyant continental crust, not found on planets of similar bulk composition (Mars, Venus), floats above the oceanic crust, providing an important aspect to plate tectonics and leading to the development of complex life on Earth. How this silicic crust form is not well understood but its clear that many of the chemical signatures of CC can be tied to the origin of convergent margin granitoids.</p>
        <p>Over the past 5 years, our group has produced a number of papers which lead to a very different view of how convergent margin plutons like the Tuolumne Intrusive Suite (shown above) form. First, we performed laboratory experiments in which we placed andesite with 4 wt. % water into a large temperature gradient (950 down to 350°C in a 2 cm long capsule) at upper crustal pressures for 2 months; in a major discovery, granite formed at temperatures below 400°C (Huang et al. GCA 2009). By connecting this result to models of plutons forming incrementally, Lundstrom (GCA 2009) then hypothesized that plutons formed top down by a process termed thermal migration zone refining with a directly testable aspect related to isotopic signatures formed by temperature gradients (see Huang et al. Nature 2010, Lacks et al Phys Rev Lett 2012). Indeed further work has documented the incredible unrealized behavior of water dissolved in magma in a temperature gradient (Bindeman et al. EPSL 2013). Our most recent work has been testing for isotopic signatures in natural differentiation suites; Zambardi et al. (EPSL 2014) provide changes in Fe and Si isotope ratios consistent with a temperature gradient based differentiation process.</p>
        <p>Future work seeks to understand the enigmatic relationship between granitoids and silicic volcanic rocks. Until we understand the origin of silicic magmas in general, our ability to predict how silicic volcanoes erupt is severely hampered. If you are passionate about solving geological problems through geochemistry, we welcome your application to our graduate program!</p>
    </section>
    <section>
        <h2>Information Title</h2>
        <ul>
            <li>Head, Curriculum and Instruction, University of Illinois, Urbana-Champaign</li>
            <li>Sheila M. Miller Professor, Curriculum and Instruction, University of Illinois, Urbana-Champaign</li>
            <li>Professor, Curriculum and Instruction, University of Illinois, Urbana-Champaign</li>
            <li>Professor, Center for Global Studies, University of Illinois, Urbana-Champaign</li>
            <li>Editorial activity, Research in the Teaching of English (Journal), 2008 - 2013</li>
        </ul>
    </section>
    <section class="il-directory-publications">
        <h2>Publications/Awards/Courses</h2>
        <ul>
            <li>Kramer, K. Z., & Pak, S. (2017). Relative Earnings and Depressive Symptoms among Working Parents: Gender Differences in the Effect of Relative Income on Depressive Symptoms. Sex Roles, 1-16.</li>
            <li>Andrade, F. C. D., Kramer, K. Z., Monk, J. K., Greenlee, A. J., & Mendenhall, R. (2017). Financial stress and depressive symptoms: the impact of an intervention of the Chicago Earned Income Tax Periodic Payment. Public Health, 153, 99-102.</li>
            <li>Kramer, K. Z., & Kramer, A. (2016). At-home father families in the U.S.: Gender ideology, human capital, and unemployment. Journal of Marriage and Family, 78, 1315-1331.</li>
        </ul>
    </section>
    <section>
        <h2>Information Title</h2>
        <p>Dr. Kramer is advancing the understanding of the relationship between the division of work and care in families, and career and family outcomes of individuals. She investigates how policies such as paid and unpaid parental leave affect the division of care between parents, future career outcomes of mothers and fathers, and the health and well-being of families.</p>
    </section>
</div>

## Technical Notes

Currently, this does not work well if in an il-formatted section