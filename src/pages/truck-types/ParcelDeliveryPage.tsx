import TruckTypePage from '../TruckTypePage';

export default function ParcelDeliveryPage() {
  return (
    <TruckTypePage
      c={{
        name: 'Parcel Delivery Truck',
        heroTitle: 'Sell Your Parcel Delivery Truck with Confidence',
        crumb: 'Parcel Delivery Trucks',
        heroBadge: 'Parcel delivery trucks',
        heroImage: '/images/parcel-delivery-banner.png',
        heroText:
          'Sell your used parcel delivery truck with a professional valuation, clear communication and support throughout the selling process.',
        splitBadge: 'Used commercial vehicles',
        splitTitle: 'We Buy Parcel Delivery Trucks',
        splitParagraphs: [
          "We buy used parcel delivery trucks and box-body vehicles used for courier services, local deliveries and commercial distribution. Our team considers the vehicle's mechanical condition, cargo body, loading equipment and specifications to provide a professional valuation.",
          'Whether you are selling a light delivery truck or a larger distribution vehicle, we help simplify the process with clear communication and guidance on the required paperwork.',
        ],
        splitImage: '/images/parcel-delivery-banner-left.png',
        splitGapClassName: 'lg:gap-[35px]',
        pills: [
          'Professional vehicle and cargo body assessment',
          'Support for individual trucks and commercial fleets',
          'Guidance throughout the selling process',
        ],
        whyBadge: 'Why sell with us?',
        whyTitle: 'A Simpler Way to Sell Your Parcel Delivery Truck',
        staggeredWhy: true,
        showCategoryDescription: true,
        categoriesBadge: 'Explore our categories',
        categoriesClassName: '!pt-0',
        why: [
          {
            icon: '/images/professiona-valuation.svg',
            title: 'Professional Valuation',
            text: "We assess your truck's mechanical condition, cargo body and loading equipment to determine a suitable purchase offer.",
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
            text: 'Whether you are selling one delivery truck or multiple commercial vehicles, we help coordinate the valuation process.',
          },
        ],
        ctaBadge: 'Ready to sell your truck?',
        ctaTitle: 'Need Help with Your Parcel Delivery Truck Valuation?',
        ctaText:
          'Tell us about your delivery truck and our team will help you understand the next steps towards a professional purchase offer.',
        ctaChecks: ['Professional Valuation', 'Documentation Support', 'Individual and Fleet Sales'],
        processTitle: 'How Does Our Parcel Delivery Truck Valuation Work?',
        steps: [
          {
            icon: '/images/doc-share.svg',
            title: 'Share Your Truck Details',
            text: "Provide your truck's make, model, registration year, mileage and cargo body details so we can assess your vehicle.",
          },
          {
            icon: '/images/request-valuation.svg',
            title: 'Request a Valuation',
            text: "Submit your vehicle details and available photos. Our team will review the truck's condition, cargo body and loading equipment to prepare an offer.",
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
        faqTitle: 'Frequently Asked Questions About Selling Trucks',
        faq: [
          {
            q: 'Can I sell a parcel delivery truck if the hydraulic liftgate is not working?',
            a: 'Yes. We know that lifting platforms can experience hydraulic oil leaks or electric motor failures due to heavy use. We buy parcel trucks with damaged, misaligned, or expired tailgates, without requiring you to carry out any repairs before the sale.',
          },
          {
            q: 'What happens if the parcel box or van has dents or broken panels?',
            a: 'We bought the truck as is. Wear and tear on the aluminum or polyester walls, damage to the upper corners of the van, or wear on the Finnish plywood floor are common in general freight transport. We adjusted the valuation to reflect the overall condition without rejecting the vehicle.',
          },
          {
            q: 'What is the difference when evaluating a 3500kg parcel truck versus a rigid parcel truck with a higher tonnage?',
            a: 'For a 3500kg parcel delivery truck, we particularly value the DGT environmental label (due to Low Emission Zone restrictions in urban deliveries) and the lightness of the van body to maximize payload. For a heavy rigid parcel delivery truck (8 to 26 tons), the mechanical condition of the engine, axle configuration, palletizing capacity, and the presence of a retarder or auxiliary brakes are paramount.',
          },
          {
            q: 'Do you buy parcel trucks that still have vinyl wraps or commercial lettering?',
            a: "Yes. You don't need to spend time or money removing advertising or vinyl wraps from previous logistics fleets. We take care of the vehicle's refurbishment and visual decontamination after you purchase it.",
          },
          {
            q: 'Who covers the cost of the name change at the DGT (Spanish Traffic Authority) and the removal transport?',
            a: 'All logistical costs and administrative procedures are covered by us. We collect the truck from anywhere in mainland Spain using our own trailers or authorized drivers, even if the vehicle lacks insurance or a valid MOT/roadworthiness certificate. The administrative process at the DGT (Spanish Traffic Authority) is completely free for you.',
          },
        ],
      }}
    />
  );
}
