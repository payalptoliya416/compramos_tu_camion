import type { FaqItem } from '@/types';
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

const FAQ: FaqItem[] = [
  {
    q: 'In which areas of Spain does compramostucamion.es offer coverage?',
    a: 'We offer comprehensive appraisal and purchase services for commercial vehicles throughout the Iberian Peninsula (Spain) . We travel directly to any province and autonomous community, including key logistics hubs such as Madrid, Catalonia (Barcelona), Andalusia (Seville), the Valencian Community, Galicia, and the Basque Country, for free vehicle inspection and collection.\n\nOur local service eliminates the need for the carrier or company to move the heavy vehicle out of their province, managing the entire process in person at their own base or branch.',
  },
  {
    q: 'Is it better to sell used trucks to specialized companies or to individuals?',
    a: 'Selling used trucks to companies specializing in industrial sales is safer, faster, and more profitable than selling to private individuals. While selling to a private individual often involves months of waiting, haggling, the risk of non-payment, and external administrative costs, a specialized company offers an immediate technical valuation, handles 100% of the DGT (Spanish Traffic Authority) paperwork, and guarantees payment before you take possession of the truck.\n\nBy selling to a professional like compramostucamion.es , you ensure that the vehicle\'s civil liability is transferred instantly through a regulated sales contract, avoiding future claims for hidden defects, a very common problem in transactions between individuals.',
  },
  {
    q: 'Is it worth using Compramostucamion to sell used trucks in my area?',
    a: 'Yes, using compramostucamion.es \'s service in your area is worthwhile because it combines the advantages of a national network with the speed of local service. We come to your exact location to perform the physical inspection of the vehicle, eliminating mileage costs and the need to hire trailers to move the truck to a distant appraisal center.\n\nFurthermore, by understanding the export market and the demand in each autonomous community, we offer you a valuation tailored to the reality of your region, guaranteeing transparent treatment, immediate payment, and vehicle collection at no extra charge to you.',
  },
  {
    q: 'How is the truck collected once the offer has been accepted in my town?',
    a: 'Once you confirm acceptance of our binding offer and immediate payment is processed via bank transfer (or OMF), our team coordinates the collection logistics from our headquarters. We dispatch an authorized driver or a car carrier directly to your base or workshop anywhere in Spain within an agreed timeframe of 24 to 48 hours, without you having to worry about any logistical costs.',
  },
];

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
          { icon: '/images/edit.svg', title: 'Get your truck appraised', text: 'Provide the make, model, year, mileage, and other relevant vehicle information.' },
          { icon: '/images/calander.svg', title: 'Specify one for an evaluation', text: 'If you accept the offer, our team will conduct a thorough evaluation of your truck at your home.' },
          { icon: '/images/recive-dollar.svg', title: 'Receive a personalized offer', text: 'We will offer you a cost-effective deal tailored to the condition and potential of your truck.' },
          { icon: '/images/wallet.svg', title: 'Get the best profit', text: 'You will receive immediate cash payment, and you can leave the rest of the arrangements and procedures in our hands.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq items={FAQ} title="Frequently asked questions about where to sell used trucks" />
      <FinalCta />
    </>
  );
}
