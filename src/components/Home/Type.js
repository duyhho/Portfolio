import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mixed Reality (AR/VR/XR)",
          "Object Detection",
          "AI-Empowered Robotics",
          "3D Application Development",
          "Reinforcement Learning",
          "Digital Twins"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 110,
        delay: 50
      }}
    />
  );
}

export default Type;
