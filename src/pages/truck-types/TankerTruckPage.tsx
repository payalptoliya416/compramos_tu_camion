import TruckTypePage from '../TruckTypePage';

export default function TankerTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Tanker Truck',
        heroTitle: 'Sell Your Tanker Truck with Confidence',
        crumb: 'Tanker Trucks',
        heroBadge: 'Tanker trucks',
        heroImage: '/images/tranker-banner.png',
        heroText:
          'Sell your used tanker truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used tanker vehicles',
        splitTitle: 'We Buy Tanker Trucks',
        splitParagraphs: [
          "We buy used tanker trucks for fuel distribution, liquid transport and specialised commercial applications. Our team considers the vehicle's mechanical condition, tank structure, capacity and relevant equipment to provide a professional valuation.",
          'Whether you are selling a single tanker truck or updating your commercial fleet, we help simplify the selling process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/tranker-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional vehicle and tank condition assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance on documentation and transfer procedures',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Tanker Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-[60px]',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's chassis, mechanical condition, tank integrity, compartments and pumping systems to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with vehicle documents, ADR certificates, ownership transfer and relevant administrative procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one tanker truck or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaTitle: 'Need Help with Your Tanker Truck Valuation?',
        ctaText:
          'Tell us about your tanker truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Tanker Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage, tank capacity and specification details so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, tank material, compartments and certification to prepare an offer.",
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
        faqTitle: 'Frequently asked questions about selling a tanker truck',
        faq: [
          {
            q: 'Can I sell a tanker truck if its leak tests or ADR certificate have expired?',
            a: 'Yes. We know that renewing the three-year or six-year watertightness and pressure certifications for ADR tankers involves a significant expense. We buy your tanker truck with expired approvals or without a valid ADR certificate, and we take care of the resale or technical reconditioning.',
          },
          {
            q: 'What factors determine the price of a used tanker truck?',
            a: 'To value used tanker trucks we take into account the material of the tank (stainless steel and aluminum have a higher residual value), the capacity in liters, the number of compartments, the presence of thermal insulation, the condition of the pumping equipment and the power/Euro standard of the mechanical chassis.',
          },
          {
            q: 'Do you buy tankers that have transported aggressive chemicals or that need decontamination?',
            a: 'Yes. We buy units that have been used in the chemical or liquid waste industry without requiring you to provide a prior washing certificate, calculating the corresponding conditioning and sanitizing costs in the appraisal.',
          },
          {
            q: 'Can a tanker truck be sold if it has a lien or encumbrance recorded against it?',
            a: 'As a company , we can process the acquisition of tanker trucks with liens, managing the legal cancellation of the encumbrances with the purchase price. However, it is not possible to formalize the transfer if there is an active lien held by a financial institution until it is lifted.',
          },
          {
            q: 'Who is responsible for the truck removal transport and the DGT costs?',
            a: 'All logistics and paperwork costs are covered by us. We collect the tanker truck with our own fleet of lowboy trailers from anywhere in mainland Spain , regardless of whether the truck has valid insurance or a current vehicle inspection certificate (ITV). The paperwork with the DGT (Spanish Traffic Authority) is 100% free for you.',
          },
        ],
      }}
    />
  );
}
