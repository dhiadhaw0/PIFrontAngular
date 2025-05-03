const avatar1 = 'assets/images/team/01.jpg'
const avatar2 = 'assets/images/team/02.jpg'
const avatar3 = 'assets/images/team/03.jpg'
const avatar4 = 'assets/images/team/04.jpg'
const avatar5 = 'assets/images/team/05.jpg'
const avatar6 = 'assets/images/team/06.jpg'
const avatar7 = 'assets/images/team/07.jpg'
const avatar8 = 'assets/images/team/08.jpg'
const avatar9 = 'assets/images/team/09.jpg'
const avatar10 = 'assets/images/team/10.jpg'

type TeamType = {
  name: string
  position: string
  image: string
}

const teamMembers: TeamType[] = [
  {
    name: 'Dennis Barrett',
    position: 'UK Tourist Guide',
    image: avatar1,
  },
  {
    name: 'Jacqueline Miller',
    position: 'Us Tourist Guide',
    image: avatar2,
  },
  {
    name: 'Larry Lawson',
    position: 'Editor in Chief',
    image: avatar3,
  },
  {
    name: 'Louis Ferguson',
    position: 'CEO & Founder',
    image: avatar4,
  },
  {
    name: 'Louis Crawford',
    position: 'Editor, Coverage',
    image: avatar5,
  },
  {
    name: 'Frances Guerrero',
    position: 'Managing Editor',
    image: avatar6,
  },
  {
    name: 'Amanda Reed',
    position: 'Managing Editor',
    image: avatar7,
  },
  {
    name: 'Samuel Bishop',
    position: 'Co-Founder',
    image: avatar8,
  },
  {
    name: 'Lori Stevens',
    position: 'Managing Editor',
    image: avatar9,
  },
  {
    name: 'Billy Vasquez',
    position: 'CTO',
    image: avatar10,
  },
]

export { teamMembers }
