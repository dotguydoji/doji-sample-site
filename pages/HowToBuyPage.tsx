import React, { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon, ChevronUpIcon, BanknotesIcon, KeyIcon, DocumentCheckIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import MortgageCalculator from '../components/MortgageCalculator';
import { pageData } from '../data/pageData';

const HowToBuyPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const { title, subtitle, steps, faqs } = pageData.howToBuy;

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const stepIcons = [
        CursorArrowRaysIcon,
        BanknotesIcon,
        DocumentCheckIcon,
        KeyIcon
    ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{title}</h1>
        <p className="text-lg text-theme-text-secondary mt-2 max-w-3xl mx-auto">{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-16 gap-y-12 items-start">
        {/* Steps Timeline (Left Column) */}
        <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-theme-text-primary mb-8 font-serif">The Buying Process</h2>
            <ol className="relative border-l border-theme-bg-light">                  
                {steps.map((step, index) => {
                    const Icon = stepIcons[index % stepIcons.length];
                    return (
                        <li key={index} className="mb-10 ml-8">            
                            <span className="absolute flex items-center justify-center w-12 h-12 bg-theme-bg-med rounded-full -left-6 ring-4 ring-theme-bg-dark">
                                <Icon className="w-6 h-6 text-theme-accent" />
                            </span>
                            <div className="bg-theme-bg-med p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-theme-text-primary mb-2 font-serif">{`${index + 1}. ${step.title}`}</h3>
                                <p className="text-theme-text-secondary leading-relaxed">{step.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>

        {/* Calculator and FAQs (Right Sticky Column) */}
        <aside className="md:col-span-2 md:sticky md:top-28">
            <MortgageCalculator />

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-theme-text-primary flex items-center justify-center font-serif">
                    <QuestionMarkCircleIcon className="h-8 w-8 mr-3 text-theme-accent"/>
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-theme-bg-med rounded-lg overflow-hidden transition-all duration-300">
                            <h3>
                                <button
                                    onClick={() => toggleFaq(index)}
                                    id={`faq-button-${index}`}
                                    aria-expanded={openFaq === index}
                                    aria-controls={`faq-panel-${index}`}
                                    className="w-full flex justify-between items-center p-5 text-left font-semibold text-theme-text-primary hover:bg-theme-bg-light/50 focus:outline-none focus-visible:ring focus-visible:ring-theme-accent"
                                >
                                    <span className={`transition-colors duration-300 ${openFaq === index ? 'text-theme-accent' : ''}`}>{faq.question}</span>
                                    <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`} />
                                </button>
                            </h3>
                            <div
                                id={`faq-panel-${index}`}
                                role="region"
                                aria-labelledby={`faq-button-${index}`}
                                className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-5 pb-5 pt-0 text-theme-text-secondary">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default HowToBuyPage;
