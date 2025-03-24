import React from "react";
import Hero from "../components/Hero.jsx";
import Story from "../components/Story.jsx";
import Signature from "../components/Signature.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CoreFeatures from "../components/CoreFeatures.jsx";


export default function About() {

  return (
    <div className="flex flex-col">
      <Hero image={"/about.jpeg"} title={"ABOUT US"} subtitle={"Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully."}/>
      <Story />

      <CoreFeatures/>

      <Signature/>

      <Testimonials/>

    </div>
  );
}
