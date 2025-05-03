const avatar1 = 'assets/images/avatar/01.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar7 = 'assets/images/avatar/07.jpg'
const avatar8 = 'assets/images/avatar/08.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'

export type AgentType = {
  name: string
  location: string
  totalListing: number
  rating: number
  image?: string
  textAvatar?: {
    label: string
    variant: string
  }
  link: { name: string }
}

const agentsList: AgentType[] = [
  {
    name: 'Lori Stevens',
    location: 'Los Angeles, USA',
    totalListing: 4,
    rating: 4.5,
    image: avatar9,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Carolyn Ortiz',
    location: 'New York, USA',
    totalListing: 2,
    rating: 4.3,
    image: avatar1,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Helios Beach Resort',
    location: 'California, USA',
    totalListing: 3,
    rating: 3.9,
    textAvatar: {
      label: 'HB',
      variant: 'primary',
    },
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Dennis Barrett',
    location: 'London, England',
    totalListing: 5,
    rating: 4.2,
    image: avatar3,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Park Plaza Lodge Hotel',
    location: 'Berlin, Germany',
    totalListing: 1,
    rating: 4.8,
    textAvatar: {
      label: 'PPL',
      variant: 'danger',
    },
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Jacqueline Miller',
    location: 'Hanover, Germany',
    totalListing: 2,
    rating: 4.1,
    image: avatar5,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Amanda Reed',
    location: 'Tokyo, Japan',
    totalListing: 4,
    rating: 4.5,
    image: avatar6,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Louis Ferguson',
    location: 'Yokohama, Japan',
    totalListing: 3,
    rating: 4,
    image: avatar7,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Joan Wallace',
    location: 'Mumbai, India',
    totalListing: 2,
    rating: 5.0,
    image: avatar8,
    link: { name: '/admin/agents/detail' },
  },
  {
    name: 'Dennis Stevens',
    location: 'Los Angeles, USA',
    totalListing: 4,
    rating: 4.5,
    image: avatar10,
    link: { name: '/admin/agents/detail' },
  },
]

export { agentsList }
