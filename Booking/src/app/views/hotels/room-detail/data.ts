const gallery11 = 'assets/images/gallery/11.jpg'
const gallery15 = 'assets/images/gallery/15.jpg'
const gallery14 = 'assets/images/gallery/14.jpg'
const gallery16 = 'assets/images/gallery/16.jpg'

const hotel1 = 'assets/images/category/hotel/4by3/10.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/11.jpg'

export type HotelRoomType = {
  id: number
  name: string
  sqfeet: number
  price: number
  images: string[]
}

const roomDetails: HotelRoomType[] = [
  {
    id: 1,
    name: 'Deluxe Pool View with Breakfast',
    images: [hotel1, gallery11, gallery15, gallery14, gallery16],
    sqfeet: 315,
    price: 385,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    images: [hotel2, gallery11, gallery15, gallery14, gallery16],
    sqfeet: 458,
    price: 485,
  },
]

export { roomDetails }
