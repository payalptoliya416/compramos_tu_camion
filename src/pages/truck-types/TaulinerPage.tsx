import TruckTypePage from '../TruckTypePage';

export default function TaulinerPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Tauliner Truck',
        heroTitle: 'Sell Your Tauliner Truck with Confidence',
        crumb: 'Tauliner & Curtainsider Trucks',
        heroBadge: 'Tauliner & curtainsider trucks',
        heroImage: '/images/tauliner-banner.png',
        heroText:
          'Sell your used curtainsider truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used curtainsider vehicles',
        splitTitle: 'We Buy Tauliner and Curtainsider Trucks',
        splitParagraphs: [
          "We buy used tauliner and curtainsider trucks used for commercial transport, logistics and freight distribution. Our team considers the truck's mechanical condition, chassis, engine and curtainsider body to provide a professional valuation.",
          'Whether you are selling an individual vehicle or updating your fleet, we help make the selling process straightforward with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/tauliner-banner-left.png',
        splitGapClassName: 'lg:gap-[25px]',
        pills: [
          'Professional truck and body condition assessment',
          'Support for individual vehicles and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Curtainsider Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesBadge: 'Explore our categories',
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess the truck's mechanical condition, chassis, engine and curtainsider body to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Receive clear information about the valuation, selling conditions and the next steps throughout the process.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with the required vehicle documents, ownership transfer and relevant administrative procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one curtainsider truck or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaBadge: 'Ready to sell your truck?',
        ctaTitle: 'Need Help with Your Curtainsider Truck Valuation?',
        ctaText:
          'Tell us about your curtainsider truck and our team will help you understand the next steps towards a professional purchase offer.',
        ctaChecks: ['Professional Valuation', 'Documentation Support', 'Individual and Fleet Sales'],
        processTitle: 'How Does Our Curtainsider Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage, curtain condition and body dimensions so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, sliding mechanism and specifications to prepare an offer.",
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
        faqTitle: 'Frequently asked questions about selling curtainside trucks',
        faq: [
          {
            q: 'Can I sell a curtainside truck if the side tarpaulins are torn or the sunroof is damaged?',
            a: 'Yes, absolutely. We know that tarpaulins and roof opening systems suffer significant wear and tear from daily use and exposure to the elements. We buy curtainside trucks with worn or torn tarpaulins, jammed reel mechanisms, or deteriorated interior panels, without requiring you to carry out any repairs beforehand.',
          },
          {
            q: 'What is the difference in valuation between a rigid curtainside truck and a semi-curtainside truck?',
            a: 'The main difference lies in the side structure. The curtainside truck features floor-to-ceiling tarpaulins for full opening, while the semi-curtainside truck includes folding aluminum side panels at the bottom. When appraising both models, we evaluated the condition of the side panels, the maximum authorized weight (MAW), and the presence of a rear liftgate.',
          },
          {
            q: 'Do you buy heavy-duty, large-tonnage units such as 3-axle rigid curtainside trucks?',
            a: 'Yes. The 3-axle rigid curtainside truck is in high demand due to its balance between load capacity and maneuverability. We purchase 26-ton units with a liftable or steerable third axle, and we value extras such as full air suspension, retarder/intarder, and long-haul cabs.',
          },
          {
            q: 'What documentation do I need to sell a curtainside truck that has a lien?',
            a: "We can process the purchase of curtainside trucks with an outstanding lien. To do so, we need the vehicle registration document, the vehicle's technical specifications, and an updated report from the DGT (Spanish Traffic Authority) to verify any encumbrances. The only reason preventing immediate signing is the existence of an active lien in the Movable Property Registry, which must be cancelled beforehand.",
          },
          {
            q: 'Who covers the costs of collecting the truck and transferring it to the DGT (Spanish Traffic Authority)?',
            a: "All logistical and administrative costs are covered by us. We will collect your curtainside truck using a lowboy trailer or professional drivers from anywhere in mainland Spain , even if it doesn't have a valid MOT or insurance. The transfer of ownership process with the DGT (Spanish Traffic Authority) is 100% free for you.",
          },
        ],
      }}
    />
  );
}
