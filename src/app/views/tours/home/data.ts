const tour1 = 'assets/images/category/tour/01.jpg'
const tour2 = 'assets/images/category/tour/02.jpg'
const tour3 = 'assets/images/category/tour/03.jpg'
const tour4 = 'assets/images/category/tour/04.jpg'

const category13 = 'assets/images/category/hotel/nearby/13.jpg'
const category14 = 'assets/images/category/hotel/nearby/14.jpg'
const category15 = 'assets/images/category/hotel/nearby/15.jpg'
const category16 = 'assets/images/category/hotel/nearby/16.jpg'
const category17 = 'assets/images/category/hotel/nearby/17.jpg'
const category18 = 'assets/images/category/hotel/nearby/18.jpg'
const category19 = 'assets/images/category/hotel/nearby/19.jpg'
const category20 = 'assets/images/category/hotel/nearby/20.jpg'

const avatar1 = 'assets/images/team/01.jpg'
const avatar2 = 'assets/images/team/02.jpg'

const course1 = 'assets/images/category/course/01.jpg'
const course2 = 'assets/images/category/course/02.jpg'
const course3 = 'assets/images/category/course/03.jpg'
const course4 = 'assets/images/category/course/04.jpg'

export type CourseType = {
  name: string
  price: number
  type: string
  rating: number
  duration: string
  image: string
  isNew: boolean
  isPopular: boolean
  instructor: string
  mode: string
}

type CategoryType = {
  name: string
  image: string
  places: string
}

type SliderType = {
  name: string
  description: string
  image: string
}

const courses: CourseType[] = [
  {
    name: 'Introduction to Microfinance',
    type: 'Finance',
    price: 99,
    duration: '4 weeks',
    rating: 4.8,
    image: course1,
    isNew: true,
    isPopular: false,
    instructor: 'Dr. Jane Smith',
    mode: 'Online',
  },
  {
    name: 'Digital Banking Essentials',
    type: 'Technology',
    price: 120,
    duration: '6 weeks',
    rating: 4.7,
    image: course2,
    isNew: false,
    isPopular: true,
    instructor: 'Mr. John Doe',
    mode: 'Offline',
  },
  {
    name: 'Entrepreneurship Basics',
    type: 'Business',
    price: 85,
    duration: '5 weeks',
    rating: 4.6,
    image: course3,
    isNew: false,
    isPopular: true,
    instructor: 'Ms. Emily Clark',
    mode: 'Online',
  },
  {
    name: 'Financial Literacy for All',
    type: 'Education',
    price: 60,
    duration: '3 weeks',
    rating: 4.9,
    image: course4,
    isNew: true,
    isPopular: false,
    instructor: 'Dr. Ahmed Ali',
    mode: 'Offline',
  },
]

const featuredCourses = [
  {
    name: 'Introduction to Microfinance',
    image: course1,
    instructor: 'Dr. Jane Smith',
    rating: 4.8,
    description: 'Learn the fundamentals of microfinance and how it empowers communities.'
  },
  {
    name: 'Digital Banking Essentials',
    image: course2,
    instructor: 'Mr. John Doe',
    rating: 4.7,
    description: 'Master the essentials of digital banking and fintech.'
  },
  {
    name: 'Entrepreneurship Basics',
    image: course3,
    instructor: 'Ms. Emily Clark',
    rating: 4.6,
    description: 'Kickstart your entrepreneurial journey with practical basics.'
  },
  {
    name: 'Financial Literacy for All',
    image: course4,
    instructor: 'Dr. Ahmed Ali',
    rating: 4.9,
    description: 'Improve your financial literacy for a better future.'
  }
];

const topCategories: CategoryType[] = [
  {
    name: 'Beach',
    places: '4,568',
    image: category20,
  },
  {
    name: 'Heritage',
    places: '2,845',
    image: category19,
  },
  {
    name: 'Desert',
    places: '1,587',
    image: category18,
  },
  {
    name: 'Tower',
    places: '986',
    image: category17,
  },
  {
    name: 'Mountain',
    places: '786',
    image: category16,
  },
  {
    name: 'Safari',
    places: '568',
    image: category15,
  },
  {
    name: 'Temple',
    places: '256',
    image: category14,
  },
  {
    name: 'Festival',
    places: '654',
    image: category13,
  },
]

const testimonialSlides: SliderType[] = [
  {
    name: 'Louis Ferguson',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar1,
  },
  {
    name: 'Lori Stevens',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar2,
  },
]

export { courses, featuredCourses, topCategories, testimonialSlides }
