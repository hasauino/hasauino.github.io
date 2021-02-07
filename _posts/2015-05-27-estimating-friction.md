---
 title: Estimating Friction Using a State Observer (part 1)
 tags: [Control Theory]
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


 Coulomb friction and viscous friction are estimated using curve fitting. By fitting actual system response (obtained experimentally) to system mathematica model. The second phase (part 2 of the post) is to estimate friction components using a state observer. The value of the estimated friction is used to add a friction compensator to the PI position controller.

<img src="/assets/images/blog/friction/linear_motor.jpg" style="zoom: 20%;" />




#### **1- Deriving system’s dynamic equations**

##### A) Horizontally oriented

![](/assets/images/blog/friction/FBD.png)




$$
\sum F_x = m ~a_x
$$

$$
m \ddot{x}=K_{F} ~i - F_{c}-B \dot{x} ~~~~~~~(1)
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
\dot{i} = { {v_a - R~i + K_{emf} ~\dot{x} } \over L} ~~~~~~~(2)
$$

Where $$K_{emf}$$ is the back EMF constant, $$R$$ is the coil resistance and $$L$$ is the coil
inductance, which are all given in the motor datasheet.

<br>

##### B) Vertically oriented (setup used for system identification)

<img src="/assets/images/blog/friction/FBD_vertical.png" style="zoom: 25%;" />


$$
\sum F_x = m ~a_x
$$


$$
 m ~\ddot{x} = mg - F_c - B ~\dot{x} ~~~~~~~(3)
$$


#### **2- Getting System Parameters Experimentally**

##### A) Actual system response

The setup is fixed vertically and in each experiment the mass is lifted around $$2 ~cm$$ upward (this will be the reference point, i.e. $$ x = 0 $$), then released. The motion of the mass is recorded using an encoder. This was repeated multiple times, and the average of these runs was computed:

<br>
<img src="/assets/images/blog/friction/figure.svg" style="zoom: 100%;" />
Note: positive direction is downward. Plots were cropped at the same time instant (at around 0.06 second)

<br>

Now that we have the actual system response. We need to solve the ODE in equation $$(3)$$ and find a time-domain solution (theortical system response). Which will then be used in the curve fitting step.

##### B) ODE solution

$$
 m ~\ddot{x} = mg - F_c - B ~\dot{x} ~~~~~~~(3)
$$

$$
 m ~\ddot{x} - B ~\dot{x} = mg - F_c
$$

$$
 m ~\dot{v} - B ~v = mg - F_c
$$

- **Homogenous solution**

$$
 m ~\dot{v} - B ~v = 0
$$

It's a $$1^{st}$$ order linear ODE. We can assume the solution to be $$ v(t) = c ~e^{\lambda ~t} $$.
Plugging the solution back into the ODE, we find $$ \lambda $$. By doing that we get the homogenous solution $$v_h(t)$$:

$$
v_h(t) = c ~e^{-{B \over m} ~t}
$$


- **Particular solution**

$$
v_p(t) = constant = k
$$

Substitute in the ODE, we get:

$$
B ~.~ k = mg - F_c
$$

$$
k = {mg - F_c \over B}
$$


Applying initial condition $$ v(0) = 0 $$:

$$
v(t) = -\bigg({mg - F_c \over B}\bigg) ~e^{-{B \over m} ~t} + {mg - F_c \over B}~~~~~~~~(4)
$$



<br>
<br>
To be continued ..







<br>
<br>
<br>
<br>
