"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Wrench, DollarSign, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

const devices = ["iPhone", "Samsung", "iPad", "Laptop"];
const issues: Record<string, { name: string; cost: number }[]> = {
  iPhone: [
    { name: "Display", cost: 120 },
    { name: "Battery", cost: 60 },
    { name: "Motherboard", cost: 250 },
    { name: "Water Damage", cost: 180 },
  ],
  Samsung: [
    { name: "Display", cost: 110 },
    { name: "Battery", cost: 55 },
    { name: "Motherboard", cost: 230 },
    { name: "Water Damage", cost: 170 },
  ],
  iPad: [
    { name: "Display", cost: 150 },
    { name: "Battery", cost: 80 },
    { name: "Motherboard", cost: 280 },
    { name: "Water Damage", cost: 200 },
  ],
  Laptop: [
    { name: "Display", cost: 200 },
    { name: "Battery", cost: 90 },
    { name: "Motherboard", cost: 350 },
    { name: "Water Damage", cost: 250 },
  ],
};

export default function RepairDiagnostic() {
  const [step, setStep] = useState(0);
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [scheduled, setScheduled] = useState(false);

  const cost = device && issue ? issues[device].find((i) => i.name === issue)?.cost ?? 0 : 0;

  const reset = () => {
    setStep(0);
    setDevice("");
    setIssue("");
    setScheduled(false);
  };

  return (
    <motion.div
      className="glass-dark rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="h-6 w-6 text-gold-primary" />
        <h3 className="font-heading text-xl font-bold text-gold-primary">
          Mobile Repair Diagnostic
        </h3>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-6">
        {["Device", "Issue", "Estimate"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${
                i <= step
                  ? "bg-gold-primary text-primary-foreground"
                  : "bg-slate-800/50 text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">{s}</span>
            {i < 2 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="device"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-2 gap-3"
          >
            {devices.map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDevice(d);
                  setStep(1);
                }}
                className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-slate-800/30 px-4 py-3 text-sm hover:border-gold-primary/40 transition-colors"
              >
                <Smartphone className="h-4 w-4 text-gold-primary" />
                {d}
              </button>
            ))}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="issue"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-2 gap-3"
          >
            {issues[device].map((iss) => (
              <button
                key={iss.name}
                onClick={() => {
                  setIssue(iss.name);
                  setStep(2);
                }}
                className="rounded-lg border border-amber-500/20 bg-slate-800/30 px-4 py-3 text-sm hover:border-gold-primary/40 transition-colors text-left"
              >
                {iss.name}
                <span className="block text-xs text-gold-warm mt-1">${iss.cost}</span>
              </button>
            ))}
            <button
              onClick={() => setStep(0)}
              className="col-span-2 text-xs text-muted-foreground hover:text-foreground mt-2"
            >
              ← Back to device selection
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="estimate"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="rounded-xl bg-gradient-to-r from-amber-600/20 to-yellow-500/20 border border-amber-500/30 p-5">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Device</span>
                <span className="text-sm text-foreground font-medium">{device}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Issue</span>
                <span className="text-sm text-foreground font-medium">{issue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <DollarSign className="h-4 w-4" /> Estimated Cost
                </span>
                <span className="text-2xl font-bold text-gold-primary">${cost}</span>
              </div>
            </div>

            {!scheduled ? (
              <button
                onClick={() => setScheduled(true)}
                className="w-full rounded-full bg-gold-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors gold-glow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" /> Schedule Doorstep Pickup
              </button>
            ) : (
              <div className="text-center py-4">
                <CheckCircle2 className="h-10 w-10 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-foreground">Repair scheduled!</p>
                <p className="text-xs text-muted-foreground">Tracking ID: REP-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
              </div>
            )}

            <button
              onClick={reset}
              className="w-full text-xs text-muted-foreground hover:text-foreground"
            >
              Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
