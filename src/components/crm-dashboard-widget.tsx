"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const pipeline = [
  { stage: "New Leads", count: 24, color: "bg-blue-500" },
  { stage: "Qualified", count: 18, color: "bg-amber-500" },
  { stage: "Proposal", count: 12, color: "bg-purple-500" },
  { stage: "Won", count: 9, color: "bg-green-500" },
];

const activities = [
  { icon: Mail, text: "Email sent to Acme Corp", time: "2m ago" },
  { icon: Phone, text: "Call logged with Beta LLC", time: "15m ago" },
  { icon: MessageSquare, text: "WhatsApp reply from Gamma Inc", time: "1h ago" },
  { icon: CheckCircle2, text: "Deal closed — Delta Co", time: "3h ago" },
];

export default function CrmDashboardWidget() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "activity">("pipeline");

  return (
    <motion.div
      className="glass-dark rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-xl font-bold text-gold-primary">
          CRM Dashboard
        </h3>
        <div className="flex gap-2">
          {(["pipeline", "activity"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeTab === t
                  ? "bg-gold-primary text-primary-foreground"
                  : "bg-slate-800/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Leads", value: "1,284", icon: Users },
          { label: "Revenue", value: "$48.2K", icon: DollarSign },
          { label: "Conversion", value: "23.4%", icon: TrendingUp },
          { label: "Active Deals", value: "63", icon: BarChart3 },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-lg bg-slate-800/40 p-3 text-center"
            >
              <Icon className="h-4 w-4 text-gold-primary mx-auto mb-1" />
              <div className="text-lg font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Pipeline */}
      {activeTab === "pipeline" && (
        <div className="space-y-3">
          {pipeline.map((p) => (
            <div key={p.stage}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">{p.stage}</span>
                <span className="text-gold-primary font-medium">{p.count}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden">
                <motion.div
                  className={`h-full ${p.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(p.count / 24) * 100}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Activity */}
      {activeTab === "activity" && (
        <div className="space-y-3">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-slate-800/30 p-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="h-4 w-4 text-gold-primary shrink-0" />
                <span className="text-sm text-foreground flex-1">{a.text}</span>
                <span className="text-xs text-muted-foreground">{a.time}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
