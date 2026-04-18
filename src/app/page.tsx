"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Programs", id: "/programs" },
        { name: "Stories", id: "/stories" }
      ]}
      brandName="SSSI"
      button={{ text: "Apply" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Empowering South Sudanese Students Through Education & Peace"
      description="We prepare, guide, and connect students to global opportunities while promoting non-violence in our communities."
      tag="SSSI Global Initiative"
      buttons={[
        { text: "Apply Now", href: "/apply" },
        { text: "Read Stories", href: "/stories" }
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516688458-xglc7mu8.png", imageAlt: "Student Success" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516679407-f0t1wu1d.jpg", imageAlt: "Community Impact" }
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Empowering 50+ students"
    />
  </div>

  <div id="what-we-do" data-section="what-we-do">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { id: "f1", title: "Scholarship Access", descriptions: ["Expert guidance on university applications and scholarship opportunities."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516713234-whtti2e7.png" },
        { id: "f2", title: "Mentorship", descriptions: ["One-on-one support for personal growth and academic storytelling."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516733809-zyy9kfrm.jpg" },
        { id: "f3", title: "Peace Advocacy", descriptions: ["Training students to be active leaders in peace and non-violence."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516757433-1935ai8r.jpg" }
      ]}
      title="What We Do"
      description="Our core pillars guide students from local classrooms to global achievements."
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "5+", title: "Students Guided", description: "Successfully supported applicants", imageSrc: "http://img.b2bpic.net/free-photo/badge-icon-front-side_187299-39424.jpg" },
        { id: "m2", value: "3+", title: "Applications Submitted", description: "Global university reach", imageSrc: "http://img.b2bpic.net/free-vector/inhome-daycare-abstract-concept-vector-illustration-inhome-caregiver-service-child-care-housekeeper-help-with-kids-daycare-assistance-early-education-nanny-baby-abstract-metaphor_335657-5906.jpg" },
        { id: "m3", value: "5+", title: "Offers Received", description: "International scholarship wins", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776516238514-r0d4od5a.jpg" }
      ]}
      title="Our Impact"
      description="Evidence of our commitment to student success and community peace."
    />
  </div>

  <div id="contact-home" data-section="contact-home">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Connect With Us"
      title="Your journey starts here."
      description="Join our network or partner with us to drive transformation."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWsLWfBQ7Y7pDUYXmFpggX5vY1/uploaded-1776512944234-c0p5d2r2.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SSSI"
      leftLink={{ text: "Terms of Service", href: "/#" }}
      rightLink={{ text: "Contact Us", href: "/contact" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
