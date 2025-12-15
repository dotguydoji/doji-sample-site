import React, { useState, useEffect, useRef } from 'react';
import { locations } from '../data/locations';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { CurrencyDollarIcon, SparklesIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

const LocationsPage: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>(locations[0]?.id || '');
  const locationRefs = useRef<Record<string, HTMLElement | null>>({});
  const observer = useRef<IntersectionObserver | null>(null);

  // Scroll spy effect using IntersectionObserver
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is most visible in the viewport
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .reduce((prev, current) => 
            (prev && prev.intersectionRatio > current.intersectionRatio) ? prev : current, 
            null as IntersectionObserverEntry | null
        );
      
      if (visibleEntry) {
          setActiveLocationId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -50% 0px', // Trigger when the element is in the upper-middle of the screen
      threshold: 0.1,
    });
    
    Object.values(locationRefs.current).forEach(el => {
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    // Stop observing temporarily to prevent flickering active state during scroll
    observer.current?.disconnect();
    
    locationRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setActiveLocationId(id);

    // Re-observe after the smooth scroll is likely finished
    setTimeout(() => {
        Object.values(locationRefs.current).forEach(el => {
            if (el) observer.current?.observe(el);
        });
    }, 1000); // 1-second delay
  };
  
  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    handleNavClick(id);
  };
  
  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleNavClick(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left Sidebar - Scroll Spy Nav (Desktop) */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 self-start md:sticky md:top-28">
          <nav className="p-4 bg-theme-bg-med rounded-lg max-h-[calc(100vh-9rem)] overflow-y-auto" aria-label="Locations">
            <h3 className="font-semibold text-theme-text-primary mb-3 font-serif">Locations</h3>
            <ul className="space-y-2">
              {locations.map(location => (
                <li key={location.id}>
                  <a
                    href={`#${location.id}`}
                    onClick={(e) => handleDesktopNavClick(e, location.id)}
                    aria-current={activeLocationId === location.id ? 'location' : false}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeLocationId === location.id 
                      ? 'bg-theme-accent text-theme-text-primary shadow-md' 
                      : 'text-theme-text-secondary hover:bg-theme-bg-light hover:text-theme-text-primary'
                    }`}
                  >
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
            {/* Sticky Dropdown Nav (Mobile) */}
             <div className="md:hidden sticky top-[76px] z-30 mb-8">
                 <div className="relative bg-theme-bg-med rounded-lg shadow-md">
                     <label htmlFor="location-select" className="sr-only">Select a Location</label>
                     <select
                        id="location-select"
                        value={activeLocationId}
                        onChange={handleMobileNavChange}
                        className="w-full p-4 bg-transparent text-theme-text-primary font-semibold rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent"
                     >
                         {locations.map(location => (
                             <option key={location.id} value={location.id} className="text-theme-elegant-text">
                                 {location.name}
                             </option>
                         ))}
                     </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-theme-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                 </div>
             </div>

          <div className="space-y-16">
            {locations.map(location => {
              const locationProperties = properties.filter(p => location.properties.includes(p.id));
              const titleId = `location-title-${location.id}`;
              return (
                <section
                  key={location.id}
                  id={location.id}
                  ref={el => { locationRefs.current[location.id] = el; }}
                  className="scroll-mt-24"
                  aria-labelledby={titleId}
                >
                  <div className="bg-theme-bg-med p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h2 id={titleId} className="text-3xl font-bold text-theme-text-primary mb-4 font-serif">{location.name}</h2>
                        <p className="text-theme-text-secondary mb-6 leading-relaxed">{location.description}</p>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-start">
                            <SparklesIcon className="h-6 w-6 mr-3 text-theme-accent flex-shrink-0 mt-1"/>
                            <div>
                              <h3 className="font-semibold text-theme-text-primary font-serif">Lifestyle</h3>
                              <p className="text-theme-text-secondary">{location.lifestyle}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CurrencyDollarIcon className="h-6 w-6 mr-3 text-theme-accent flex-shrink-0 mt-1"/>
                            <div>
                              <h3 className="font-semibold text-theme-text-primary font-serif">Average Price</h3>
                              <p className="text-theme-text-secondary">{location.averagePrice}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-64 lg:h-full rounded-lg shadow-md overflow-hidden">
                        <img src={location.imageUrl} alt={`View of ${location.name}`} className="w-full h-full object-cover" loading="lazy" decoding="async"/>
                      </div>
                    </div>

                    <h3 className="font-semibold text-xl text-theme-text-primary mb-4 flex items-center border-t border-theme-bg-light pt-6 font-serif">
                      <BuildingOffice2Icon className="h-6 w-6 mr-3 text-theme-accent"/>
                      Properties in {location.name}
                    </h3>
                    {locationProperties.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {locationProperties.map(property => (
                          <PropertyCard key={property.id} property={property} showDescription={false} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-theme-text-secondary">No properties listed for this area yet.</p>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LocationsPage;