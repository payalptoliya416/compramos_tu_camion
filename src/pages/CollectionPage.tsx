import { ClipboardList, Eye, CheckCircle2, Wallet } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ComparisonTable from '@/components/sections/ComparisonTable';
import CtaBanner from '@/components/sections/CtaBanner';
import Steps from '@/components/sections/Steps';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

export default function CollectionPage() {
  return (
    <>
      <Hero
        badge="Our coverage"
        title="Where Do We Buy Used Trucks in Spain?"
        text="Professional truck buying services across Spain, backed by more than 20 years of experience."
        image="/images/collection-banner.png"
        primary={{ label: 'Get a Truck Valuation' }}
        checks={['Nationwide Coverage', 'Professional Valuation', 'Trusted Truck Buyers']}
      />

      <SplitSection
        reverse
        badge="Our service area"
        title="Where to Sell Your Used Truck with Confidence"
        paragraphs={[
          'CompramosTuCamión.es provides a professional, transparent truck-buying service across the main regions of Spain. We offer straightforward valuations based on the actual condition, specifications and market value of your vehicle.',
          'Whether you are a private seller, a business owner or managing a fleet, our team is ready to guide you through the process from first contact to final transfer. No unnecessary delays, no hidden conditions.',
        ]}
        image="/images/collection-right.png"
        cta={{ label: 'Get a Free Valuation' }}
      />

      <FeatureGrid
        band
        badge="Why choose us"
        title="Why Sell Your Truck to Us?"
        cols={4}
        items={[
          { icon: '/images/payment-orang.svg', title: 'Secure Payment', text: 'Clear payment terms and a reliable transaction process, so you know exactly what to expect at every stage.' },
          { icon: '/images/bilori.svg', title: 'Professional Valuation', text: 'An assessment based on your truck’s condition, specifications and current market value.' },
          { icon: '/images/papperwork.svg', title: 'Paperwork Assistance', text: 'Guidance through the documentation and transfer process, helping you avoid complications.' },
          { icon: '/images/book-blue.svg', title: 'Nationwide Coverage', text: 'Support for sellers across our service areas in Spain, from the Mediterranean coast to Andalusia.' },
        ]}
      />

      <ComparisonTable />

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help Identifying Your Truck?"
        text="Not sure which category matches your vehicle? Contact our team or request a valuation to discuss your truck’s details."
      />

      <Steps
        badge="How it works"
        title="How Does Selling Your Truck Work?"
        steps={[
          { icon: ClipboardList, title: 'Get your truck appraised', text: 'Provide the make, model, year, mileage, and other relevant vehicle information.' },
          { icon: Eye, title: 'Specify one for an evaluation', text: 'If you accept the offer, our team will conduct a thorough evaluation of your truck at your home.' },
          { icon: CheckCircle2, title: 'Receive a personalized offer', text: 'We will offer you a cost-effective deal tailored to the condition and potential of your truck.' },
          { icon: Wallet, title: 'Get the best profit', text: 'You will receive immediate cash payment, and you can leave the rest of the arrangements and procedures in our hands.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
