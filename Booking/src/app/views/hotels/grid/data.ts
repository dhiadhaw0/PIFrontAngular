const hotel1 = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3 = 'assets/images/category/hotel/4by3/03.jpg'
const hotel4 = 'assets/images/category/hotel/4by3/04.jpg'
const hotel5 = 'assets/images/category/hotel/4by3/05.jpg'
const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'
const hotel9 = 'assets/images/category/hotel/4by3/09.jpg'
const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'

export type HotelsGridType = {
  id: number
  name: string
  sale?: string
  images: string[]
  rating: number
  feature: string[]
  price: number
  bookmark?: boolean
}

const hotels: HotelsGridType[] = [
  {
    id: 1,
    name: 'Hotel Baljees Regency',
    sale: '30% Off',
    images: [hotel9, hotel2, hotel3, hotel1],
    rating: 4.5,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 750,
  },
  {
    id: 2,
    name: 'Courtyard by Marriott New York',
    images: [hotel10],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Pool', 'Kitchen'],
    price: 1200,
  },
  {
    id: 3,
    name: 'Club Quarters Hotel',
    images: [hotel8],
    rating: 4.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 980,
    bookmark: true,
  },
  {
    id: 4,
    name: 'Beverly Hills Marriott',
    images: [hotel7],
    rating: 4.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 1400,
    bookmark: true,
  },
  {
    id: 5,
    name: 'Courtyard by Marriott New York',
    images: [hotel2],
    rating: 4.5,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 680,
  },
  {
    id: 6,
    name: 'Park Plaza Lodge Hotel',
    images: [hotel5],
    rating: 4.4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 740,
  },
  {
    id: 7,
    name: 'Royal Beach Resort',
    images: [hotel4],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 570,
  },
  {
    id: 8,
    name: 'Pride moon Village Resort & Spa',
    images: [hotel3],
    rating: 3.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 896,
    bookmark: true,
  },
  {
    id: 9,
    name: 'Carina Beach Resort',
    images: [hotel1],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 475,
  },
]

export { hotels }
