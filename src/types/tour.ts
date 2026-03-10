export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  locations: string[];
  dates: string;
  seatsLeft: number;
  totalSeats: number;
  image: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  trip: string;
  date: string;
}
