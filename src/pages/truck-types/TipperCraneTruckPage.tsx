import TruckTypePage from '../TruckTypePage';

export default function TipperCraneTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Tipper Truck with Crane',
        heroTitle: 'Sell Your Tipper Truck with Crane with Confidence',
        crumb: 'Tipper Trucks with Crane',
        heroBadge: 'Tipper trucks with crane',
        heroImage: '/images/tipper-truck-banner.png',
        heroText:
          'Get a professional valuation for your tipper truck with crane, with clear communication and support throughout the selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy Tipper Trucks with Cranes',
        splitParagraphs: [
          "We buy used tipper trucks fitted with cranes for construction, material handling and commercial operations. Our team considers the truck's mechanical condition, tipping body, crane equipment and specifications when preparing a valuation.",
          "Whether you're selling an individual vehicle or updating your commercial fleet, we help simplify the selling process with professional assessment and guidance on the required paperwork.",
        ],
        splitImage: '/images/tipper-left.png',
        pills: [
          'Professional vehicle and crane assessment',
          'Support for individual sellers and businesses',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Our selling benefits',
        whyTitle: 'A Simpler Way to Sell Your Tipper Truck with a Crane',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's condition, tipping equipment and crane specifications to determine a suitable purchase offer.",
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
            text: "Whether you're selling one tipper truck with a crane or several commercial vehicles, we help coordinate the selling process.",
          },
        ],
        ctaTitle: 'Need Help with Your Tipper Truck with Crane Valuation?',
        ctaText:
          'Tell us about your tipper truck with crane and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Tipper Truck with Crane Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage, tipping mechanism and crane specifications.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: 'Submit your vehicle details so our team can review its condition, tipper body and crane equipment.',
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
        faqTitle: 'Frequently Asked Questions About Selling a Tipper Truck with a Crane',
        faq: [
          {
            q: 'How do they rate the crane on dump trucks?',
            a: "Our technicians evaluate the crane brand (Palfinger, Hiab, Fassi, etc.), its year of manufacture, the number of hydraulic extensions, the functionality of the remote controls, and its current safety inspections. This way, we ensure that the extra equipment adds real value to your used vehicle's offer.",
          },
          {
            q: 'What happens if the hydraulic system of the dump truck has a leak or wear?',
            a: 'You can proceed with the sale in the same way. Although the condition of the dump truck influences the final price, we buy machinery with wear and tear from daily use or that needs repairs. We will assess the cost of getting it back in working order to offer you a clear and transparent quote.',
          },
          {
            q: 'Do you buy trucks that have a lease or pending lien?',
            a: 'Yes, this is a very common situation when selling an industrial tipper truck . Our legal team will advise you on how to cancel the outstanding loan simultaneously with the purchase, coordinating the process with your bank so you can release the vehicle without any hassle.',
          },
        ],
      }}
    />
  );
}
