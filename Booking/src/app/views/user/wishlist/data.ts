const hotel1 = 'assets/images/category/hotel/4by3/10.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/11.jpg'

export type HotelType = {
  name: string
  address: string
  rating: number
  price: number
  image: string
  link?: { name: string }
}

const wishListCards: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    rating: 4.5,
    price: 980,
    image: hotel1,
    link: { name: '/hotels/detail' },
  },
  {
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    rating: 4.5,
    price: 540,
    image: hotel2,
    link: { name: '/hotels/detail' },
  },
]

export { wishListCards }
