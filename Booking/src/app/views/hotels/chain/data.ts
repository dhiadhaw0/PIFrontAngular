const hotelNearby1 = 'assets/images/category/hotel/nearby/01.jpg'
const hotelNearby2 = 'assets/images/category/hotel/nearby/02.jpg'
const hotelNearby3 = 'assets/images/category/hotel/nearby/03.jpg'
const hotelNearby4 = 'assets/images/category/hotel/nearby/04.jpg'
const hotelNearby5 = 'assets/images/category/hotel/nearby/05.jpg'
const hotelNearby6 = 'assets/images/category/hotel/nearby/06.jpg'
const hotelNearby7 = 'assets/images/category/hotel/nearby/07.jpg'
const hotelNearby8 = 'assets/images/category/hotel/nearby/08.jpg'
const hotelNearby9 = 'assets/images/category/hotel/nearby/09.jpg'
const hotelNearby10 = 'assets/images/category/hotel/nearby/10.jpg'
const hotelNearby11 = 'assets/images/category/hotel/nearby/11.jpg'
const serviceimage1 = 'assets/images/category/flight/02.jpg'
const serviceimage2 = 'assets/images/category/flight/01.jpg'
const serviceimage3 = 'assets/images/category/flight/03.jpg'
const gallery1 = 'assets/images/category/hotel/gallery/01.jpg'
const gallery2 = 'assets/images/category/hotel/gallery/02.jpg'
const gallery3 = 'assets/images/category/hotel/gallery/03.jpg'
const gallery4 = 'assets/images/category/hotel/gallery/04.jpg'
const gallery5 = 'assets/images/category/hotel/gallery/05.jpg'
const gallery6 = 'assets/images/category/hotel/gallery/06.jpg'
const gallery7 = 'assets/images/category/hotel/gallery/07.jpg'
const gallery8 = 'assets/images/category/hotel/gallery/08.jpg'

type HotelCategoryType = {
  name: string
  icon: string
}

type HotelFeatureType = {
  name: string
  icon: string
  variant: string
}

type HotelServiceType = {
  name: string
  icon: string
}

type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
}

const hotelDestinations: string[] = [
  'New York',
  'California',
  'New Jersey',
  'Canada',
  'Las vegas',
  'London',
  'Singapore',
  'Malaysia',
  'manhattan',
]

const hotelTypes: string[] = [
  'All',
  'Hotels',
  'Villas',
  'Palace',
  'Resorts',
  'Restaurants',
]

const hotelCategories: HotelCategoryType[] = [
  {
    name: 'Beach',
    icon: 'fa-umbrella-beach',
  },
  {
    name: 'City',
    icon: 'fa-city',
  },
  {
    name: 'Spa',
    icon: 'fa-spa',
  },
  {
    name: 'Wildlife',
    icon: 'fa-mountain-sun',
  },
  {
    name: 'Golf',
    icon: 'fa-golf-ball-tee',
  },
  {
    name: 'Heritage',
    icon: 'fa-gopuram',
  },
]

const hotelFacilities: string[] = [
  'Banquet',
  ' Conference and meeting',
  'Fitness room',
  'Health club',
  'Sauna and steam bath',
  'Luggage storage',
  'Summer terrace',
  'Non-smoking rooms',
]

const hotelFeatures: HotelFeatureType[] = [
  {
    name: ' Best Rate Guaranteed',
    icon: 'bi-cash-coin',
    variant: 'text-info',
  },
  {
    name: 'Payment at Hotel',
    icon: 'bi-credit-card-2-back',
    variant: 'text-warning',
  },
  {
    name: 'Exclusive Members Rewards',
    icon: 'bi-wallet',
    variant: 'text-success',
  },
  {
    name: 'WIFI Access',
    icon: 'bi-wifi',
    variant: 'text-danger',
  },
  {
    name: 'No Hidden Charges',
    icon: 'bi-tags',
    variant: 'text-orange',
  },
]

const hotelServices: HotelServiceType[] = [
  {
    name: 'Free Wifi',
    icon: 'fa-wifi',
  },
  {
    name: 'Swimming Pool',
    icon: 'fa-person-swimming',
  },
  {
    name: 'Private Workshop',
    icon: 'fa-person-shelter',
  },
  {
    name: 'Breakfast',
    icon: 'fa-utensils',
  },
  {
    name: 'Free Electricity',
    icon: 'fa-bolt',
  },
  {
    name: 'Gym Space',
    icon: 'fa-dumbbell',
  },
  {
    name: 'Spa',
    icon: 'fa-spa',
  },
  {
    name: 'Other Services',
    icon: 'fa-ellipsis',
  },
]

const nearbyPlacesData: NearbyPlaceType[] = [
  {
    image: hotelNearby1,
    name: 'San Francisco',
    travelTime: '13 mins drive',
  },
  {
    image: hotelNearby2,
    name: 'Los Angeles',
    travelTime: '25 mins drive',
  },
  {
    image: hotelNearby3,
    name: 'Miami',
    travelTime: '45 mins drive',
  },
  {
    image: hotelNearby4,
    name: 'Sanjosh',
    travelTime: '55 mins drive',
  },
  {
    image: hotelNearby5,
    name: 'New York',
    travelTime: '1 hour drive',
  },
  {
    image: hotelNearby6,
    name: 'North Justen',
    travelTime: '2 hours drive',
  },
  {
    image: hotelNearby7,
    name: 'Rio',
    travelTime: '20 mins drive',
  },
  {
    image: hotelNearby8,
    name: 'Las Vegas',
    travelTime: '3 hours drive',
  },
  {
    image: hotelNearby9,
    name: 'Texas',
    travelTime: '55 mins drive',
  },
  {
    image: hotelNearby10,
    name: 'Chicago',
    travelTime: '13 mins drive',
  },
  {
    image: hotelNearby11,
    name: 'New Keagan',
    travelTime: '35 mins drive',
  },
  {
    image: hotelNearby1,
    name: 'Oslo',
    travelTime: '1 hour 13 mins drive',
  },
]

const servicesData = [
  {
    category: 'Honeymoon Sweets',
    title: 'Maldives Sunshine Hotel',
    image: serviceimage1,
  },
  {
    category: 'Royal Stay',
    title: 'Booking Grad Palace Japan',
    image: serviceimage2,
  },
  {
    category: 'Adventure Stay',
    title: 'Golf & Spa Resort in New York',
    image: serviceimage3,
  },
]

const gallerydata = [
  {
    image: gallery1,
    lightboxsrc: gallery1,
  },
  {
    image: gallery2,
    lightboxsrc: gallery2,
  },
  {
    image: gallery3,
    lightboxsrc: gallery3,
  },
  {
    image: gallery5,
    lightboxsrc: gallery5,
  },
  {
    image: gallery8,
    lightboxsrc: gallery8,
  },
  {
    image: gallery4,
    lightboxsrc: 'https://www.youtube.com/embed/tXHviS-4ygo',
    video: true,
  },
  {
    image: gallery6,
    lightboxsrc: gallery6,
  },
  {
    image: gallery7,
    lightboxsrc: gallery1,
  },
]

export {
  hotelCategories,
  hotelDestinations,
  hotelFacilities,
  hotelFeatures,
  hotelServices,
  hotelTypes,
  nearbyPlacesData,
  servicesData,
  gallerydata,
}
