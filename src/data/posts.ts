export type PostCategory = 'Tips & Guides' | 'Truck Buying & Selling' | 'Legal & Documentation' | 'Regulations & Low Emission Zones';

export interface Post {
  title: string;
  excerpt: string;
  category: PostCategory;
  image: string;
}

export const POSTS: Post[] = [
  {
    title: 'Low Emission Zones in Seville and Trucks: Restrictions and Sales Guide',
    category: 'Regulations & Low Emission Zones',
    image: '/images/blog01.jpg',
    excerpt: 'The Low Emission Zone (LEZ) in Seville directly focuses on the area of Isla de la Cartuja, affecting access for heavy commercial vehicles.',
  },
  {
    title: 'New Low Emission Zone in Valencia: When Is the Best Time to Sell Your Vehicle?',
    category: 'Regulations & Low Emission Zones',
    image: '/images/blog02.jpg',
    excerpt: 'The progressive implementation of Valencia’s LEZ limits access to goods transport vehicles (N1, N2 and N3) without an environmental sticker.',
  },
  {
    title: 'How to Sell a Boom Crane or Truck Crane Quickly: Valuation and Inspection Guide',
    category: 'Tips & Guides',
    image: '/images/blog03.jpg',
    excerpt: 'To sell a crane truck or boom crane quickly and with maximum financial return, a dual valuation separating chassis from machinery is essential.',
  },
  {
    title: 'Low Emission Zone Restrictions in Barcelona for Trucks: What to Do Without a Sticker?',
    category: 'Regulations & Low Emission Zones',
    image: '/images/blog04.jpg',
    excerpt: 'Low Emission Zone restrictions in Barcelona apply Monday to Friday from 7:00 to 20:00, in the Barcelona ring road area. They directly affect trucks.',
  },
  {
    title: 'Can You Deduct VAT When Buying a Used Truck? Tax Treatment for Self-Employed and Companies',
    category: 'Legal & Documentation',
    image: '/images/blog05.jpg',
    excerpt: 'Yes, it is possible to deduct up to 100% of the VAT on the purchase of a second-hand truck in Spain, provided the buyer is self-employed or a company.',
  },
  {
    title: 'Truck with Cargo: Guide to Seizures by the Tax Office and Banks',
    category: 'Legal & Documentation',
    image: '/images/blog06.jpg',
    excerpt: 'In the economic context of professional road transport in Spain, the liquidity of an SME or self-employed worker can be compromised by multiple financial situations.',
  },
  {
    title: 'Selling a Truck with a Lien in Spain: Legal Guide and Steps',
    category: 'Tips & Guides',
    image: '/images/blog07.jpg',
    excerpt: 'Experiencing a lack of liquidity in the road transport sector is a common problem affecting self-employed individuals and fleet companies in Spain.',
  },
  {
    title: 'How to Value a Used Truck Based on Its Brand',
    category: 'Tips & Guides',
    image: '/images/blog08.jpg',
    excerpt: 'In professional road transport, the choice of manufacturer is not simply aesthetics or comfort — it is a calculation of operating costs per kilometre.',
  },
  {
    title: 'How Many Kilometres Does a Truck Last? Useful Life and Depreciation',
    category: 'Tips & Guides',
    image: '/images/blog09.jpg',
    excerpt: 'In road transport, the odometer of a heavy vehicle tells a story of effort, performance, and above all, economic depreciation over time.',
  },
];

export const CATEGORY_LIST: { name: string; count: number }[] = [
  { name: 'Tips & Guides', count: 4 },
  { name: 'Regulations & Low Emission Zones', count: 3 },
  { name: 'Legal & Documentation', count: 2 },
];
