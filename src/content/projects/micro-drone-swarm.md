---
title: "Micro Drone Swarm"
date: 2022-09-15
short_description: "A visual formation-control prototype for tiny drones using onboard telemetry and a minimal coordination protocol."
main_image: "/uploads/micro-drone-swarm.svg"
gallery_images:
  - "/uploads/formation-grid.svg"
  - "/uploads/lidar-detail.svg"
---

This prototype investigated how small drones can coordinate without an expensive centralized planner. Each vehicle receives a compact intent packet, estimates local neighbors, and makes low-cost corrections to maintain formation.

The project was built around graceful degradation. When telemetry quality drops, the swarm switches to conservative spacing and prioritizes predictable behavior over perfect geometry.
