"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Eye, EyeOff, Globe } from "lucide-react";

const services = [
  "Matrixx CRM",
  "IT Services",
  "Vintology",
  "Skyland",
  "Zentro Mart",
  "Ayses",
];

export default function SSOModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-dark relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-6">
            <Globe className="h-10 w-10 text-gold-primary mx-auto mb-2" />
            <h2 className="font-heading text-2xl font-bold text-gold-primary">
              Zentro Universal Pass
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              One identity. Infinite innovation.
            </p>
          </div>

          <div className="flex rounded-full bg-slate-800/50 p-1 mb-6">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  mode === m
                    ? "bg-gold-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "signin" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`${mode === "signin" ? "Signed in" : "Account created"} for ${email}`);
              onClose();
            }}
            className="space-y-4"
          >
            {mode === "signup" && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm focus:border-gold-primary focus:outline-none"
                  required
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm focus:border-gold-primary focus:outline-none"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-10 text-sm focus:border-gold-primary focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors gold-glow-sm"
            >
              {mode === "signin" ? "Sign In to All Services" : "Create Universal Pass"}
            </button>
          </form>

          <div className="mt-6">
            <p className="text-xs text-muted-foreground text-center mb-3">
              Instant access to all 6 platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-amber-500/20 bg-slate-800/40 px-3 py-1 text-xs text-gold-warm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
