---
name: rrt-exploration
tools: [ROS, Robotics, Navigation, SLAM, Exploration, Mapping, C++, Python]
image: /assets/images/projects/rrt.png
description: Autonomous map exploration strategy for multiple robots
---

<br>

# **Autonomous Robot Exploration Using RRT**

<br>

Rapidly-exploring Random Tree is an algorithm used in path planning, however, in my master's thesis, we (my advisor and I) have used it in the context of robot exploration. The RRT is used to search for unknown regions in the occupancy grid. The reason behind using RRT is it's nice properties:

- RRT is biased to grow to unexplored space.
- RRT is probabilistically complete, this will ensure complete map coverage.

This work was published in IROS 2017, detailed explanation of this work can be found [there](http://ieeexplore.ieee.org/document/8202319/). If you don't have access to IEEE, you can download the [accepted paper](/assets/papers/rrtexploration.pdf) (the version before reviewers comments).
```
@INPROCEEDINGS{rrtexploration,
author={H. Umari and S. Mukhopadhyay},
booktitle={2017 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
title={Autonomous robotic exploration based on multiple rapidly-exploring randomized trees},
year={2017},
volume={},
number={},
pages={1396-1402},
keywords={},
doi={10.1109/IROS.2017.8202319},
ISSN={},
month={Sept},}
```

This work was also implemented as a ROS package, below is a video showing three robots using this package:

<br><br>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/hasauino/rrt_exploration/archive/master.zip" data-icon="octicon-cloud-download" data-size="large" aria-label="Download hasaunio/rrt_exploration on GitHub">Download</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/hasauino/rrt_exploration" data-size="large" data-show-count="true" aria-label="Star hasauino/rrt_exploration on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/hasauino/rrt_exploration/fork" data-size="large" data-show-count="true" aria-label="Fork hasauino/rrt_exploration on GitHub">Fork</a>


<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/abGyA3K1lzU?rel=0" allowfullscreen></iframe>
</div>
<br>


<a href="https://github.com/hasauino/rrt_exploration" class="btn btn-outline-dark" role="button" aria-pressed="true"> <i class="fab fa-github"></i> View on GitHub </a>
&nbsp;
<a href="http://wiki.ros.org/rrt_exploration" class="btn btn-outline-dark" role="button" aria-pressed="true"> View on ROS Wiki </a>