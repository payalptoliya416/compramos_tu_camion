import { Camera, ClipboardList, FileText, Info, MessageCircle, Package, Settings, TrendingUp, UserCheck, Wrench } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import RecentPurchases from '@/components/sections/RecentPurchases';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Steps from '@/components/sections/Steps';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

export default function ValuationPage() {
  return (
    <>
      <Hero
        badge="Professional truck valuation"
        title="How Much Is Your Truck Worth?"
        text="Get a professional valuation for your used truck and take the next step towards selling it with confidence."
        image="/images/get-free-valuation-banner.png"
        primary={{ label: 'Get a Free Valuation' }}
        secondary={{ label: 'How It Works', to: '/how-it-works' }}
        checks={['Professional Valuation', 'No Obligation', 'Secure Selling Process']}
      />

      <SplitSection
        badge="Used truck valuation"
        title="Find Out How Much Your Truck Is Worth"
        paragraphs={[
          'Understanding your truck’s value is an important first step when preparing to sell. Our team reviews the information you provide to assess your vehicle’s specifications, condition and relevant market factors.',
          'Whether you own an individual commercial vehicle or manage a fleet, our valuation process helps you understand the next steps towards selling your truck.',
        ]}
        image={IMG.inspectorTruck}
        pills={['Professional vehicle assessment', 'No-obligation valuation request', 'Clear guidance on the next steps']}
        cta={{ label: 'Start Your Valuation' }}
      />

      <RecentPurchases band />

      <FeatureGrid
        badge="Why a professional valuation?"
        title="Understand Your Truck’s Value Before You Sell"
        cols={4}
        items={[
          { icon: Wrench, title: 'Vehicle Condition and Equipment', text: 'Consider the vehicle’s condition, specifications and installed equipment when assessing its value.' },
          { icon: TrendingUp, title: 'Market-Based Assessment', text: 'Review relevant market factors and the type of commercial vehicle being evaluated for a fair result.' },
          { icon: UserCheck, title: 'Professional Guidance', text: 'Understand the information needed to assess your truck and discuss the next steps with our team.' },
          { icon: FileText, title: 'Clear Process', text: 'Submit your vehicle details and receive guidance on how the valuation process proceeds from here.' },
        ]}
      />

      <Steps
        badge="Our valuation process"
        title="How Does Our Truck Valuation Work?"
        steps={[
          { icon: ClipboardList, title: 'Provide the Basic Details', text: 'Enter the make, model, registration year, mileage and other essential vehicle information.' },
          { icon: Info, title: 'Add Vehicle Information', text: 'Describe the truck’s condition, fuel type, equipment and any relevant details. Upload photographs where possible.' },
          { icon: Settings, title: 'Professional Assessment', text: 'Our team reviews the information submitted and evaluates the vehicle based on its specifications, condition and market factors.' },
          { icon: MessageCircle, title: 'Discuss the Next Steps', text: 'We communicate the assessment and explain the available next steps for selling your truck.' },
        ]}
      />

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help with Your Truck Valuation?"
        text="Our team can help you understand the information required and guide you through the next steps."
      />

      <FeatureGrid
        badge="Prepare your truck details"
        title="Help Us Understand Your Truck’s Value"
        variant="surface"
        items={[
          { icon: Package, title: 'Accurate Vehicle Details', text: 'Provide the make, model, registration year and mileage for the most accurate assessment of your vehicle.' },
          { icon: Settings, title: 'Condition and Equipment', text: 'Describe the vehicle’s current condition and any specialist equipment, modifications or installed accessories.' },
          { icon: Camera, title: 'Clear Photographs', text: 'Upload useful photographs showing the truck’s exterior, interior and relevant equipment.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
