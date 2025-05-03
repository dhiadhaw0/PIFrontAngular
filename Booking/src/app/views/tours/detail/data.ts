const gallery03 = 'assets/images/gallery/03.jpg'
const gallery04 = 'assets/images/gallery/04.jpg'
const gallery05 = 'assets/images/gallery/05.jpg'
const gallery06 = 'assets/images/gallery/06.jpg'
const gallery07 = 'assets/images/gallery/07.jpg'
const gallery08 = 'assets/images/gallery/08.jpg'
const gallery09 = 'assets/images/gallery/09.jpg'
const gallery10 = 'assets/images/gallery/10.jpg'
const tour01 = 'assets/images/category/tour/4by3/01.jpg'
const tour02 = 'assets/images/category/tour/4by3/02.jpg'
const tour03 = 'assets/images/category/tour/4by3/03.jpg'

type TourInfoType = {
  title: string
  info: string
}

type CancellationPolicyType = {
  type: string
  refund: string
}

export const inclusionsList: string[] = [
  'Comfortable stay for 4 nights in your preferred category Hotels',
  'Professional English speaking guide to help you explore the cities',
  'Breakfast is included as mentioned in Itinerary.',
  'Per Peron rate on twin sharing basis',
  'Entrance Tickets to Genting Indoor Theme Park',
  'All Tours & Transfers on Seat In Coach Basis',
  'Visit Bali Safari & Marine Park with Jungle Hopper Pass',
]
export const exclusionList: string[] = [
  'Lunch and dinner are not included in CP plans',
  'Any other services not specifically mentioned in the inclusions',
  'Medical and Travel insurance',
  'Airfare is not included',
  'Early Check-In & Late Check-Out',
  'Anything which is not specified in Inclusions',
]

export const highlights: string[] = [
  'Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more',
  'Dependent on so extremely delivered by. Yet ﻿no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.',
  'Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh.',
  'Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to.',
  'All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.',
]

export const aboutTour: string[] = [
  'Guidelines issued by the State-Government are to be followed. Social distancing to be maintained. Frequent hand sanitization and use of mask recommended.',
  'No purse as fully me or point. Kindness owns whatever betrayed her moreover procured replying for and.',
  'International / Domestic flights are not included in the package.',
  'Started several mistakes joy say painful removed reached end. State burst think end are its.',
  'Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous.',
  'Acuteness abilities ask can offending furnished fulfilled sex. The difference in the cost shall be borne by the client in case of any amendment in the package due to an increase in the number of guests',
]

export const tourInfo: TourInfoType[] = [
  { title: 'Place Covered', info: 'Bali - Ubud' },
  { title: 'Duration', info: '5 Days, 4 Nights' },
  { title: 'Start Point', info: 'Ngurah International Airport' },
  { title: 'End Point', info: 'Ngurah International Airport' },
]

export const facility: string[] = [
  'Get up with a delicious lunch and a beautiful view = yr room.',
  'Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments.',
  'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you.',
  'Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. ',
  'Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. ',
  'Applauded no discovery in newspaper allowance am northward. September how men saw tolerably two behavior arranging. ',
]

export const roomImages: string[] = [tour03, tour02, tour01]

export const cancellationPolicy: CancellationPolicyType[] = [
  { type: '10 days', refund: '100%' },
  { type: '10 to 15 days', refund: '75% + Non Refundable Component' },
  { type: '15 to 30 days', refund: '30% + Non Refundable Component' },
  {
    type: '10Hotel / Air',
    refund: '100% in case of non-refundable ticket / Hotel Room',
  },
  { type: '10Cruise / Visa', refund: 'On Actuals' },
]

export const galleryImages: string[] = [
  gallery04,
  gallery05,
  gallery03,
  gallery09,
  gallery10,
  gallery06,
  gallery07,
  gallery08,
]
export const thumbNailImages: string[] = [
  gallery04,
  gallery05,
  gallery03,
  gallery09,
  gallery10,
  gallery06,
  gallery07,
  gallery08,
]
