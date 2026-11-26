import TruckTypePage from '../TruckTypePage';

export default function RigidTractorTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Rigid Truck or Tractor Unit',
        heroTitle: 'Sell Your Rigid Truck or Tractor Unit with Confidence',
        crumb: 'Tractor Units',
        heroBadge: 'Tractor units',
        heroImage: '/images/tractor-unit-banner.png',
        heroText:
          'Looking to sell a rigid truck or tractor unit? Get a professional valuation and guidance through a straightforward selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy Rigid Trucks and Tractor Units',
        splitParagraphs: [
          "Whether you're selling an individual commercial vehicle or updating your transport fleet, understanding your truck's value is an important first step. Our team reviews the information you provide to assess your vehicle and guide you through the next steps.",
          "We work with different commercial vehicle configurations, taking into account the truck's specifications, condition, equipment and relevant market factors.",
        ],
        splitImage: '/images/tractor-unit-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional vehicle assessment',
          'Support for individual sellers and businesses',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why choose us',
        whyTitle: 'A Simpler Way to Sell Your Commercial Vehicle',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesBadge: 'Vehicle categories',
        categoriesClassName: '!pt-[60px]',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We review your truck's specifications, condition and relevant market factors.",
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'Understand the valuation process and the next steps before proceeding.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Receive guidance on the paperwork needed to complete the sale.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Support for private sellers, transport professionals and businesses selling commercial vehicles.',
          },
        ],
        ctaBadge: 'Ready to get started?',
        ctaTitle: 'Need Help with Your Truck Valuation?',
        ctaText:
          'Our team can help you understand the information required and guide you through the next steps.',
        ctaChecks: ['Free Valuation', 'Personalised Service', 'Nationwide Enquiries'],
        processTitle: 'How Does Our Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: 'Provide the make, model, registration year, mileage and other relevant information.',
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: 'Submit the details so our team can review the vehicle and its specifications.',
          },
          {
            icon: '/images/bilori-orange.svg',
            title: 'Review the Offer',
            text: 'Discuss the valuation and clarify the conditions and next steps.',
          },
          {
            icon: '/images/checkmark-blue-half.svg',
            title: 'Complete the Sale',
            text: 'Once an offer is accepted, coordinate the required paperwork, payment and collection arrangements.',
          },
        ],
        faqTitle: 'Frequently asked questions about selling tractor units',
        faq: [
          {
            q: 'Is it a problem if the tractor unit has over a million kilometers, serious breakdowns, or old Euro emissions standards?',
            a: 'No, not at all . We are fully aware that tractor units in Spain operate intensive routes on national and international roads and accumulate very high mileage. We buy tractor units with a million kilometers or more, with engine problems (cylinder head, turbo, injectors), broken automatic transmissions, or damaged AdBlue systems. We are also interested in older units (Euro 4 or Euro 5) or those with an expired MOT/roadworthiness certificate. We assess the overall condition and give you a fair offer.',
          },
          {
            q: 'What brands and configurations of tractor units are you interested in?',
            a: 'Adquirimos cabezas tractoras de todas las marcas líderes del mercado de transporte pesado en España: Scania (R, S), Volvo (FH), Mercedes-Benz (Actros), DAF (XF, XG), MAN (TGX), Renault (Gama T) e Iveco (Stralis, S-Way). En cuanto a configuraciones, compramos tractoras estándar 4×2, unidades de tres ejes 6×2, tractoras para transporte especial y modelos de perfil bajo o «Megas» (Low-Deck).',
          },
          {
            q: 'We are a transport company and we want to renew or liquidate a fleet of several tractor units, do you do group purchases?',
            a: 'Yes, we specialize in purchasing lots and entire fleets of trucks due to asset renewal, mergers, or the closure of logistics companies. We offer a unified service: we appraise all tractor units together, draw up a single contract, and make the full payment via secure bank transfer before collection, guaranteeing an immediate cash injection for your business.',
          },
          {
            q: 'Do I need to keep my transport card active to sell a fleet tractor unit?',
            a: 'No. The transport permit (MDPE or MDPL) is linked to the company or self-employed worker, not the tractor unit. You can process the de-assignment of the permit at the Transport Department of your Autonomous Community before selling the tractor unit . We acquired the commercial vehicle through a transfer of ownership at the DGT (Spanish Directorate General of Traffic) without requiring a valid transport authorization.',
          },
          {
            q: 'Can I sell a tractor unit that is broken down, has a seized engine, or does not have a valid MOT/roadworthiness certificate?',
            a: "Yes. If you're looking to sell a damaged or wrecked tractor unit , we'll appraise it, taking into account the value of the chassis, cab, gearbox (ZF TraXon, Optidriver, I-Shift), and any salvageable components. We'll handle the transport by special lowboy trailer from your premises or workshop, so you don't have to worry about crane costs or vehicle inspection fees.",
          },
        ],
      }}
    />
  );
}
