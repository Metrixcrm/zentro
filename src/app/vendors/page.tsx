"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Shield, MessageCircle, Package, DollarSign } from "lucide-react";

const features = [
  { title: "Secure Escrow", desc: "Protected transactions with verified escrow payments", icon: Shield },
  { title: "Buyer-Seller Chat", desc: "Real-time messaging for every listing and order", icon: MessageCircle },
  { title: "Curated Marketplace", desc: "Handpicked artisanal and vintage collections", icon: Package },
  { title: "Verified Vendors", desc: "Quality-assured sellers with ratings and reviews", icon: DollarSign },
];

export default function VendorsPage() {
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
            Vintology Marketplace
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Peer-to-peer artisanal & vintage multi-vendor marketplace with
            buyer-seller chat and secure escrow payments.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-dark rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
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
