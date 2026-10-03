export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'cleaning' | 'electricity' | 'subscription' | 'plumbing' | 'masonry' | 'decoration';
  image: string;
  features: string[];
  basePriceHint: string;
  badge?: string;
}

export interface QuoteRequest {
  serviceType: string;
  surfaceArea: number;
  propertyType: 'villa' | 'appartement' | 'bureau' | 'commerce' | 'immeuble';
  urgency: 'normal' | 'urgent_24h' | 'weekend';
  options: string[];
  frequency?: 'daily' | 'twice_week' | 'weekly' | 'biweekly';
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  notes: string;
  preferredDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  rating: number;
  content: string;
  serviceUsed: string;
  date: string;
}
