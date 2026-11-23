import { Building2, FileCheck2, FileText, Gauge, PenLine, UserCheck, CheckCircle2, ScrollText, Info } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import BrandLogos from '@/components/sections/BrandLogos';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import type { FaqItem } from '@/types';

const CHECKLIST = [
  'Vehicle registration documentation',
  'Seller identification',
  'Sale documentation containing the correct vehicle and ownership details',
  'Technical vehicle documentation and relevant technical inspection information',
  'Any required authorization or signed mandate, where applicable',
];

const FAQ: FaqItem[] = [
  { q: 'What documents are generally required to sell a truck in Spain?', a: 'You will generally need the vehicle registration certificate (Permiso de Circulación), technical inspection card (Tarjeta ITV) and identification of the registered owner. Additional documents may be required depending on the circumstances.' },
  { q: 'Do I need the original truck documents?', a: 'Our team will confirm which originals or copies are needed for your specific case.' },
  { q: 'Can I sell a truck if the ITV has expired?', a: 'Tell us about the situation and we will explain the available options for your vehicle.' },
  { q: 'What documents are required if the truck belongs to a company?', a: 'Company identification, representative authorization and the vehicle documentation are usually required.' },
  { q: 'What if I have inherited the truck?', a: 'We can help you understand the paperwork needed to transfer an inherited vehicle.' },
  { q: 'Can I sell a truck if I have lost the Permiso de Circulación?', a: 'It is usually possible to request a duplicate. Our team can explain the steps involved.' },
];

export default function DocumentsPage() {
  return (
    <>
      <Hero
        badge="Selling documentation"
        title="Know Which Documents You Need to Sell Your Truck"
        text="Prepare the right documents to sell your truck with confidence. Follow our guide to understand the paperwork required for a smooth sale."
        image={IMG.heroDocuments}
        primary={{ label: 'Get a Truck Valuation' }}
        checks={['Document Checklist', 'Professional Guidance', 'Smooth Selling Process']}
      />

      <SplitSection
        badge="Prepare for your sale"
        title="Get Your Truck Sale Documents Ready"
        paragraphs={['The documents required for a truck sale depend on the vehicle, ownership, seller type, and individual circumstances. Understanding the requirements early can help you prepare for the next steps.']}
        image={IMG.documentsHand}
        cta={{ label: 'Start Your Valuation' }}
      />

      {/* Private sellers checklist */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="container-x">
          <SectionHeading badge="For individual owners" title="Documents You May Need as a Private Seller" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-sm font-semibold text-brand-navy-dark">Document Checklist</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {CHECKLIST.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-xs text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" /> {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-slate-100 pt-4 text-[11px] leading-relaxed text-slate-400">
                These are general document categories, not a definitive legal checklist. Precise requirements must be verified against current Spanish regulations and the specific vehicle and transaction.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Img src={IMG.documentsTrucks} alt="Truck owners" className="aspect-[16/9] rounded-xl" />
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <Info className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy-dark">Not sure what applies to you?</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Our team can help clarify which documents may be relevant to your specific truck and situation. Request a valuation to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandLogos band />

      <FeatureGrid
        badge="For business sellers"
        title="Documentation for Company-Owned Trucks"
        items={[
          { icon: Building2, title: 'Company and Ownership Information', text: 'Business identification and ownership records relating to the vehicle being sold. The specific documents may vary depending on the company structure and registration.' },
          { icon: UserCheck, title: 'Representative Identification or Authorization', text: 'Where the sale is handled by a representative, relevant identification or authorization documentation may be required to confirm they are acting on behalf of the company.' },
          { icon: FileText, title: 'Vehicle and Sale Documentation', text: 'The vehicle registration, technical documents, and sale paperwork must correctly reflect the company ownership and vehicle details relevant to the transaction.' },
        ]}
      />

      <CtaBanner
        badge="Ready to get started?"
        title="Not Sure Which Documents You Need?"
        text="Tell us about your truck and your selling situation. Our team can help you understand which information may be needed to review your request."
        showCall
      />

      <FeatureGrid
        badge="Understand the process"
        title="From Document Review to Completing the Sale"
        cols={2}
        items={[
          { icon: FileCheck2, title: 'Identity and Ownership Validation', text: 'Verify the seller’s and buyer’s identities using the required DNI/NIE or company CIF. Confirm vehicle ownership and check for encumbrances that could prevent a valid sale.' },
          { icon: Gauge, title: 'Technical and Tachograph Certification', text: 'Ensure the e-ITV reflects approved modifications and verify the tachograph’s latest biennial inspection certificate. Defective seals or expired inspections may delay the transfer and lead to penalties.' },
          { icon: ScrollText, title: 'REAT and LOTT Compliance', text: 'Verify that the MDL or MDP Transport Card is correctly registered with the REAT and check for outstanding penalties under the LOTT to support a smooth ownership transfer.' },
          { icon: PenLine, title: 'Secure Contract and Notification of Sale', text: 'Sign a detailed purchase agreement covering the delivery time and emissions declaration. Complete the Notification of Sale to inform the authorities that you are no longer responsible for the truck.' },
        ]}
      />

      <ValuationForm />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
