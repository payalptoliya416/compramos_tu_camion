# Compramos Tu Camión – React + TypeScript + Tailwind CSS v4

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Fonts
- Body (`html, body`): **Poppins** (Google Fonts, loaded in `index.html`)
- Headings (`h1–h6`): **SF Pro Display** – licensed font, add these files to `public/fonts/`:
  `SF-Pro-Display-Regular.woff2`, `SF-Pro-Display-Medium.woff2`, `SF-Pro-Display-Semibold.woff2`
  (until then the system UI font is used as fallback)

## Container
`.container-x` in `src/index.css`
- below 1024px: full width with side padding
- laptop (≥1024px): max **1120px**
- large screens (≥1536px): max **1440px**

## Images
Export images from Figma and place them in `public/images/` using the names listed in
`src/data/images.ts`. Missing images show a grey placeholder, so nothing breaks.

## Structure
```
src/
  components/
    layout/    Header, Footer, Layout, Logo
    sections/  Hero (common), SplitSection, FeatureGrid, Steps, CtaBanner, ValuationForm,
               Testimonials, Faq, FinalCta, TruckCategories, BrandLogos, RecentPurchases, ComparisonTable
    ui/        Img, SectionHeading, CtaButton, CheckItem
  data/        site.ts (nav, footer, testimonials…), images.ts, posts.ts
  pages/       15 pages (5 truck-type pages share TruckTypePage.tsx)
```

## Routes
`/` · `/how-it-works` · `/collection-across-spain` · `/about-us` · `/blog` · `/business-fleet-sales` ·
`/documents-required-to-sell-a-truck` · `/get-a-free-valuation` · `/sell-by-make-and-model` ·
`/private-truck-sellers` · `/truck-types/{concrete-mixer-trucks | multilift-hook-lift-trucks | parcel-delivery-trucks | refrigerated-trucks | 3500-kg-light-trucks}`
"# compramos_tu_camion" 
