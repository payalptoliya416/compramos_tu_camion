import { BarChart3, ClipboardCheck, Eye, FileText, Handshake, MapPin, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import ValuationForm from '@/components/sections/ValuationForm';
import Steps from '@/components/sections/Steps';
import CtaBanner from '@/components/sections/CtaBanner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

const WHY = [
  { icon: UserCheck, title: 'Professional Guidance', text: 'Our experienced team is available to answer your questions and explain each step of the selling process clearly.' },
  { icon: Eye, title: 'Clear and Transparent Process', text: 'We explain how valuations are made and what to expect so there are no surprises during the sale.' },
  { icon: ShieldCheck, title: 'Support With the Sale', text: 'From initial valuation to final collection, we are available to support you throughout the entire selling journey.' },
];

export default function PrivateSellersPage() {
  return (
    <>
      <Hero
        badge="Private truck sellers"
        title="Sell Your Truck Privately, Without the Hassle"
        text="Sell your used truck with confidence. Get a fair valuation, a straightforward selling process, and professional support from our team."
        image={IMG.heroPrivate}
        primary={{ label: 'Get a Free Valuation' }}
        secondary={{ label: 'How It Works', to: '/how-it-works' }}
        checks={['No Obligation', 'Fair Valuation', 'Professional Support']}
      />

      <Testimonials />
      <ValuationForm />

      <Steps
        badge="The process"
        title="Sell Your Truck in Three Simple Steps"
        steps={[
          { icon: FileText, title: 'Share Your Truck Details', text: 'Tell us about your truck, including its make, model, registration year, and mileage. You can do this quickly online or by phone.' },
          { icon: Phone, title: 'Receive a Valuation', text: 'Our team reviews the information you provide and contacts you to discuss your truck’s valuation and answer any questions.' },
          { icon: Handshake, title: 'Complete the Sale', text: 'If you agree to the offer, our team will guide you through the next steps, documentation, and collection arrangements.' },
        ]}
      />

      {/* More straightforward way */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div className="flex flex-col items-start gap-4">
            <Badge>Why choose us</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] sm:leading-[40px]">A More Straightforward Way to Sell Your Truck</h2>
            <p className="text-sm leading-relaxed text-slate-500">
              Selling a commercial vehicle can involve several steps. Our team helps you understand the process and guides you through the valuation and sale.
            </p>
            <CtaButton cta={{ label: 'Get a Free Valuation' }} />
          </div>
          <ul className="grid gap-5 sm:grid-cols-3">
            {WHY.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-brand-orange">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-brand-navy-dark">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Find Out What Your Truck Could Be Worth"
        text="Share your truck details to begin the valuation process. Our team will review your information and explain the next steps."
      />

      <FeatureGrid
        badge="A simpler way to sell"
        title="Selling Your Truck Should Be Simple"
        cols={4}
        variant="plain"
        items={[
          { icon: BarChart3, title: 'Fair Truck Valuation', text: 'Receive an offer based on your truck’s details and market considerations.' },
          { icon: ClipboardCheck, title: 'Straightforward Process', text: 'Understand the next steps without unnecessary complications or delays.' },
          { icon: FileText, title: 'Paperwork Support', text: 'Get guidance with the documentation needed for the sale of your vehicle.' },
          { icon: MapPin, title: 'Convenient Collection', text: 'Discuss collection arrangements with our team at a time that suits you.' },
        ]}
      />

      <Faq />
      <FinalCta />
    </>
  );
}
