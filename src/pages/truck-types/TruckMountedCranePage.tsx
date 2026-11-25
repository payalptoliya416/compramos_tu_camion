import TruckTypePage from '../TruckTypePage';

export default function TruckMountedCranePage() {
  return (
    <TruckTypePage
      c={{
        name: 'Truck-Mounted Crane',
        heroTitle: 'Sell Your Truck-Mounted Crane with Confidence',
        crumb: 'Truck-Mounted Cranes',
        heroBadge: 'Truck-mounted crane trucks',
        heroImage: '/images/truck-mounted-banner.png',
        heroText:
          'Get a professional valuation for your truck-mounted crane with clear communication and support throughout the selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy Truck-Mounted Cranes',
        splitParagraphs: [
          "We buy used truck-mounted cranes and commercial vehicles equipped with lifting systems. Our team considers the vehicle's mechanical condition, crane specifications and lifting equipment to provide a professional valuation.",
          'Whether you are selling an individual crane truck or updating your commercial fleet, we help simplify the selling process with guidance on the required paperwork.',
        ],
        splitImage: '/images/truck-mount-left.png',
        pills: [
          'Professional vehicle assessment',
          'Support for individual sellers and businesses',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Our selling benefits',
        whyTitle: 'A Simpler Way to Sell Your Commercial Vehicle',
        staggeredWhy: true,
        showCategoryDescription: true,
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's condition, crane equipment and specifications to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation, selling conditions and next steps through straightforward communication.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Receive guidance with the required vehicle documents and ownership transfer procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: "Whether you're selling one crane truck or several commercial vehicles, we help coordinate the selling process.",
          },
        ],
        ctaTitle: 'Need Help with Your Truck-Mounted Crane Valuation?',
        ctaText:
          'Tell us about your truck-mounted crane and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Truck-Mounted Crane Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and crane specifications.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: 'Submit your vehicle details so our team can review its condition and equipment.',
          },
          {
            icon: '/images/bilori-orange.svg',
            title: 'Review the Offer',
            text: 'Discuss the valuation, selling conditions and next steps with our team.',
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
