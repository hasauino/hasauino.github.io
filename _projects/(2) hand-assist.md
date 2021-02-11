---
name: Hand Assistive Device
tools: [3D Printing, Embedded Systems, Arduino, ESP8266, PCB]
image: /assets/images/projects/hand-assist.jpg
description: A wearable device which can be used to actuate hand fingers for patients  who lost hand motor functions
---

<br>

# **Hand Assistive Device for Stroke Patients**

<br>

{% capture carousel_images %}
/assets/images/projects/hand-assist-1.jpg
/assets/images/projects/hand-assist-2.jpg
/assets/images/projects/hand-assist-3.jpg
/assets/images/projects/hand-assist-4.jpg
{% endcapture %}
{% include elements/carousel.html %}

<br>
<br>

## Description

In this project, I designed a wearable device which can be used to actuate hand fingers for patients  who lost hand motor functions. The device actuates three fingers: thumb, index, and middle fingers. It uses a cable-driven mechanism to flex the fingers, whereas finger extension is achieved passively using elastic rubber bands.


<br>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
     <div style="text-align: center;">
      Free motion
      <img src="/assets/images/projects/free.gif" class="img-fluid rounded">
     </div>
     
    </div>
    <div class="col-sm-6">
      <div style="text-align: center;">
        Actuated motion
        <img src="/assets/images/projects/actuated.gif" class="img-fluid rounded">
       </div>
    </div>
  </div>
</div>
<br>

### Design Overview

The design is compact consisting of a single unit weighing around 600 g (including the battery). The device height is around 4 cm measured from the forearm. It consists of a fabric glove, three linear actuators, a controller, a rechargeable battery, elastic rubber bands, tendon cables, and cable tubings (bowden tubes), as shown below:

<br>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
     <img src="/assets/images/projects/hand-assist-5.jpg" class="img-fluid rounded">
    </div>
  </div>
</div>
<br>

## Video

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P6YCmyWKjm4" allowfullscreen></iframe>
</div>
<br>

## CAD Model
Drag model with your mouse, left-click to pan, and scroll wheel to zoom.
<br>

{% include elements/three_viewer.html model="/assets/models/handassist.glb" height="500" camera_distance="3" fov="50"%}

<br>