export type DirectoryDealType = {
  category: {
    name: string
    icon: string
  }
  name: string
  price: number
  sale: string
  salePrice: number
  valid: {
    icon: string
    label: string
  }[]
}

export type SliderItemType = {
  fullScreenUrl: string
  imageUrl: string
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content:
      'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024',
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024',
  },
]

const directoryDeals: DirectoryDealType[] = [
  {
    category: {
      name: 'Salon',
      icon: 'bi-scissors',
    },
    name: 'Monsoon Offer: Men: Global Hair Color With Free Manicure / Pedicure / Haircut',
    price: 1800,
    salePrice: 1500,
    sale: '40% off',
    valid: [
      {
        icon: 'bi-person',
        label: '1 Male',
      },
      {
        icon: 'bi-calendar',
        label: 'Mon - Fri',
      },
      {
        icon: 'bi-clock',
        label: '11 AM - 6 PM',
      },
    ],
  },
  {
    category: {
      name: 'Spa',
      icon: 'fa-spa',
    },
    name: 'Women Special Offer (Aroma Therapy - 30 min)',
    price: 900,
    salePrice: 820,
    sale: '30% off',
    valid: [
      {
        icon: 'bi-person',
        label: '1 Female',
      },
      {
        icon: 'bi-calendar',
        label: 'Mon - Fri',
      },
      {
        icon: 'bi-clock',
        label: '11 AM - 6 PM',
      },
    ],
  },
]

const sliderItems: SliderItemType[] = [
  {
    imageUrl: 'assets/images/category/directory/11.jpg',
    fullScreenUrl: 'assets/images/category/directory/11.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/09.jpg',
    fullScreenUrl: 'assets/images/category/directory/09.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/02.jpg',
    fullScreenUrl: 'assets/images/category/directory/02.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/03.jpg',
    fullScreenUrl: 'assets/images/category/directory/03.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/10.jpg',
    fullScreenUrl: 'assets/images/category/directory/10.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/08.jpg',
    fullScreenUrl: 'assets/images/category/directory/08.jpg',
  },
  {
    imageUrl: 'assets/images/category/directory/07.jpg',
    fullScreenUrl: 'assets/images/category/directory/07.jpg',
  },
]

export { directoryDeals, sliderItems }
