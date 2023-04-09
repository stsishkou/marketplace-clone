import { BikeDetailedModel } from '../common/models/BikeDetailedModel';

export function BikeDetailsPage() {
  return (
    <>
      Bike Details Page
    </>
  );
}

export async function bikeDetailsLoader(): Promise<BikeDetailedModel> {
  await new Promise((r) => setTimeout(r, 500));
  return bikeDetailsModelStub;
}

const bikeDetailsModelStub: BikeDetailedModel =
  {
    dealerCode: '',
    dealerName: '',
    displacement: '',
    dryWeight: '',
    engineTorque: '',
    frontSuspension: '',
    fuelCapacity: '',
    internetPrice: 0,
    inventoryDate: '',
    isActive: false,
    length: '',
    listingDate: '',
    listingUrl: '',
    odometer: 0,
    oemModel: '',
    powerSystem: '',
    rearSuspension: '',
    seatHeight: '',
    vehicleCategory: '',
    vehicleType: '',
    wheelsBack: '',
    wheelsFront: '',
    'certified': false,
    'distance': 11,
    'testRides': 0,
    'leadCount': 0,
    '_id': '6380848499485f4f74567ac3',
    'name': '2021 Grand American Touring Road Glide',
    'stockNum': '663510A',
    'vin': '1HD1KHC11MB663510',
    'make': 'Grand American Touring',
    'family': 'Touring',
    'model': 'Road Glide',
    'modelNumber': 'FLTRX',
    'ridingStyle': 'grand american touring',
    'condition': 'U',
    'year': 2021,
    'mileage': 18023,
    'color': 'Black',
    'description': '2021 Black Grand American Touring Road Glide',
    'descriptionHtml': null,
    'photoUrls': ['/mp/static/photos/cfb5e2b407d2f992dc9e50c625c7a493dd2b88d7.jpg', '/mp/static/photos/f79109d5aafca8f5335e5821ab39a3ca80f3a678.jpg', '/mp/static/photos/0167fc784d3ee365d61bb706aad28522278403d9.jpg', '/mp/static/photos/444d3896a045bf9488e2158e567592b25d3c49b3.jpg', '/mp/static/photos/c1cfb7ec05a86844edd882710d92d775ca7f63fc.jpg', '/mp/static/photos/fd9203af21fbaac74e3c3f5c0a7dddf4cb453333.jpg', '/mp/static/photos/03cd806cdef3287a7d29ae278c053e3e1628f252.jpg', '/mp/static/photos/54a085e621f935ffc5050cc7f287e3dc411e7348.jpg', '/mp/static/photos/2076463dcdfcb6c2bb0be0bf8c8a491f7f23c93c.jpg'],
    'dealerUrl': 'https://feeds.psmmarketing.com/feed/ExportCsvVehicles?apiKey=e819c983-5bef-4a5d-9f92-a0fbb47006bd',
    'interiorColor': '',
    'price': 23499,
    'dealer': {
      'id': '0093',
      'name': 'Buddy Stubbs Arizona Harley-Davidson',
      'email': 'jack@buddystubbs.com,',
      'phoneNumber': '602-971-3400',
      'address1': '13850 N Cave Creek Rd',
      'address2': null,
      'city': 'Phoenix',
      'state': 'AZ',
      'postalCode': '85022-6105',
      'country': 'USA',
      'location': { 'type': 'Point', 'coordinates': [-112.035929, 33.612333] },
      'hasPricesHidden': false,
      'hours': { 'dealerHours': 'Sunday: 11:00 AM - 04:00 PM<br/>Monday: 10:00 AM - 07:00 PM<br/>Tuesday: 10:00 AM - 07:00 PM<br/>Wednesday: 10:00 AM - 07:00 PM<br/>Thursday: 10:00 AM - 07:00 PM<br/>Friday: 10:00 AM - 07:00 PM<br/>Saturday: 10:00 AM - 06:00 PM<br/>' },
      'website': 'http://www.buddystubbshd.com'
    },
    'brand': 'Harley-Davidson',
    'cms': 'psm',
    'cmsImportedToday': ['psm'],
    'pricesImportedToday': [23499],
    'hash': '8cfbf4b43a8d53e9990d89ed58721ce9fa4ff710',
    'status': {
      'isValidDealer': true,
      'hasMileage': true,
      'isValidVIN': true,
      'isHD': true,
      'isAnyHD': true,
      'isUsed': true,
      'hasPhotos': true,
      'hasPrice': true,
      'contactDealerForPrice': false,
      'manualEntry': false,
      'certifiedOverridden': false,
      'isPrivateListing': false,
      'isValid': true,
      'vinEnhanced': true,
      'isSold': false,
      'isHidden': false,
      'isPopular': false,
      'isFavorite': false
    },
    'listing': {
      'year': 2021,
      'model': 'Grand American Touring',
      'modelNumber': '',
      'photoUrls': ['https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/21f34848-344b-456e-a933-6cdae50aad25_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/6ed093b4-bb2e-426e-96dc-d2d38e5ce35f_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/1e4142d6-7846-459a-8719-cc47f5761c5d_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/b3674f3b-4673-4968-8da3-992c163dea67_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/45ee4882-6c72-4253-b1cd-c72da5e340b6_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/1223f0e9-5b71-40f9-92bd-72c583459952_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/49255cfb-3ef9-4e7a-8fb7-013acd985738_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/066e92c2-e4bb-4b8e-81f0-b1198c919186_large.jpg', 'https://psmfirestorm.blob.core.windows.net/vehicle-images/ab1142d4-1c2c-4204-8954-bd84b69f9a56/9fa95223-5062-4cfb-8cd7-a78cdbdb1c3e_large.jpg'],
      'price': 23499
    },
    'engine': { 'stroke': 0, 'displacement': 0, 'cylinders': 0, 'cooling': null, 'name': null },
    'fuel': { 'type': null, 'deliverySystem': null, 'capacity': 0 },
    'estimatedPayment': 369,
    'created_at': '2022-11-25T09:01:56.916Z',
    'updated_at': '2023-04-09T09:01:26.202Z',
    'associatedDealers': ['0093']
  };
