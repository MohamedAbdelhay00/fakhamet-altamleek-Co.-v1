import React from 'react'
import Hero from '../Components/Hero/Hero'
import AboutUs from '../Components/AboutUs/AboutUs'
import Projects from '../Components/Projects/Projects'
import Services from '../Components/Services/Services'
import ContactUs from '../Components/ContactUs/ContactUs'
import Testimonials from '../Components/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
    </>
  );
}
