"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, CheckCircle2 } from "lucide-react";

const services = [
  { id: "seo", name: "SEO Audit & Optimization", base: 500, unit: "project" },
  { id: "web", name: "Web Development (Next.js)", base: 2000, unit: "project" },
  { id: "mobile", name: "Mobile App (iOS/Android)", base: 5000, unit: "project" },
  { id: "ai", name: "AI Automation Agent", base: 1500, unit: "agent" },
  { id: "marketing", name: "Digital Marketing Campaign", base: 800, unit: "month" },
  { id: "repair", name: "Mobile/Hardware Repair", base: 80, unit: "device" },
];

export default function ITCalculator() {
  const [selected, setSelected] = useState<string[]>(["web"]);
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(3);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const estimate = useMemo(() => {
    const baseCost = selected.reduce((sum, id) => {
      const s = services.find((x) => x.id === id);
      return sum + (s ? s.base : 0);
    }, 0);
    const total = baseCost * quantity * (duration > 1 ? duration : 1);
    const weeks = Math.max(2, selected.length * 2 + (quantity > 1 ? 2 : 0));
    return { total, weeks };
  }, [selected, quantity, duration]);

  return (
    <motion.div
      className="glass-dark rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-6 w-6 text-gold-primary" />
        <h3 className="font-heading text-xl font-bold text-gold-primary">
          Service Cost Calculator
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        <p className="text-sm text-muted-foreground">Select services:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-left transition-colors ${
                selected.includes(s.id)
                  ? "border-gold-primary bg-gold-primary/10 text-foreground"
                  : "border-amber-500/20 bg-slate-800/30 text-muted-foreground hover:border-gold-primary/40"
              }`}
            >
              {selected.includes(s.id) && (
                <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
              )}
              <span className="flex-1">{s.name}</span>
              <span className="text-xs text-gold-warm">${s.base}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            Quantity
          </label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2 px-3 text-sm focus:border-gold-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            Duration (months)
          </label>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2 px-3 text-sm focus:border-gold-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-r from-amber-600/20 to-yellow-500/20 border border-amber-500/30 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <DollarSign className="h-4 w-4" /> Estimated Cost
          </span>
          <span className="text-2xl font-bold text-gold-primary">
            ${estimate.total.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> Est. Timeline
          </span>
          <span>{estimate.weeks} weeks</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        * Estimates are indicative. Final quote provided after consultation.
      </p>
    </motion.div>
  );
}
