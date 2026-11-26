import TruckTypePage from '../TruckTypePage';

export default function UsedDumpTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Used Dump Truck',
        heroTitle: 'Sell Your Used Dump Truck with Confidence',
        crumb: 'Used Dump Trucks',
        heroBadge: 'Used dump trucks',
        heroImage: '/images/used-dump.png',
        heroText:
          'Sell your used dump truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used construction vehicles',
        splitTitle: 'We Buy Used Dump Trucks',
        splitParagraphs: [
          "We buy used dump trucks and tipper trucks used in construction, earthmoving and material transport. Our team considers the truck's mechanical condition, chassis, engine and hydraulic tipping system to provide a professional valuation.",
          'Whether you are selling a single vehicle or updating your construction fleet, we help simplify the selling process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/dump-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional mechanical and hydraulic system assessment',
          'Support for individual trucks and commercial fleets',
          '- Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Used Dump Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's mechanical condition, chassis, tipping body and hydraulic system to determine a suitable purchase offer.",
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
            text: 'Whether you are selling one dump truck or multiple construction vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaTitle: 'Need Help with Your Dump Truck Valuation?',
        ctaText:
          'Tell us about your dump truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Dump Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage, tipping mechanism and chassis specifications.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: 'Submit your vehicle details so our team can review its condition, tipper body and mechanical status.',
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
        faqTitle: 'Frequently Asked Questions About Selling Trucks',
        faq: [
          {
            q: 'Do you buy dump trucks with liens, encumbrances, or retention of title?',
            a: 'Yes, as a management company, we can acquire tipper trucks with a recorded lien, handling the corresponding procedures during the purchase process. However, we do not buy vehicles with an active retention of title . In that case, the retention must be cancelled beforehand at the Movable Property Registry before we can proceed with the signing and payment.',
          },
          {
            q: 'Is it possible to sell a truck with a faulty hydraulic system or piston?',
            a: 'Of course. We are fully aware that the tipping system (hydraulic cylinders, power take-off, piston, and the hopper or tipper body itself) suffers extreme wear and tear in the construction and earthmoving sector. We buy tipper trucks in any mechanical condition , whether they have hydraulic leaks, engine problems, an expired vehicle inspection certificate, or structural damage from daily use on construction sites. We assess the repair costs and offer you a fair price.',
          },
          {
            q: 'We have a fleet of construction trucks due to renewal or cessation of activity, do you buy several units?',
            a: "Yes. We serve both independent haulers with a single vehicle and large construction companies, public works contractors, or aggregate companies that need to liquidate or renew their entire fleets. We carry out a joint valuation of all tipper trucks (whether 2, 3, or 4 axles), offering a single contract, unified management, and fast payment via secure bank transfer to guarantee your company's liquidity.",
          },
        ],
      }}
    />
  );
}
