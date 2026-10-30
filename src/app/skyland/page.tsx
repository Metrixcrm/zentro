import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Home, Calendar, Search, MapPin, Star } from "lucide-react";

const features = [
  { title: "Property Sales", desc: "Luxury apartments, premium plots, and commercial real estate", icon: Home },
  { title: "Calendar Booking", desc: "Airbnb-style calendar booking for vacation rentals", icon: Calendar },
  { title: "Guest Management", desc: "End-to-end guest stay management and communication", icon: Star },
  { title: "Verified Listings", desc: "Quality-assured properties with verified availability", icon: Search },
  { title: "Location Services", desc: "Prime locations with detailed maps and neighborhood insights", icon: MapPin },
];

export default function SkylandPage() {
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
            Skyland Real Estate
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Plot & luxury apartment sales, plus Airbnb-style calendar booking
            and guest stay management.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-dark rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="mb-3 flex justify-center">
                    <Icon className="h-8 w-8 text-teal-400" />
                  </div>
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
