---
title: "Autonomous Rover SLAM"
date: 2024-11-08
short_description: "A compact field rover that maps unknown environments with lidar, stereo vision, and real-time obstacle avoidance."
main_image: "/uploads/autonomous-rover.svg"
gallery_images:
  - "/uploads/lidar-detail.svg"
  - "/uploads/control-stack.svg"
---

This rover project explores robust autonomy in low-texture indoor and outdoor spaces. The stack combines lidar odometry, stereo depth, and a lightweight planning loop tuned for fast recovery when the robot loses confidence.

The most important engineering constraint was latency. Sensor fusion, local planning, and motor commands were profiled as one loop so the rover could react predictably instead of merely producing attractive maps.
