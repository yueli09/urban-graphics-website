"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { NavigationMenu } from "@/components/ui/nav-items";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Feature } from "@/components/ui/feature-section-with-grid";
import { Testimonials } from "@/components/ui/testimonials";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { Footerdemo } from "@/components/ui/footer-section";
import { FaqSection } from "@/components/ui/faq-section";
import { LanguageProvider } from "@/components/ui/language-context";
import { motion } from "framer-motion";

const SIGNAGE_FAQS = [
  {
    question: "What types of signage solutions do you offer?",
    answer: "We offer a comprehensive range of signage solutions including digital displays, LED signs, custom business signs, wayfinding systems, architectural signage, and vehicle wraps. Each solution is tailored to meet your specific needs and brand requirements.",
  },
  {
    question: "How long does the installation process take?",
    answer: "Installation timelines vary depending on the complexity and scale of the project. A simple business sign might take 1-2 days, while larger digital display systems could take 1-2 weeks. We'll provide a detailed timeline during the consultation phase.",
  },
  {
    question: "What customization options are available for your signage solutions?",
    answer: "We offer extensive customization options including custom colors, materials, sizes, lighting effects, and interactive features. Our design team works closely with you to incorporate your brand elements, choose weather-resistant materials, and optimize visibility for your specific location and viewing distance.",
  },
  {
    question: "What is the lifespan of your digital displays?",
    answer: "Our digital displays are built to last, with an average lifespan of 5-7 years with proper maintenance. LED components typically last 50,000-100,000 hours of continuous use. We offer warranties and maintenance plans to ensure optimal performance throughout the product lifecycle.",
  },
];

const translations = {
  en: {
    hero: {
      title: "Urban Graphics",
      subtitle: "Where Innovation Illuminates Business. Your Brand's Visual Revolution Starts Here",
    },
    services: {
      title: "Our Services",
      description: "Comprehensive signage solutions for your business",
    },
    products: {
      title: "Our Products",
      description: "Explore our wide range of high-quality signage products",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our signage solutions",
      contact: {
        title: "Still have questions?",
        description: "Contact Urban Graphics - Your Signage Experts",
        buttonText: "Contact Us",
      },
    },
  },
  zh: {
    hero: {
      title: "都市图像",
      subtitle: "创新照亮商业。您的品牌视觉革命从这里开始",
    },
    services: {
      title: "我们的服务",
      description: "全方位的标识解决方案",
    },
    products: {
      title: "我们的产品",
      description: "探索我们高品质的标识产品系列",
    },
    faq: {
      title: "常见问题",
      description: "关于我们标识解决方案的所有信息",
      contact: {
        title: "还有问题？",
        description: "联系都市图像 - 您的标识专家",
        buttonText: "联系我们",
      },
    },
  },
};

function PageContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <ThemeToggle />
      <LanguageSwitch />
      <NavigationMenu />
      
      {/* Hero Section */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 pt-24"
        >
          <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-center mb-6">
            {t.hero.title}
          </h1>
          <p className="font-extralight text-xl md:text-2xl dark:text-neutral-200 text-center">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </AuroraBackground>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
        <Feature 
          title={t.services.title}
          description={t.services.description}
        />
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-zinc-50/80 dark:bg-zinc-800/80 backdrop-blur-sm">
        <Feature 
          title={t.products.title}
          description={t.products.description}
          items={[
            {
              title: "LED Signs",
              description: "Energy-efficient LED signs with vibrant displays, perfect for day and night visibility. Custom sizes and designs available.",
              icon: "💡"
            },
            {
              title: "Channel Letters",
              description: "Custom-made dimensional letters with various lighting options. Perfect for business storefronts and building identification.",
              icon: "🔤"
            },
            {
              title: "Digital Displays",
              description: "High-resolution digital displays for dynamic content. Perfect for menus, advertisements, and information boards.",
              icon: "📺"
            },
            {
              title: "Vehicle Wraps",
              description: "Full and partial vehicle wraps with durable materials. Transform your fleet into mobile advertisements.",
              icon: "🚗"
            },
            {
              title: "Architectural Signs",
              description: "Custom architectural signage solutions that complement your building's design. ADA compliant options available.",
              icon: "🏢"
            },
            {
              title: "Window Graphics",
              description: "High-quality window decals and graphics. Perfect for storefronts, office spaces, and promotional displays.",
              icon: "🪟"
            }
          ]}
        />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-zinc-50/80 dark:bg-zinc-800/80 backdrop-blur-sm">
        <Testimonials />
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
        <Case />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-zinc-50/80 dark:bg-zinc-800/80 backdrop-blur-sm">
        <FaqSection
          title={t.faq.title}
          description={t.faq.description}
          items={SIGNAGE_FAQS}
          contactInfo={{
            title: t.faq.contact.title,
            description: t.faq.contact.description,
            buttonText: t.faq.contact.buttonText,
            onContact: () => {
              window.location.href = "mailto:urbangraphics22@gmail.com";
            },
          }}
        />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footerdemo
          companyName={t.hero.title}
          links={[
            { label: "Email", href: "mailto:urbangraphics22@gmail.com" },
            { label: "Office", href: "tel:212-619-1066" },
            { label: "Lisa", href: "tel:646-229-6220" },
            { label: "Jacky", href: "tel:646-479-0838" },
            { label: "Address", href: "https://maps.google.com/?q=149+East+Broadway+G/F+New+York,+NY+10002" }
          ]}
        />
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
