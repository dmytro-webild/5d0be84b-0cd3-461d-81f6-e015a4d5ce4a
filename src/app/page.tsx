"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Facebook, Instagram, Shield, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Products", id: "products" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Forever Wellness"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Nature's Finest Wellness Products"
      description="Experience the natural power of aloe vera for your health, beauty, and daily vitality. Trusted wellness products delivered to your door."
      imageSrc="http://img.b2bpic.net/free-photo/sotol-drink-still-life_23-2151058001.jpg?_wi=1"
      imageAlt="natural wellness aloe vera product"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Dedicated to Your Well-being"
      description="I'm Jane Doe, a certified distributor of Forever Living products. My mission is to share the life-changing benefits of aloe vera and natural supplements with everyone."
      subdescription="With over 10 years of experience, I ensure every customer gets authentic products tailored to their health goals."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-portrait-green-eyed-brunette-woman-hair-band-white-t-shirt-against-wall-windows-cacti_197531-17042.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Aloe Vera Gel", price: "$34.99", variant: "Pure Natural", imageSrc: "http://img.b2bpic.net/free-photo/woman-with-sleep-mask-holding-glass-water-lime_23-2148537315.jpg" },
        { id: "p2", name: "Aloe Moisturizing Cream", price: "$24.99", variant: "Skincare", imageSrc: "http://img.b2bpic.net/free-photo/aloe-vera-leaves-with-beauty-cream-bottle_23-2148173827.jpg" },
        { id: "p3", name: "Forever Bee Honey", price: "$19.99", variant: "Supplement", imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-fruit-homemade-orange-jam_23-2148531736.jpg" },
        { id: "p4", name: "Aloe Body Lotion", price: "$22.99", variant: "Body Care", imageSrc: "http://img.b2bpic.net/free-photo/aloe-vera-leaves-with-beauty-cream-bottle_23-2148173892.jpg" },
        { id: "p5", name: "Forever Lite Ultra", price: "$39.99", variant: "Nutrition", imageSrc: "http://img.b2bpic.net/free-photo/healthy-eating-smoothies_169016-1417.jpg" },
        { id: "p6", name: "Aloe Berry Nectar", price: "$34.99", variant: "Health Drink", imageSrc: "http://img.b2bpic.net/free-photo/aloe-vera-cosmetic-cream-dark-surface_1150-42281.jpg" },
      ]}
      title="Our Best Sellers"
      description="Discover our most loved aloe vera-based supplements and skincare essentials."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Organic Ingredients",          description: "Sourced from the finest aloe plantations.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/nutritional-counter-app-composition-high-angle_23-2149880624.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/shopper-using-online-store-mobile-app-phone-examining-modern-fashion-items-collection-buying-merchandise-boutique-client-looking-clothing-line-retail-shop-website_482257-67405.jpg" },
        },
        {
          title: "Certified Quality",          description: "Meets international health standards.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/person-being-scanned-by-digital-health-app_23-2151891755.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/advert-cafe_1098-13002.jpg" },
        },
        {
          title: "Customer First",          description: "Personalized advice for every order.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-eating-checking-his-smartphone_23-2149409595.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-smartphone_23-2150232403.jpg" },
        },
      ]}
      showStepNumbers={true}
      title="Why Choose Our Products?"
      description="Pure ingredients, sustainable harvesting, and quality you can trust."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          title: "Daily Wellness",          price: "$89",          period: "/month",          features: ["Daily Gel", "Multivitamin", "Free Shipping"],
          button: { text: "Order Now" },
          imageSrc: "http://img.b2bpic.net/free-vector/set-botanical-logo-design-vectors_53876-82228.jpg",          imageAlt: "wellness industry icon brand"},
        {
          id: "pro",          title: "Total Beauty",          price: "$129",          period: "/month",          features: ["Skincare Pack", "Aloe Gel", "Priority Support"],
          button: { text: "Order Now" },
          imageSrc: "http://img.b2bpic.net/free-photo/sotol-drink-still-life_23-2151058001.jpg?_wi=2",          imageAlt: "wellness industry icon brand"},
        {
          id: "elite",          title: "Complete Vitality",          price: "$199",          period: "/month",          features: ["Full Supplement Set", "Beauty & Care", "Personal Coaching"],
          button: { text: "Order Now" },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-green-eyed-brunette-woman-hair-band-white-t-shirt-against-wall-windows-cacti_197531-17042.jpg?_wi=2",          imageAlt: "wellness industry icon brand"},
      ]}
      title="Wellness Bundles"
      description="Special value packs for a complete wellness routine."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Miller", role: "User", company: "Happy Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13337.jpg" },
        { id: "t2", name: "John Smith", role: "Distributor", company: "Forever Team", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesspeople-with-luggage-standing-front-escalator_107420-95768.jpg" },
        { id: "t3", name: "Emily Davis", role: "Nutritionist", company: "Health First", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-bride-before-wedding_23-2149860779.jpg" },
        { id: "t4", name: "Michael Brown", role: "Fitness Enthusiast", company: "GymLife", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-smiling-woman-skin-cream-looking-camera-with-bottle-product-home_197531-32399.jpg" },
        { id: "t5", name: "Laura Wilson", role: "Skincare Expert", company: "Beauty Solutions", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-preparing-shaving-her-body_23-2150162759.jpg" },
        { id: "t6", name: "Kevin Lee", role: "Health Blogger", company: "Daily Wellness", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-using-laptop-computer-smart-phone-beautiful-student-girl-working-laptop-outdoor_1328-645.jpg" },
      ]}
      title="Customer Success Stories"
      description="See why our customers love Forever products."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "HealthCare Alliance", "Nature Trust", "Wellness Global", "Skincare Pro", "Nutrition Daily", "Forever Life", "Global Beauty Co"]}
      title="Trusted by Thousands"
      description="Joining a global network of health-conscious individuals."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Are products natural?", content: "Yes, we prioritize natural aloe vera and organic ingredients." },
        { id: "f2", title: "How long for delivery?", content: "Orders typically arrive within 3-5 business days." },
        { id: "f3", title: "Can I become a distributor?", content: "Absolutely! We provide all the support you need to start." },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contact Us"
      title="Start Your Journey Today"
      description="Have questions about products? Get in touch with me directly."
      inputPlaceholder="Enter your email address to get the catalog"
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-pieces-aloe-vera-marble-background_23-2148241800.jpg"
      imageAlt="High angle of pieces of aloe vera on marble background"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Forever Wellness"
      copyrightText="© 2025 Forever Wellness. All rights reserved."
      socialLinks={[
        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
        { icon: Twitter, href: "#", ariaLabel: "Twitter" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
