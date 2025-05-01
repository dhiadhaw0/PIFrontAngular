import { currency } from '@/app/store'

const hotel1 = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel4 = 'assets/images/category/hotel/4by3/04.jpg'
const hotel5 = 'assets/images/category/hotel/4by3/05.jpg'
const hotel6 = 'assets/images/category/hotel/4by3/06.jpg'
const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'
const hotel9 = 'assets/images/category/hotel/4by3/09.jpg'
const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'

const avatar1 = 'assets/images/avatar/01.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar8 = 'assets/images/avatar/08.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'

export type StatisticType = {
  title: string
  state: string
  icon: string
  variant: string
}

export type HotelType = {
  name: string
  address: string
  image: string
  price: number
}

export type RoomType = {
  name: string
  date: string
  image: string
  status: string
}

export type ArrivalType = {
  name: string
  image: string
  hotelInfo: string[]
}

export type ReviewType = {
  name: string
  image: string
  rating: number
  review: number
}

const statisticData: StatisticType[] = [
  {
    title: 'Total Hotels',
    state: '56',
    icon: 'fa-hotel',
    variant: 'warning',
  },
  {
    title: 'Total Incomes',
    state: currency + '836,789',
    icon: 'fa-hand-holding-dollar',
    variant: 'success',
  },
  {
    title: 'Total Rooms',
    state: '245',
    icon: 'fa-bed',
    variant: 'primary',
  },
  {
    title: 'Booked Room',
    state: '147',
    icon: 'fa-building-circle-check',
    variant: 'info',
  },
]

const popularHotels: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    image: hotel10,
    price: 1586,
  },
  {
    name: 'Courtyard by Marriott New York',
    address: '258 W jimmy Street, New york - 24578',
    image: hotel8,
    price: 1025,
  },
  {
    name: 'Park Plaza Lodge Hotel',
    address: '31J W Spark Street, California - 24578',
    image: hotel9,
    price: 958,
  },
  {
    name: 'Royal Beach Resort',
    address: '589 J Wall Street, London - 24578',
    image: hotel7,
    price: 1005,
  },
]

const roomNotifications: RoomType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    date: '18 Nov to 22 Nov',
    image: hotel4,
    status: 'Booked',
  },
  {
    name: 'Deluxe Pool View',
    date: '16 Nov',
    image: hotel5,
    status: 'Booking cancel',
  },
  {
    name: 'Luxury Room with Balcony',
    date: '15 Nov to 20 Nov',
    image: hotel6,
    status: 'Booked',
  },
  {
    name: 'Premium Room With Balcony',
    date: '14 Nov to 16 Nov',
    image: hotel8,
    status: 'Booked',
  },
  {
    name: 'Rock Family Suite',
    date: '13 Nov',
    image: hotel2,
    status: 'Booking cancel',
  },
]

const upcomingArrivals: ArrivalType[] = [
  {
    name: 'Lori Stevens',
    hotelInfo: ['Room 25A', '24Nov - 28Nov'],
    image: avatar9,
  },
  {
    name: 'Dennis Barrett',
    hotelInfo: ['Room 12B', '21Nov - 23Nov'],
    image: avatar3,
  },
  {
    name: 'Jacqueline Miller',
    hotelInfo: ['Room 11A', '19Nov - 21Nov'],
    image: avatar1,
  },
  {
    name: 'Billy Vasquez',
    hotelInfo: ['Room 05A', '14Nov - 18Nov'],
    image: avatar4,
  },
  {
    name: 'Amanda Reed',
    hotelInfo: ['Room 9', '11Nov - 12Nov'],
    image: avatar5,
  },
  {
    name: 'Dennis Barrett',
    hotelInfo: ['Room 10', '11Nov - 12Nov'],
    image: avatar8,
  },
]

const hotelReviews: ReviewType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    rating: 4,
    review: 35,
    image: hotel8,
  },
  {
    name: 'Deluxe Pool View',
    rating: 4,
    review: 25,
    image: hotel9,
  },
  {
    name: 'Luxury Room with Balcony',
    rating: 4,
    review: 18,
    image: hotel1,
  },
  {
    name: 'Premium Room With Balcony',
    rating: 4,
    review: 8,
    image: hotel5,
  },
  {
    name: 'Rock Family Suite',
    rating: 4.5,
    review: 11,
    image: hotel2,
  },
]

export {
  hotelReviews,
  popularHotels,
  roomNotifications,
  statisticData,
  upcomingArrivals,
}
