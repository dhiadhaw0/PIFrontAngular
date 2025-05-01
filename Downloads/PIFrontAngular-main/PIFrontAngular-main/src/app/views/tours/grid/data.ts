const course1 = 'assets/images/category/course/01.jpg';
const course2 = 'assets/images/category/course/02.jpg';
const course3 = 'assets/images/category/course/03.jpg';

export type EnrolledCourseType = {
  id: number;
  name: string;
  instructor: string;
  image: string;
  progress: number; // percent
  price: number;
  enrolledDate: string;
  description: string;
};

const enrolledCourses: EnrolledCourseType[] = [
  {
    id: 1,
    name: 'Introduction to Microfinance',
    instructor: 'Dr. Jane Smith',
    image: course1,
    progress: 60,
    price: 99,
    enrolledDate: '2024-05-01',
    description: 'Learn the fundamentals of microfinance and how it empowers communities.'
  },
  {
    id: 2,
    name: 'Digital Banking Essentials',
    instructor: 'Mr. John Doe',
    image: course2,
    progress: 20,
    price: 120,
    enrolledDate: '2024-05-10',
    description: 'Master the essentials of digital banking and fintech.'
  },
  {
    id: 3,
    name: 'Entrepreneurship Basics',
    instructor: 'Ms. Emily Clark',
    image: course3,
    progress: 100,
    price: 85,
    enrolledDate: '2024-04-20',
    description: 'Kickstart your entrepreneurial journey with practical basics.'
  }
];

export { enrolledCourses };
