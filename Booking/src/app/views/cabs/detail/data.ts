const vehicle1 = 'assets/images/category/cab/seadan.svg'

export type CabCardType = {
  id: number
  name: string
  image: string
  keyFeatures: string[]
  rating: number
  features: string[]
  notes: string[]
}

const cabData: CabCardType = {
  id: 1,
  name: 'Camry, Accord',
  keyFeatures: ['SEDAN', 'AC', '4 Seats'],
  rating: 4.5,
  features: [
    '600Kms included. After that $15/Kms',
    '2 luggage bags ',
    'Diesel Car',
  ],
  notes: [
    'Free Cancellation, till 1 hour of Pick up',
    'Free waiting up to 45 minutes',
  ],
  image: vehicle1,
}

export { cabData }
