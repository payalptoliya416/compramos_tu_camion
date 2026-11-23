import TruckTypePage from '../TruckTypePage';
import { IMG } from '@/data/images';

export default function RefrigeratedPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Refrigerated Truck',
        crumb: 'Refrigerated Trucks',
        heroBadge: 'Refrigerated trucks',
        heroImage: IMG.heroRefrigerated,
        heroText:
          'Sell your used refrigerated or insulated truck with professional valuation, straightforward paperwork and support throughout the selling process.',
        splitBadge: 'Used refrigerated vehicles',
        splitTitle: 'We Buy Refrigerated Trucks and Insulated Vehicles',
        splitParagraphs: [
          'We buy used refrigerated and insulated trucks of different sizes, from light delivery vehicles to heavy-duty rigid trucks. Our team considers the vehicle’s condition, refrigeration equipment and body specifications to provide a professional valuation.',
          'Whether you are selling a single truck or updating your commercial fleet, we help simplify the process with clear communication and practical support.',
        ],
        splitImage: IMG.refrigeratedFuso,
        pills: [
          'Professional vehicle and refrigeration equipment assessment',
          'Support for individual sellers and commercial fleets',
          'Guidance with documentation and transfer procedures',
        ],
        whyBadge: 'Why choose us',
        whyTitle: 'A Simpler Way to Sell Your Refrigerated Truck',
        why: [
          { title: 'Professional Valuation', text: 'We assess your truck, refrigeration system and overall condition to determine a suitable purchase offer.' },
          { title: 'Clear Communication', text: 'We consider the condition of the cooling unit, operating hours, maintenance history and insulated body.' },
          { title: 'Documentation Support', text: 'Get guidance with vehicle documents, ownership transfer and relevant administrative procedures.' },
          { title: 'Individual and Fleet Sales', text: 'Whether you are selling one refrigerated truck or several vehicles, we help coordinate the valuation process.' },
        ],
        ctaTitle: 'Need Help with Your Refrigerated Truck Valuation?',
        ctaText: 'Tell us about your refrigerated truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Refrigerated Truck Valuation Work?',
        steps: [
          { title: 'Share Your Truck Details', text: 'Provide your truck’s make, model, registration year, mileage and refrigeration equipment details so we can assess your vehicle.' },
          { title: 'Request a Valuation', text: 'Submit your vehicle details and available photos. Our team will review the vehicle, cooling system to prepare an offer.' },
          { title: 'Review the Offer', text: 'Discuss the valuation, clarify the selling conditions and confirm the next steps with our team.' },
          { title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.' },
        ],
      }}
    />
  );
}
