export type StatisticType = {
  title: string
  state: number
  progress: number
  variant: string
  icon: string
  status: string
}

export type BookingType = {
  name: string
  floor: string
  bed: string
  rating: number
  price: number
  image: string
}

const image1 = 'assets/images/category/hotel/4by3/01.jpg'
const image2 = 'assets/images/category/hotel/4by3/02.jpg'
const image3 = 'assets/images/category/hotel/4by3/03.jpg'
const image4 = 'assets/images/category/hotel/4by3/04.jpg'
const image5 = 'assets/images/category/hotel/4by3/05.jpg'
const image6 = 'assets/images/category/hotel/4by3/06.jpg'
const image8 = 'assets/images/category/hotel/4by3/08.jpg'
const image9 = 'assets/images/category/hotel/4by3/09.jpg'
const image11 = 'assets/images/category/hotel/4by3/11.jpg'
const image12 = 'assets/images/category/hotel/4by3/12.jpg'

const statisticData: StatisticType[] = [
  {
    title: 'New Booked Rooms',
    state: 56,
    progress: 60,
    variant: 'primary',
    icon: 'bi-door-open',
    status: `<span>
        <span class="text-primary">16 new rooms booked</span> today
      </span>`,
  },
  {
    title: 'Cancelled Rooms',
    state: 12,
    progress: 60,
    variant: 'danger',
    icon: 'bi-x-circle',
    status: `<span>
        <span class="text-danger">2 canceled rooms</span> today
      </span>`,
  },
  {
    title: 'Check-in',
    state: 20,
    progress: 60,
    variant: 'success',
    icon: 'bi-box-arrow-in-right',
    status: ` <span>
        <span class="text-success">45 reservation</span> incoming
      </span>`,
  },
  {
    title: 'Check-out',
    state: 28,
    progress: 60,
    variant: 'orange',
    icon: 'bi-box-arrow-right',
    status: ` <span>
        <span class="text-orange">30 reservation</span> outgoing
      </span>`,
  },
]

const bookingLists: BookingType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    floor: 'Ground Floor: G5',
    bed: 'Double Bed',
    rating: 4.5,
    price: 1500,
    image: image2,
  },
  {
    name: 'Premium Room With Balcony',
    floor: 'First Floor: F3',
    bed: 'Single Bed',
    rating: 4.0,
    price: 750,
    image: image3,
  },
  {
    name: 'Deluxe Pool View',
    floor: 'Ground Floor: G3',
    bed: 'Family Bed',
    rating: 4.2,
    price: 895,
    image: image4,
  },
  {
    name: 'Superior Room',
    floor: 'First Floor: F5',
    bed: 'King Bed',
    rating: 4.0,
    price: 750,
    image: image5,
  },
  {
    name: 'Studio Suite King',
    floor: 'Fifth Floor: Ft3',
    bed: 'Double Bed',
    rating: 4.0,
    price: 1458,
    image: image6,
  },
  {
    name: 'Rock Family Suite',
    floor: 'Second Floor: S4',
    bed: 'Single Bed',
    rating: 4.6,
    price: 1020,
    image: image8,
  },
  {
    name: 'Luxury Room with Balcony',
    floor: 'Third Floor: T2',
    bed: 'Family Bed',
    rating: 4.6,
    price: 847,
    image: image9,
  },
  {
    name: 'Premium Room With Balcony',
    floor: 'Third Floor: T4',
    bed: 'Family Bed',
    rating: 3.9,
    price: 995,
    image: image1,
  },
  {
    name: 'Deluxe Room Twin Bed With Balcony',
    floor: 'Fifth Floor: Ft1',
    bed: 'Double Bed',
    rating: 4.8,
    price: 1650,
    image: image11,
  },
  {
    name: 'Rock Family Suite',
    floor: 'Second Floor: S4',
    bed: 'King Bed',
    rating: 4.6,
    price: 1420,
    image: image12,
  },
]

export { bookingLists, statisticData }
