const element18 = 'assets/images/element/18.svg'
const element19 = 'assets/images/element/19.svg'
const element20 = 'assets/images/element/20.svg'
const element21 = 'assets/images/element/21.svg'

const photo1 = 'assets/images/team/09.jpg'
const photo2 = 'assets/images/team/06.jpg'

type BenefitType = {
  image: string
  title: string
  description: string
}

type TestimonialType = {
  title: string
  image: string
  description: string
  name: string
  position: string
}

export const benefits: BenefitType[] = [
  {
    image: element18,
    title: 'List any type of properties',
    description:
      'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.',
  },
  {
    image: element21,
    title: 'Import detail easily',
    description:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly open Betrayed.',
  },
  {
    image: element19,
    title: 'Step by step guide',
    description:
      'Rooms oh fully taken by worse do. Points afraid but may end law.Points afraid but may end law.',
  },
  {
    image: element20,
    title: 'Marvelous discounts',
    description:
      'Prospective should start broadly and then narrow their list down to colleges that best fit experts',
  },
]

export const testimonialSlides: TestimonialType[] = [
  {
    image: photo1,
    title: 'Fantastic job done by booking',
    description:
      'Size like body some one had. Departure defective arranging rapturous did. Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Conduct denied adding worthy little.  Departure defective arranging rapturous did. Conduct denied adding worthy little.',
    name: 'Lori Stevens',
    position: 'CEO of Blogzine',
  },
  {
    image: photo2,
    title: 'Fantastic job done by booking',
    description:
      'Size like body some one had. Departure defective arranging rapturous did. Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Conduct denied adding worthy little.  Departure defective arranging rapturous did. Conduct denied adding worthy little.',
    name: 'Dennis Barrett',
    position: 'CEO of Wizixo',
  },
]
