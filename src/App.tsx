import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import CollectionPage from '@/pages/CollectionPage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import BusinessFleetPage from '@/pages/BusinessFleetPage';
import DocumentsPage from '@/pages/DocumentsPage';
import ValuationPage from '@/pages/ValuationPage';
import MakeModelPage from '@/pages/MakeModelPage';
import PrivateSellersPage from '@/pages/PrivateSellersPage';
import SpecialSellingSituationsPage from '@/pages/SpecialSellingSituationsPage';
import TruckTypesOverviewPage from '@/pages/TruckTypesOverviewPage';
import ConcreteMixerPage from '@/pages/truck-types/ConcreteMixerPage';
import UrgentCraneTruckPage from '@/pages/truck-types/UrgentCraneTruckPage';
import TruckMountedCranePage from '@/pages/truck-types/TruckMountedCranePage';
import TipperCraneTruckPage from '@/pages/truck-types/TipperCraneTruckPage';
import MultiliftPage from '@/pages/truck-types/MultiliftPage';
import ParcelDeliveryPage from '@/pages/truck-types/ParcelDeliveryPage';
import RefrigeratedPage from '@/pages/truck-types/RefrigeratedPage';
import Light3500Page from '@/pages/truck-types/Light3500Page';
import ThankYouPage from '@/pages/ThankYouPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/collection-across-spain" element={<CollectionPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/business-fleet-sales" element={<BusinessFleetPage />} />
        <Route path="/documents-required-to-sell-a-truck" element={<DocumentsPage />} />
        <Route path="/get-a-free-valuation" element={<ValuationPage />} />
        <Route path="/sell-by-make-and-model" element={<MakeModelPage />} />
        <Route path="/private-truck-sellers" element={<PrivateSellersPage />} />
        <Route path="/special-selling-situations" element={<SpecialSellingSituationsPage />} />
        <Route path="/truck-types" element={<TruckTypesOverviewPage />} />

        <Route path="/truck-types/concrete-mixer-trucks" element={<ConcreteMixerPage />} />
        <Route path="/truck-types/urgent-crane-truck-sale" element={<UrgentCraneTruckPage />} />
        <Route path="/truck-types/crane-trucks" element={<UrgentCraneTruckPage />} />
        <Route path="/truck-types/truck-mounted-cranes" element={<TruckMountedCranePage />} />
        <Route path="/truck-types/truck-mounted-crane" element={<TruckMountedCranePage />} />
        <Route path="/truck-types/tipper-trucks-with-crane" element={<TipperCraneTruckPage />} />
        <Route path="/truck-types/tipper-truck-with-crane" element={<TipperCraneTruckPage />} />
        <Route path="/truck-types/multilift-hook-lift-trucks" element={<MultiliftPage />} />
        <Route path="/truck-types/parcel-delivery-trucks" element={<ParcelDeliveryPage />} />
        <Route path="/truck-types/refrigerated-trucks" element={<RefrigeratedPage />} />
        <Route path="/truck-types/3500-kg-light-trucks" element={<Light3500Page />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
