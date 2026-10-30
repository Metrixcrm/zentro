"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { LogIn, UserPlus, Shield, Globe } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="glass-dark rounded-2xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Globe className="h-16 w-16 text-gold-primary mx-auto mb-6 gold-glow" />

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gold-primary mb-4 tracking-wider">
                Zentro SSO
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                One identity across all six brands. Sign in once and access
                Matrixx CRM, IT Services, Vintology, Skyland, Zentro Mart, and
                Ayses seamlessly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="gold-glow inline-flex items-center justify-center gap-2 rounded-full bg-gold-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <LogIn className="h-5 w-5" />
                  Sign In
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-primary/30 px-8 py-3 text-sm font-medium text-foreground hover:bg-gold-primary/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <UserPlus className="h-5 w-5" />
                  Create Account
                </motion.button>
              </div>

              <motion.div
                className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Shield className="h-4 w-4 text-gold-primary" />
                <span>Secure SSO via auth.zentro.com • Single session across *.zentro.com</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
