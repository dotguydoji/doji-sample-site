
export interface Property {
  id: number;
  name: string;
  location: string;
  city: string;
  price: number;
  priceMax?: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  type: 'Studio' | '1BR' | '2BR' | '3BR' | 'Penthouse';
  status: 'Ready for Occupancy' | 'Pre-selling' | 'Rent-to-own';
  imageUrl: string;
  images: string[];
  description: string;
  amenities: string[];
  nearbyFacilities: string[];
  investmentPotential: {
    rentalYield: string;
    appreciation: string;
  };
  isFeatured: boolean;
  buildingDetails: {
    totalFloors: number;
    totalUnits: number;
    elevators: number;
    developer: string;
    landArea?: string;
    projectType?: string;
    architecturalTheme?: string;
    residentialLevels?: number | string;
    basementParkingLevels?: number | string;
  };
  turnoverYear: number;
  virtualTourUrl?: string;
  floorPlanUrls?: string[];
  promotion?: {
    title: string;
    endDate: string;
  };
}

export interface SuccessStory {
  id: number;
  name: string;
  quote: string;
  story: string;
  propertyPurchased: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  tags: string[];
}

export interface Location {
  id: string;
  name: string;
  description: string;
  lifestyle: string;
  averagePrice: string;
  amenities: {
    hospitals: string[];
    malls: string[];
    schools: string[];
    transport: string[];
  };
  imageUrl: string;
  properties: number[];
}
