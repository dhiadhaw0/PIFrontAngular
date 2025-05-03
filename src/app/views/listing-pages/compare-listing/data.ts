const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3 = 'assets/images/category/hotel/4by3/03.jpg'
const hotel5 = 'assets/images/category/hotel/4by3/05.jpg'

type CompareListingType = {
  name: string
  image: string
  price: number
}

export const compareListings: CompareListingType[] = [
  {
    name: 'Courtyard by Marriott New York',
    image: hotel2,
    price: 750,
  },
  {
    name: 'Club Quarters Hotel',
    image: hotel3,
    price: 800,
  },
  {
    name: 'Pride moon Village Resort & Spa',
    image: hotel5,
    price: 1000,
  },
]
