const hotel1 = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3 = 'assets/images/category/hotel/4by3/03.jpg'
const hotel4 = 'assets/images/category/hotel/4by3/04.jpg'

export type HotelsRoomType = {
  id: number
  name: string
  sale?: string
  images: string[]
  features: string[]
  price: number
  schemes?: string
}

const hotelRooms: HotelsRoomType[] = [
  {
    id: 1,
    name: 'Luxury Room with Balcony',
    images: [hotel4, hotel3, hotel2, hotel1],
    price: 750,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'pool'],
    schemes: 'Free Cancellation till 7 Jan 2022',
    sale: '30% Off',
  },
  {
    id: 2,
    name: 'Pride moon Village Resort & Spa',
    images: [hotel4, hotel3, hotel2, hotel1],
    price: 980,
    sale: '15% Off',
    schemes: 'Non Refundable',
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'pool'],
  },
]

const amenities = [
  {
    label: 'Activities',
    name: ['Swimming pool', 'Spa', "Kids' play area", 'Gym'],
    icon: 'fa-biking',
  },
  {
    label: 'Payment Method',
    name: ['Credit card (Visa, Master card)', 'Cash', 'Debit Card'],
    icon: 'fa-credit-card',
  },
  {
    label: 'Services',
    name: [
      'Dry cleaning',
      'Room Service',
      'Special service',
      'Waiting Area',
      'Secrete smoking area',
      'Concierge',
      'Laundry facilities',
      'Ironing Service',
      'Lift',
    ],
    icon: 'fa-concierge-bell',
  },
  {
    label: 'Safety & Security',
    name: ['Doctor on Call'],
    icon: 'bi bi-shield-fill-check',
  },
  {
    label: 'Staff Language',
    name: ['English', 'Spanish', 'Hindi'],
    icon: 'fa-volume-up',
  },
]

export { amenities, hotelRooms }
