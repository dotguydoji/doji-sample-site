

import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { locations } from '../data/locations';
import { Property } from '../types';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import { MapPinIcon, BanknotesIcon, ArrowsPointingOutIcon, BuildingOfficeIcon, CheckCircleIcon, InformationCircleIcon, PhoneIcon, EnvelopeIcon, VideoCameraIcon, PhotoIcon, LinkIcon, AcademicCapIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { generatePropertyMeta, setMetaTags } from '../logic/metaTags';

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
    // More sizes for the larger detail image
    const sizes = [400, 600, 800, 1200, 1600];

    return sizes
      .filter(size => size <= width)
      .map(size => `${base}/${size}/${Math.round(size * aspectRatio)} ${size}w`)
      .join(', ');
  } catch (error) {
    // Silently fail if URL is not valid, and fallback to src
    return "";
  }
};


const PropertyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const property = properties.find(p => p.id === parseInt(id || ''));

    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryStartIndex, setGalleryStartIndex] = useState(0);

    const openGallery = (images: string[], startIndex: number) => {
        setGalleryImages(images);
        setGalleryStartIndex(startIndex);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
    };

    useEffect(() => {
        if (property) {
            // Update recently viewed
            const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
            const updatedViewed = [property.id, ...viewed.filter((vid: number) => vid !== property.id)].slice(0, 4);
            localStorage.setItem('recentlyViewed', JSON.stringify(updatedViewed));

            // Generate and set meta tags
            const meta = generatePropertyMeta(property);
            setMetaTags(meta);
        }
        
        // Cleanup function to reset meta tags when leaving the page
        return () => {
            setMetaTags({
                title: 'Company D Real Estate',
                description: "A modern, property-focused real estate website for an associate of 'Company D', showcasing condominiums and units for sale to a diverse range of buyers."
            });
        };
    }, [property]);
    
    const locationData = property ? locations.find(loc => loc.name.includes(property.city)) : null;

    if (!property) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="text-3xl font-bold font-serif">Property not found.</h1>
                <Link to="/properties"><Button variant="primary" className="mt-4">Back to Listings</Button></Link>
            </div>
        );
    }

    const allPropertyImages = [property.imageUrl, ...property.images];
    const mainImageSrcSet = useMemo(() => generateSrcSet(allPropertyImages[0]), [allPropertyImages]);

    const formatPrice = (price: number) => {
        if (price >= 1000000) {
            return `P${(price / 1000000).toFixed(1)}M`;
        }
        return `P${price.toLocaleString()}`;
    };

    const priceRange = property.priceMax 
        ? `${formatPrice(property.price)} - ${formatPrice(property.priceMax)}`
        : formatPrice(property.price);
        
    const turnoverDateText = property.status === 'Ready for Occupancy' ? property.status : `Ready by ${property.turnoverYear}`;

    return (
        <>
            {isGalleryOpen && <ImageGallery images={galleryImages} startIndex={galleryStartIndex} onClose={closeGallery} />}
            <div className="bg-theme-bg-med">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{property.name}</h1>
                        <div className="flex items-center text-theme-text-secondary mt-2">
                            <MapPinIcon className="h-5 w-5 mr-2" />
                            <span>{property.location}</span>
                        </div>
                    </div>

                    {/* Gallery & Main Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                             {/* Main Image */}
                            <div className="relative group cursor-pointer" onClick={() => openGallery(allPropertyImages, 0)}>
                                <img 
                                    src={allPropertyImages[0]} 
                                    alt="Main view" 
                                    className="w-full h-[400px] md:h-[600px] object-cover rounded-lg" 
                                    loading="lazy" 
                                    decoding="async"
                                    srcSet={mainImageSrcSet}
                                    sizes="(max-width: 1023px) 100vw, 66vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                                    <PhotoIcon className="h-12 w-12 text-white" />
                                    <span className="ml-2 text-white text-xl font-semibold">View Gallery</span>
                                </div>
                            </div>
                            
                            {/* Thumbnails */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
                                {allPropertyImages.slice(1, 6).map((img, index) => (
                                    <div key={index} className="relative group cursor-pointer" onClick={() => openGallery(allPropertyImages, index + 1)}>
                                         <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover rounded-md" loading="lazy" decoding="async"/>
                                         {index === 4 && allPropertyImages.length > 6 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-md">
                                                <span className="text-white font-bold text-lg">+{allPropertyImages.length - 6}</span>
                                            </div>
                                         )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Inquiry Form / CTA */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 text-theme-text-primary font-serif">Schedule a Visit or Inquire</h2>
                            <div className="space-y-4 text-lg mb-8">
                                <div className="flex items-center"><BanknotesIcon className="h-8 w-8 mr-3 text-theme-accent"/><span className="text-theme-accent font-bold text-3xl">{priceRange}</span></div>
                                <div className="flex items-center"><BuildingOfficeIcon className="h-6 w-6 mr-3 text-theme-text-secondary"/>{property.type}</div>
                                <div className="flex items-center"><ArrowsPointingOutIcon className="h-6 w-6 mr-3 text-theme-text-secondary"/>{property.size} sqm</div>
                            </div>
                            <form>
                                <div className="mb-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" placeholder="Your Email" className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
                                </div>
                                <div className="mb-4">
                                    <input type="tel" placeholder="Your Phone" className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
                                </div>
                                <div className="mb-6">
                                    <textarea placeholder="I'm interested in this property..." rows={4} className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent"></textarea>
                                </div>
                                <Button type="submit" variant="primary" className="w-full">
                                    <EnvelopeIcon className="h-5 w-5 mr-2 inline"/> Send Inquiry
                                </Button>
                                <Button variant="secondary" className="w-full mt-4">
                                    <PhoneIcon className="h-5 w-5 mr-2 inline"/> Schedule a Call
                                </Button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Property Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                        {/* Description & Details Table */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">Property Details</h3>
                            <p className="text-theme-text-secondary leading-relaxed mb-6">{property.description}</p>
                            
                            <div className="overflow-x-auto rounded-md border border-theme-bg-light">
                                <table className="w-full text-left">
                                    <tbody className="text-theme-text-secondary">
                                        <tr className="border-b border-theme-bg-light">
                                            <td className="p-3 font-semibold w-1/3">Project Type</td>
                                            <td className="p-3 text-theme-text-primary">{property.buildingDetails.projectType}</td>
                                        </tr>
                                        <tr className="border-b border-theme-bg-light bg-theme-accent/10">
                                            <td className="p-3 font-semibold">Price Range</td>
                                            <td className="p-3 text-theme-text-primary">{priceRange}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-semibold">Turn-over Date</td>
                                            <td className="p-3 text-theme-text-primary">{turnoverDateText}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Investment Potential */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-theme-text-primary flex items-center font-serif"><InformationCircleIcon className="h-6 w-6 mr-2 text-theme-accent"/>Investment Potential</h3>
                            <ul className="space-y-2 text-theme-text-secondary">
                                <li><strong>Est. Rental Yield:</strong> <span className="text-theme-text-primary">{property.investmentPotential.rentalYield}</span></li>
                                <li><strong>Capital Appreciation:</strong> <span className="text-theme-text-primary">{property.investmentPotential.appreciation}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Amenities */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">Features & Amenities</h3>
                            <ul className="grid grid-cols-2 gap-3 text-theme-text-secondary">
                                {property.amenities.map(amenity => (
                                    <li key={amenity} className="flex items-center">
                                        <CheckCircleIcon className="h-5 w-5 mr-2 text-theme-accent" />
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Building Details */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">
                                Building Details
                            </h3>
                            <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-theme-text-secondary">
                                {property.buildingDetails.landArea && <li>Land Area: {property.buildingDetails.landArea}</li>}
                                {property.buildingDetails.projectType && <li>{property.buildingDetails.projectType}</li>}
                                {property.buildingDetails.architecturalTheme && <li>Architectural Theme: {property.buildingDetails.architecturalTheme}</li>}
                                {property.buildingDetails.residentialLevels && <li>{property.buildingDetails.residentialLevels} Levels Residential</li>}
                                {property.buildingDetails.basementParkingLevels && <li>{property.buildingDetails.basementParkingLevels} Level Basement Parking</li>}
                                {property.buildingDetails.totalUnits && <li>{property.buildingDetails.totalUnits} Total Units</li>}
                                {property.buildingDetails.elevators && <li>{property.buildingDetails.elevators} High-Speed Elevators</li>}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Nearby Facilities */}
                        <div className="bg-theme-bg-dark p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">Nearby Facilities</h3>
                            <ul className="grid grid-cols-2 gap-3 text-theme-text-secondary">
                                {property.nearbyFacilities.map(facility => (
                                    <li key={facility} className="flex items-center">
                                        <MapPinIcon className="h-5 w-5 mr-2 text-theme-accent" />
                                        {facility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Nearby Schools & Hospitals */}
                        {locationData && (
                            <div className="bg-theme-bg-dark p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">Nearby Schools & Hospitals</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-theme-text-primary mb-2 flex items-center font-serif">
                                            <AcademicCapIcon className="h-5 w-5 mr-2 text-theme-accent" />
                                            Schools
                                        </h4>
                                        <ul className="space-y-1 text-theme-text-secondary text-sm list-disc list-inside">
                                            {locationData.amenities.schools.map(school => (
                                                <li key={school}>{school}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-theme-text-primary mb-2 flex items-center font-serif">
                                            <PlusCircleIcon className="h-5 w-5 mr-2 text-theme-accent" />
                                            Hospitals
                                        </h4>
                                        <ul className="space-y-1 text-theme-text-secondary text-sm list-disc list-inside">
                                            {locationData.amenities.hospitals.map(hospital => (
                                                <li key={hospital}>{hospital}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Virtual Tour, Floor Plans, and Map are now placed after the details */}
                    {/* Virtual Tour */}
                    <div className="mt-12 bg-theme-bg-dark p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4 text-theme-text-primary flex items-center font-serif">
                            <VideoCameraIcon className="h-6 w-6 mr-2 text-theme-accent"/>
                            Virtual Tour
                        </h3>
                        {property.virtualTourUrl ? (
                            <div className="aspect-video">
                                <iframe className="w-full h-full rounded" src={property.virtualTourUrl} frameBorder="0" allowFullScreen title={`Virtual tour of ${property.name}`}></iframe>
                            </div>
                        ) : (
                            <div className="text-center py-8 text-theme-text-secondary">
                                <p>A virtual tour is not yet available for this property.</p>
                            </div>
                        )}
                    </div>

                    {/* Floor Plans */}
                    <div className="mt-8 bg-theme-bg-dark p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4 text-theme-text-primary flex items-center font-serif">
                            <PhotoIcon className="h-6 w-6 mr-2 text-theme-accent"/>
                            Floor Plans
                        </h3>
                        {property.floorPlanUrls && property.floorPlanUrls.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {property.floorPlanUrls.map((plan, index) => {
                                    const floorPlanSrcSet = generateSrcSet(plan);
                                    return (
                                        <div key={index} className="relative group cursor-pointer" onClick={() => openGallery(property.floorPlanUrls!, index)}>
                                            <img 
                                                src={plan} 
                                                alt={`Floor plan ${index + 1}`} 
                                                className="w-full h-48 object-cover rounded-md border-2 border-theme-bg-light group-hover:border-theme-accent transition-colors" 
                                                loading="lazy" 
                                                decoding="async"
                                                srcSet={floorPlanSrcSet}
                                                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md">
                                                <span className="text-white text-lg font-semibold">View</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-theme-text-secondary">
                                <p>Floor plans are not available for this property at the moment.</p>
                            </div>
                        )}
                    </div>

                    {/* Map Section */}
                    <div className="mt-8 bg-theme-bg-dark p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4 text-theme-text-primary font-serif">Location on Map</h3>
                        <div className="aspect-video bg-theme-bg-light rounded">
                            <iframe
                                className="w-full h-full rounded"
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(property.name + ', ' + property.location)}`}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyDetailPage;