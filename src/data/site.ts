import type { FaqItem } from '@/types';
import { IMG } from './images';

export const SITE = {
  name: 'Compramos Tu Camión',
  phone: '662 36 93 13',
  phoneHref: 'tel:+34662369313',
  whatsappHref: 'https://wa.me/34662369313',
  email: 'hola@compramostucamion.es',
  address: 'Camino de Sisante, Plot 313. La Roda (02630), Albacete',
  about:
    'Used truck buying specialists in Spain. We assist private owners, operators and transport companies with the sale of commercial vehicles.',
};

export const NAV = [
  { label: 'Sell Your Truck', to: '/' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Collection across Spain', to: '/collection-across-spain' },
  { label: 'About Us', to: '/about-us' },
];

export const FOOTER_COLS = [
  {
    title: 'Selling Solutions',
    links: [
      { label: 'Sell Your Truck', to: '/' },
      { label: 'Business & Fleet Sales', to: '/business-fleet-sales' },
      { label: 'Special Selling Situations', to: '/special-selling-situations' },
      { label: 'Sell by Make & Model', to: '/sell-by-make-and-model' },
      { label: 'Documents Required to Sell a Truck', to: '/documents-required-to-sell-a-truck' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Collection across Spain', to: '/collection-across-spain' },
      { label: 'About Us', to: '/about-us' },
      { label: 'Truck types', to: '/truck-types/refrigerated-trucks' },
      { label: 'Blog', to: '/blog' },
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: 'The process was very straightforward. They assessed my truck quickly and the whole transaction was handled professionally.',
    name: 'Annette Black',
    city: 'Valencia',
    avatar: IMG.avatar1,
  },
  {
    text: 'I needed to sell my refrigerated truck urgently and they helped me through the whole process efficiently. Highly recommended.',
    name: 'Leslie Alexander',
    city: 'Madrid',
    avatar: IMG.avatar2,
  },
  {
    text: 'The process is very simple. I entered the license plate number, received a valuation, and sold my car the same day. Very professional.',
    name: 'Esther Howard',
    city: 'Sevilla',
    avatar: IMG.avatar3,
  },
];

export const CATEGORIES = [
  { title: 'Tractor Units', text: 'Long-haul and regional tractor units from all major manufacturers.', image: IMG.catTractor, to: '/truck-types/tractor-units' },
  { title: 'Rigid Trucks', text: 'Urban and regional rigid trucks in all configurations.', image: IMG.catRigid, to: '/truck-types/rigid-trucks' },
  { title: 'Refrigerated Trucks', text: 'Temperature-controlled vehicles for food and pharmaceutical transport.', image: IMG.catRefrigerated, to: '/truck-types/refrigerated-trucks' },
  { title: 'Tipper Trucks', text: 'Construction and aggregates tipper trucks of all capacities.', image: IMG.catTipper, to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Crane Trucks', text: 'Truck-mounted cranes and specialist lifting vehicles.', image: IMG.catCrane, to: '/truck-types/multilift-hook-lift-trucks' },
  { title: 'Flatbed Trucks', text: 'Platform and flatbed trucks for oversize and general loads.', image: IMG.catFlatbed, to: '/truck-types/3500-kg-light-trucks' },
  { title: 'Tanker Trucks', text: 'Fuel, chemical and liquid tanker vehicles.', image: IMG.catTanker, to: '/truck-types/tanker-trucks' },
  { title: 'Other Commercial', text: 'Other heavy commercial vehicles and specialist equipment.', image: IMG.catOther, to: '/truck-types/parcel-delivery-trucks' },
];

export const BRANDS = ['Mercedes-Benz', 'Scania', 'Volvo', 'DAF', 'MAN', 'IVECO', 'Renault'];

export const RECENT_PURCHASES = [
  { year: '2019', tag: 'Tractor Unit', title: 'R500 Tractor Unit', brand: 'Scania', place: 'Madrid, Spain', image: IMG.buyTractor },
  { year: '2018', tag: 'Tractor Unit', title: 'Actros 1845', brand: 'Mercedes-Benz', place: 'Barcelona, Spain', image: IMG.buyActros },
  { year: '2020', tag: 'Refrigerated', title: 'XF 460 Refrigerated', brand: 'DAF', place: 'Valencia, Spain', image: IMG.buyRefrigerated },
  { year: '2017', tag: 'Tipper Truck', title: 'FH 500 Tipper', brand: 'Volvo', place: 'Sevilla, Spain', image: IMG.buyTipper },
];

/** Default FAQ list used on most pages. */
export const FAQ_DEFAULT: FaqItem[] = [
  {
    q: 'How can I sell my truck as a private owner?',
    a: 'As a private owner, you can sell your truck by requesting a free valuation through our website. Our team will review your truck details and contact you to discuss the next steps of the sale.',
  },
  {
    q: 'What information do I need to request a valuation?',
    a: 'We usually ask for the make, model, registration year, mileage, transmission and body type. Photos of the truck help us give a more accurate valuation.',
  },
  {
    q: 'How is my truck’s value assessed?',
    a: 'Our team reviews the specifications, condition, mileage and current market demand for your type of vehicle to prepare a fair offer.',
  },
  {
    q: 'What documents are needed to sell my truck?',
    a: 'Generally the vehicle registration certificate, technical inspection card and identification of the registered owner. Our team will confirm what applies to your case.',
  },
  {
    q: 'How does payment work?',
    a: 'Once the offer is accepted, we explain the payment terms clearly before proceeding with the transaction and paperwork.',
  },
  {
    q: 'Can you arrange collection of my truck?',
    a: 'Yes. We coordinate collection across Spain at a time and place that suits you.',
  },
];
