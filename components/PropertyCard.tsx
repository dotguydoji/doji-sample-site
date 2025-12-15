import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, BuildingOfficeIcon, BanknotesIcon, ArrowsPointingOutIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onCompareToggle?: (id: number) => void;
  isComparing?: boolean;
  isCompareDisabled?: boolean;
  showDescription?: boolean;
}

// Utility function to generate srcset for picsum photos
const generateSrcSet = (imageUrl: string): string => {
  try {
    const url = new URL(imageUrl);
    if (url.hostname !== 'picsum.photos') return "";

    const parts = url.pathname.split('/');
    if (parts.length < 4) return "";

    const base = `${url.origin}/${parts[1]}/${parts[2]}`;
    const width = parseInt(parts[3], 10);
    const height = parseInt(parts[4], 10);

    if (isNaN(width) || isNaN(height)) return "";

    const aspectRatio = height / width;
    // Common device widths for srcset
    const sizes = [320, 480, 640, 800];

    return sizes
      .filter(size => size <= width)
      .map(size => `${base}/${size}/${Math.round(size * aspectRatio)} ${size}w`)
      .join(', ');
  } catch (error) {
    // Silently fail if URL is not valid, and fallback to src
    return "";
  }
};

// FIX: Made compare-related props optional and conditionally render the compare UI.
const PropertyCard: React.FC<PropertyCardProps> = ({ property, onCompareToggle, isComparing = false, isCompareDisabled = false, showDescription = true }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (onCompareToggle) {
      onCompareToggle(property.id);
    }
  };

  const srcSet = useMemo(() => generateSrcSet(property.imageUrl), [property.imageUrl]);
  
  return (
    <div className="bg-theme-bg-med rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
       <div className="relative">
         <Link to={`/properties/${property.id}`} className="block">
            <img 
                className="w-full h-56 object-cover" 
                src={property.imageUrl} 
                srcSet={srcSet}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                alt={property.name} 
                loading="lazy" 
                decoding="async" 
            />
            <div className="absolute top-0 right-0 bg-theme-accent text-theme-text-primary px-3 py-1 m-2 rounded-md text-sm font-semibold">{property.status}</div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold text-theme-text-primary font-serif">{property.name}</h3>
            </div>
         </Link>
         {onCompareToggle && (
            <div className="absolute top-2 left-2">
                <label htmlFor={`compare-${property.id}`} className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-black/75 transition-colors">
                    <input
                        id={`compare-${property.id}`}
                        type="checkbox"
                        checked={isComparing}
                        onChange={handleCheckboxChange}
                        disabled={isCompareDisabled}
                        className="form-checkbox h-5 w-5 rounded bg-theme-bg-light border-theme-text-secondary text-theme-accent focus:ring-theme-accent disabled:opacity-50"
                    />
                    <span className="text-sm font-semibold">Compare</span>
                </label>
            </div>
        )}
      </div>

      <Link to={`/properties/${property.id}`} className="block">
        <div className="p-6">
          <div className="flex items-center text-theme-text-secondary mb-2">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center text-theme-text-secondary mb-4">
            <BuildingOfficeIcon className="h-5 w-5 mr-2" />
            <span>{property.type} - {property.bedrooms} BR</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
             <div className="flex items-center">
              <BanknotesIcon className="h-5 w-5 mr-2 text-theme-text-primary" />
              <span className="font-semibold text-theme-text-primary">₱{property.price.toLocaleString()}</span>
            </div>
             <div className="flex items-center">
              <ArrowsPointingOutIcon className="h-5 w-5 mr-2 text-theme-text-primary" />
              <span className="font-semibold text-theme-text-primary">{property.size} sqm</span>
            </div>
          </div>
          
          {showDescription && (
            <div className="mt-4 border-t border-theme-bg-light pt-4">
                <p className="text-xs text-theme-text-secondary truncate">{property.description}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default memo(PropertyCard);