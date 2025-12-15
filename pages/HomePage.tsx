import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { properties } from '../data/properties';
import { successStories } from '../data/testimonials';
import { pageData } from '../data/pageData';
import { ArrowRightIcon, ChatBubbleBottomCenterTextIcon, HomeModernIcon, BanknotesIcon, UserGroupIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Property } from '../types';

// --- STYLES ---
// Consolidating all custom styles into a single component for better organization and performance.
const PageStyles: React.FC = () => (
    <style>{`
      /* Marquee Animation for Top-Selling Section */
      .scroller {
        max-width: 100%;
        overflow: hidden;
        -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
      }
      .scroller__inner {
        display: flex;
        gap: 1.5rem;
        padding-block: 1rem;
        width: max-content;
        animation: scroll 320s linear infinite;
        will-change: transform; /* Performance hint for the browser */
        overscroll-behavior-x: contain; /* Prevent page scroll on horizontal swipe */
      }
      .scroller:hover .scroller__inner {
        animation-play-state: paused;
      }
      @keyframes scroll {
        to {
          transform: translate(calc(-50% - 0.75rem));
        }
      }
      .scroller__inner .property-card-wrapper {
        width: clamp(280px, 80vw, 384px); /* Responsive card width */
        flex-shrink: 0;
      }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

      /* Background Zoom Animation for Featured Section */
      @keyframes zoom-effect {
        from { transform: scale(1); }
        to { transform: scale(1.05); }
      }
      .animate-zoom {
        animation: zoom-effect 20s forwards;
      }

      /* Carousel Card Animations */
      .carousel-card {
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        transform: scale(0.9);
        opacity: 0.7;
      }
      .carousel-card.is-active {
        transform: scale(1);
        opacity: 1;
      }
      .card-image-animate {
        transition: transform 0.5s ease-in-out;
      }
      .carousel-card:not(.is-active):hover .card-image-animate {
         transform: scale(1.1);
      }
      @keyframes cardImageZoomFadeIn {
        from { transform: scale(1); opacity: 0.8; }
        to { transform: scale(1.1); opacity: 1; }
      }
      .carousel-card.is-active .card-image-animate {
        animation: cardImageZoomFadeIn 20s forwards;
      }

      /* Text fade-in animation */
      @keyframes text-fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-text-fade-in {
        display: inline-block; /* Needed for transform */
        animation: text-fade-in 150ms ease-out forwards;
      }

      /* Accessibility: Respect user preference for reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .scroller__inner,
        .animate-zoom, 
        .carousel-card.is-active .card-image-animate,
        .animate-text-fade-in {
            animation: none;
        }
        .scroller {
            overflow-x: auto; /* Make it a simple scroll container for accessibility */
        }
      }
    `}</style>
);


// --- SECTION COMPONENTS ---

const HeroSection: React.FC = () => {
    const heroBgRef = useRef<HTMLDivElement>(null);
    const { hero } = pageData.home;

    useEffect(() => {
        const handleScroll = () => {
            if (heroBgRef.current) {
                heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" aria-labelledby="hero-title" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <div
                ref={heroBgRef}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')`, backgroundPositionY: 'center' }}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-4 flex flex-col items-center w-full">
                <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-theme-text-primary font-serif">{hero.title}</h1>
                <p className="text-lg md:text-xl max-w-3xl mb-8">{hero.subtitle}</p>
                <SearchBar />
            </div>
        </section>
    );
};

const KeyFeaturesSection: React.FC = () => {
    const { keyFeatures } = pageData.home;
    const icons = [StarIcon, UserGroupIcon, BanknotesIcon, HomeModernIcon];
    const elegantText = '#4B4B4B';
    const elegantAccent = '#B99B6B';

    return (
        <section 
            id="features" 
            aria-labelledby="features-title" 
            className="py-16 sm:py-24"
            style={{ backgroundColor: '#FDFBF5' }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 
                    id="features-title" 
                    className="text-3xl lg:text-4xl font-serif font-bold mb-4"
                    style={{ color: elegantText }}
                >
                    {keyFeatures.title}
                </h2>
                <p 
                    className="text-gray-600 mb-16 max-w-2xl mx-auto"
                >
                    {keyFeatures.subtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {keyFeatures.features.map((feature, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                                <Icon 
                                    className="h-12 w-12 mx-auto mb-5"
                                    style={{ color: elegantAccent }}
                                />
                                <h3 
                                    className="text-xl font-serif font-semibold mb-3"
                                    style={{ color: elegantText }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const TopSellingSection: React.FC = () => {
    const { topSelling } = pageData.home;
    // Duplicate properties for a seamless loop animation
    const loopedProperties = useMemo(() => [...properties, ...properties], []);

    return (
        <section id="top-selling" aria-labelledby="top-selling-title" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 id="top-selling-title" className="text-3xl lg:text-4xl font-bold text-theme-text-primary font-serif">{topSelling.title}</h2>
                    <p className="text-theme-text-secondary">{topSelling.subtitle}</p>
                </div>
            </div>
            <div className="scroller" role="region" aria-label="Top selling properties carousel">
                <div className="scroller__inner">
                    {loopedProperties.map((property, index) => (
                        <div key={`${property.id}-${index}`} className="property-card-wrapper">
                            <PropertyCard property={property} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedPropertiesSection: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);
    const featuredProperties = useMemo(() => properties.filter(p => p.isFeatured), []);
    const [activeIndex, setActiveIndex] = useState(0);
    const { featuredProperties: content } = pageData.home;

    const activeFeaturedProperty = useMemo(() => featuredProperties[activeIndex], [activeIndex, featuredProperties]);
    const carouselProperties = useMemo(() => [...featuredProperties, ...featuredProperties], [featuredProperties]);

    const handleCarouselScroll = useCallback((direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const cardWidth = 300;
            const gap = 24;
            const scrollAmount = cardWidth + gap;
            carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'instant' });
        }
    }, []);

    useEffect(() => {
        const container = carouselRef.current;
        if (!container || featuredProperties.length === 0) return;

        const handleScroll = () => {
            const itemWidth = 300 + 24;
            const newIndex = Math.round(container.scrollLeft / itemWidth);
            setActiveIndex(newIndex % featuredProperties.length);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [featuredProperties.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.5 });
        const currentSection = sectionRef.current;
        if (currentSection) observer.observe(currentSection);
        return () => {
            if (currentSection) observer.unobserve(currentSection);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); handleCarouselScroll('left'); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); handleCarouselScroll('right'); }
        };

        if (isInView) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isInView, handleCarouselScroll]);

    return (
        <section ref={sectionRef} id="featured" aria-labelledby="featured-title" className="relative min-h-screen bg-theme-bg-dark flex items-end justify-center py-20 overflow-hidden">
            {featuredProperties.map(property => (
                <div key={property.id} className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${activeFeaturedProperty?.id === property.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className={`w-full h-full bg-cover bg-center ${activeFeaturedProperty?.id === property.id ? 'animate-zoom' : ''}`}
                        style={{ backgroundImage: `url(${property.images?.[0] || property.imageUrl})` }}
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="text-center lg:text-left" aria-live="polite">
                        <p className="text-theme-text-secondary uppercase tracking-widest text-sm mb-4">{content.overline}</p>
                        <h2 id="featured-title" className="text-4xl md:text-5xl font-bold my-4 text-theme-text-primary leading-tight min-h-[120px] flex items-center justify-center lg:justify-start font-serif">
                           <span key={`title-${activeIndex}`} className="animate-text-fade-in">
                                {activeFeaturedProperty ? activeFeaturedProperty.name : <span dangerouslySetInnerHTML={{ __html: content.title }} />}
                            </span>
                        </h2>
                        <p className="text-theme-text-secondary mb-8 max-w-lg mx-auto lg:mx-0 min-h-[128px]">
                             <span key={`desc-${activeIndex}`} className="animate-text-fade-in">
                                {activeFeaturedProperty ? activeFeaturedProperty.description : content.description}
                            </span>
                        </p>
                        <Link to="/properties" className="inline-flex items-center gap-4 font-semibold group text-theme-text-primary">
                            <span className="flex items-center justify-center h-12 w-12 rounded-full bg-theme-accent text-theme-bg-dark transform transition-transform group-hover:scale-110">
                                <ArrowRightIcon className="h-5 w-5"/>
                            </span>
                            <span className="py-2 border-b-2 border-transparent group-hover:border-theme-text-primary transition-colors">{content.buttonText}</span>
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="relative">
                            <div ref={carouselRef} aria-label="Featured properties carousel" className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 scrollbar-hide px-[calc(50%-150px)] overscroll-x-contain touch-pan-x">
                                {carouselProperties.map((property, index) => (
                                    <div key={`${property.id}-${index}`} className={`flex-shrink-0 w-[300px] snap-center carousel-card ${activeFeaturedProperty?.id === property.id ? 'is-active' : ''}`} role="group" aria-roledescription="slide">
                                        <Link to={`/properties/${property.id}`} aria-label={`View details for ${property.name}`}>
                                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                                                <img src={property.imageUrl} alt={property.name} className="w-full h-full object-cover card-image-animate" loading="lazy" decoding="async"/>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 text-white p-2" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.8)' }}>
                                                    <h3 className="font-bold text-lg font-serif">{property.name}</h3>
                                                    <p className="text-sm opacity-80">{property.location}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                                <button onClick={() => handleCarouselScroll('left')} className="bg-theme-bg-light/80 p-3 rounded-full hover:bg-theme-bg-med transition-colors" aria-label="Previous property">
                                    <ChevronLeftIcon className="h-5 w-5 text-theme-text-primary" />
                                </button>
                                <button onClick={() => handleCarouselScroll('right')} className="bg-theme-bg-light/80 p-3 rounded-full hover:bg-theme-bg-med transition-colors" aria-label="Next property">
                                    <ChevronRightIcon className="h-5 w-5 text-theme-text-primary" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const TestimonialsSection: React.FC = () => {
    const { testimonials } = pageData.home;
    return (
        <section id="testimonials" aria-labelledby="testimonials-title" className="bg-theme-bg-med py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 id="testimonials-title" className="text-3xl lg:text-4xl font-bold text-theme-text-primary font-serif">{testimonials.title}</h2>
                    <p className="text-theme-text-secondary">{testimonials.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {successStories.map(story => (
                        <div key={story.id} className="bg-theme-bg-dark p-8 rounded-lg text-center flex flex-col items-center">
                            <img src={story.imageUrl} alt={story.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-theme-bg-light" loading="lazy" decoding="async"/>
                            <blockquote className="flex flex-col items-center">
                                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-theme-text-secondary mb-4"/>
                                <p className="text-theme-text-secondary italic mb-4">"{story.quote}"</p>
                                <cite className="font-bold text-theme-text-primary not-italic font-serif">{story.name}</cite>
                                <p className="text-sm text-theme-text-secondary">{story.propertyPurchased}</p>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection: React.FC = () => {
    const { cta } = pageData.home;
    return (
        <section id="cta" aria-labelledby="cta-title" className="py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold mb-4 font-serif">{cta.title}</h2>
                <p className="text-theme-text-secondary max-w-xl mx-auto mb-8">{cta.subtitle}</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/contact"><Button variant="primary">{cta.primaryButton}</Button></Link>
                    <Link to="/how-to-buy"><Button variant="secondary">{cta.secondaryButton}</Button></Link>
                </div>
            </div>
        </section>
    );
};


// --- MAIN PAGE COMPONENT ---

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageStyles />
      <HeroSection />
      <KeyFeaturesSection />
      <FeaturedPropertiesSection />
      <TopSellingSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default memo(HomePage);