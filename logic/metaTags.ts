import { Property } from '../types';
import { COMPANY_NAME } from '../constants';

// Title Templates
const titleTemplates = [
  (p: Property) => `${p.name}: Prime Condo Investment in ${p.city} | ${COMPANY_NAME}`,
  (p: Property) => `Invest in ${p.name} | Top Real Estate for Sale in ${p.location}`,
  (p: Property) => `${p.name} Condominium for Sale | Ideal for Investors & First-Time Buyers`,
  (p: Property) => `Explore ${p.name} in ${p.city} | Your Next Real Estate Investment`,
  (p: Property) => `For Sale: ${p.name} - Best Condo for OFWs and Families in ${p.location}`,
  (p: Property) => `${p.name} | ${COMPANY_NAME} Real Estate Condominium Selling`,
];

// Description Templates
const descriptionTemplates = [
  (p: Property) => `Looking for a top real estate investment in ${p.city}? ${p.name} in ${p.location} offers ${p.type} units perfect for first-time buyers and investors. Discover prime condominium selling opportunities with ${COMPANY_NAME}. Inquire now for details on this ${p.status} property.`,
  (p: Property) => `Invest in your future with ${p.name}, a premier condominium in ${p.location}. With units starting from ₱${p.price.toLocaleString()}, it's an ideal choice for OFW investments and families. Explore this ${p.status} real estate opportunity in ${p.city}.`,
  (p: Property) => `Discover ${p.name}, the best condominium for sale in ${p.city}. This ${p.buildingDetails.developer} project is a fantastic real estate investment, offering ${p.bedrooms > 0 ? `${p.bedrooms}-bedroom` : 'studio'} units. Whether you're a first-time buyer or a seasoned investor, find out why ${p.name} is a top choice.`,
  (p: Property) => `Secure your real estate investment with ${p.name} in ${p.location}. As a leading condominium selling agent, ${COMPANY_NAME} presents this ${p.status} property with excellent amenities like ${p.amenities[0]} and ${p.amenities[1]}. Perfect for OFWs and investors seeking high rental yield in ${p.city}.`,
  (p: Property) => `Your search for the best condominium for first-time buyers ends here. ${p.name} in ${p.city} offers a great start for your real estate investment journey. Explore ${p.status} units and start building your asset portfolio with ${COMPANY_NAME}.`,
];

/**
 * Generates unique meta title and description for a property.
 * @param property The property object.
 * @returns An object with title and description.
 */
export const generatePropertyMeta = (property: Property): { title: string; description: string } => {
  // Use property ID to pick templates deterministically but uniquely, ensuring stable metadata for SEO.
  const titleIndex = property.id % titleTemplates.length;
  const descriptionIndex = property.id % descriptionTemplates.length;

  const title = titleTemplates[titleIndex](property);
  const description = descriptionTemplates[descriptionIndex](property);

  return { title, description };
};

/**
 * Sets the document's meta tags.
 * @param title The title to set.
 * @param description The meta description to set.
 */
export const setMetaTags = ({ title, description }: { title: string; description: string }): void => {
  document.title = title;
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
};
