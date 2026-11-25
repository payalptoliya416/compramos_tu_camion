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
import TankerTruckPage from '@/pages/truck-types/TankerTruckPage';
import RigidTractorTruckPage from '@/pages/truck-types/RigidTractorTruckPage';
import UrgentCraneTruckPage from '@/pages/truck-types/UrgentCraneTruckPage';
import TruckMountedCranePage from '@/pages/truck-types/TruckMountedCranePage';
import TipperCraneTruckPage from '@/pages/truck-types/TipperCraneTruckPage';
import UsedDumpTruckPage from '@/pages/truck-types/UsedDumpTruckPage';
import MultiliftPage from '@/pages/truck-types/MultiliftPage';
import ParcelDeliveryPage from '@/pages/truck-types/ParcelDeliveryPage';
import RefrigeratedPage from '@/pages/truck-types/RefrigeratedPage';
import TaulinerPage from '@/pages/truck-types/TaulinerPage';
import Light3500Page from '@/pages/truck-types/Light3500Page';
import ThankYouPage from '@/pages/ThankYouPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/private-truck-sellers" element={<PrivateSellersPage />} />
        <Route path="/business-fleet-sales" element={<BusinessFleetPage />} />
        <Route path="/special-selling-situations" element={<SpecialSellingSituationsPage />} />
        <Route path="/sell-by-make-and-model" element={<MakeModelPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/collection-across-spain" element={<CollectionPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/documents-required-to-sell-a-truck" element={<DocumentsPage />} />
        <Route path="/get-a-free-valuation" element={<ValuationPage />} />
        <Route path="/truck-types" element={<TruckTypesOverviewPage />} />

        <Route path="/truck-types/urgent-crane-truck-sale" element={<UrgentCraneTruckPage />} />
        <Route path="/truck-types/truck-mounted-cranes" element={<TruckMountedCranePage />} />
        <Route path="/truck-types/tipper-trucks-with-crane" element={<TipperCraneTruckPage />} />
        <Route path="/truck-types/3500-kg-light-trucks" element={<Light3500Page />} />

        <Route path="/truck-types/used-dump-trucks" element={<UsedDumpTruckPage />} />
        <Route path="/truck-types/multilift-hook-lift-trucks" element={<MultiliftPage />} />
        <Route path="/truck-types/concrete-mixer-trucks" element={<ConcreteMixerPage />} />
        <Route path="/truck-types/tanker-trucks" element={<TankerTruckPage />} />

        <Route path="/truck-types/tractor-units" element={<RigidTractorTruckPage />} />
        <Route path="/truck-types/refrigerated-trucks" element={<RefrigeratedPage />} />
        <Route path="/truck-types/tauliner-and-curtainsider-trucks" element={<TaulinerPage />} />

        <Route path="/truck-types/parcel-delivery-trucks" element={<ParcelDeliveryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
