const tour4 = 'assets/images/category/tour/4by3/04.jpg'
const tour5 = 'assets/images/category/tour/4by3/05.jpg'
const tour6 = 'assets/images/category/tour/4by3/06.jpg'
const tour7 = 'assets/images/category/tour/4by3/07.jpg'
const tour8 = 'assets/images/category/tour/4by3/08.jpg'
const tour9 = 'assets/images/category/tour/4by3/09.jpg'

export type TourCardType = {
  id: number
  name: string
  date: string
  type: string
  sale?: string
  days: number
  nights: number
  benefits: {
    flight?: number
    hotel?: number
    activities?: number
  }
  price: number
  image: string
  disc: boolean
}

const tourCards: TourCardType[] = [
  {
    id: 1,
    name: 'Beautiful Bali with Malaysia',
    type: 'Adventure',
    sale: '30% Off',
    days: 6,
    nights: 5,
    date: 'April 12-17',
    price: 1500,
    benefits: {
      flight: 1,
      hotel: 2,
      activities: 2,
    },
    image: tour4,
    disc: true,
  },
  {
    id: 2,
    name: 'Meeru Island Resort (Without Flight)',
    type: 'Honeymoon',
    days: 6,
    nights: 5,
    date: 'April 18-17',
    price: 800,
    benefits: {
      flight: 1,
      hotel: 2,
    },
    image: tour5,
    disc: false,
  },
  {
    id: 3,
    name: 'Sun Siyam Iru Veli Vacation',
    type: 'Beach',
    days: 5,
    nights: 4,
    date: 'April 22-28',
    price: 725,
    benefits: {
      flight: 1,
      hotel: 1,
      activities: 2,
    },
    image: tour6,
    disc: false,
  },
  {
    id: 4,
    name: 'Lux South Ari Atoll Vacation',
    type: 'Nature',
    days: 4,
    nights: 3,
    date: 'April 22-28',
    price: 400,
    benefits: {
      hotel: 1,
      activities: 2,
    },
    image: tour7,
    disc: false,
  },
  {
    id: 5,
    name: 'Romantic Seaside - Bentota and Colombo Taj Special',
    type: 'Adventure',
    days: 5,
    nights: 4,
    date: 'May 02-06',
    price: 400,
    benefits: {
      hotel: 1,
      flight: 1,
      activities: 4,
    },
    image: tour8,
    disc: false,
  },
  {
    id: 6,
    name: 'Colombo Vacay - Exotic Beaches of Bali',
    type: 'Heritage',
    days: 6,
    nights: 7,
    date: 'May 02-08',
    price: 1250,
    benefits: {
      hotel: 1,
      flight: 1,
      activities: 2,
    },
    image: tour9,
    disc: false,
  },
]

export { tourCards }
