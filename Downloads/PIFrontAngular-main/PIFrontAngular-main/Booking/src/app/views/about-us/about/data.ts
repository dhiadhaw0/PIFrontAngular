const team3 = 'assets/images/team/03.jpg'
const team4 = 'assets/images/team/04.jpg'
const team5 = 'assets/images/team/05.jpg'
const team6 = 'assets/images/team/06.jpg'

type OurStoryType = {
  title: string
  description: string
  icon: string
  variant: string
}

type TeamType = {
  name: string
  image: string
  position: string
}

const ourStories: OurStoryType[] = [
  {
    title: 'Hotel Booking',
    description:
      'A pleasure exertion if believed provided to. All led out world this music while asked.',
    icon: 'fa-hotel',
    variant: 'bg-orange text-orange',
  },
  {
    title: 'Flight Booking',
    description:
      'Warrant private blushes removed an in equally totally Objection do Mr prevailed.',
    icon: 'fa-plane',
    variant: 'bg-success text-success',
  },
  {
    title: 'Tour Booking',
    description:
      'Dashwood does provide stronger is. But discretion frequently sir she instruments.',
    icon: 'fa-globe-americas',
    variant: 'bg-primary text-primary',
  },
  {
    title: 'Cab Booking',
    description:
      'Imprudence attachment him his for sympathize. Large above be to means.',
    icon: 'fa-car',
    variant: 'bg-info text-info',
  },
]

const ourTeams: TeamType[] = [
  {
    name: 'Larry Lawson',
    position: 'Editor in Chief',
    image: team3,
  },
  {
    name: 'Louis Ferguson',
    position: 'Director Graphics',
    image: team4,
  },
  {
    name: 'Louis Crawford',
    position: 'Editor, Coverage',
    image: team5,
  },
  {
    name: 'Frances Guerrero',
    position: 'CEO, Coverage',
    image: team6,
  },
]
export { ourStories, ourTeams }
