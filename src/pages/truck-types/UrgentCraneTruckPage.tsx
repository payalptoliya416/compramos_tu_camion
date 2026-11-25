import TruckTypePage from '../TruckTypePage';

export default function UrgentCraneTruckPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Crane Truck',
        heroTitle: 'Sell Your Crane Truck Urgently!',
        crumb: 'Urgent Crane Truck Sale',
        heroBadge: 'Urgent crane truck sale',
        heroImage: '/images/urgent-banner.png',
        heroText:
          'Get a professional valuation for your crane truck and guidance throughout the selling process.',
        splitBadge: 'Urgent commercial vehicles',
        splitTitle: 'We Buy Crane Trucks for Urgent Sale',
        splitParagraphs: [
          'If you need to sell your crane truck quickly, we help simplify the process with a professional vehicle valuation and clear communication. Our team considers the truck’s mechanical condition, crane equipment and specifications when reviewing your vehicle.',
          'Whether you’re selling a single crane truck or updating your commercial fleet, we provide guidance on the selling process and required documentation.',
        ],
        splitImage: '/images/urgentpage-left.png',
        pills: [
          'Professional vehicle assessment',
          'Support for individual sellers and businesses',
          '- Guidance throughout the selling process',
        ],
        whyBadge: 'Our selling benefits',
        whyTitle: 'A Simpler Way to Sell Your Crane Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesClassName: '!pt-[60px]',
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
        ctaTitle: 'Need Help with Your Crane Truck Valuation?',
        ctaText:
          'Tell us about your crane truck and our team will help you understand the next steps towards a professional purchase offer.',
        processTitle: 'How Does Our Crane Truck Valuation Work?',
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
        faqTitle: 'Frequently Asked Questions About the Urgent Sale of Crane Trucks',
        faq: [
          {
            q: 'How long does it take to close a sale if I put "I\'m selling a crane truck urgently"?',
            a: "Our service is optimized to offer maximum speed and immediate liquidity to carriers and companies closing their business or renewing their fleet. Once you contact us and provide the crane truck's details, we'll give you a valuation within minutes. If you accept, we'll inspect the vehicle the same day, and payment is made instantly via secure bank transfer before we collect the vehicle. The entire process takes us, on average, between 24 and 48 hours.",
          },
          {
            q: 'My crane truck is broken down or its MOT has expired, will they still buy it?',
            a: 'Of course. We buy crane trucks in any mechanical and administrative condition. We understand that these vehicles suffer significant wear and tear on critical components (the winch, hydraulic hoses, slewing rings, or stabilizers). We assess the overall condition of the truck and the crane itself, calculate the repair costs, and offer you a fair and fixed price without you having to do any repairs yourself.',
          },
          {
            q: 'How is the value of a used crane truck calculated?',
            a: "The value depends not only on the truck (make, engine and mileage), but also on the crane's capacity (hydraulic extensions, remote controls, year of the equipment and condition of the hydraulic cylinders).",
          },
          {
            q: 'Can a crane truck be sold if the transport card or tachograph has expired?',
            a: "Yes, absolutely. The transport card is a personal authorization linked to the company or self-employed individual, not to the vehicle itself. When selling the truck to a professional buyer, you don't need an active transport card. Similarly, if the tachograph inspection has expired or the truck's MOT (ITV) is not up to date, we will arrange for its transport by lowboy trailer or specialized transport.",
          },
          {
            q: 'What happens to civil liability or potential breakdowns after the truck is delivered?',
            a: "When you sell your crane truck to a professional dealership, the transaction is formalized through a commercial contract in which we assume responsibility for the vehicle's condition after appraisal and inspection. This exempts you from the liabilities or warranties for hidden defects that are typically required in private sales.",
          },
        ],
      }}
    />
  );
}
