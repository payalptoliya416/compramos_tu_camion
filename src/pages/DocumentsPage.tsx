import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import BrandLogos from '@/components/sections/BrandLogos';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import type { FaqItem } from '@/types';

const CHECKLIST = [
  'Vehicle registration documentation',
  'Seller identification',
  'Sale documentation containing the correct vehicle and ownership details',
  'Technical vehicle documentation and relevant technical inspection information',
  'Any required authorization or signed mandate, where applicable',
];

const FAQ: FaqItem[] = [
  {
    q: 'What documents are generally required to sell a truck in Spain?',
    a: 'You will generally need the vehicle registration certificate (Permiso de Circulación), technical inspection card (Tarjeta ITV) and valid identification of the registered owner. Additional documents may be required depending on the circumstances.',
  },
  {
    q: 'Do I need the original truck documents?',
    a: 'Original documentation is generally required to complete the transfer. If any document is missing, let us know so we can discuss the available options.',
  },
  {
    q: 'Can I sell a truck if the ITV has expired?',
    a: 'An expired ITV does not necessarily prevent you from requesting a valuation. However, it may affect how the vehicle can be transferred or moved, depending on its circumstances.',
  },
  {
    q: 'What documents are required if the truck belongs to a company?',
    a: 'You may need company identification and documentation proving that the person handling the sale is authorised to represent the company, alongside the vehicle documents.',
  },
  {
    q: 'What if I have inherited the truck?',
    a: "You may need inheritance documents and proof that the vehicle has been transferred into the appropriate owner's name. The exact requirements depend on the inheritance situation.",
  },
  {
    q: 'Can I sell a truck if I have lost the Permiso de Circulación?',
    a: 'You may need to obtain a duplicate from the relevant authority before completing the transfer. Contact us to discuss your situation.',
  },
  {
    q: 'Do I need to provide a sales invoice?',
    a: 'If the truck is owned by a company or self-employed business, an invoice may be required depending on the transaction and applicable tax requirements. The documentation should be confirmed for your specific case.',
  },
];

const COMPANY_DOCS_CARDS = [
  {
    icon: '/images/business.svg',
    title: 'Company and Ownership Information',
    text: 'Business identification and ownership records relating to the vehicle being sold. The specific documents may vary depending on the company structure and registration.',
  },
  {
    icon: '/images/user01.svg',
    title: 'Representative Identification or Authorization',
    text: 'Where the sale is handled by a representative, relevant identification or authorization documentation may be required to confirm they are acting on behalf of the company.',
  },
  {
    icon: '/images/doc-blue.svg',
    title: 'Vehicle and Sale Documentation',
    text: 'The vehicle registration, technical documents, and sale paperwork must correctly reflect the company ownership and vehicle details relevant to the transaction.',
  },
];

const PROCESS_CARDS = [
  {
    icon: '/images/doc-blue-checkmark.svg',
    title: 'Identity and Ownership Validation',
    text: "Verify the seller's and buyer's identities using the required DNI/NIE or company CIF and power of attorney. Confirm vehicle ownership and check for encumbrances that could prevent a valid sale.",
  },
  {
    icon: '/images/right-sign.svg',
    title: 'Technical and Tachograph Certification',
    text: "Ensure the e-ITV reflects approved modifications and verify the tachograph's latest biennial inspection certificate. Defective seals or expired inspections may delay the transfer and lead to penalties.",
  },
  {
    icon: '/images/diliver-orange.svg',
    title: 'REAT and LOTT Compliance',
    text: 'Verify that the MDL or MDP Transport Card is correctly registered with the REAT and check for outstanding penalties under the LOTT to support a smooth ownership transfer.',
  },
  {
    icon: '/images/edit.svg',
    title: 'Secure Contract and Notification of Sale',
    text: 'Sign a detailed purchase agreement covering the delivery time and emissions declaration. Complete the Notification of Sale to inform the authorities that you are no longer responsible for the truck.',
  },
];

export default function DocumentsPage() {
  return (
    <>
      <Hero
        badge="Selling documentation"
        title="Know Which Documents You Need to Sell Your Truck"
        text="Prepare the right documents to sell your truck with confidence. Follow our guide to understand the paperwork required for a smooth sale."
        image="/images/documents-banner.png"
        primary={{ label: 'Get a Truck Valuation' }}
        checks={['Document Checklist', 'Professional Guidance', 'Smooth Selling Process']}
      />

      <SplitSection
        badge="Prepare for your sale"
        title="Get Your Truck Sale Documents Ready"
        paragraphs={['The documents required for a truck sale depend on the vehicle, ownership, seller type, and individual circumstances. Understanding the requirements early can help you prepare for the next steps.']}
        image="/images/prepare.png"
        cta={{ label: 'Start Your Valuation' }}
        gapClassName="lg:gap-[69px]"
      />

      {/* Private sellers checklist */}
      <section className="section-y !pt-0">
        <div className="container-x">
          <SectionHeading badge="For individual owners" title="Documents You May Need as a Private Seller" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col justify-between rounded-[16px] border border-[#E7E7E8] bg-white py-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-navy-dark px-4 md:px-5">Document Checklist</h3>
                <ul className="mt-[15px] divide-y divide-[#E7E7E8]">
                  {CHECKLIST.map((c) => (
                    <li key={c} className="flex items-center gap-3 py-[18px] text-sm sm:text-base text-[#0A0F16] px-4 md:px-5">
                      <img src="/images/fill-checkmark.svg" alt="" className="h-5 w-5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="border-t border-[#E7E7E8] pt-[25px] px-5 text-sm sm:text-base leading-relaxed text-[#3B3F45]">
                These are general document categories, not a definitive legal checklist. Precise requirements must be verified against current Spanish regulations and the specific vehicle and transaction.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div className="overflow-hidden rounded-[16px]">
                <img src="/images/inidividual.png" alt="Truck drivers" className="w-full h-auto object-cover" />
              </div>
              <div className="flex items-start gap-5 rounded-[12px] border border-[#E7E7E8] bg-white p-5">
                <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#F17612] text-white">
                  <img src='/images/info.svg' className='w-5 h-5'/>
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-brand-navy-dark">Not sure what applies to you?</h3>
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#3B3F45]">
                    Our team can help clarify which documents may be relevant to your specific truck and situation. Request a valuation to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandLogos band />

      {/* Documentation for Company-Owned Trucks */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="For business sellers" title="Documentation for Company-Owned Trucks" />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_DOCS_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[14px] border border-[#E7E7E8] bg-white py-5 sm:py-[35px] px-5 sm:px-[25px]"
              >
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#F3F4F6] border border-[#E7E7E8]">
                  <img src={icon} alt="" className="" />
                </span>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-brand-navy-dark leading-snug">{title}</h3>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#3B3F45]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Not Sure Which Documents You Need?"
        text="Tell us about your truck and your selling situation. Our team can help you understand which information may be needed to review your request."
        showCall
      />

      {/* Understand the process */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Understand the process" title="From Document Review to Completing the Sale" />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2">
            {PROCESS_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[14px] border border-[#E7E7E8] bg-white py-5 sm:py-[35px] px-5 sm:px-[25px]"
              >
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#F3F4F6] border border-[#E7E7E8]">
                  <img src={icon} alt="" className="" />
                </span>
                <h3 className="mt-5 text-base sm:text-lg font-bold text-brand-navy-dark leading-snug">{title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#3B3F45]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ValuationForm />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
