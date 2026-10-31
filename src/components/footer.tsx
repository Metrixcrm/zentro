import Link from "next/link";
import CurrentYear from "./current-year";
import { Mail, MapPin } from "lucide-react";

const GithubIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-5.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5V22" />
    <path d="M9 18a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.5-2 4A5.5 5.5 0 0 1 12 12a5.5 5.5 0 0 1-4-1.5A4 4 0 0 1 2 8" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gold-primary font-heading">
              ZENTRO GLOBAL
            </Link>
            <p className="text-sm text-muted-foreground">
              One Identity. Infinite Innovation.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/systemuse141-dev/zentro" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-gold-primary transition-colors">
                <GithubIcon />
              </a>
              <a href="https://twitter.com/zentro" className="p-2 text-muted-foreground hover:text-gold-primary transition-colors">
                <TwitterIcon />
              </a>
              <a href="mailto:hello@zentro.com" className="p-2 text-muted-foreground hover:text-gold-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-gold-primary">Brands</h3>
            <div className="flex flex-col gap-2">
              <Link href="/matrixx-crm" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Matrixx CRM</Link>
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">IT & Tech</Link>
              <Link href="/vendors" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Vintology</Link>
              <Link href="/skyland" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Skyland</Link>
              <Link href="/mart" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Zentro Mart</Link>
              <Link href="/ayles" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Ayses</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-gold-primary">Services</h3>
            <div className="flex flex-col gap-2">
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Web Development</Link>
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">AI Automation</Link>
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Mobile Apps</Link>
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Digital Marketing</Link>
              <Link href="/it-services" className="text-sm text-foreground/70 hover:text-gold-primary transition-colors">Hardware Repair</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-gold-primary">Headquarters</h3>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-gold-primary" />
              <span>London, UK • Global Operations</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © <CurrentYear /> Zentro Global Holding. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
