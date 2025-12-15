import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { Property } from '../types';
import { EyeIcon } from '@heroicons/react/24/outline';

const RecentlyViewed: React.FC = () => {
    const [viewedProperties, setViewedProperties] = useState<Property[]>([]);

    useEffect(() => {
        const viewedIds: number[] = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        if (viewedIds.length > 0) {
            const fullProperties = viewedIds.map(id => properties.find(p => p.id === id)).filter(p => p) as Property[];
            setViewedProperties(fullProperties);
        }
    }, []);

    if (viewedProperties.length === 0) {
        return null;
    }

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-theme-text-primary mb-4 flex items-center font-serif">
                <EyeIcon className="h-6 w-6 mr-3 text-theme-accent"/>
                Recently Viewed Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {viewedProperties.map(property => (
                    <Link to={`/properties/${property.id}`} key={property.id} className="bg-theme-bg-med rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center">
                            <img src={property.imageUrl} alt={property.name} className="w-24 h-24 object-cover" loading="lazy" decoding="async"/>
                            <div className="p-4">
                                <h3 className="font-semibold text-theme-text-primary group-hover:text-white truncate font-serif">{property.name}</h3>
                                <p className="text-sm text-theme-text-secondary">{property.location}</p>
                                <p className="text-sm font-bold text-theme-text-primary mt-1">₱{property.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default memo(RecentlyViewed);