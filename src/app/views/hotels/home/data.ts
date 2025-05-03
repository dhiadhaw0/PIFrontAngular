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

const hotel1 = 'assets/images/category/hotel/01.jpg'
const hotel2 = 'assets/images/category/hotel/02.jpg'
const hotel3 = 'assets/images/category/hotel/03.jpg'
const hotel4 = 'assets/images/category/hotel/04.jpg'

import type { FeaturedHotelType, NearbyPlaceType } from './type'

export const nearbyPlacesData: NearbyPlaceType[] = [
  {
    image: hotelNearby1,
    name: 'San Francisco',
    travelTime: '13 min drive',
  },
  {
    image: hotelNearby2,
    name: 'Los Angeles',
    travelTime: '25 min drive',
  },
  {
    image: hotelNearby3,
    name: 'Miami',
    travelTime: '45 min drive',
  },
  {
    image: hotelNearby4,
    name: 'Sanjosh',
    travelTime: '55 min drive',
  },
  {
    image: hotelNearby5,
    name: 'New York',
    travelTime: '1 hour drive',
  },
  {
    image: hotelNearby6,
    name: 'North Justen',
    travelTime: '2 hour drive',
  },
  {
    image: hotelNearby7,
    name: 'Rio',
    travelTime: '20 min drive',
  },
  {
    image: hotelNearby8,
    name: 'Las Vegas',
    travelTime: '3 hour drive',
  },
  {
    image: hotelNearby9,
    name: 'Texas',
    travelTime: '55 min drive',
  },
  {
    image: hotelNearby10,
    name: 'Chicago',
    travelTime: '13 min drive',
  },
  {
    image: hotelNearby11,
    name: 'New Keagan',
    travelTime: '35 min drive',
  },
  {
    image: hotelNearby1,
    name: 'Oslo',
    travelTime: '1 hour 13 min drive',
  },
]

export const featuredHotelsData: FeaturedHotelType[] = [
  {
    location: 'New York',
    image: hotel1,
    name: 'Baga Comfort',
    price: 455,
    ratings: 4.5,
  },
  {
    location: 'California',
    image: hotel2,
    name: 'New Apollo Hotel',
    price: 585,
    ratings: 4.8,
  },
  {
    location: 'Los Angeles',
    image: hotel3,
    name: 'New Age Hotel',
    price: 385,
    ratings: 4.6,
  },
  {
    location: 'Chicago',
    image: hotel4,
    name: 'Helios Beach Resort',
    price: 665,
    ratings: 4.8,
  },
]
