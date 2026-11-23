import TruckTypePage from '../TruckTypePage';
import { IMG } from '@/data/images';

export default function ConcreteMixerPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Concrete Mixer Truck',
        crumb: 'Concrete Mixer Trucks',
        heroBadge: 'Concrete mixer trucks',
        heroImage: IMG.heroConcrete,
        heroText:
          'Sell your used concrete mixer truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used construction vehicles',
        splitTitle: 'We Buy Concrete Mixer Trucks',
        splitParagraphs: [
          'We buy used concrete mixer trucks used in construction, concrete production and commercial transport. Our team considers the vehicle’s mechanical condition, chassis, mixing drum, hydraulic systems and related equipment to provide a professional valuation.',
          'Whether you are selling a single concrete mixer truck or updating your construction fleet, we help simplify the process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: IMG.concreteBlue,
        pills: [
          'Professional vehicle and mixing equipment assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyTitle: 'A Simpler Way to Sell Your Concrete Mixer Truck',
        why: [
          { title: 'Professional Valuation', text: 'We assess your truck’s mechanical condition, chassis, mixing drum and hydraulic equipment to determine a suitable purchase offer.' },
          { title: 'Clear Communication', text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.' },
          { title: 'Documentation Support', text: 'Get guidance with the required vehicle documents, ownership transfer and relevant administrative procedures.' },
          { title: 'Individual and Fleet Sales', text: 'Whether you are selling one or multiple concrete mixer trucks or multiple commercial vehicles, we help coordinate the valuation process.' },
        ],
        ctaTitle: 'Need Help with Your Concrete Mixer Truck Valuation?',
        ctaText: 'Tell us about your concrete mixer truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Concrete Mixer Truck Valuation Work?',
        steps: [
          { title: 'Share Your Truck Details', text: 'Provide your truck’s make, model, registration year, mileage and mixing drum details so we can assess your vehicle.' },
          { title: 'Request a Valuation', text: 'Submit your vehicle details and available photos. Our team will review the truck’s condition, mixing drum, hydraulic system and specifications to prepare an offer.' },
          { title: 'Review the Offer', text: 'Discuss the valuation, clarify the selling conditions and confirm the next steps with our team.' },
          { title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.' },
        ],
      }}
    />
  );
}
