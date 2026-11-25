import TruckTypePage from '../TruckTypePage';

export default function Light3500Page() {
  return (
    <TruckTypePage
      c={{
        name: '3,500 kg Truck',
        heroTitle: 'Sell Your 3,500 kg Truck with Confidence',
        crumb: '3,500 kg Trucks',
        heroBadge: '3,500 kg light trucks',
        heroImage: '/images/3500kg-banner.png',
        heroText:
          'Get a professional valuation for your 3,500 kg light truck, with clear communication and support throughout the selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy 3,500 kg Light Trucks',
        splitParagraphs: [
          "We buy used 3,500 kg light commercial vehicles, including dropside trucks, tippers, box vans and chassis cabs. Our team considers the vehicle's mechanical condition, bodywork, mileage and equipment to provide a professional valuation.",
          'Whether you are selling an individual commercial vehicle or updating your business fleet, we help simplify the selling process with guidance on the required paperwork.',
        ],
        splitImage: '/images/3500kg-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional vehicle assessment',
          'Support for individual sellers and businesses',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Our selling benefits',
        whyTitle: 'A Simpler Way to Sell Your Light Commercial Vehicle',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's condition, equipment and specifications to determine a suitable purchase offer.",
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
            text: "Whether you're selling one light commercial truck or several vehicles, we help coordinate the selling process.",
          },
        ],
        ctaTitle: 'Need Help with Your 3,500 kg Truck Valuation?',
        ctaText:
          'Tell us about your 3,500 kg light truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our 3,500 kg Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and body configuration.",
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
        faqTitle: 'Frequently Asked Questions About Selling a 3500 kg Truck',
        faq: [
          {
            q: 'How does the body type influence the sale of my 3500 kg truck?',
            a: 'The type of body or equipment is a key factor in the valuation. A 3500 tipper truck , a model with refrigeration equipment, or one with a liftgate have very different market values than a conventional chassis cab. Our team evaluates both the truck’s mechanical condition and the functionality and preservation of these specific components to offer you the fairest possible price.',
          },
          {
            q: 'What documentation do I need to have up to date to close the sale?',
            a: "To legally and quickly formalize the sale of your 3500 truck , you'll need the vehicle's technical data sheet and registration certificate. If your latest road tax (IVTM) receipt and vehicle inspection certificate (ITV) are expired, don't worry, we'll take care of it. In any case, we'll advise you and manage all the administrative paperwork.",
          },
          {
            q: 'Do you buy 3,500 kg trucks that have breakdowns or are out of service?',
            a: 'Yes, we buy 3500 kg trucks in various conditions. If your vehicle has a mechanical problem, has been in an accident, or has been out of service for a while, you can still request a valuation. We will analyze the specific condition of your commercial vehicle to provide you with a viable offer, and we will also arrange for its removal if necessary.',
          },
        ],
      }}
    />
  );
}
