---
 title: Estimating Friction Using a State Observer (part 1)
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

#### **Description**

The aim of the project is to first identify a mechanical-electrical system and design a controller based on the extracted model. The system in hand is a linear voice coil motor. The controller used is a PI controller for the position. The most important paramter to estimate is friction (other paramters are either given ex: motor force constant, or easy to identify, ex: mass attached to motor). 

Firiction acts in the opposite direction of the motion and has three components:

- Stiction: is the static force, the force which the motor needs to overcome in order to move the mass. We are interested 
to model the system during motion so we will ignore this value.

- Coulomb friction: A constant force (opposite to motion).

- Viscous friction: firction force propotional to speed (i.e. $$ \propto \dot{x} $$).


 Coulomb friction and viscous friction are estimated using curve fitting. By fitting the mathematical model on the actual system response we obtain experimentally. The second phase (part 2 of the post) is to estimate friction components using a state observer. The value of the estimated friction is used to add a friction compensator to the PI position controller.

<img src="/assets/images/blog/friction/linear_motor.jpg" style="zoom: 20%;" />

(rubber band was added at the end to check compensator performance)



#### **1- Deriving system’s dynamic equations**

##### A) Horizontally oriented

![](/assets/images/blog/friction/FBD.png)




$$
\sum F_x = m ~a_x
$$

$$
m \ddot{x}=K_{F} ~i - F_{c}-B \dot{x}
$$


Where $$K_F$$ is the force constant of the motor, and $$i(t)$$ is calculated from the input voltage $$v_a$$ using the model of the electrical part of the motor:


<img src="/assets/images/blog/friction/circuit_diagram.png" style="zoom: 15%;" />

$$
v_a = R~i + L ~{di \over dt} + E_a
$$

$$
\dot{i} = {v_a - R~i + E_a \over L}
$$

$$
\dot{i} = { {v_a - R~i + K_{emf} ~\dot{x} } \over L}
$$

Where $$K_{emf}$$ is the back EMF constant, $$R$$ is the coil resistance and $$L$$ is the coil
inductance, which are all given in the motor datasheet.

<br>

##### B) Vertically oriented (Experiments setup)

<img src="/assets/images/blog/friction/FBD_vertical.png" style="zoom: 25%;" />


$$
\sum F_x = m ~a_x
$$


$$
 m ~\ddot{x} = mg - F_c - B ~\dot{x}
$$


#### **2- Getting System Parameters Experimentally**

<br>
<br>
<br>
<br>
