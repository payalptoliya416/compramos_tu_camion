import TruckTypePage from '../TruckTypePage';
import { IMG } from '@/data/images';

export default function MultiliftPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Multilift Truck',
        crumb: 'Multilift Hook-Lift Trucks',
        heroBadge: 'Multilift & hook-lift trucks',
        heroImage: IMG.heroMultilift,
        heroText:
          'Sell your used hook-lift truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used container-handling vehicles',
        splitTitle: 'We Buy Multilift and Hook-Lift Trucks',
        splitParagraphs: [
          'We buy used multilift and hook-lift trucks used for waste management, construction, recycling and container transport. Our team considers the truck’s mechanical condition, chassis, hydraulic lifting system and container-handling equipment to provide a professional valuation.',
          'Whether you are selling an individual truck or updating your commercial fleet, we help simplify the process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: IMG.multiliftBlue,
        pills: [
          'Professional hydraulic system and vehicle assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyTitle: 'A Simpler Way to Sell Your Multilift Truck',
        why: [
          { title: 'Professional Valuation', text: 'We assess your truck’s chassis, mechanical condition, hydraulic system and container-handling equipment to determine a suitable purchase offer.' },
          { title: 'Clear Communication', text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.' },
          { title: 'Documentation Support', text: 'Get guidance with vehicle documents, ownership transfer and relevant administrative procedures.' },
          { title: 'Individual and Fleet Sales', text: 'Whether you are selling one hook-lift truck or multiple commercial vehicles, we help coordinate the valuation process.' },
        ],
        ctaTitle: 'Need Help with Your Multilift Truck Valuation?',
        ctaText: 'Tell us about your hook-lift truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Multilift Truck Valuation Work?',
        steps: [
          { title: 'Share Your Truck Details', text: 'Provide your truck’s make, model, registration year, mileage and hook-lift system details so we can assess your vehicle.' },
          { title: 'Request a Valuation', text: 'Submit your vehicle details and available photos. Our team will review the truck’s condition, hydraulic lifting system and container-handling equipment to prepare an offer.' },
          { title: 'Review the Offer', text: 'Discuss the valuation, clarify the selling conditions and confirm the next steps with our team.' },
          { title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.' },
        ],
      }}
    />
  );
}
