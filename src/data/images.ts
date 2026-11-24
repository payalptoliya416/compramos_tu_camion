/**
 * All images used by the site. Export your images from Figma and drop them into
 * /public/images using these file names. Missing files automatically show a
 * neutral placeholder, so the layout never breaks.
 */
const p = (name: string) => `/images/${name}`;

export const IMG = {
  logo: p('header-logo.png'),
  logoFooter: p('footer-logo.png'),

  // heroes
  heroBusiness: p('hero-business-fleet.jpg'),
  heroHome: p('home-hero-banner.png'),
  heroHow: p('hero-how-it-works.jpg'),
  heroCollection: p('hero-collection-spain.jpg'),
  heroDocuments: p('hero-documents.jpg'),
  heroValuation: p('hero-valuation.jpg'),
  heroPrivate: p('home-hero-banner.png'),
  heroMake: p('hero-make-model.jpg'),
  heroAbout: p('hero-about.jpg'),
  heroBlog: p('hero-blog.jpg'),
  heroConcrete: p('hero-concrete-mixer.jpg'),
  heroMultilift: p('hero-multilift.jpg'),
  heroParcel: p('hero-parcel-delivery.jpg'),
  heroRefrigerated: p('hero-refrigerated.jpg'),
  hero3500: p('hero-3500kg.jpg'),

  // content
  truckBlueContainer: p('truck-blue-container.jpg'),
  truckRoad: p('truck-road.jpg'),
  warehouseAerial: p('warehouse-aerial.jpg'),
  fleetWhiteRed: p('fleet-white-red.jpg'),
  fleetYellow: p('fleet-yellow.jpg'),
  handshakeTrucks: p('handshake-trucks.jpg'),
  documentsHand: p('documents-hand.jpg'),
  documentsTrucks: p('documents-trucks.jpg'),
  inspectorTruck: p('inspector-truck.jpg'),
  taxPapers: p('tax-papers.jpg'),
  spainMap: p('spain-map.jpg'),
  spainCollection: p('spain-collection.jpg'),
  aboutTeam: p('about-team.jpg'),
  aboutTruck: p('about-truck-blue.jpg'),
  concreteBlue: p('concrete-mixer-blue.jpg'),
  multiliftBlue: p('multilift-blue.jpg'),
  parcelMan: p('parcel-man.jpg'),
  refrigeratedFuso: p('refrigerated-fuso.jpg'),
  light3500: p('light-3500.jpg'),
  brandsRenault: p('brands-renault.jpg'),

  // help cards (home)
  helpFleet: p('help01.png'),
  helpMechanical: p('help02.png'),
  helpInherited: p('help03.png'),

  // categories
  catTractor: p('truck01.png'),
  catRigid: p('truck02.png'),
  catRefrigerated: p('truck03.png'),
  catTipper: p('truck04.png'),
  catCrane: p('truck05.png'),
  catFlatbed: p('truck06.png'),
  catTanker: p('truck07.png'),
  catOther: p('truck08.png'),

  // recent purchases
  buyTractor: p('purchase01.png'),
  buyActros: p('purchase02.png'),
  buyRefrigerated: p('purchase03.png'),
  buyTipper: p('purchase04.png'),

  // popular models
  modelVolvo: p('model-volvo.jpg'),
  modelActros: p('model-actros.jpg'),
  modelScania: p('model-scania.jpg'),
  modelDaf: p('model-daf.jpg'),

  // blog
  blog1: p('blog-1.jpg'),
  blog2: p('blog-2.jpg'),
  blog3: p('blog-3.jpg'),
  blog4: p('blog-4.jpg'),
  blog5: p('blog-5.jpg'),
  blog6: p('blog-6.jpg'),
  blog7: p('blog-7.jpg'),
  blog8: p('blog-8.jpg'),
  blog9: p('blog-9.jpg'),

  // avatars
  avatar1: p('avatar-1.jpg'),
  avatar2: p('avatar-2.jpg'),
  avatar3: p('avatar-3.jpg'),
} as const;
