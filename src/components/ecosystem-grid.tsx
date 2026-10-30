"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Code,
  ShoppingCart,
  Home,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";

const brands = [
  {
    id: "matrixx-crm",
    name: "Matrixx CRM",
    tagline: "Enterprise-Grade Customer Relationship Management",
    description:
      "Lead scoring, automated sales pipelines, client portals, multi-channel communication, and revenue analytics.",
    icon: BarChart3,
    color: "matrixx-gold",
    gradient: "from-amber-500/20 via-yellow-400/20 to-amber-500/20",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
    href: "/matrixx-crm",
  },
  {
    id: "it-services",
    name: "Zentro IT & Tech",
    tagline: "Full-Stack Development & AI Automation",
    description:
      "SaaS, mobile apps, web development, digital marketing, AI agents, workflow automation, and hardware repair.",
    icon: Code,
    color: "it-blue-gold",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    href: "/it-services",
  },
  {
    id: "vintology",
    name: "Vintology",
    tagline: "Artisanal & Vintage Multi-Vendor Marketplace",
    description:
      "Peer-to-peer marketplace with buyer-seller chat, secure escrow payments, and curated vintage collections.",
    icon: ShoppingCart,
    color: "vintology-rust",
    gradient: "from-orange-500/20 via-amber-500/20 to-orange-500/20",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    href: "/vendors",
  },
  {
    id: "skyland",
    name: "Skyland",
    tagline: "Real Estate & Vacation Rentals",
    description:
      "Plot & luxury apartment sales, Airbnb-style calendar booking, and guest stay management.",
    icon: Home,
    color: "skyland-teal",
    gradient: "from-teal-500/20 via-cyan-500/20 to-teal-500/20",
    border: "border-teal-500/20",
    iconColor: "text-teal-400",
    href: "/skyland",
  },
  {
    id: "zentro-mart",
    name: "Zentro Mart",
    tagline: "Organic Essentials",
    description:
      "Farm-pure organic spices, natural rock salts, pure pantry staples, and healthy organic products.",
    icon: ShoppingBasket,
    color: "zentro-mart-green",
    gradient: "from-green-500/20 via-emerald-500/20 to-green-500/20",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    href: "/mart",
  },
  {
    id: "ayles",
    name: "Ayses",
    tagline: "Herbal Beauty & Care",
    description:
      "Organic skincare, herbal haircare, and botanical beauty products crafted from nature's purest ingredients.",
    icon: Sparkles,
    color: "ayles-berry",
    gradient: "from-pink-500/20 via-rose-500/20 to-pink-500/20",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
    href: "/ayles",
  },
];

export default function EcosystemGrid() {
  return (
    <section className="py-20 container mx-auto px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-gold-primary mb-4 tracking-wider">
          THE ZENTRO ECOSYSTEM
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Six interconnected global brands, unified by a single sign-on identity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {brands.map((brand, index) => {
          const Icon = brand.icon;
          return (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, rotateX: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link href={brand.href} className="block">
                <div
                  className={`relative group h-full rounded-xl border ${brand.border} bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg bg-muted/30 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-7 w-7 ${brand.iconColor}`} />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {brand.name}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-gold-primary mb-2">
                      {brand.tagline}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {brand.description}
                    </p>

                    <div className="flex items-center gap-2 text-gold-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br ${brand.gradient} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
