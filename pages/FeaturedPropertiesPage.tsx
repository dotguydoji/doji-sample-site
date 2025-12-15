import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { pageData } from '../data/pageData';
import { ArrowRightIcon, MapPinIcon, BanknotesIcon, BuildingOfficeIcon, ArrowsPointingOutIcon, BuildingStorefrontIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const FeaturedPropertiesPage: React.FC = () => {
    const featured = properties.filter(p => p.isFeatured);
    const content = pageData.featuredProperties;
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const offset = window.pageYOffset;
                heroRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (featured.length === 0) {
        return (
            <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-theme-elegant-bg text-theme-elegant-text">
                <p>No featured condotel properties are available at this time.</p>
            </div>
        );
    }

    const heroProperty = featured[0];

    return (
        <div className="bg-theme-elegant-bg text-theme-elegant-text">
            {/* Hero Section */}
            <section 
                className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
                aria-labelledby="condotel-hero-title"
            >
                <div
                    ref={heroRef}
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: `url(${heroProperty.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-4">
                    <h1 id="condotel-hero-title" className="text-4xl md:text-6xl font-serif tracking-wide">{content.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light">
                        {content.subtitle}
                    </p>
                </div>
            </section>

            {/* Properties Sections */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-20">
                    {featured.map((property, index) => (
                        <article 
                            key={property.id} 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
                            aria-labelledby={`property-title-${property.id}`}
                        >
                            {/* Image Section */}
                            <div className={`overflow-hidden rounded-lg shadow-lg ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <Link to={`/properties/${property.id}`} aria-label={`View details for ${property.name}`}>
                                    <img 
                                        src={property.imageUrl} 
                                        alt={property.name} 
                                        className="w-full h-80 md:h-96 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </Link>
                            </div>

                            {/* Details Section */}
                            <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="flex items-center text-sm uppercase tracking-wider text-theme-elegant-accent">
                                    <MapPinIcon className="h-4 w-4 mr-2" />
                                    <span>{property.location}</span>
                                </div>
                                <h2 id={`property-title-${property.id}`} className="text-3xl md:text-4xl font-serif text-theme-elegant-text mt-2 mb-4">{property.name}</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {property.description.substring(0, 150)}...
                                </p>
                                
                                <div className="grid grid-cols-3 gap-4 text-center border-t border-b border-gray-200 py-4 mb-6">
                                    <div>
                                        <BanknotesIcon className="h-6 w-6 mx-auto mb-1 text-theme-elegant-accent"/>
                                        <span className="block text-sm font-semibold text-gray-700">₱{property.price.toLocaleString()}</span>
                                        <span className="text-xs text-gray-500">Starting Price</span>
                                    </div>
                                    <div>
                                        <BuildingOfficeIcon className="h-6 w-6 mx-auto mb-1 text-theme-elegant-accent"/>
                                        <span className="block text-sm font-semibold text-gray-700">{property.type}</span>
                                        <span className="text-xs text-gray-500">Unit Type</span>
                                    </div>
                                    <div>
                                        <ArrowsPointingOutIcon className="h-6 w-6 mx-auto mb-1 text-theme-elegant-accent"/>
                                        <span className="block text-sm font-semibold text-gray-700">{property.size} sqm</span>
                                        <span className="text-xs text-gray-500">Area</span>
                                    </div>
                                </div>

                                <Link to={`/properties/${property.id}`} className="group inline-flex items-center font-semibold text-theme-elegant-accent transition-colors hover:text-theme-elegant-text">
                                    Explore Property
                                    <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <section className="bg-white py-16 md:py-24" aria-labelledby="cta-title">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 id="cta-title" className="text-3xl font-serif text-theme-elegant-text">Explore More Opportunities</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
                        Your ideal property is waiting. Browse our full collection of listings or contact us for a personalized consultation.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link to="/properties">
                            <Button variant="secondary" className="w-full sm:w-auto bg-theme-elegant-text text-white hover:bg-black">
                                <BuildingStorefrontIcon className="h-5 w-5 mr-2 inline" />
                                View All Properties
                            </Button>
                        </Link>
                         <Link to="/contact">
                            <Button variant="outline" className="w-full sm:w-auto border-theme-elegant-accent text-theme-elegant-accent hover:bg-theme-elegant-accent hover:text-white">
                                <PhoneIcon className="h-5 w-5 mr-2 inline" />
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedPropertiesPage;