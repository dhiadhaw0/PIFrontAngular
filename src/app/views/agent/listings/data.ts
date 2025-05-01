import { currency } from '@/app/store'

const room4 = 'assets/images/category/hotel/4by3/04.jpg'
const room5 = 'assets/images/category/hotel/4by3/05.jpg'
const room6 = 'assets/images/category/hotel/4by3/06.jpg'
const room8 = 'assets/images/category/hotel/4by3/08.jpg'
const room10 = 'assets/images/category/hotel/4by3/10.jpg'

export type StatisticType = {
  title: string
  state: string
  tag?: string
  change: string
  changeLabel: string
  link: string
  variant: string
}

export type RoomListType = {
  image: string
  name: string
  address: string
  price: number
}

const statistics: StatisticType[] = [
  {
    title: 'Earning',
    state: currency + '25,869',
    change: '0.20%',
    changeLabel: 'vs last month',
    link: 'View statement',
    variant: 'text-success',
    tag: 'After US royalty withholding tax',
  },
  {
    title: 'Booked Rooms',
    state: '58',
    change: '102',
    changeLabel: 'Total Rooms',
    link: 'View Bookings',
    variant: 'text-info',
  },
  {
    title: 'Available Rooms',
    state: '42',
    change: '102',
    changeLabel: 'Total Rooms',
    link: 'View Rooms',
    variant: 'text-warning',
  },
]

const roomBookingList: RoomListType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    image: room10,
    price: 1586,
  },
  {
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    image: room5,
    price: 856,
  },
  {
    name: 'Carina Beach Resort',
    address: '5855 W Century Blvd, Los Angeles - 90045',
    image: room4,
    price: 1025,
  },
  {
    name: 'Courtyard by Marriott New York',
    address: 'Manhattan street, London - 24578',
    image: room6,
    price: 1125,
  },
  {
    name: 'Beverly Hills Marriott',
    address: '31J W Spark Street, California - 24578',
    image: room8,
    price: 1005,
  },
]

export { statistics, roomBookingList }
