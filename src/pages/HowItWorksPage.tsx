import Hero from '@/components/sections/Hero';
import Steps from '@/components/sections/Steps';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SplitSection from '@/components/sections/SplitSection';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import type { FaqItem } from '@/types';

const FAQ: FaqItem[] = [
  { q: 'How long does it take to sell my truck?', a: 'The time may vary depending on your truck’s details, condition and documentation. Once we review your information, our team will guide you through the next steps.' },
  { q: 'Is the truck valuation free?', a: 'Yes. You can request a free valuation without any obligation to accept our offer.' },
  { q: 'What information do I need to provide to get a valuation?', a: 'You’ll need to share your truck’s make, model, registration year, mileage and condition. Recent photographs can also help us assess your vehicle.' },
  { q: 'What happens after I receive the valuation?', a: 'Our team will contact you to discuss the offer. If you decide to accept it, we’ll guide you through the paperwork and arrange the collection.' },
  { q: 'Do I need to deliver my truck, or can you collect it?', a: 'We can arrange collection at an agreed location. Contact our team to discuss the collection arrangements for your vehicle.' },
  { q: 'When will I receive payment for my truck?', a: 'Payment arrangements will be discussed and confirmed before completing the sale. Our team will explain the process so you know what to expect.' },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Simple and transparent process"
        title="Sell Your Truck in 3 Simple Steps"
        text="Selling your truck doesn’t have to be complicated. Share your truck details, receive a professional valuation and complete the sale with support from our team."
        image="/images/how-work-banner.png"
        primary={{ label: 'Get a Free Valuation' }}
        checks={['No Obligation', 'Fast Process', 'Anywhere in Spain']}
      />

      <Steps
        badge="How it works"
        title="Three Steps to Sell Your Truck"
        subtitle="From the first enquiry to collection, we make selling your truck straightforward."
        steps={[
          { icon: '/images/doc-blue.svg', title: 'Tell Us About Your Truck', text: 'Fill in our valuation form with your truck’s basic details, including its make, model, year, mileage and condition. Add a few photos to help us understand your vehicle better.' },
          { icon: '/images/call.svg', title: 'Get a Professional Offer', text: 'Our team reviews the information you provide and assesses your truck based on its specifications, condition and current market value. We’ll get in touch with you to discuss our offer.' },
          { icon: '/images/handshake-regula-blue.svg', title: 'We Handle the Next Steps', text: 'Once you accept our offer, we’ll guide you through the required paperwork and arrange a convenient collection for your truck. Our team will support you throughout the process.' },
        ]}
      />
  <div className="mx-2 rounded-3xl bg-surface sm:mx-3">
      <FeatureGrid
        band
        badge="Sell with confidence"
        title="A Straightforward Way to Sell Your Truck"
        subtitle="We focus on making every step clear, convenient and professional, so you know what to expect from the beginning."
        cols={4}
        staggered
        variant="plain"
        iconBg="bg-white"
        items={[
          { icon: '/images/right-sign.svg', title: 'Professional Truck Valuation', text: 'We assess your truck’s condition, specifications and relevant details to provide a professional valuation based on the vehicle.' },
          { icon: '/images/user.svg', title: 'Clear and Transparent Terms', text: 'Understand the offer, selling conditions and next steps with clear communication throughout the process.' },
          { icon: '/images/doc.svg', title: 'Paperwork and Documentation', text: 'We guide you through the required paperwork and administrative procedures involved in the vehicle transfer.' },
          { icon: '/images/diliver.svg', title: 'Collection Arrangements', text: 'We coordinate the collection process with you, helping make the final stage of selling your truck straightforward.' },
        ]}
      />
  </div>

      <SplitSection
        reverse
        badge="Get started"
        title="Help Us Understand Your Truck"
        paragraphs={['To provide a more accurate valuation, share as much information as possible about your vehicle.']}
        image="/images/help.png"
        pills={['Truck make and model', 'Registration year', 'Mileage', 'Vehicle condition', 'Mechanical issues, if any', 'Recent photographs', 'Your contact details']}
        cta={{ label: 'Get a Free Valuation' }}
        className="!pb-0"
      />

      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
