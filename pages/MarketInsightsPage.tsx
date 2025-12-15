import React from 'react';
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { priceTrendsData, rentalYieldsData, neighborhoodComparisonData } from '../data/marketData';
import { pageData } from '../data/pageData';
import { PresentationChartLineIcon, BanknotesIcon, MapIcon } from '@heroicons/react/24/outline';

const MarketInsightsPage: React.FC = () => {
  const content = pageData.marketInsights;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <PresentationChartLineIcon className="h-16 w-16 mx-auto mb-4 text-theme-accent" />
        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
        <p className="text-lg text-theme-text-secondary mt-2">{content.subtitle}</p>
      </div>

      <div className="space-y-16">
        {/* Price Trends */}
        <div className="bg-theme-bg-med p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary flex items-center font-serif"><PresentationChartLineIcon className="h-8 w-8 mr-3 text-theme-accent"/>Historical Price Trends (Per SQM)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={priceTrendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis dataKey="name" stroke="#F7FAFC" />
              <YAxis stroke="#F7FAFC" tickFormatter={(value) => `₱${(value as number / 1000)}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #2D3748' }} formatter={(value) => `₱${(value as number).toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="Makati City" stroke="#4299E1" strokeWidth={2} />
              <Line type="monotone" dataKey="Taguig City" stroke="#ED8936" strokeWidth={2} />
              <Line type="monotone" dataKey="Pasig City" stroke="#ECC94B" strokeWidth={2} />
              <Line type="monotone" dataKey="Mandaluyong City" stroke="#48BB78" strokeWidth={2} />
              <Line type="monotone" dataKey="Pasay City" stroke="#38B2AC" strokeWidth={2} />
              <Line type="monotone" dataKey="Quezon City" stroke="#F7FAFC" strokeWidth={2} />
              <Line type="monotone" dataKey="Manila" stroke="#A0AEC0" strokeWidth={2} />
              <Line type="monotone" dataKey="Las Piñas" stroke="#9F7AEA" strokeWidth={2} />
              <Line type="monotone" dataKey="Caloocan City" stroke="#F56565" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Rental Yields */}
        <div className="bg-theme-bg-med p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary flex items-center font-serif"><BanknotesIcon className="h-8 w-8 mr-3 text-theme-accent"/>Average Annual Rental Yields</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={rentalYieldsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#F7FAFC" />
                <YAxis stroke="#F7FAFC" unit="%" />
                <Tooltip contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #2D3748' }} />
                <Legend />
                <Bar dataKey="yield" name="Annual Rental Yield" fill="#4299E1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Neighborhood Comparison */}
        <div className="bg-theme-bg-med p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary flex items-center font-serif"><MapIcon className="h-8 w-8 mr-3 text-theme-accent"/>Neighborhood Comparison</h2>
          <p className="text-theme-text-secondary mb-6 -mt-4 text-sm">Comparison based on Price/SQM, Lifestyle, and Amenities (rated 1-10).</p>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={neighborhoodComparisonData}>
                <PolarGrid stroke="#2D3748" />
                <PolarAngleAxis dataKey="neighborhood" stroke="#F7FAFC" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #2D3748' }} />
                <Legend />
                <Radar name="Lifestyle" dataKey="Lifestyle" stroke="#4299E1" fill="#4299E1" fillOpacity={0.6} />
                {/* FIX: Removed duplicate `dataKey` attribute from the Radar component. */}
                <Radar name="Amenities" dataKey="Amenities" stroke="#F7FAFC" fill="#F7FAFC" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsPage;