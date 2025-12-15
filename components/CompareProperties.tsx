import React from 'react';
import { properties } from '../data/properties';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Property } from '../types';

interface ComparePropertiesProps {
    propertyIds: number[];
    onClose: () => void;
    onRemove: (id: number) => void;
}

const CompareProperties: React.FC<ComparePropertiesProps> = ({ propertyIds, onClose, onRemove }) => {
    const propertiesToCompare = properties.filter(p => propertyIds.includes(p.id));

    // FIX: Add `as const` to provide a more specific type to TypeScript, ensuring that `prop[feature.key]` is a renderable type.
    const features = [
        { key: 'imageUrl', label: 'Image' },
        { key: 'name', label: 'Name' },
        { key: 'price', label: 'Price' },
        { key: 'size', label: 'Size (sqm)' },
        { key: 'bedrooms', label: 'Bedrooms' },
        { key: 'bathrooms', label: 'Bathrooms' },
        { key: 'location', label: 'Location' },
        { key: 'status', label: 'Status' },
        { key: 'turnoverYear', label: 'Turnover Year' }
    ] as const;

    const getPropertyValue = (prop: Property, feature: typeof features[number]) => {
        const value = prop[feature.key];
        switch(feature.key) {
            case 'imageUrl':
                return <img src={prop.imageUrl} alt={prop.name} className="w-full h-32 object-cover rounded-md" />;
            case 'price':
                return `₱${(value as number).toLocaleString()}`;
            default:
                return value;
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-theme-bg-dark rounded-lg shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-theme-bg-light flex-shrink-0">
                    <h2 className="text-2xl font-bold text-theme-text-primary font-serif">Compare Properties</h2>
                    <button onClick={onClose} className="text-theme-text-secondary hover:text-theme-text-primary">
                        <XMarkIcon className="h-8 w-8" />
                    </button>
                </div>
                {/* This wrapper enables horizontal scrolling on smaller screens */}
                <div className="flex-grow overflow-auto">
                    <table className="w-full text-left border-collapse">
                        {/* Thead is sticky to stay visible during vertical scroll */}
                        <thead className="sticky top-0 bg-theme-bg-dark z-10">
                            <tr>
                                {/* The first header is also sticky to the left for horizontal scroll */}
                                <th className="sticky left-0 bg-theme-bg-dark p-4 font-semibold text-theme-text-primary w-48">Feature</th>
                                {propertiesToCompare.map(prop => (
                                    // Set a min-width on property columns to prevent them from squishing
                                    <th key={prop.id} className="p-4 border-l border-theme-bg-light relative min-w-[280px]">
                                        <button onClick={() => onRemove(prop.id)} className="absolute top-2 right-2 p-1 bg-red-500/50 rounded-full text-white hover:bg-red-500 z-20">
                                           <XMarkIcon className="h-4 w-4" />
                                        </button>
                                        {prop.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-theme-bg-light">
                            {features.map(feature => (
                                <tr key={feature.key}>
                                    {/* The first cell in each row is sticky to the left */}
                                    <td className="sticky left-0 bg-theme-bg-dark p-4 font-semibold text-theme-text-primary align-top">{feature.label}</td>
                                    {propertiesToCompare.map(prop => (
                                        <td key={prop.id} className="p-4 border-l border-theme-bg-light align-top">
                                            {getPropertyValue(prop, feature)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompareProperties;