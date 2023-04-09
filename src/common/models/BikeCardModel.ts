import { BikeRidingStylesType } from './BikeRidingStylesType';

export interface BikeCardModel {
  id: string;
  photoUrls: string[];
  certified: boolean;
  brand: string;
  year: number;
  model: string;
  name: string;
  family?: string;
  mileage: number;
  price: number;
  estimatedPayment?: number;
  dealerId?: string;
  dealerName?: string;
  distance?: number;
  ridingStyle: BikeRidingStylesType;
  pdpProductUrl?: string;
  isContactDealerForPrice: boolean;
  isFavorite: boolean;
  isPopular: boolean;
  isHD: boolean;
  isPrivateListing: boolean;
}
