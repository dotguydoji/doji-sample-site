import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { pageData } from '../data/pageData';
import { CalendarIcon, UserIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const LeadMagnet: React.FC = () => {
    const content = pageData.blog.leadMagnet;
    return (
        <div className="bg-theme-bg-med p-8 rounded-lg text-center my-12">
            <DocumentArrowDownIcon className="h-16 w-16 mx-auto mb-4 text-theme-accent"/>
            <h2 className="text-2xl font-bold text-theme-text-primary mb-2 font-serif">{content.title}</h2>
            <p className="text-theme-text-secondary max-w-lg mx-auto mb-6">{content.description}</p>
            <form className="flex justify-center">
                <input type="email" placeholder="Your Email Address" className="w-full max-w-sm p-3 bg-theme-bg-light text-theme-text-primary rounded-l-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent" />
                <button type="submit" className="p-3 bg-theme-accent text-theme-text-primary font-bold rounded-r-md hover:bg-theme-accent-dark transition-colors duration-300">
                    {content.buttonText}
                </button>
            </form>
        </div>
    );
};


const BlogPage: React.FC = () => {
  const content = pageData.blog;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
        <p className="text-lg text-theme-text-secondary mt-2">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-theme-bg-med rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img className="w-full h-56 object-cover" src={post.imageUrl} alt={post.title} loading="lazy" decoding="async" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-theme-text-primary mb-2 font-serif">{post.title}</h2>
              <p className="text-theme-text-secondary mb-4 flex-grow">{post.summary}</p>
              <div className="text-xs text-theme-text-secondary mt-auto pt-4 border-t border-theme-bg-light">
                <div className="flex items-center justify-between">
                    <span className="flex items-center"><UserIcon className="h-4 w-4 mr-1.5"/>{post.author}</span>
                    <span className="flex items-center"><CalendarIcon className="h-4 w-4 mr-1.5"/>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <LeadMagnet />

    </div>
  );
};

export default BlogPage;