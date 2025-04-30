const avatar1 = 'assets/images/avatar/01.jpg'
const avatar2 = 'assets/images/avatar/02.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'

const room2 = 'assets/images/category/hotel/4by3/02.jpg'
const room3 = 'assets/images/category/hotel/4by3/03.jpg'
const room4 = 'assets/images/category/hotel/4by3/04.jpg'
const room5 = 'assets/images/category/hotel/4by3/05.jpg'

type HotelFeatureType = {
  feature: {
    label: string
    name: string
  }
  icon: string
}

type BookingDetailType = {
  name: string
  checkIn: string
  checkOut: string
  guest: number
  amount: number
  payment: 'Full payment' | 'On Property' | 'Half payment'
  image: string
}

type HotelDetailType = {
  name: string
  address: string
  description: string
  images: string[]
  features: HotelFeatureType[]
  link?: string
}

type ReservationType = {
  name: string
  image: string
  checkIn: string
  checkOut: string
  amount: number
}

export const hotel: HotelDetailType = {
  name: 'Courtyard by Marriott New York',
  address: '5855 W Century Blvd, Los Angeles - 90045',
  description:
    'Tolerably behavior may admit daughters offending her ask own. Praise effect wishes to change way and any wanted. Lively use looked latter regard had. Does he part last',
  images: [room2, room3, room4, room5],
  features: [
    {
      feature: {
        label: 'Type',
        name: 'King Suit',
      },
      icon: 'fa-bed',
    },
    {
      feature: {
        label: 'Side',
        name: 'Left Side',
      },
      icon: 'fa-arrow-right-arrow-left',
    },
    {
      feature: {
        label: 'Floor',
        name: '3rd Floor (T5)',
      },
      icon: 'fa-stairs',
    },
    {
      feature: {
        label: 'View',
        name: 'Sea View',
      },
      icon: 'fa-mountain-sun',
    },
    {
      feature: {
        label: 'Size',
        name: '250 Sqft',
      },
      icon: 'fa-clone',
    },
  ],
}

export const currentReservation: ReservationType = {
  name: 'Lori Stevens',
  image: avatar9,
  checkIn: '18 Dec 2022 9:00AM',
  checkOut: '22 Dec 2022 8:00PM',
  amount: 1528,
}

export const bookingDetailList: BookingDetailType[] = [
  {
    name: 'Lori Stevens',
    checkIn: '18 Dec 2022',
    checkOut: '22 Dec 2022',
    guest: 4,
    amount: 1025,
    payment: 'Full payment',
    image: avatar9,
  },
  {
    name: 'Billy Vasquez',
    checkIn: '23 Dec 2022',
    checkOut: '26 Dec 2022',
    guest: 3,
    amount: 847,
    payment: 'Half payment',
    image: avatar2,
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '2 Jan 2022',
    checkOut: '5 Jan 2022',
    guest: 2,
    amount: 900,
    payment: 'On Property',
    image: avatar1,
  },
  {
    name: 'Louis Ferguson',
    checkIn: '6 Jan 2022',
    checkOut: '10 Jan 2022',
    guest: 5,
    amount: 1458,
    payment: 'Full payment',
    image: avatar3,
  },
  {
    name: 'Dennis Barrett',
    checkIn: '11 Jan 2022',
    checkOut: '14 Jan 2022',
    guest: 2,
    amount: 879,
    payment: 'Half payment',
    image: avatar4,
  },
  {
    name: 'Frances Guerrero',
    checkIn: '15 Jan 2022',
    checkOut: '19 Jan 2022',
    guest: 4,
    amount: 1254,
    payment: 'Full payment',
    image: avatar5,
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '20 Jan 2022',
    checkOut: '25 Jan 2022',
    guest: 3,
    amount: 1080,
    payment: 'Full payment',
    image: avatar6,
  },
]
