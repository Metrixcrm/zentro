import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Code, Wind, Smartphone, Search, Bot, Settings, Wrench } from "lucide-react";

const services = [
  { title: "Web Development", desc: "Next.js, React, Vue, and custom web applications for enterprise", icon: Code },
  { title: "Mobile Apps", desc: "iOS and Android native and cross-platform mobile solutions", icon: Smartphone },
  { title: "API Integrations", desc: "Seamless integration across the Zentro ecosystem and third-party platforms", icon: Settings },
  { title: "AI Automations", desc: "Autonomous AI agents, workflow automation, and custom LLM integration", icon: Bot },
  { title: "SEO & Marketing", desc: "Performance SEO, automated campaign management, and PPC scaling", icon: Search },
  { title: "Hardware Repair", desc: "Express device diagnostics, hardware repair booking, and mail-in services", icon: Wrench },
];

export default function ItServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-20 pb-16">
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-bold text-gold-primary mb-6 tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Zentro IT & Technology
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Complete end-to-end technology suite: software development, web
            applications, digital marketing, AI automation, and hardware repair.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="glass-dark rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, rotateY: 2 }}
                >
                  <div className="mb-3 flex justify-center">
                    <Icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gold-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
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
