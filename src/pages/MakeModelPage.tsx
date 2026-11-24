import { Clock, FileText, ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import type { FaqItem } from '@/types';

const MAKES = [
  { name: 'MAN', text: 'We analyse the strength of its chassis and engine efficiency to provide you with an appraisal that reflects its true capabilities.', cta: 'Selling MAN truck' },
  { name: 'Renault Trucks', text: 'Their balance between cost and performance makes their acquisition our priority. A trusted pillar across the Spanish transport sector.', cta: 'Selling Renault truck' },
  { name: 'DAF', text: 'DAF’s comfort and fuel efficiency are highly valuable assets. Share your vehicle’s details with us to understand the conditions.', cta: 'Explore Models' },
  { name: 'Volvo', text: 'We value its innovative technology, ensuring you get a competitive offer.', cta: 'Explore Models' },
];

const MODELS = [
  { name: 'Volvo FH 500', text: 'It’s the undisputed leader on long-distance routes thanks to its reliability, fuel-saving system and 500 hp engine make it the model we’re looking for most.', image: IMG.modelVolvo },
  { name: 'Mercedes Actros', text: 'This range stands out for its cutting-edge technology, optimized aerodynamics, and driver assistance systems. These are large vehicles with guaranteed resale value, and we assure you of a highly profitable price.', image: IMG.modelActros },
  { name: 'Scania V8', text: 'The legendary V8 engine is unique for its extreme power. Its exclusivity and performance under demanding conditions mean that our valuation is always high.', image: IMG.modelScania },
  { name: 'DAF XF', text: 'A highly valued range. The spaciousness of its cab is its biggest competitive advantage. The most sought-after models for valuation are the DAF XF 480 and the DAF XF 530.', image: IMG.modelDaf },
];

const FAQ: FaqItem[] = [
  { q: 'Which truck brands do you buy?', a: 'We consider trucks from a wide range of manufacturers, including Mercedes-Benz, Volvo, Scania, MAN, DAF, Renault Trucks and Iveco.' },
  { q: 'Do you buy older truck models?', a: 'Yes. We assess each truck individually based on its specifications, condition and market demand.' },
  { q: 'Can I sell my truck regardless of its mileage?', a: 'Yes. Mileage is one of several factors considered in the valuation.' },
  { q: 'Do you buy trucks with different body types and configurations?', a: 'Yes. We buy tractor units, rigid trucks, refrigerated trucks, tippers and more.' },
  { q: 'How do you value different truck makes and models?', a: 'We review specifications, condition, mileage and current market demand for the specific make and model.' },
  { q: 'What information should I provide about my truck?', a: 'The make, model, registration year, mileage, transmission and body type, plus photos where possible.' },
];

export default function MakeModelPage() {
  return (
    <>
      <Hero
        badge="Truck brands & models"
        title="Sell Your Truck by Make and Model"
        text="Find your truck's make and model, and get expert guidance for a fair valuation."
        image="/images/make-modal-banner.png"
        primary={{ label: 'Get a Free Valuation' }}
        checks={['All Truck Brands', 'Expert Valuation', 'Easy Selling Process']}
      />

      <SplitSection
        reverse
        badge="Truck valuation by brand"
        title="Find the Right Starting Point for Your Truck"
        paragraphs={['Every truck has its own characteristics. The make, model, registration year, mileage, condition and configuration can all help inform its valuation.']}
        image={IMG.brandsRenault}
        cta={{ label: 'Request a Valuation' }}
      />

      {/* Brands */}
      <div className="mx-2 rounded-3xl bg-surface sm:mx-3">
        <section className="section-y">
          <div className="container-x">
            <SectionHeading badge="Explore truck brands" title="Find Your Truck Manufacturer" />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MAKES.map((m) => (
                <li key={m.name} className="flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-sm">
                  <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 font-heading text-xs font-bold text-slate-500">
                    {m.name.split(' ')[0]}
                  </span>
                  <h3 className="text-sm font-semibold text-brand-navy-dark">{m.name}</h3>
                  <p className="flex-1 text-xs leading-relaxed text-slate-500">{m.text}</p>
                  <Link to="/get-a-free-valuation" className="btn mt-2 w-full border border-brand-navy/40 !py-2 text-xs text-brand-navy hover:bg-brand-navy hover:text-white">
                    {m.cta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Popular models */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Popular models" title="The ranges and models we search for most" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODELS.map((m) => (
              <li key={m.name} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                <Img src={m.image} alt={m.name} className="aspect-[4/3]" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-brand-navy-dark">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help Valuing Your Truck?"
        text="Not sure where your truck fits? Share its details and our team can help you understand the next steps."
        showCall
      />

      <FeatureGrid
        badge="Extensive experience"
        title="Extensive experience in appraising used trucks"
        variant="surface"
        items={[
          { icon: FileText, title: 'Immediate payment', text: 'Avoid unnecessary delays in your transaction. Once the offer is accepted, we make the payment immediately, providing instant liquidity.' },
          { icon: ShieldOff, title: 'No Guarantees', text: 'We buy your vehicle as is, outright. You won’t have to provide any guarantees or worry about claims after the sale.' },
          { icon: Clock, title: 'Transfer within 24 hours', text: 'Our specialized agency handles the change of ownership quickly and efficiently. In less than a day, your truck will be legally transferred.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
