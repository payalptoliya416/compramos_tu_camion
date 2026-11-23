import TruckTypePage from '../TruckTypePage';
import { IMG } from '@/data/images';

export default function Light3500Page() {
  return (
    <TruckTypePage
      c={{
        name: '3,500 kg Truck',
        crumb: '3,500 kg Trucks',
        heroBadge: '3,500 kg light trucks',
        heroImage: IMG.hero3500,
        heroText:
          'Get a professional valuation for your 3,500 kg light truck, with clear communication and support throughout the selling process.',
        splitBadge: 'Light commercial vehicles',
        splitTitle: 'We Buy 3,500 kg Light Trucks',
        splitParagraphs: [
          'We buy used light commercial trucks with a maximum authorised mass of up to 3,500 kg. Our team considers the vehicle’s age, mileage, mechanical condition, body configuration and overall specifications to provide a professional valuation.',
          'Whether you’re selling a delivery truck, dropside vehicle or another light commercial truck, we help simplify the selling process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: IMG.light3500,
        pills: [
          'Professional vehicle assessment',
          'Support for individual sellers and businesses',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Our selling benefits',
        whyTitle: 'A Simpler Way to Sell Your Light Commercial Vehicle',
        why: [
          { title: 'Professional Valuation', text: 'We assess your truck’s age, mileage, mechanical condition and body configuration to determine a suitable purchase offer.' },
          { title: 'Clear Communication', text: 'Understand the valuation, selling conditions and next steps through straightforward communication.' },
          { title: 'Documentation Support', text: 'Receive guidance with the required vehicle documents and ownership transfer procedures.' },
          { title: 'Individual and Fleet Sales', text: 'Whether you’re selling one light truck or several commercial vehicles, we help coordinate the selling process.' },
        ],
        ctaTitle: 'Need Help with 3,500 kg Truck Valuation?',
        ctaText: 'Tell us about your light truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our 3,500 kg Truck Valuation Work?',
        steps: [
          { title: 'Share Your Truck Details', text: 'Provide your truck’s make, model, registration year, mileage and body type.' },
          { title: 'Request a Valuation', text: 'Submit your vehicle details and available photos. Our team can review its condition, specifications and commercial configuration.' },
          { title: 'Review the Offer', text: 'Discuss the valuation, selling conditions and next steps with our team.' },
          { title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.' },
        ],
      }}
    />
  );
}
