---
name: rosbot
tools: [ROS, Robotics, Arduino, 3D Printing]
image: /assets/images/projects/rosbot/rosbot.jpg
description: A 3D printed mobile robot with ROS support (WIP)
---

<br>

# **rosbot**

<br>

{% capture carousel_images %}
/assets/images/projects/rosbot/rosbot.jpg
/assets/images/projects/rosbot/headgear.jpg
/assets/images/projects/rosbot/battery.jpg
{% endcapture %}
{% include elements/carousel.html %}

<br>
<br>


## Description

A simple 3D printed mobile robot, with both ROS and MQTT support. This is a hobby project aimed at price, to make the robot as cheap as possible
 but also support full navigation (getting map, plan a path, etc), it's still a work in progress, but the firmware is done.


## Firmware

<br>

<a href="https://github.com/hasauino/rosbot" class="btn btn-outline-dark" role="button" aria-pressed="true"> <i class="fab fa-github"></i> GitHub Repository </a>

<br>
The robot uses an Arduino Nano board and Raspberry Pi 4 (RPi). The Arduino acts as a slave and is responsible for the low-level stuff: PWM for the motors, reading wheel encoders via inturrepts, reading from the IMU (MPU6050), reading battery voltage level, and communicating with the RPi (recieved commands and sends sensor readings). The RPi runs the ROS/MQTT drivers of the robot.

The Arduino sends robot telemetry (wheel speed/position, head angle, IMU data) at a fixed 200 Hz over serial UART. However, speed of wheels is sampled at a lower frequency as wheel encoders have low resolution (880 step per revolution).

The entry point of the firmware is `rosbot/rosbot.ino`, what I'm trying to do is to make the firmware as flexible as possible 
to support other types of ground robots. The communication protocol between the Arduino and the RPi is also very flexible, one can add support of additional commands (received from RPi), or can send more data. There are also convientent classes to take care of serialization/deserialization.


## MQTT driver + GUI

This is the GUI that communicates with the robot using MQTT over websocket. If the robot is running you will be able to control it :wink:

Besides the left/right buttons, it listens to keyboard keys. The control is as follows:

<kbd>⟵</kbd>: left

<kbd>⟶</kbd>: right

<kbd>⟵</kbd>  and <kbd>⟶</kbd>: forward

if you are on a mobile device, better open the controller in a separate page: <button onclick=" window.open('https://hasauino.github.io/rosbot','_blank')">open :arrow_upper_right:</button>



<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://hasauino.github.io/rosbot/" allowfullscreen scrolling="no" style="overflow: hidden;"></iframe>
</div>
<br>

## CAD Model
Drag model with your mouse, left-click to pan, and scroll wheel to zoom.
<br>

{% include elements/three_viewer.html model="/assets/models/rosbot.glb" height="500" camera_distance="2.5" fov="65"%}

<br>