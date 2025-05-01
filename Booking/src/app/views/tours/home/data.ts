const tour1 = 'assets/images/category/tour/01.jpg'
const tour2 = 'assets/images/category/tour/02.jpg'
const tour3 = 'assets/images/category/tour/03.jpg'
const tour4 = 'assets/images/category/tour/04.jpg'

const category13 = 'assets/images/category/hotel/nearby/13.jpg'
const category14 = 'assets/images/category/hotel/nearby/14.jpg'
const category15 = 'assets/images/category/hotel/nearby/15.jpg'
const category16 = 'assets/images/category/hotel/nearby/16.jpg'
const category17 = 'assets/images/category/hotel/nearby/17.jpg'
const category18 = 'assets/images/category/hotel/nearby/18.jpg'
const category19 = 'assets/images/category/hotel/nearby/19.jpg'
const category20 = 'assets/images/category/hotel/nearby/20.jpg'

const avatar1 = 'assets/images/team/01.jpg'
const avatar2 = 'assets/images/team/02.jpg'

export type TourPackageType = {
  name: string
  price: number
  type: string
  rating: number
  days: number
  nights: number
  image: string
}

type CategoryType = {
  name: string
  image: string
  places: string
}

type SliderType = {
  name: string
  description: string
  image: string
}

const tourPackages: TourPackageType[] = [
  {
    name: 'Lombok, Indonesia',
    type: 'Adventure',
    price: 1385,
    days: 5,
    nights: 6,
    rating: 4.3,
    image: tour4,
  },
  {
    name: 'Northern Lights Escape',
    type: 'History',
    price: 2569,
    days: 8,
    nights: 7,
    rating: 4.5,
    image: tour2,
  },
  {
    name: 'Essential Egypt',
    type: 'Desert',
    price: 1885,
    days: 9,
    nights: 8,
    rating: 4.2,
    image: tour3,
  },
  {
    name: 'Phi Phi Islands',
    type: 'Beach',
    price: 3585,
    days: 9,
    nights: 8,
    rating: 4.6,
    image: tour1,
  },
]

const topCategories: CategoryType[] = [
  {
    name: 'Beach',
    places: '4,568',
    image: category20,
  },
  {
    name: 'Heritage',
    places: '2,845',
    image: category19,
  },
  {
    name: 'Desert',
    places: '1,587',
    image: category18,
  },
  {
    name: 'Tower',
    places: '986',
    image: category17,
  },
  {
    name: 'Mountain',
    places: '786',
    image: category16,
  },
  {
    name: 'Safari',
    places: '568',
    image: category15,
  },
  {
    name: 'Temple',
    places: '256',
    image: category14,
  },
  {
    name: 'Festival',
    places: '654',
    image: category13,
  },
]

const testimonialSlides: SliderType[] = [
  {
    name: 'Louis Ferguson',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar1,
  },
  {
    name: 'Lori Stevens',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar2,
  },
]

export { tourPackages, topCategories, testimonialSlides }
