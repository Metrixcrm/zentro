"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Globe, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import SSOModal from "./sso-modal";

const navItems = [
  { name: "Matrixx CRM", href: "/matrixx-crm", color: "matrixx-gold" },
  { name: "IT & Tech", href: "/it-services", color: "it-blue-gold" },
  { name: "Vintology", href: "/vendors", color: "vintology-rust" },
  { name: "Skyland", href: "/skyland", color: "skyland-teal" },
  { name: "Zentro Mart", href: "/mart", color: "zentro-mart-green" },
  { name: "Ayses", href: "/ayles", color: "ayles-berry" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ssoOpen, setSsoOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Globe className="h-8 w-8 text-gold-primary" />
          <span className="font-heading text-2xl font-bold text-gold-primary tracking-wider">
            ZENTRO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-current transition-transform group-hover:scale-x-100"
                style={{
                  color: `var(--${item.color})`,
                  backgroundColor: `var(--${item.color})`,
                }}
              />
            </Link>
          ))}
        </div>

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSsoOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-gold-warm transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-gold-primary" />
              ) : (
                <Moon className="h-5 w-5 text-gold-primary" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-t border-border/30 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted/30 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
    <SSOModal open={ssoOpen} onClose={() => setSsoOpen(false)} />
    </>
  );
}
