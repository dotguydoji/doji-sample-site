import React from 'react';
import { TrophyIcon, EyeIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { COMPANY_NAME } from '../constants';
import { pageData } from '../data/pageData';

const AboutPage: React.FC = () => {
  const { about: content } = pageData;
  const coreValueIcons = [EyeIcon, RocketLaunchIcon, TrophyIcon];
  
  return (
    <div className="bg-theme-bg-dark text-theme-text-primary animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/about-hero/1920/1080')` }}
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
          <h1 id="about-hero-title" className="text-4xl md:text-5xl font-serif font-bold tracking-wide">{content.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Our Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-24" aria-labelledby="our-story-title">
            <div className="lg:col-span-3">
                <h2 id="our-story-title" className="text-3xl font-bold font-serif text-theme-text-primary mb-4">{content.companySection.title}</h2>
                <p className="text-theme-text-secondary leading-relaxed">
                  {content.companySection.description.replace('{COMPANY_NAME}', COMPANY_NAME)}
                </p>
            </div>
            <div className="lg:col-span-2">
                <img 
                    src="https://picsum.photos/seed/office/600/400" 
                    alt="Modern office building" 
                    className="rounded-lg shadow-2xl object-cover w-full h-full" 
                    loading="lazy" 
                    decoding="async" 
                />
            </div>
        </section>


        {/* Core Values Section */}
        <section className="mb-24" aria-labelledby="core-values-title">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="core-values-title" className="text-3xl font-bold font-serif text-theme-text-primary mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {content.missionVision.map((item, index) => {
              const Icon = coreValueIcons[index];
              return (
                <div key={index} className="bg-theme-bg-med p-8 rounded-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-theme-accent" />
                  <h3 className="text-xl font-semibold mb-2 text-theme-text-primary font-serif">{item.title}</h3>
                  <p className="text-theme-text-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Meet Your Associate Section */}
        <section className="bg-theme-bg-med rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-24" aria-labelledby="associate-title">
          <img src="https://picsum.photos/seed/agent/150/150" alt="Real Estate Associate" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-theme-bg-light object-cover flex-shrink-0" loading="lazy" decoding="async" />
          <div>
            <h2 id="associate-title" className="text-2xl font-semibold text-theme-text-primary mb-2 font-serif">{content.associateSection.title}</h2>
            <p className="text-theme-text-secondary leading-relaxed">
              {content.associateSection.description.replace(/{COMPANY_NAME}/g, COMPANY_NAME)}
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-choose-us-title">
            <div className="text-center mb-12">
                <h2 id="why-choose-us-title" className="text-3xl font-bold font-serif text-theme-text-primary mb-4">{content.authoritySection.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.authoritySection.badges.map((badge, index) => (
                    <div key={index} className="bg-theme-bg-med p-6 rounded-lg text-center flex flex-col items-center">
                        <ShieldCheckIcon className="h-10 w-10 text-theme-accent mb-3"/>
                        <h3 className="font-semibold text-theme-text-primary">{badge.line1}</h3>
                        <p className="text-sm text-theme-text-secondary">{badge.line2}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
