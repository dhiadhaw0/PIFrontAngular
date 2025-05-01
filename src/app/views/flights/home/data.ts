import { currency } from '@/app/store'

const client7 = 'assets/images/client/07.svg'
const client8 = 'assets/images/client/08.svg'
const client9 = 'assets/images/client/09.svg'

const flight1 = 'assets/images/category/flight/01.jpg'
const flight2 = 'assets/images/category/flight/02.jpg'
const flight3 = 'assets/images/category/flight/03.jpg'
const flight4 = 'assets/images/category/flight/04.jpg'

const blog2 = 'assets/images/blog/02.jpg'
const blog3 = 'assets/images/blog/03.jpg'
const blog4 = 'assets/images/blog/04.jpg'

export type OffersType = {
  logo: string
  offer: string
  flightType: string
  variant: string
  percentageOff?: boolean
  couponCode: string
}

export type DestinationType = {
  name: string
  rating: number
  flightInterval: string
  information?: string
  image: string
}

type BlogType = {
  title: string
  name: string
  image: string
}

const specialOffers: OffersType[] = [
  {
    logo: client7,
    offer: currency + '899 off',
    flightType: 'On Domestic Flights',
    variant: 'bg-success',
    couponCode: '8B99OFF',
  },
  {
    logo: client8,
    offer: '13% off',
    percentageOff: true,
    flightType: 'On Domestic Flights',
    variant: 'bg-danger',
    couponCode: '13PO7FF',
  },
  {
    logo: client9,
    offer: currency + '2,400 off',
    flightType: 'On International Flights',
    variant: 'bg-info',
    couponCode: 'LOG165F',
  },
]

const popularDestinations: DestinationType[] = [
  {
    name: 'Thailand',
    rating: 4.3,
    flightInterval: 'The next flight is on 26th Dec',
    information: 'COVID-19 test required Vaccinated travelers can visit',
    image: flight1,
  },
  {
    name: 'Hong Kong',
    rating: 4.6,
    flightInterval: 'Daily 1 flight',
    image: flight3,
  },
  {
    name: 'Maldives',
    rating: 4.3,
    flightInterval: '2 flights every week',
    information: 'Vaccinated travelers can visit. Masks required',
    image: flight2,
  },
  {
    name: 'Switzerland',
    rating: 4.3,
    flightInterval: 'Filling fast, next available flight on 2nd Oct',
    image: flight4,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Story of water world adventure',
    name: 'Jacqueline Miller',
    image: blog2,
  },
  {
    title: 'How Hotel Technology Can Help Small Hotel Businesses',
    name: 'Frances Guerrero',
    image: blog3,
  },
  {
    title: 'Hotel Service - Become a Guide for Your Guests',
    name: 'Louis Ferguson',
    image: blog4,
  },
]

export { specialOffers, popularDestinations, blogs }
