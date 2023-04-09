import { BikeRidingStylesType } from './BikeRidingStylesType';

export interface BikeDetailedModel {
  _id: string;
  name: string;
  stockNum: string;
  vin: string;
  family: string;
  condition: string;
  year: number;
  mileage: number;
  color: string;
  ridingStyle: BikeRidingStylesType;
  city?: string;
  description: string;
  descriptionHtml: string | null;
  photoUrls: string[];
  dealerUrl: string;
  interiorColor: string;
  videoUrls?: string[];
  listingUrl: string;
  length: string;
  fuelCapacity: string;
  dryWeight: string;
  seatHeight: string;
  displacement: string;
  engineTorque: string;
  wheelsFront: string;
  wheelsBack: string;
  price: number;
  internetPrice: number;
  listingDate: string;
  dealerCode: string;
  brand: string;
  cms: string;
  cmsImportedToday: string[];
  pricesImportedToday: [number];
  vehicleType: string;
  vehicleCategory: string;
  make?: string;
  model: string;
  modelNumber: string;
  oemModel: string;
  frontSuspension: string;
  rearSuspension: string;
  powerSystem: string;
  dealerName: string;
  dealer: {
    id: string; // dealer code
    email: string;
    name: string;
    country: string;
    location: {
      type: string;
      coordinates: number[];
    };
    city: string;
    state: string;
    phoneNumber: string;
    address1: string;
    address2: string | null;
    website: string;
    postalCode: string;
    hours: {
      dealerHours: string;
    };
    hasPricesHidden?: boolean;
  };
  distance?: number;
  estimatedPayment?: number;
  daysOnSite?: number;
  inventoryDate: string;
  odometer: number;
  certified: boolean;
  created_at: string;
  updated_at: string;
  associatedDealers: [string];
  isActive: boolean;
  testRides: number;
  hash: string;
  status: BikeStatus;
  listing: Listing;
  engine: Engine;
  fuel: Fuel;
  leadCount?: number;
  customizationAndUpgrades?: string;
  serviceAndMaintenanceHistory?: string;
  overallCondition?: string;
  hasExistingDamage?: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface BikeStatus {
  isValidDealer: boolean;
  hasMileage: boolean;
  isValidVIN: boolean;
  isHD: boolean;
  isAnyHD: boolean;
  isUsed: boolean;
  hasPhotos: boolean;
  hasPrice: boolean;
  isValid: boolean;
  isPopular: boolean;
  isHidden: boolean;
  hasPriceHidden?: boolean;
  manualEntry: boolean;
  certifiedOverridden: boolean;
  vinEnhanced: boolean;
  isSold: boolean;
  isPendingSold?: boolean;
  isPendingNew?: boolean;
  isFavorite?: boolean;
  isPrivateListing: boolean;
  contactDealerForPrice: boolean;
}

export interface Listing {
  price: number;
  name?: string;
  model?: string;
  modelNumber?: string;
  year?: number;
  photoUrls?: string[];
  videoUrls?: string[];
}

export interface Engine {
  displacement?: number;
  name?: string | null;
  cylinders?: number;
  stroke?: number;
  cooling?: string | null;
}

export interface Specifications {
  dryWeight?: number;
  wetWeight?: number;
  seats?: number;
  seatHeight?: number;
}

export interface Fuel {
  type?: string | null;
  deliverySystem?: FuelDelivery | null;
  capacity?: number;
}

export enum FuelDelivery {
  CARBURETOR = 'C',
  FUEL_INJECTION = 'F',
}
