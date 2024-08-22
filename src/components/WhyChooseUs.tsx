
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const photographyStudioContent = [
  {
    title: 'Capture Your Moments with Us: A Personal Journey in Photography Mastery',
    description:
      'Embark on a photography journey that’s uniquely yours. Our personalized sessions adapt to your individual style, setting the stage for unparalleled creativity. At our studio, your vision meets our dedicated expertise, creating timeless memories through the art of photography.',
  },
  {
    title: 'Capture Your Moments with Us: A Personal Journey in Photography Mastery',
    description:
      'Embark on a photography journey that’s uniquely yours. Our personalized sessions adapt to your individual style, setting the stage for unparalleled creativity. At our studio, your vision meets our dedicated expertise, creating timeless memories through the art of photography.',
  },
  {
    title: 'Capture Your Moments with Us: A Personal Journey in Photography Mastery',
    description:
      'Embark on a photography journey that’s uniquely yours. Our personalized sessions adapt to your individual style, setting the stage for unparalleled creativity. At our studio, your vision meets our dedicated expertise, creating timeless memories through the art of photography.',
  },
  {
    title: 'Real-Time Feedback & Engagement',
    description:
      'Immerse yourself in an interactive photo session where feedback is immediate, just like making adjustments on the spot. This approach enhances your understanding of lighting, angles, and composition, leading to perfect shots every time.',
  },
  {
    title: 'Cutting-Edge Photography Techniques',
    description:
      'Our studio stays at the forefront of photography trends and technologies, ensuring your photos are captured with the most current and effective methods. Say goodbye to outdated techniques and welcome a photography experience that evolves with the art.',
  },
  {
    title: 'Limitless Creative Possibilities',
    description:
      'With our extensive portfolio and dynamic session offerings, you’ll always find something new to inspire your creativity. Our studio provides continuous opportunities for growth, ensuring your photography skills are always advancing.',
  },
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={photographyStudioContent} />
    </div>
  )
}

export default WhyChooseUs