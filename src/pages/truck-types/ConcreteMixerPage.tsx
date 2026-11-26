import TruckTypePage from '../TruckTypePage';

export default function ConcreteMixerPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Concrete Mixer Truck',
        heroTitle: 'Sell Your Concrete Mixer Truck with Confidence',
        crumb: 'Concrete Mixer Trucks',
        heroBadge: 'Concrete mixer trucks',
        heroImage: '/images/concern-banner.png',
        heroText:
          'Sell your used concrete mixer truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used construction vehicles',
        splitTitle: 'We Buy Concrete Mixer Trucks',
        splitParagraphs: [
          "We buy used concrete mixer trucks used in construction, concrete production and commercial transport. Our team considers the vehicle's mechanical condition, chassis, mixing drum, hydraulic systems and related equipment to provide a professional valuation.",
          'Whether you are selling a single concrete mixer truck or updating your construction fleet, we help simplify the selling process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/concern-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional vehicle and mixing equipment assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Concrete Mixer Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-[60px]',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's mechanical condition, chassis, mixing drum and hydraulic equipment to determine a suitable purchase offer.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation, selling conditions and next steps with straightforward communication throughout the process.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with the required vehicle documents, ownership transfer and relevant administrative procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one or multiple concrete mixer trucks or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaTitle: 'Need Help with Your Concrete Mixer Truck Valuation?',
        ctaText:
          'Tell us about your concrete mixer truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Concrete Mixer Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and mixing drum details so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, mixing drum, hydraulic system and specifications to prepare an offer.",
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
        faqTitle: 'Frequently asked questions about selling a concrete mixer truck',
        faq: [
          {
            q: 'Can I sell a concrete mixer truck if the drum has set or accumulated concrete inside?',
            a: 'Yes. We understand that with prolonged use or after an unexpected stoppage of the mixing process, crusts and layers of dried concrete can form on the drum walls. We buy the unit as is, and the appraisal includes the cost of chipping or replacing the drum without requiring any prior work from you.',
          },
          {
            q: 'What happens if the hydraulic pump or the drum reducer is broken?',
            a: "We buy the truck regardless of the condition of the concrete mixer's transmission. Whether the gearbox is noisy, the hydraulic pump has lost pressure, or the auxiliary engine is seized, we value the chassis and cab commercially and offer you a net price for the whole.",
          },
          {
            q: 'What data is evaluated to set the price of used concrete mixer trucks?',
            a: 'When evaluating used concrete mixer trucks , we take into account the year of registration, the drive configuration (6x4, 8x4), the brand of the drum (Liebherr, Cifa, etc.), the capacity in cubic meters, the wear of the construction tires and the Euro emissions standard for its subsequent sale.',
          },
          {
            q: 'Can a cement mixer be sold if it has a lien or company debts?',
            a: "As a company , we can manage the purchase of concrete mixer trucks that have a lien or encumbrance registered with the DGT (Spanish Traffic Authority). We review the vehicle's report to process the transaction with complete legal certainty. The only insurmountable limitation is if the vehicle has an active lien from the finance company.",
          },
          {
            q: 'Who handles the collection transport and what is the cost to the seller?',
            a: 'We handle the collection and transport of your concrete mixer truck using heavy-duty trailers anywhere in mainland Spain . If your mixer is out of service due to mechanical failure, lack of insurance, or an expired vehicle inspection certificate (ITV), we cover the logistics of its removal. We also handle the collection service and the transfer of ownership with the DGT (Spanish Traffic Authority).',
          },
        ],
      }}
    />
  );
}
