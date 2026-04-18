"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';

export default function ProgramsPage() {
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

  <div id="programs-body" data-section="programs-body">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        { id: "p1", title: "Scholarship Prep", period: "Full Course", price: "Access", features: ["University research", "Essay drafting", "Interview prep"], button: { text: "Apply", href: "/apply" }, imageSrc: "http://img.b2bpic.net/free-photo/front-view-friends-high-five_23-2148576836.jpg" },
        { id: "p2", title: "Peace Leadership", period: "Ongoing", price: "Inclusive", features: ["Conflict training", "Civic engagement", "Mentorship"], button: { text: "Join", href: "/apply" }, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-sitting-ramp_23-2147678211.jpg" }
      ]}
      title="Our Programs"
      description="Detailing our core academic and peace-focused initiatives."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Have questions about our programs? Our team is here to provide guidance and support."
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
