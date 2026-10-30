"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import GoldenGlobe from "./golden-globe";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.neutral.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.700/20)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo / Globe */}
          <div className="mb-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="flex items-center justify-center gap-4"
            >
              <Sparkles className="h-12 w-12 text-gold-primary animate-pulse gold-glow" />
              <h1 className="font-heading text-6xl md:text-8xl font-extrabold tracking-[0.2em] text-gold-primary leading-none">
                ZENTRO
              </h1>
              <Sparkles className="h-12 w-12 text-gold-primary animate-pulse gold-glow" />
            </motion.div>
            <p className="mt-4 text-sm font-mono text-gold-warm/60 tracking-widest">
              GLOBAL HOLDING • SSO Ecosystem
            </p>
          </div>

          {/* Tagline */}
          <motion.h2
            className="text-2xl md:text-4xl font-medium mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            One Identity. <span className="text-gold-primary">Infinite Innovation.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            From enterprise CRM and full-stack development to AI automation,
            global marketplaces, real estate, organic essentials, and botanical
            beauty — all under one unified sign-on ecosystem.
          </motion.p>

          {/* 3D Globe */}
          <motion.div
            className="mb-12 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, type: "spring" }}
          >
            <GoldenGlobe />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link href="/it-services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="group gold-glow-sm inline-flex items-center justify-center gap-2 rounded-full bg-gold-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold-warm"
              >
                Explore the Ecosystem
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/account">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-primary/30 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-gold-primary/10"
              >
                Sign In / Sign Up
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-primary">6</div>
              <div className="text-sm text-muted-foreground">Global Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-primary">∞</div>
              <div className="text-sm text-muted-foreground">Integrated Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-primary">1</div>
              <div className="text-sm text-muted-foreground">Unified Identity</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-gold-primary/30 flex justify-center"
          animate={{ borderColor: "#D4AF37" }}
        >
          <motion.div
            className="w-1 h-3 rounded-full bg-gold-primary mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
