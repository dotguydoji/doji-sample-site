import { properties } from './properties';
import { COMPANY_NAME } from '../constants';

/**
 * The initial message the chatbot sends when it's opened.
 */
export const INITIAL_MESSAGE = `Hello! I'm the virtual assistant for ${COMPANY_NAME}. How can I help you find your new home today? You can ask me about our properties, prices, or locations.`;

/**
 * The response sent when the chatbot doesn't understand the user's input.
 */
export const FALLBACK_RESPONSE = "I'm sorry, I'm not sure how to answer that. I can help with questions about our properties, their prices, locations, and the buying process. How can I assist?";


// --- START OF KNOWLEDGE BASE ---
// Modify the array below to change the chatbot's behavior.
// - `keywords`: A list of words that trigger the response. The first match found will be used.
// - `response`: The text the chatbot will send back. It can be a simple string or a function for dynamic answers.
// ----------------------------------------------------------------------------------------------------

// Dynamically get all unique city names for location matching
const uniqueLocations = [...new Set(properties.map(p => p.city.toLowerCase()))];

export const KNOWLEDGE_BASE = [
  // --- Greetings ---
  {
    keywords: ['hello', 'hi', 'hey'],
    response: `Hello there! I'm the virtual assistant for ${COMPANY_NAME}. How can I assist you with your property search today?`,
  },

  // --- Contact Information ---
  {
    keywords: ['contact', 'phone', 'email', 'address'],
    response: `You can reach us at inquire@compd.com or call us at +1 (234) 567-890. Our office is at 123 Property Ave, Metro City. We'd love to hear from you!`,
  },

  // --- Buying Process ---
  {
    keywords: ['buy', 'process', 'steps', 'how to'],
    response: `The buying process typically involves a few key steps: Reservation, Down Payment, applying for Financing, and finally, the Turnover of the unit. For a detailed guide, please check out our "How to Buy" page!`,
  },
  
  // --- Financing ---
  {
    keywords: ['financing', 'loan', 'mortgage', 'payment'],
    response: `We can assist with bank financing, and some properties may offer in-house financing. Pag-IBIG is also an option for qualified members. Would you like to know about a specific property?`,
  },

  // --- Price Inquiries ---
  {
    keywords: ['price', 'how much', 'cost', 'budget'],
    response: `Our property prices vary depending on the location and unit size. For example, ${properties[2].name} is around ₱${properties[2].price.toLocaleString()}, while ${properties[1].name} is about ₱${properties[1].price.toLocaleString()}. Do you have a specific property or budget in mind?`,
  },

  // --- Location Inquiries (Dynamic) ---
  {
    keywords: uniqueLocations,
    response: (input: string) => {
      const location = uniqueLocations.find(loc => input.includes(loc));
      if (location) {
        const propsInLoc = properties.filter(p => p.city.toLowerCase() === location).map(p => p.name);
        if (propsInLoc.length > 0) {
          return `In ${location.charAt(0).toUpperCase() + location.slice(1)}, we have these properties: ${propsInLoc.join(', ')}. Which one are you interested in?`;
        }
      }
      return `We have properties in various cities like Taguig, Pasig, and Parañaque. Where are you looking to live?`;
    }
  },
   {
    keywords: ['location', 'area', 'where'],
    response: `We have properties in prime locations like Taguig, Pasig, and Parañaque. Is there a particular city you're interested in?`,
  },

  // --- Specific Property Inquiries (Dynamic) ---
  // This checks if the user's message contains the name of any property.
  {
    keywords: properties.map(p => p.name.toLowerCase()),
    response: (input: string) => {
      const property = properties.find(p => input.includes(p.name.toLowerCase()));
      if (property) {
        return `Ah, ${property.name}! It's a wonderful ${property.type} unit in ${property.location}. The price is ₱${property.price.toLocaleString()} for a ${property.size} sqm space. It is currently ${property.status}. Would you like to schedule a viewing?`;
      }
      return FALLBACK_RESPONSE; // This should not be reached if a keyword matched
    }
  },

  // --- General Property Inquiries ---
  // This should be placed after more specific triggers like location and price.
  {
    keywords: ['properties', 'listings', 'condo', 'units'],
    response: `We have a great selection of properties! Some of our top listings include ${properties.slice(0, 3).map(p => p.name).join(', ')}. You can see all of them on our "Properties" page. Is there a specific type of unit you're looking for?`,
  },
  
  // --- Farewells ---
  {
    keywords: ['thanks', 'thank you', 'bye', 'ok'],
    response: `You're welcome! If you have any more questions, feel free to ask. Have a great day!`,
  },
];
