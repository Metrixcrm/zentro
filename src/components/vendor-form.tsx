"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, Building2, User, Mail, Phone } from "lucide-react";

const categories = [
  "CRM Client",
  "IT Partner",
  "Handcrafted / Artisan",
  "Spices & Food",
  "Beauty & Wellness",
  "Real Estate",
  "Hardware Repairer",
];

export default function VendorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: categories[0],
    homeBased: false,
    description: "",
  });

  const update = (k: string, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <motion.div
        className="glass-dark rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-gold-primary mb-2">
          Application Received
        </h3>
        <p className="text-muted-foreground">
          Thank you, {form.name}! Our team will review your vendor application
          and reach out within 3-5 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-gold-primary/30 px-6 py-2 text-sm text-foreground hover:bg-gold-primary/10 transition-colors"
        >
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass-dark rounded-2xl p-6 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading text-xl font-bold text-gold-primary mb-2">
        Vendor Onboarding
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Business / Maker Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm focus:border-gold-primary focus:outline-none"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm focus:border-gold-primary focus:outline-none"
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm focus:border-gold-primary focus:outline-none"
          />
        </div>
        <select
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 px-3 text-sm focus:border-gold-primary focus:outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
        <input
          type="checkbox"
          checked={form.homeBased}
          onChange={(e) => update("homeBased", e.target.checked)}
          className="accent-amber-500"
        />
        Home-based / micro-supplier
      </label>

      <textarea
        placeholder="Tell us about your products / services..."
        value={form.description}
        onChange={(e) => update("description", e.target.value)}
        rows={4}
        className="w-full rounded-lg border border-amber-500/20 bg-slate-900/60 py-2.5 px-3 text-sm focus:border-gold-primary focus:outline-none resize-none"
      />

      <div className="flex items-center gap-3 rounded-lg border border-dashed border-amber-500/30 bg-slate-800/30 p-4">
        <Upload className="h-5 w-5 text-gold-primary" />
        <span className="text-sm text-muted-foreground">
          Upload sample / KYC documents (optional)
        </span>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors gold-glow-sm"
      >
        Submit Application
      </button>
    </motion.form>
  );
}
