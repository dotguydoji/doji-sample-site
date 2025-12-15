import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [price, setPrice] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertyStatus, setPropertyStatus] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would navigate to the properties page with query params
        // For now, it just logs the search criteria
        alert(`Searching for:\nLocation/Name: ${searchTerm}\nType: ${propertyType}\nStatus: ${propertyStatus}\nPrice: ${price}`);
    };

    const selectClasses = "w-full p-3 bg-theme-bg-light text-theme-text-primary rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent";

    return (
        <div className="bg-theme-bg-med/50 backdrop-blur-md p-6 rounded-lg shadow-2xl w-full max-w-6xl mx-auto">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-12 lg:col-span-4">
                    <input
                        type="text"
                        placeholder="Search by Location, City, or Property Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 bg-theme-bg-light text-theme-text-primary rounded-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                </div>
                <div className="md:col-span-6 lg:col-span-2">
                     <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className={selectClasses}
                    >
                        <option value="">Property Type</option>
                        <option value="Studio">Studio</option>
                        <option value="1BR">1 Bedroom</option>
                        <option value="2BR">2 Bedrooms</option>
                        <option value="3BR">3 Bedrooms</option>
                        <option value="Penthouse">Penthouse</option>
                    </select>
                </div>
                 <div className="md:col-span-6 lg:col-span-2">
                     <select
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className={selectClasses}
                    >
                        <option value="">Property Status</option>
                        <option value="Ready for Occupancy">Ready for Occupancy</option>
                        <option value="Pre-selling">Pre-selling</option>
                        <option value="Rent-to-own">Rent-to-own</option>
                    </select>
                </div>
                <div className="md:col-span-6 lg:col-span-2">
                    <select
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={selectClasses}
                    >
                        <option value="">Price Range</option>
                        <option value="0-3m">Below ₱3M</option>
                        <option value="3m-5m">₱3M - ₱5M</option>
                        <option value="5m-10m">₱5M - ₱10M</option>
                        <option value="10m+">Above ₱10M</option>
                    </select>
                </div>
                <div className="md:col-span-6 lg:col-span-2">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center p-3 bg-theme-accent text-theme-text-primary font-bold rounded-md hover:bg-theme-accent-dark transition-colors duration-300"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;