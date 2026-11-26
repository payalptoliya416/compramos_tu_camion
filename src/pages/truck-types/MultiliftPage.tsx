import TruckTypePage from '../TruckTypePage';

export default function MultiliftPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Multilift Truck',
        heroTitle: 'Sell Your Multilift Truck with Confidence',
        crumb: 'Multilift Hook-Lift Trucks',
        heroBadge: 'Multilift & hook-lift trucks',
        heroImage: '/images/multifit-banner.png',
        heroText:
          'Sell your used hook-lift truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used container-handling vehicles',
        splitTitle: 'We Buy Multilift and Hook-Lift Trucks',
        splitParagraphs: [
          "We buy used multilift and hook-lift trucks used for waste management, construction, recycling and container transport. Our team considers the truck's mechanical condition, chassis, hydraulic lifting system and container-handling equipment to provide a professional valuation.",
          'Whether you are selling an individual truck or updating your commercial fleet, we help simplify the process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/multifit-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional hydraulic system and vehicle assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Multilift Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's chassis, mechanical condition, hydraulic system and container-handling equipment to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with vehicle documents, ownership transfer and relevant administrative procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one hook-lift truck or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaTitle: 'Need Help with Your Multilift Truck Valuation?',
        ctaText:
          'Tell us about your multilift truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Multilift Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and hook-lift system details so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, hydraulic lifting system and container-handling equipment to prepare an offer.",
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
        faqTitle: 'Frequently asked questions about selling a multilift truck',
        faq: [
          {
            q: 'Does the price include the boxes or containers that I have with the used multilift truck?',
            a: 'Our base offer focuses on the truck and integrated hydraulic hooklift system. However, if you wish to include your swap bodies, rubble containers, or platforms in the deal, please indicate this on the form. We will evaluate the entire package to adjust the offer to your advantage.',
          },
          {
            q: 'What do they check on the hook system when appraising a 3500 multilift truck?',
            a: "In lower tonnage models such as the 3500 multilift truck , we mainly check the correct functioning of the arm (raising and lowering), the watertightness of the hydraulic circuits to rule out leaks, the condition of the safety locks and that the hook is properly approved in the vehicle's technical data sheet.",
          },
          {
            q: 'Can a truck be sold with a damaged or worn-out hook system?',
            a: 'Yes, we buy trucks with hooklift systems in any condition . If the hydraulic equipment needs repairs, has suffered severe wear from working with waste, or the engine requires mechanical attention, we calculate the cost of its refurbishment and present you with a fair proposal based on its reconditioning capabilities.',
          },
        ],
      }}
    />
  );
}
