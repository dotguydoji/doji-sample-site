import React from 'react';
import { successStories } from '../data/testimonials';
import { pageData } from '../data/pageData';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsPage: React.FC = () => {
  const content = pageData.successStories;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
        <p className="text-lg text-theme-text-secondary mt-2">{content.subtitle}</p>
      </div>

      <div className="space-y-12">
        {successStories.map((story) => (
          <div key={story.id} className="bg-theme-bg-med p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 text-center">
              <img src={story.imageUrl} alt={story.name} className="w-32 h-32 rounded-full mb-4 border-4 border-theme-bg-light mx-auto" />
              <h3 className="text-xl font-semibold text-theme-text-primary font-serif">{story.name}</h3>
              <p className="text-theme-text-secondary">Purchased at {story.propertyPurchased}</p>
               <div className="flex text-theme-accent justify-center mt-2">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5"/>)}
            </div>
            </div>
            <div className="border-t-2 md:border-t-0 md:border-l-2 border-theme-bg-light pt-6 md:pt-0 md:pl-8">
              <p className="text-theme-text-primary text-2xl font-light italic mb-4 leading-relaxed font-serif">"{story.quote}"</p>
              <p className="text-theme-text-secondary leading-relaxed">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;