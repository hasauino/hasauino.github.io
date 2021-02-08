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

A simple 3D printable mobile robot, with ROS support. This is hobby project aimed at price, to make the robot as cheap as possible
 but also support full navigation (getting map, plan a path, etc), it's still a work in progress, but the firmware is 80% done.


## Firmware

<br>

<a href="https://github.com/hasauino/rosbot" class="btn btn-outline-dark" role="button" aria-pressed="true"> <i class="fab fa-github"></i> GitHub Repository </a>

<br>
The robot uses an Arduino Nano board and Raspberry Pi 4 (RPi). The Arduino acts as a slave and is responsible for the low-level stuff: PWM for the motors, reading wheel encoders via inturrepts, reading from the IMU (MPU6050), reading battery voltage level, and communicating with the RPi (recieved commands and sends sensor readings). The RPi runs the ROS driver of the robot, and optionally other ROS nodes.

The entry point of the firmware is `rosbot/rosbot.ino`, what I'm trying to do is to make the firmware as flexible as possible 
to support other types of ground robots. The communication protocol between the Arduino and the RPi is also very flexible, one can add support of additional commands (received from RPi), or can send more data. There are also convientent classes to take care of serialization/deserialization.

```c++
#include "Robot.h"
#include "communication.h"
#include "commands.h"
#include "IMU.h"

Robot robot;
IMU imu;
Receiver receiver;
// Command msgs definitions
Transmitter transmitter;
Velocity vel_msg;
StartStream start_msg;
Head head_msg;
byte* msg;
int16_t ax, ay, az;
int16_t gx, gy, gz;

void setup() {
  robot.init();
  imu.init();
  Serial.begin(115200);
}

void loop() {
  if (receiver.available()) {
    msg = receiver.latest_msg();

    // counter from 3 (after msg length byte, and before the last checksum byte)
    for (int i = 3; i < msg[2] + 2;) {
      switch (msg[i]) {
        case vel_msg.ID:
          vel_msg.deserialize(msg[i + 1]); //serialize the following bytes (equal to vel_msg.length bytes) starting from i+1
          i += vel_msg.length;
          break;

        case start_msg.ID:
          start_msg.deserialize(msg[i + 1]); //serialize the following bytes (equal to vel_msg.length bytes) starting from i+1
          i += start_msg.length;
          break;

        case head_msg.ID:
          head_msg.deserialize(msg[i + 1]); //serialize the following bytes (equal to vel_msg.length bytes) starting from i+1
          i += head_msg.length;
          break;

        default:
          i++;
      }
    }
  }
  robot.set_speed(vel_msg.v, vel_msg.w);
  robot.set_head(head_msg.angle);
  
  // Send odometry, IMU
  if (transmitter.check_rate()) {
    transmitter.push(robot.delta_s_r());
    transmitter.push(robot.delta_s_l());
    transmitter.push(robot.get_rightspeed());
    transmitter.push(robot.get_leftspeed());
    imu.getData(ax, ay, az, gx, gy, gz);
    transmitter.push(ax);
    transmitter.push(ay);
    transmitter.push(az);
    transmitter.push(gx);
    transmitter.push(gy);
    transmitter.push(gz);
    transmitter.push(imu.getTemp());
    transmitter.send();
  }
}


void serialEvent() {
  // add saftey check for communication loss
  // if no byte is received within 200 ms, set everything to zero (stop motors)
  receiver.update(Serial.read());
}
```

(to be continued...)

<br>

## CAD Model

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://myhub.autodesk360.com/ue28a719c/shares/public/SH919a0QTf3c32634dcf7cd37da98f6c88de?mode=embed" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0">
</div>