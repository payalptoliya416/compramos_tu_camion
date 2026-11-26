import TruckTypePage from '../TruckTypePage';

export default function RefrigeratedPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Refrigerated Truck',
        heroTitle: 'Sell Your Refrigerated Truck with Confidence',
        crumb: 'Refrigerated Trucks',
        heroBadge: 'Refrigerated trucks',
        heroImage: '/images/Refrigerated-banner.png',
        heroText:
          'Sell your used refrigerated or insulated truck with professional valuation, straightforward paperwork and support throughout the selling process.',
        splitBadge: 'Used refrigerated vehicles',
        splitTitle: 'We Buy Refrigerated Trucks and Insulated Vehicles',
        splitParagraphs: [
          "We buy used refrigerated and insulated trucks of different sizes, from light delivery vehicles to heavy-duty rigid trucks. Our team considers the vehicle's condition, refrigeration equipment and body specifications to provide a professional valuation.",
          'Whether you are selling a single truck or updating your commercial fleet, we help simplify the process with clear communication and practical support.',
        ],
        splitImage: '/images/Refrigerated-banner-left.png',
        splitGapClassName: 'lg:gap-[25px]',
        pills: [
          'Professional vehicle and refrigeration equipment assessment',
          'Support for individual sellers and commercial fleets',
          'Guidance with documentation and transfer procedures',
        ],
        whyBadge: 'Why choose us',
        whyTitle: 'A Simpler Way to Sell Your Refrigerated Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesBadge: 'Explore our categories',
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: 'We assess your truck, refrigeration system and overall condition to determine a suitable purchase offer.',
          },
          {
            icon: '/images/chat-communiation.svg',
            title: 'Clear Communication',
            text: 'We consider the condition of the cooling unit, operating hours, maintenance history and insulated body.',
          },
          {
            icon: '/images/handshake-regula.svg',
            title: 'Documentation Support',
            text: 'Get guidance with vehicle documents, ownership transfer and relevant administrative procedures.',
          },
          {
            icon: '/images/users-multiple-blue.svg',
            title: 'Individual and Fleet Sales',
            text: 'Whether you are selling one refrigerated truck or several vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaBadge: 'Ready to sell your truck?',
        ctaTitle: 'Need Help with Your Refrigerated Truck Valuation?',
        ctaText:
          'Tell us about your refrigerated truck and our team will help you understand the next steps towards a professional purchase offer.',
        ctaChecks: ['Professional Valuation', 'Documentation Support', 'Individual and Fleet Sales'],
        processTitle: 'How Does Our Refrigerated Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and refrigeration equipment details so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: 'Submit your vehicle details and available photos. Our team will review the vehicle, cooling system to prepare an offer.',
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
        faqTitle: 'Frequently asked questions about selling a refrigerated truck',
        faq: [
          {
            q: 'Can I sell a refrigerated truck if its ATP certificate has expired?',
            a: 'Yes, absolutely. We know that renewing ATP certification (whether for FNA or FRC class) requires periodic inspections in testing tunnels, which can be very expensive. We buy refrigerated and insulated trucks with expired, lapsed, or denied ATP certifications, and we handle all the subsequent administrative and logistical procedures.',
          },
          {
            q: 'What happens if the refrigeration equipment (Thermo King, Carrier) breaks down or has many hours of use?',
            a: 'We buy trucks regardless of the condition of the refrigeration unit. Whether the refrigeration unit has a serious compressor failure, refrigerant leaks, or simply has high operating hours, we deduct the estimated repair cost from the appraisal and offer you a guaranteed net price.',
          },
          {
            q: 'Do you buy light units such as refrigerated trucks of 3,500 kg and large 3-axle trucks?',
            a: 'Yes. We cover the entire range of refrigerated transport in Spain: from a 3500 kg refrigerated truck ideal for urban deliveries driven with a B license, to heavy rigid 2 and 3 axle trucks designed for large-scale and long-distance food distribution.',
          },
          {
            q: 'Do you buy refrigerated trucks that have liens or outstanding debts?',
            a: 'As a company , we can handle the purchase of refrigerated trucks with outstanding liens, managing all the necessary legal documentation during the transaction. The only essential requirement is that the vehicle does not have an active lien registered with the Registry of Movable Property; if it does, the financial encumbrance must be cleared before signing.',
          },
          {
            q: 'Who is responsible for removing the refrigerated truck and how much does it cost?',
            a: "We handle collection and transport throughout mainland Spain . If your truck lacks a valid vehicle inspection certificate (ITV), insurance, or has a mechanical breakdown preventing it from driving, we'll send our own trailers or authorized drivers directly to your facility or workshop. Collection and vehicle ownership transfer with the DGT (Spanish Traffic Authority) are completely free.",
          },
        ],
      }}
    />
  );
}
