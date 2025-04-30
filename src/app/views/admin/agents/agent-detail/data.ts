import { currency } from '@/app/store'

export type StatisticType = {
  title: string
  stat: string
  icon: string
  variant: string
}

export type HotelType = {
  name: string
  address: string
  price: number
  image: string
  link?: { name: string }
}

const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'
const hotel9 = 'assets/images/category/hotel/4by3/09.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'
const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'

export const statisticsData: StatisticType[] = [
  {
    title: 'Total Hotels',
    stat: '04',
    icon: 'fa-hotel',
    variant: 'primary',
  },
  {
    title: 'Booking this month',
    stat: '56',
    icon: 'fa-calendar-days',
    variant: 'warning',
  },
  {
    title: 'Earning this month',
    stat: currency + '2486.95',
    icon: 'fa-money-bill-trend-up',
    variant: 'success',
  },
]

export const hotelsList: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    price: 1586,
    image: hotel10,
    link: { name: '/hotels/detail' },
  },
  {
    name: 'Courtyard by Marriott New York',
    address: '258 W jimmy Street, New york - 24578',
    price: 1025,
    image: hotel8,
    link: { name: '/hotels/detail' },
  },
  {
    name: 'Park Plaza Lodge Hotel',
    address: '31J W Spark Street, California - 24578',
    price: 958,
    image: hotel9,
    link: { name: '/hotels/detail' },
  },
  {
    name: 'Royal Beach Resort',
    address: '589 J Wall Street, London - 24578',
    price: 1005,
    image: hotel7,
    link: { name: '/hotels/detail' },
  },
]
