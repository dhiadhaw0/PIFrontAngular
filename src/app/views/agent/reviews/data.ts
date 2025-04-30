const avatar1 = 'assets/images/avatar/01.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar7 = 'assets/images/avatar/07.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'

const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'

export type ReviewType = {
  name: string
  time: string
  avatar: string
  reviewOn: string
  description: string
  images?: string[]
  rating: number
  reply?: boolean
}

export type UserReviewType = {
  icon: string
  textColor: string
  counterValue: string
  counterLabel: string
}

const userReviews: ReviewType[] = [
  {
    name: 'Frances Guerrero',
    time: '2 days ago',
    avatar: avatar1,
    reviewOn: 'Pride moon Village Resort & Spa',
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    rating: 4,
    images: [hotel7, hotel8],
    reply: true,
  },
  {
    name: 'Louis Ferguson',
    time: 'Nov 18, 2022 at 11:55 am',
    avatar: avatar7,
    reviewOn: ' Courtyard by Marriott New York',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    rating: 4,
  },
  {
    name: 'Carolyn Ortiz',
    time: 'Nov 22, 2022 at 2:00 pm',
    avatar: avatar6,
    reviewOn: 'Pride moon Village Resort & Spa',
    description:
      'Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    rating: 4,
  },
  {
    name: 'Dennis Barrett',
    time: 'Nov 18, 2022 at 2:00 pm',
    avatar: avatar10,
    reviewOn: 'Pride moon Village Resort & Spa',
    description:
      'Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    rating: 4,
  },
]

const reviews: UserReviewType[] = [
  {
    icon: 'bi-trophy',
    textColor: 'text-primary',
    counterValue: '4.5',
    counterLabel: 'Average Rating',
  },
  {
    icon: 'bi-star',
    textColor: 'text-warning',
    counterValue: '548',
    counterLabel: 'Total Reviews',
  },
  {
    icon: 'bi-exclamation-octagon',
    textColor: 'text-danger',
    counterValue: '56',
    counterLabel: 'Unaddressed Reviews',
  },
  {
    icon: 'bi-bookmark-star',
    textColor: 'text-success',
    counterValue: '145',
    counterLabel: 'New reviews in the last 30 days',
  },
]

export { userReviews, reviews }
