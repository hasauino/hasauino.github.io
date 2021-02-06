---
 title: Estimating Friction Using a State Observer
 tags: [Control Theory, State Observer, Compensator]
 style: border
 color: warning
 description: A course project to identify friction and use that to add a friction compensator to the PI position controller.
---

<!-- Mathjax Support --> <script type="text/javascript" async  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>

<br>

In this post, I will share a project I worked on for the Advanced Control course during my master's at [AUS](https://www.aus.edu/).  Group members: 

- Ehab Al-Khatib,
- Wasim Al-masri,
- and myself.

## Description

The aim of the project is to first identify a mechanical-electrical system and design a controller based on the extracted model. The system in hand is a linear voice coil motor. The controller used is a PI controller for the position. Coulomb Friction is estimated using curve fitting against the actual system response. Since Coulomb friction is not constant, the second phase is to estimate it using a state observer. The value of the estimated friction is used to add a compensator to the PI controller.

<img src="/assets/images/blog/friction/linear_motor.jpg" style="zoom: 20%;" />

(rubber band was added at the end to check compensator performance)



## 1- Deriving system’s dynamic equations

### A) Horizontally oriented

![](/assets/images/blog/friction/FBD.png)




$$
\sum F_x = m ~a_x
$$

$$
m \ddot{x}=K_{F} i-F_{c}-B \dot{x}
$$


Where $$i(t)$$ is calculated from the input voltage $$v_a$$ using the model of the electrical part of the motor:


<img src="/assets/images/blog/friction/circuit_diagram.png" style="zoom: 15%;" />

$$
v_a = R~i + L ~{di \over dt} + E_a
$$

<br>
<br>
<br>
<br>
