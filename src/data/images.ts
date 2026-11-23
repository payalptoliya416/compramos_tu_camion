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
  heroPrivate: p('hero-private-sellers.jpg'),
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
  helpFleet: p('help-fleet.jpg'),
  helpMechanical: p('help-mechanical.jpg'),
  helpInherited: p('help-inherited.jpg'),

  // categories
  catTractor: p('cat-tractor.jpg'),
  catRigid: p('cat-rigid.jpg'),
  catRefrigerated: p('cat-refrigerated.jpg'),
  catTipper: p('cat-tipper.jpg'),
  catCrane: p('cat-crane.jpg'),
  catFlatbed: p('cat-flatbed.jpg'),
  catTanker: p('cat-tanker.jpg'),
  catOther: p('cat-other.jpg'),

  // recent purchases
  buyTractor: p('buy-tractor.jpg'),
  buyActros: p('buy-actros.jpg'),
  buyRefrigerated: p('buy-refrigerated.jpg'),
  buyTipper: p('buy-tipper.jpg'),

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
