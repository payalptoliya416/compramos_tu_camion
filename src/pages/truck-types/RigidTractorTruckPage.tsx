import TruckTypePage from '../TruckTypePage';

export default function RigidTractorTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Rigid Truck or Tractor Unit',
        heroTitle: 'Sell Your Rigid Truck or Tractor Unit with Confidence',
        crumb: 'Rigid Trucks & Tractor Units',
        heroBadge: 'Rigid truck or tractor unit',
        heroImage: '/images/tractor-unit-banner.png',
        heroText:
          'Sell your used rigid truck or tractor unit with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Commercial freight vehicles',
        splitTitle: 'We Buy Rigid Trucks and Tractor Units',
        splitParagraphs: [
          "We buy used rigid trucks and tractor units used in regional, national and international freight transport. Our team considers the vehicle's mechanical condition, chassis, engine, transmission and transport configuration to provide a professional valuation.",
          'Whether you are selling an individual commercial vehicle or updating your road transport fleet, we help simplify the selling process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/tractor-unit-left.png',
        pills: [
          'Professional vehicle and fleet assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Commercial Vehicle',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your vehicle's mechanical condition, chassis, engine, gearbox and transport configuration to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with vehicle documents, registration transfer and relevant commercial transport paperwork.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one tractor unit, rigid truck or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaTitle: 'Need Help with Your Truck Valuation?',
        ctaText:
          'Tell us about your rigid truck or tractor unit and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your vehicle's make, model, registration year, mileage and technical specifications so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, configuration and maintenance history to prepare an offer.",
          },
          {
            icon: '/images/bilori-orange.svg',
            title: 'Review the Offer',
            text: 'Discuss the valuation, clarify the selling conditions and confirm the next steps with our team.',
          },
          {
            icon: '/images/checkmark-blue-half.svg',
            title: 'Complete the Sale',
            text: 'Once the offer is accepted, coordinate the required paperwork, payment and vehicle collection arrangements.',
          },
        ],
      }}
    />
  );
}
