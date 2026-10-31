"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Users, Settings, BarChart, Headphones } from "lucide-react";

const features = [
  { title: "Lead Scoring", desc: "AI-powered predictive lead scoring and pipeline management", icon: BarChart3 },
  { title: "Client Portal", desc: "Secure client self-service portal with real-time dashboards", icon: Users },
  { title: "Multi-Channel", desc: "Unified communication across email, phone, chat, and social", icon: Headphones },
  { title: "Revenue Analytics", desc: "Revenue forecasting, attribution, and growth analytics", icon: BarChart },
  { title: "Automation", desc: "Automated workflows, follow-ups, and deal progression", icon: Settings },
  { title: "Integrations", desc: "Seamless integration with all Zentro ecosystem services", icon: CheckCircle },
];

export default function MatrixxCrmPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-20 pb-16 text-center">
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-bold text-gold-primary mb-6 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Matrixx CRM
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Enterprise-grade customer relationship management with AI-driven lead
            scoring, automated sales pipelines, and revenue analytics.
          </motion.p>
          <motion.button
            className="gold-glow inline-flex items-center justify-center rounded-full bg-gold-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Request Demo
          </motion.button>
        </section>

        {/* Features */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-amber-400" />
                    <h3 className="font-heading text-lg font-bold text-gold-primary">
                      {feature.title}
                    </h3>
                  </div>
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
