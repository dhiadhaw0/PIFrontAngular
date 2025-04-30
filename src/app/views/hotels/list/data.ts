const hotel1 = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3 = 'assets/images/category/hotel/4by3/03.jpg'
const hotel4 = 'assets/images/category/hotel/4by3/04.jpg'
const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'
const hotel11 = 'assets/images/category/hotel/4by3/11.jpg'
const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'

export type HotelsListType = {
  id: number
  name: string
  address: string
  sale?: string
  images: string[]
  rating: number
  features: string[]
  price: number
  schemes?: string[]
}

const hotels: HotelsListType[] = [
  {
    id: 1,
    name: 'Courtyard by Marriott New York',
    address: '5855 W Century Blvd, Los Angeles - 90045',
    images: [hotel4, hotel3, hotel2, hotel1],
    price: 750,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    schemes: ['Free Cancellation till 7 Jan 2022', 'Free Breakfast'],
    sale: '30% Off',
  },
  {
    id: 2,
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    images: [hotel10],
    price: 980,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    images: [hotel10],
    price: 540,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    schemes: ['Free Cancellation till 7 Jan 2022'],
  },
  {
    id: 4,
    name: 'Park Plaza Lodge Hotel',
    address: '5855 W Century Blvd, Los Angeles - 9004',
    images: [hotel8, hotel2, hotel3, hotel7],
    price: 845,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 3.5,
    schemes: ['Free Cancellation till 7 Jan 2022', 'Free Breakfast'],
  },
  {
    id: 5,
    name: 'Beverly Hills Marriott',
    address: '31J W Spark Street, California - 24578',
    images: [hotel11],
    price: 645,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
  },
]

export { hotels }
