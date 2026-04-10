import React from "react";
import { NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Zap,
  ShieldCheck,
  Smartphone,
  Moon,
  Database,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

/**
 * 🔹 FeatureCard Component
 * ----------------------------------------
 * Reusable card component to display individual features.
 * It accepts:
 * - icon → icon component
 * - title → feature title
 * - description → feature description
 * - delay → animation delay for staggered effect
 */
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className={`group p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-dark-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slide-up`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
  >
    {/* Icon container with hover animation */}
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary mb-6 group-hover:rotate-12 transition-transform duration-300">
      <Icon size={28} />
    </div>

    {/* Feature title */}
    <h3 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text">
      {title}
    </h3>

    {/* Feature description */}
    <p className="text-light-muted dark:text-dark-muted leading-relaxed">
      {description}
    </p>
  </div>
);

const Body = () => {
  /**
   * 🔹 Features Data Array
   * ----------------------------------------
   * Stores all feature details which are dynamically rendered
   * using FeatureCard component.
   */
  const features = [
    {
      icon: ShoppingBag,
      title: "Product Management",
      description:
        "Advanced product listing with real-time availability and detailed specifications.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description:
        "Built with Vite for near-instant load times and optimized asset delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Checkout",
      description:
        "Fully encrypted payment processing powered by modern security protocols.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Designed to look stunning on everything from 300px devices to large desktops.",
    },
    {
      icon: Moon,
      title: "Adaptive Theme",
      description:
        "Seamless switching between light and dark modes with a single click.",
    },
    {
      icon: Database,
      title: "Global State",
      description:
        "Centralized cart and product data using React Context API for consistency.",
    },
  ];

  return (
    /**
     * 🔹 Main Container
     * Handles full page layout with theme-based background
     */
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          {/* 🔹 Image Section */}
          <div className="w-full xxs:order-0 md:order-1 md:w-1/2 relative">

            {/* Main Image with hover rotation effect */}
            <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="../src/assets/bg-image.avif"
                alt="Modern E-commerce Experience"
                className="w-auto h-auto object-cover md:aspect-4/3 lg:aspect-6/4 "
                loading="lazy"
              />

              {/* Overlay gradient for visual depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative blurred background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-light-secondary/20 dark:bg-dark-secondary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-light-accent/20 dark:bg-dark-accent/10 rounded-full blur-3xl z-0"></div>
          </div>

          {/* 🔹 Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary text-sm font-semibold mb-6">
              <ShoppingBag size={16} />
              <span>New Products for 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl xxs:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-light-text dark:text-dark-text transition-colors duration-300">
              Next-gen begins now{" "}
              <span className="text-dark-primary"> E-commerce</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-light-muted dark:text-dark-muted max-w-xl leading-relaxed">
              Discover a better way to shop with trusted payments, live updates, and premium brands worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-4 mt-10 w-full xs:w-auto">

              {/* Navigate to Products Page */}
              <NavLink
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg shadow-light-primary/20 dark:shadow-dark-primary/20 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
              >
                Search Products
                <ArrowRight className="ml-2" size={20} />
              </NavLink>

              {/* Navigate to Cart Page */}
              <NavLink
                to="/cart"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold border-2 border-light-border dark:border-dark-border text-light-text dark:text-dark-text rounded-xl hover:bg-light-surface dark:hover:bg-dark-surface transition-all duration-300"
              >
                <ShoppingCart className="mr-2" size={20} />
                View Cart
              </NavLink>
            </div>

            {/* 🔹 Stats Section */}
            <div className="mt-12 flex gap-8 items-center border-t border-light-border dark:border-dark-border pt-8 w-full">
              <div>
                <p className="text-2xl font-bold text-light-text dark:text-dark-text">
                  20k+
                </p>
                <p className="text-sm text-light-muted dark:text-dark-muted">
                  Products
                </p>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-light-border dark:border-dark-border"></div>

              <div>
                <p className="text-2xl font-bold text-light-text dark:text-dark-text">
                  24X7
                </p>
                <p className="text-sm text-light-muted dark:text-dark-muted">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-light-border dark:border-dark-border max-w-7xl mx-auto opacity-50" />

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4">
              Platform Features
            </h2>
            <p className="text-light-muted dark:text-dark-muted max-w-xl mx-auto">
              A complete solution to manage your e-commerce business with ease and efficiency.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Mapping features dynamically */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                delay={index * 100} // Stagger animation delay
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;