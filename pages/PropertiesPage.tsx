import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropertyCard from '../components/PropertyCard';
import RecentlyViewed from '../components/RecentlyViewed';
import CompareProperties from '../components/CompareProperties';
import Button from '../components/Button';
import { properties } from '../data/properties';
import { pageData } from '../data/pageData';
import { Property } from '../types';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const MAX_COMPARE = 4;

const NoResults: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <div className="text-center col-span-full py-16">
        <MagnifyingGlassIcon className="mx-auto h-16 w-16 text-theme-text-secondary" />
        <h3 className="mt-4 text-2xl font-semibold text-theme-text-primary">No Properties Found</h3>
        <p className="mt-2 text-theme-text-secondary">Try adjusting your search or filters to find what you're looking for.</p>
        <Button variant="secondary" onClick={onReset} className="mt-6">
            Reset All Filters
        </Button>
    </div>
);

const FilterPanel: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    filters: any;
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onApply: () => void;
    onReset: () => void;
    uniqueCities: string[];
}> = ({ isOpen, onClose, filters, onFilterChange, onApply, onReset, uniqueCities }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const selectClasses = "w-full p-3 bg-theme-bg-light text-theme-text-primary rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent";

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-fadeIn" role="dialog" aria-modal="true" onClick={onClose}>
            <div className="bg-theme-bg-dark h-full w-full max-w-md ml-auto flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b border-theme-bg-light">
                    <h2 className="text-xl font-semibold text-theme-text-primary">Filters</h2>
                    <button onClick={onClose} aria-label="Close filters">
                        <XMarkIcon className="h-6 w-6 text-theme-text-secondary" />
                    </button>
                </div>
                <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                    <div>
                        <label htmlFor="location-filter-modal" className="text-sm font-medium text-theme-text-secondary mb-1 block">Location</label>
                        <select id="location-filter-modal" name="location" value={filters.location} onChange={onFilterChange} className={selectClasses}>
                            <option value="All">All Locations</option>
                            {uniqueCities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="price-filter-modal" className="text-sm font-medium text-theme-text-secondary mb-1 block">Price Range</label>
                        <select id="price-filter-modal" name="price" value={filters.price} onChange={onFilterChange} className={selectClasses}>
                            <option value="All">All Prices</option>
                            <option value="0-3000000">Below ₱3M</option>
                            <option value="3000000-8000000">₱3M - ₱8M</option>
                            <option value="8000000-15000000">₱8M - ₱15M</option>
                            <option value="15000000-Infinity">Above ₱15M</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="size-filter-modal" className="text-sm font-medium text-theme-text-secondary mb-1 block">Unit Size</label>
                        <select id="size-filter-modal" name="size" value={filters.size} onChange={onFilterChange} className={selectClasses}>
                            <option value="All">All Sizes</option>
                            <option value="Studio">Studio</option>
                            <option value="1BR">1 Bedroom</option>
                            <option value="2BR">2 Bedrooms</option>
                            <option value="3BR+">3+ Bedrooms</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="status-filter-modal" className="text-sm font-medium text-theme-text-secondary mb-1 block">Status</label>
                        <select id="status-filter-modal" name="status" value={filters.status} onChange={onFilterChange} className={selectClasses}>
                            <option value="All">All Status</option>
                            <option value="Ready for Occupancy">Ready for Occupancy</option>
                            <option value="Pre-selling">Pre-selling</option>
                            <option value="Rent-to-own">Rent-to-own</option>
                        </select>
                    </div>
                </div>
                <div className="p-4 border-t border-theme-bg-light grid grid-cols-2 gap-4">
                    <Button variant="secondary" onClick={onReset}>Reset</Button>
                    <Button variant="primary" onClick={onApply}>Apply Filters</Button>
                </div>
            </div>
        </div>
    );
};

const PropertiesPage: React.FC = () => {
    const initialFilters = { location: 'All', price: 'All', size: 'All', status: 'All' };
    const [filters, setFilters] = useState(initialFilters);
    const [tempFilters, setTempFilters] = useState(initialFilters);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [compareList, setCompareList] = useState<number[]>([]);
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    
    const content = pageData.properties;

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);
    
    useEffect(() => {
        if (isFiltersOpen) {
            setTempFilters(filters);
        }
    }, [isFiltersOpen, filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };
    
     const handleTempFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTempFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
        setFilters(tempFilters);
        setIsFiltersOpen(false);
    };

    const handleResetFilters = () => {
        setFilters(initialFilters);
        setTempFilters(initialFilters);
        setSearchTerm('');
        setSortBy('newest');
    };

    const handleToggleCompare = (id: number) => {
        setCompareList(prev => {
            if (prev.includes(id)) return prev.filter(item => item !== id);
            if (prev.length < MAX_COMPARE) return [...prev, id];
            alert(`You can only compare a maximum of ${MAX_COMPARE} properties.`);
            return prev;
        });
    };

    const filteredAndSortedProperties = useMemo(() => {
        let filtered = properties.filter(property => {
            const searchLower = debouncedSearchTerm.toLowerCase();
            if (debouncedSearchTerm && !property.name.toLowerCase().includes(searchLower) && !property.location.toLowerCase().includes(searchLower)) {
                return false;
            }
            if (filters.location !== 'All' && property.city !== filters.location) return false;
            if (filters.status !== 'All' && property.status !== filters.status) return false;
            if (filters.price !== 'All') {
                const [min, maxStr] = filters.price.split('-');
                const minPrice = Number(min);
                const maxPrice = maxStr === 'Infinity' ? Infinity : Number(maxStr);
                if (property.price < minPrice || (maxPrice !== Infinity && property.price > maxPrice)) return false;
            }
            if (filters.size !== 'All') {
                switch(filters.size){
                    case 'Studio': if(property.type !== 'Studio') return false; break;
                    case '1BR': if(property.type !== '1BR') return false; break;
                    case '2BR': if(property.type !== '2BR') return false; break;
                    case '3BR+': if(!['3BR', 'Penthouse'].includes(property.type)) return false; break;
                }
            }
            return true;
        });

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price_asc': return a.price - b.price;
                case 'price_desc': return b.price - a.price;
                case 'newest': return b.turnoverYear - a.turnoverYear;
                default: return 0;
            }
        });
    }, [filters, sortBy, debouncedSearchTerm]);

    const uniqueCities = useMemo(() => [...new Set(properties.map(p => p.city))], []);
    
    const activeFilterCount = useMemo(() => {
        return Object.values(filters).filter(value => value !== 'All').length;
    }, [filters]);

    const selectClasses = "w-full p-2 bg-theme-bg-light text-theme-text-primary rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent";

    return (
        <div className="animate-fadeIn">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
                    <p className="text-lg text-theme-text-secondary mt-2">{content.subtitle}</p>
                </div>
                
                <RecentlyViewed />

                {/* --- Responsive Filter Bar --- */}
                <div className="bg-theme-bg-med p-4 rounded-lg mb-8 sticky top-[80px] z-40 shadow-lg">
                     {/* Mobile & Tablet View (< 1024px) */}
                    <div className="lg:hidden flex gap-2 items-center">
                        <div className="relative flex-grow">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-theme-text-secondary"/>
                            <input
                                type="text"
                                aria-label="Search by name or location"
                                placeholder="Search..."
                                className="w-full p-2 pl-10 bg-theme-bg-light text-theme-text-primary rounded-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button onClick={() => setIsFiltersOpen(true)} className="flex items-center gap-2 p-2 bg-theme-bg-light rounded-md text-theme-text-primary relative">
                            <AdjustmentsHorizontalIcon className="h-5 w-5"/>
                            <span className="hidden sm:inline">Filters</span>
                             {activeFilterCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-theme-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {activeFilterCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Desktop View (>= 1024px) */}
                    <div className="hidden lg:grid grid-cols-6 gap-4">
                        <input
                            type="text"
                            aria-label="Search by name or location"
                            placeholder="Search by name..."
                            className="w-full p-2 bg-theme-bg-light text-theme-text-primary rounded-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent col-span-2"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <select aria-label="Filter by location" name="location" value={filters.location} onChange={handleFilterChange} className={selectClasses}>
                            <option value="All">All Locations</option>
                            {uniqueCities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        <select aria-label="Filter by price" name="price" value={filters.price} onChange={handleFilterChange} className={selectClasses}>
                            <option value="All">All Prices</option>
                            <option value="0-3000000">Below ₱3M</option>
                            <option value="3000000-8000000">₱3M - ₱8M</option>
                            <option value="8000000-15000000">₱8M - ₱15M</option>
                            <option value="15000000-Infinity">Above ₱15M</option>
                        </select>
                        <select aria-label="Filter by size" name="size" value={filters.size} onChange={handleFilterChange} className={selectClasses}>
                            <option value="All">All Sizes</option>
                            <option value="Studio">Studio</option>
                            <option value="1BR">1 Bedroom</option>
                            <option value="2BR">2 Bedrooms</option>
                            <option value="3BR+">3+ Bedrooms</option>
                        </select>
                         <select aria-label="Filter by status" name="status" value={filters.status} onChange={handleFilterChange} className={selectClasses}>
                            <option value="All">All Status</option>
                            <option value="Ready for Occupancy">Ready for Occupancy</option>
                            <option value="Pre-selling">Pre-selling</option>
                            <option value="Rent-to-own">Rent-to-own</option>
                        </select>
                    </div>
                    
                    {/* Common Sort and Reset for all screen sizes */}
                    <div className="mt-4 flex flex-wrap justify-end items-center gap-4">
                        <Button variant="secondary" onClick={handleResetFilters} className="text-sm px-3 py-1.5">
                            Reset
                        </Button>
                        <div className="flex items-center">
                            <label htmlFor="sortBy" className="text-theme-text-secondary mr-2 text-sm">Sort by:</label>
                            <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 text-sm bg-theme-bg-light text-theme-text-primary rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent">
                                <option value="newest">Newest</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSortedProperties.length > 0 ? (
                        filteredAndSortedProperties.map(property => (
                            <PropertyCard 
                                key={property.id} 
                                property={property} 
                                onCompareToggle={handleToggleCompare}
                                isComparing={compareList.includes(property.id)}
                                isCompareDisabled={compareList.length >= MAX_COMPARE && !compareList.includes(property.id)}
                            />
                        ))
                    ) : (
                        <NoResults onReset={handleResetFilters} />
                    )}
                </div>
            </div>

            {/* --- Modals and Floating UI --- */}
            <FilterPanel 
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                filters={tempFilters}
                onFilterChange={handleTempFilterChange}
                onApply={handleApplyFilters}
                onReset={() => {
                    handleResetFilters();
                    setIsFiltersOpen(false);
                }}
                uniqueCities={uniqueCities}
            />
            {compareList.length > 1 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 z-50">
                    <Button variant="primary" onClick={() => setShowCompareModal(true)} className="shadow-2xl">
                        Compare ({compareList.length}) Properties
                    </Button>
                </div>
            )}
            {showCompareModal && (
                <CompareProperties 
                    propertyIds={compareList} 
                    onClose={() => setShowCompareModal(false)}
                    onRemove={handleToggleCompare}
                />
            )}
        </div>
    );
};

export default PropertiesPage;
