---
layout: page
title: CV
permalink: /CV/
weight: 300
---

<h2><strong> <i class="far fa-address-card"></i> Summary </strong></h2> 


I'm a mechatronics Engineer from Jordan, currently living in Germany, and work as a Python developer in the area of web applications. My experience is in robotics, hardware design, embedded systems, 3D modeling. My education is focused on Control systems design, system modeling and simulation. 

Below diagram summarizes my  background:

<br> 

<img src="/assets/images/summary.png" alt="Skills summary" style="zoom:40%;" />

<br>

<h2><strong> <i class="fas fa-briefcase"></i> Experience</strong>
<button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#experience-section" aria-expanded="false" aria-controls="experience-section">
    <i class="fas fa-chevron-circle-down"></i>
</button>
</h2>   
<div class="collapse" id="experience-section">
<div class="row">
{% include about/experience.html %}
</div>
<br>
<br>
<br>
</div>


<h2><strong> <i class="fas fa-graduation-cap"></i> Education</strong>
<button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#education-section" aria-expanded="false" aria-controls="education-section">
    <i class="fas fa-chevron-circle-down"></i>
</button>
</h2>  
<div class="collapse" id="education-section">
<div class="row">
{% include about/education.html %}
</div>
<br>
<br>
<br>
</div>



<h2><strong> <i class="fas fa-drafting-compass"></i> Skills</strong>
<button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#skills-section" aria-expanded="false" aria-controls="skills-section">
    <i class="fas fa-chevron-circle-down"></i>
</button>
</h2>  
<div class="collapse" id="skills-section">
<div class="row">
{% include about/skills.html title="Engineering" source=site.data.cv.skills.engineering %}
{% include about/skills.html title="CAD" source=site.data.cv.skills.CAD %}
</div>
<div class="row">
{% include about/skills.html title="Programming Languages" source=site.data.cv.skills.programming-languages %}
{% include about/skills.html title="Robotics" source=site.data.cv.skills.robotics %}
</div>

<div class="row">
{% include about/skills.html title="Marking-up Languages" source=site.data.cv.skills.marking-up-languages %}
{% include about/skills.html title="Web Frameworks" source=site.data.cv.skills.web-frameworks %}
</div>

<div class="row">
{% include about/skills.html title="Software Tools" source=site.data.cv.skills.software-tools %}
{% include about/skills.html title="Computers" source=site.data.cv.skills.computers %}
</div>

<div class="row">
{% include about/skills.html title="Embedded Systems" source=site.data.cv.skills.plc %}
{% include about/skills.html title="Hardware Interfacing" source=site.data.cv.skills.interfacing %}
</div>
<br>
<br>
<br>
</div>


<h2><strong> <i class="fas fa-edit"></i> Publications</strong>
<button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#publications-section" aria-expanded="false" aria-controls="publications-section">
    <i class="fas fa-chevron-circle-down"></i>
</button>
</h2>  
<div class="collapse" id="publications-section">
<div class="row">
{% include about/publications.html %}
</div>
<br>
<br>
<br>
</div>


<h2><strong>  <i class="fas fa-language"></i> Languages</strong>
<button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#languages-section" aria-expanded="false" aria-controls="languages-section">
    <i class="fas fa-chevron-circle-down"></i>
</button>
</h2>  
<div class="collapse" id="languages-section">
<div class="row">
{% include about/languages.html %}
</div>
<br>
<br>
<br>
</div>