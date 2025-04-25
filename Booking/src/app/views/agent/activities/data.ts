const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'

type ActivityType = {
  title: string
  date: string
  icon?: string
  variant?: string
  image?: string
}

export const recentActivities: ActivityType[] = [
  {
    title:
      'Your listing <a href="javascript:void(0);" class="text-primary">Courtyard by Marriott New York</a> has been approved',
    date: '2 Days ago',
    icon: 'bi-check-lg',
    variant: 'text-bg-success',
  },
  {
    title:
      'Louis Ferguson booked your <span class="fw-bold">Hotel Baljees Regency</span> Hotel room',
    date: '15 Nov 2022',
    image: avatar4,
  },
  {
    title:
      'Someone left a review on <span class="fw-bold">Park Plaza Lodge Hotel</span> listing',
    date: '13 Nov 2022',
    icon: 'bi-chat',
    variant: 'text-bg-info',
  },
  {
    title: 'Your payment received successfully',
    date: '13 Nov 2022',
    icon: 'bi-check-lg',
    variant: 'text-bg-success',
  },
  {
    title: `Amanda Reed Cancel booking in <a href="javascript:void(0);" class="text-primary">Courtyard by Marriott New York</a> hotel`,
    date: '11 Nov 2022',
    image: avatar5,
  },
  {
    title:
      'Lori Stevens booked your <span class="fw-bold">Pride moon Village Resort & Spa</span> Hotel room',
    date: '10 Nov 2022',
    image: avatar9,
  },
]
