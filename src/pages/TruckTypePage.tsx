import { ClipboardList, FileText, Search, ShieldCheck, MessageSquare, FileSignature, Users, CheckCircle2 } from 'lucide-react';
import type { FaqItem } from '@/types';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import TruckCategories from '@/components/sections/TruckCategories';
import CtaBanner from '@/components/sections/CtaBanner';
import Steps from '@/components/sections/Steps';
import ValuationForm from '@/components/sections/ValuationForm';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

export interface TruckTypeConfig {
  name: string; // e.g. "Concrete Mixer Truck"
  heroTitle?: string;
  crumb: string; // breadcrumb label
  heroBadge: string;
  heroImage: string;
  heroText: string;
  splitBadge: string;
  splitTitle: string;
  splitParagraphs: string[];
  splitImage: string;
  pills: string[];
  whyBadge?: string;
  whyTitle: string;
  why: { title: string; text: string; icon?: any }[];
  staggeredWhy?: boolean;
  showCategoryDescription?: boolean;
  categoriesClassName?: string;
  categoriesBadge?: string;
  ctaTitle: string;
  ctaText: string;
  ctaBadge?: string;
  ctaChecks?: string[];
  processTitle: string;
  steps: { title: string; text: string; icon?: any }[];
  faq?: FaqItem[];
  faqTitle?: string;
}

const WHY_ICONS = [ShieldCheck, MessageSquare, FileSignature, Users];
const STEP_ICONS = [ClipboardList, FileText, Search, CheckCircle2];

/** One template for all five "truck type" pages. Content comes from config. */
export default function TruckTypePage({ c }: { c: TruckTypeConfig }) {
  return (
    <>
      <Hero
        badge={c.heroBadge}
        title={c.heroTitle ?? `Sell Your ${c.name} with Confidence`}
        text={c.heroText}
        image={c.heroImage}
        primary={{ label: 'Get a Truck Valuation' }}
        checks={['All Truck Types', 'Expert Valuation', 'Professional Support']}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Truck Types', to: '/truck-types' }, { label: c.crumb }]}
      />

      <SplitSection
        badge={c.splitBadge}
        title={c.splitTitle}
        paragraphs={c.splitParagraphs}
        image={c.splitImage}
        pills={c.pills}
        cta={{ label: 'Appraise Your Truck' }}
      />

      <FeatureGrid
        badge={c.whyBadge ?? 'Why sell with us'}
        title={c.whyTitle}
        cols={4}
        items={c.why.map((w, i) => ({ icon: w.icon ?? WHY_ICONS[i % 4], ...w }))}
        className="!pt-0"
        staggered={c.staggeredWhy}
      />

      <TruckCategories
        badge={c.categoriesBadge}
        showDescription={c.showCategoryDescription}
        className={c.categoriesClassName}
      />

      <div className="mt-4">
        <CtaBanner
          badge={c.ctaBadge ?? "Ready to sell your truck?"}
          title={c.ctaTitle}
          text={c.ctaText}
          checks={c.ctaChecks ?? ['Professional Valuation', 'Documentation Support', 'Individual and Fleet Sales']}
        />
      </div>

      <Steps
        badge="Our valuation process"
        title={c.processTitle}
        steps={c.steps.map((s, i) => ({ ...s, icon: s.icon ?? STEP_ICONS[i % 4] }))}
      />

      <ValuationForm />
      <Faq items={c.faq} title={c.faqTitle} />
      <FinalCta />
    </>
  );
}
