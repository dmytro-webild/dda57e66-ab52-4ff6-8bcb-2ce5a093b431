"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Programs",
          id: "/programs",
        },
        {
          name: "Stories",
          id: "/stories",
        },
        {
          name: "Apply",
          id: "/apply",
        },
      ]}
      brandName="SSSI"
    />
  </div>

  <div id="about-body" data-section="about-body">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Story"
      description="A bridge from South Sudan to global education. Started with a vision for peaceful, educated societies."
      imageSrc="http://img.b2bpic.net/free-photo/african-kid-leaning-class_23-2148892562.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Join our mission to create a brighter, more peaceful future for the youth of South Sudan."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SSSI"
      leftLink={{
        text: "Terms of Service",
        href: "/#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "/contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
