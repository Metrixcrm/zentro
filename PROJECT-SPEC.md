# ZENTRO GLOBAL HOLDING WEBSITE — Build Spec

## Brand Identity
- **Logo**: 3D Golden Wireframe Globe / Lattice Sphere. Enterprise luxury corporate aesthetic.
- **Colors**: Metallic Gold (#D4AF37), Warm Bronze/Champagne (#C5A059), Golden Highlight (#F3E5AB)
- **Night Mode (Default)**: Deep Midnight Slate (#0B0F17), Charcoal Glass (#1E293B), Glassmorphism cards `bg-slate-900/60 border-amber-500/20`
- **Day Mode**: Crisp Ivory & Pure White (#F8FAFC/#FFFFFF), Warm Alabaster (#F1F5F9), Soft Gold Glass cards `bg-white/80 border-amber-200/60`
- **Typography**: Headings = Cinzel/Cormorant Garamond/Playfair Display (serif); Body = Inter/Plus Jakarta Sans/Outfit (geometric sans)

## Tech Stack
- Next.js 14 (App Router) + TypeScript, Tailwind CSS, Shadcn UI, Lucide React Icons, next-themes
- Animations: Framer Motion. 3D: Three.js / React Three Fiber — interactive golden wireframe globe in hero
- Auth: Universal SSO via auth.zentro.com (OpenID Connect)

## Ecosystem Portfolio (6 sub-brands)
1. Matrixx CRM — Electric Gold #D4AF37
2. Zentro IT & Tech — Cyber Blue & Gold #3B82F6
3. Vintology — Warm Rust #9A3412
4. Skyland — Slate Teal #0D9488
5. Zentro Mart — Farm Green #15803D
6. Ayses — Berry Rose #BE185D

## Pages
1. Landing (/) — Nav bar, hero with 3D globe + platform switcher, ecosystem grid
2. /matrixx-crm — CRM modules + interactive demo widget
3. /it-services — Categorized services + service calculator + booking
4. /vendors — Vendor onboarding form (KYC workflow)
5. /account — Universal SSO hub dashboard

## UI Specs
- Glassmorphism: dark `bg-slate-900/60 border-amber-500/20`, light `bg-white/80 border-amber-300/40 shadow-xl shadow-amber-500/5`
- Buttons: gold gradients `from-amber-600 via-yellow-500 to-amber-600` with hover glow
- Day/Night theme toggle (Sun/Moon switch)
- Hero 3D globe: React Three Fiber golden wireframe lattice sphere

## Key Commands
```
npx create-next-app@latest . --typescript --tailwind --eslint --src-dir --app --import-alias "@/*"
npm install three @react-three/fiber @react-three/drei framer-motion next-themes lucide-react
npx shadcn@ui init
npx shadcn@ui add button card navigation-menu toggle
```
