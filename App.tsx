import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HowToBuyPage = lazy(() => import('./pages/HowToBuyPage'));
const InvestmentPage = lazy(() => import('./pages/InvestmentPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStoriesPage'));
const MarketInsightsPage = lazy(() => import('./pages/MarketInsightsPage'));
const FeaturedPropertiesPage = lazy(() => import('./pages/FeaturedPropertiesPage'));


const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-theme-bg-dark">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-theme-text-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-grow bg-theme-bg-dark">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/featured" element={<FeaturedPropertiesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-to-buy" element={<HowToBuyPage />} />
            <Route path="/investment-roi" element={<InvestmentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/market-insights" element={<MarketInsightsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
