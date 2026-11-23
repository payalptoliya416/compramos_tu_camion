import { ClipboardCheck, FileText, Handshake, Phone, Truck, UserCheck } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import Steps from '@/components/sections/Steps';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SplitSection from '@/components/sections/SplitSection';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import type { FaqItem } from '@/types';

const FAQ: FaqItem[] = [
  { q: 'How long does it take to sell my truck?', a: 'The time may vary depending on your truck’s details, condition and documentation. Once we review your information, our team will guide you through the next steps.' },
  { q: 'Is the truck valuation free?', a: 'Yes. Requesting a valuation is free and carries no obligation.' },
  { q: 'What information do I need to provide to get a valuation?', a: 'The make, model, registration year, mileage, condition and a few photographs of your truck.' },
  { q: 'What happens after I receive the valuation?', a: 'Our team will discuss the offer with you and explain the next steps, including paperwork and collection.' },
  { q: 'Do I need to deliver my truck, or can you collect it?', a: 'We coordinate collection across Spain, so you do not need to deliver the truck yourself.' },
  { q: 'When will I receive payment for my truck?', a: 'Payment terms are explained clearly before proceeding with the transaction.' },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Simple and transparent process"
        title="Sell Your Truck in 3 Simple Steps"
        text="Selling your truck doesn’t have to be complicated. Share your truck details, receive a professional valuation and complete the sale with support from our team."
        image={IMG.heroHow}
        primary={{ label: 'Get a Free Valuation' }}
        checks={['No Obligation', 'Fast Process', 'Anywhere in Spain']}
      />

      <Steps
        badge="How it works"
        title="Three Steps to Sell Your Truck"
        subtitle="From the first enquiry to collection, we make selling your truck straightforward."
        steps={[
          { icon: FileText, title: 'Tell Us About Your Truck', text: 'Fill in our valuation form with your truck’s basic details, including its make, model, year, mileage and condition. Add a few photos to help us understand your vehicle better.' },
          { icon: Phone, title: 'Get a Professional Offer', text: 'Our team reviews the information you provide and assesses your truck based on its specifications, condition and current market value. We’ll get in touch with you to discuss our offer.' },
          { icon: Handshake, title: 'We Handle the Next Steps', text: 'Once you accept our offer, we’ll guide you through the required paperwork and arrange a convenient collection for your truck. Our team will support you throughout the process.' },
        ]}
      />

      <FeatureGrid
        band
        badge="Sell with confidence"
        title="A Straightforward Way to Sell Your Truck"
        subtitle="We focus on making every step clear, convenient and professional, so you know what to expect from the beginning."
        cols={4}
        variant="plain"
        items={[
          { icon: ClipboardCheck, title: 'Professional Truck Valuation', text: 'We assess your truck’s condition, specifications and relevant details to provide a professional valuation based on the vehicle.' },
          { icon: UserCheck, title: 'Clear and Transparent Terms', text: 'Understand the offer, selling conditions and next steps with clear communication throughout the process.' },
          { icon: FileText, title: 'Paperwork and Documentation', text: 'We guide you through the required paperwork and administrative procedures involved in the vehicle transfer.' },
          { icon: Truck, title: 'Collection Arrangements', text: 'We coordinate the collection process with you, helping make the final stage of selling your truck straightforward.' },
        ]}
      />

      <SplitSection
        reverse
        badge="Get started"
        title="Help Us Understand Your Truck"
        paragraphs={['To provide a more accurate valuation, share as much information as possible about your vehicle.']}
        image={IMG.taxPapers}
        pills={['Truck make and model', 'Registration year', 'Mileage', 'Vehicle condition', 'Mechanical issues, if any', 'Recent photographs', 'Your contact details']}
        cta={{ label: 'Get a Free Valuation' }}
      />

      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
