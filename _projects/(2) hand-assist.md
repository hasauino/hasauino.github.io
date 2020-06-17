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

### Glove Design

The glove is custom-made, it is used to connect the five tendon
cables to the palmar side of hand fingers. cable 1 is connected to actuator
1 from one end, and to the center of the proximal phalanx
(PP) of the thumb from the other end. Cable 2 and 3 are
connected to actuator 2 from one end, and to the centers
of the intermediate phalanges (IPs) of the index and middle
fingers from the other end. Cable 4 and 5 are connected to
actuator 3 from one end, and to the centers of the distal
phalanges (DPs) of the index and middle fingers from the
other end. To reduce glove deformation during the pulling
action of the actuators, inextensible fabric is used at each
finger-cable connection.

<br>
<div class="container">
  <div class="row">
    <div class="col-sm-7">
      <img src="/assets/images/projects/hand-assist-6.png" class="img-fluid rounded">
    </div>
  </div>
</div>
<br>

### Actuators

I used a linear motor from [Actuonix](https://www.actuonix.com/), the motor model is: [L12-100-100-12-S](https://www.actuonix.com/L12-S-Micro-Linear-Actuator-with-Limit-Switches-p/l12-s.htm?1=1&CartID=0). This actuator consists of a small  100:1 geared DC motor connected to a four-start lead screw of a 1.25 mm pitch or equivalently a lead of 5 mm.

It's a powerful actuator relative to it's size. However, I had to get rid of rod that extends from it. So I extracted the DC motor inside the actuator, the lead screw, and the bearing. This was definitely not cost effective, but it was the only way to get these components. Below are the motor specification:

| Spec.         | Value   |
| ------------- | ------- |
| Max load      | 40 N    |
| No load speed | 20 mm/s |
| Stall current | 800 mA  |
| Stroke length | 100 mm  |



The lead screw is then connected to the cable locks which are used to tie the cables on:

<br>
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <img src="/assets/images/projects/hand-assist-8.png" class="img-fluid rounded">
    </div>
    <div class="col-sm-4">
      <img src="/assets/images/projects/hand-assist-9.png" class="img-fluid rounded">
    </div>    
  </div>
</div>
<br>

In order to get position feedback I mimicked how Actuonix do that which is using a potentiometer. 

### Inner Components

<br>
<div class="container">
  <div class="row">
    <div class="col-sm-7">
      <img src="/assets/images/projects/hand-assist-7.png" class="img-fluid rounded">
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

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://myhub.autodesk360.com/ue28a719c/shares/public/SHabee1QT1a327cf2b7a670112eb3c7b5443?mode=embed" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0">
</div>