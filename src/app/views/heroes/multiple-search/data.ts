const img1 = 'assets/images/element/beach.svg'
const img2 = 'assets/images/element/island.svg'
const img3 = 'assets/images/element/pool.svg'
const img4 = 'assets/images/element/camping.svg'
const img5 = 'assets/images/element/cabin.svg'
const img6 = 'assets/images/element/lake.svg'
const img7 = 'assets/images/element/park.svg'
const img8 = 'assets/images/element/cave.svg'
const img9 = 'assets/images/element/surf.svg'
const img10 = 'assets/images/element/farm.svg'
const img11 = 'assets/images/element/tower.svg'
const img12 = 'assets/images/element/desert.svg'

type TripCategoryType = {
  name: string
  image: string
}

const tripCategories: TripCategoryType[] = [
  {
    name: 'Beaches',
    image: img1,
  },
  {
    name: 'Islands',
    image: img2,
  },
  {
    name: 'Amazing Pools',
    image: img3,
  },
  {
    name: 'Camping',
    image: img4,
  },
  {
    name: 'Cabin',
    image: img5,
  },
  {
    name: 'Lake Front',
    image: img6,
  },
  {
    name: 'National Park',
    image: img7,
  },
  {
    name: 'Caves',
    image: img8,
  },
  {
    name: 'Surfing',
    image: img9,
  },
  {
    name: 'Farms',
    image: img10,
  },
  {
    name: 'Towers',
    image: img11,
  },
  {
    name: 'Desert',
    image: img12,
  },
]

export { tripCategories }
