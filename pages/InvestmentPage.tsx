import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowTrendingUpIcon, BuildingLibraryIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { pageData } from '../data/pageData';

const appreciationData = [
  { name: 'Year 1', value: 100 },
  { name: 'Year 2', value: 108 },
  { name: 'Year 3', value: 115 },
  { name: 'Year 4', value: 125 },
  { name: 'Year 5', value: 138 },
];

const rentalYieldData = [
  { name: 'Studio', yield: 7.5 },
  { name: '1BR', yield: 6.8 },
  { name: '2BR', yield: 6.2 },
];

const InvestmentPage: React.FC = () => {
  const content = pageData.investment;
  const whyInvestIcons = [BuildingLibraryIcon, ArrowTrendingUpIcon, PresentationChartLineIcon];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <ArrowTrendingUpIcon className="h-16 w-16 mx-auto mb-4 text-theme-accent" />
        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
        <p className="text-lg text-theme-text-secondary mt-2">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Appreciation Chart */}
        <div className="bg-theme-bg-med p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary font-serif">Property Value Appreciation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appreciationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis dataKey="name" stroke="#F7FAFC" />
              <YAxis stroke="#F7FAFC" />
              <Tooltip contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #2D3748' }} />
              <Legend />
              <Line type="monotone" dataKey="value" name="Property Value Index" stroke="#4299E1" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Rental Yield Chart */}
        <div className="bg-theme-bg-med p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary font-serif">Average Rental Yields by Unit Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rentalYieldData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#F7FAFC" />
                <YAxis stroke="#F7FAFC" unit="%" />
                <Tooltip contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #2D3748' }} />
                <Legend />
                <Bar dataKey="yield" name="Annual Rental Yield" fill="#4299E1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Comparison Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-theme-text-primary font-serif">{content.whyInvest.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyInvest.points.map((point, index) => {
              const Icon = whyInvestIcons[index];
              return (
                <div key={index} className="text-center p-6 bg-theme-bg-dark rounded-lg">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-theme-accent"/>
                    <h3 className="text-xl font-semibold text-theme-text-primary font-serif">{point.title}</h3>
                    <p className="text-theme-text-secondary mt-2">{point.description}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-theme-bg-med p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-theme-text-primary font-serif">{content.cta.title}</h2>
        <p className="text-theme-text-secondary max-w-2xl mx-auto mb-8">
            {content.cta.description}
        </p>
        <Link to="/contact">
            <Button variant="primary">{content.cta.buttonText}</Button>
        </Link>
      </div>

    </div>
  );
};

export default InvestmentPage;