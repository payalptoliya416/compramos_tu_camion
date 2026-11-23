import TruckTypePage from '../TruckTypePage';
import { IMG } from '@/data/images';

export default function ParcelDeliveryPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Parcel Delivery Truck',
        crumb: 'Parcel Delivery Trucks',
        heroBadge: 'Parcel delivery trucks',
        heroImage: IMG.heroParcel,
        heroText:
          'Sell your used parcel delivery truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy Parcel Delivery Trucks',
        splitParagraphs: [
          'We buy used parcel delivery trucks and box-body vehicles used for courier services, local deliveries and commercial distribution. Our team considers the vehicle’s mechanical condition, cargo body, loading equipment and specifications to provide a professional valuation.',
          'Whether you are selling a light delivery truck or a larger distribution vehicle, we help simplify the process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: IMG.parcelMan,
        pills: [
          'Professional vehicle and cargo body assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyTitle: 'A Simpler Way to Sell Your Parcel Delivery Truck',
        why: [
          { title: 'Professional Valuation', text: 'We assess your truck’s mechanical condition, cargo body and loading equipment to determine a suitable purchase offer.' },
          { title: 'Clear Communication', text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.' },
          { title: 'Documentation Support', text: 'Get guidance with vehicle documents, ownership transfer and relevant administrative procedures.' },
          { title: 'Individual and Fleet Sales', text: 'Whether you are selling one delivery truck or multiple commercial vehicles, we help coordinate the valuation process.' },
        ],
        ctaTitle: 'Need Help with Your Parcel Delivery Truck Valuation?',
        ctaText: 'Tell us about your delivery truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Parcel Delivery Truck Valuation Work?',
        steps: [
          { title: 'Share Your Truck Details', text: 'Provide your truck’s make, model, registration year, mileage and cargo body details so we can assess your vehicle.' },
          { title: 'Request a Valuation', text: 'Submit your vehicle details and available photos. Our team will review the truck’s condition, cargo body and loading equipment to prepare an offer.' },
          { title: 'Review the Offer', text: 'Discuss the valuation, clarify the selling conditions and confirm the next steps with our team.' },
          { title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.' },
        ],
      }}
    />
  );
}
