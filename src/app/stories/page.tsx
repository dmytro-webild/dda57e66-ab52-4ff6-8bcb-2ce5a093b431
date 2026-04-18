"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function StoriesPage() {
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

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Student Success"
      description="Inspiring journeys from our community."
      blogs={[
        { id: "s1", category: "Success", title: "Achieving Dreams", excerpt: "One student's journey to university.", imageSrc: "http://img.b2bpic.net/free-photo/female-graduate-keeping-hands-chin-academic-dress-looking-merry-front-view_176474-51233.jpg", authorName: "Staff", authorAvatar: "http://img.b2bpic.net/free-photo/group-young-people_53876-31463.jpg", date: "2024" },
        { id: "s2", category: "Growth", title: "Building Peace", excerpt: "Leadership in action.", imageSrc: "http://img.b2bpic.net/free-photo/happy-student-graduation-cap_93675-133782.jpg", authorName: "Staff", authorAvatar: "http://img.b2bpic.net/free-photo/rad-passion-indy-soulful-spirit_53876-21291.jpg", date: "2024" }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Read more about how our scholars are changing the world."
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
