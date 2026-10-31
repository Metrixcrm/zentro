"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Droplets, Heart, Package } from "lucide-react";

const features = [
  { title: "Organic Skincare", desc: "Botanical skincare crafted from nature's purest ingredients", icon: Sparkles },
  { title: "Herbal Haircare", desc: "Plant-based hair treatments and herbal haircare solutions", icon: Leaf },
  { title: "Natural Beauty", desc: "Pure, chemical-free beauty products for all skin types", icon: Heart },
  { title: "Pantry Wellness", desc: "Health supplements and organic wellness essentials", icon: Package },
  { title: "Hydration", desc: "Infused hydration oils and botanical body care", icon: Droplets },
];

export default function AylesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-6 pt-20 pb-16 text-center">
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-bold text-gold-primary mb-6 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Ayses
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Organic skincare, herbal haircare, and botanical beauty products
            crafted from nature's purest ingredients.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-dark rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="mb-3 flex justify-center">
                    <Icon className="h-8 w-8 text-pink-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gold-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
