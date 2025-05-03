export interface Course {
  name: string;
  price: number;
  type: string;
  rating: number;
  duration: string;
  image: string;
  isNew: boolean;
  isPopular: boolean;
  instructor: string;
  mode: string;
}

export interface EnrolledCourse {
  id: number;
  name: string;
  instructor: string;
  image: string;
  progress: number;
  price: number;
  enrolledDate: string;
  description: string;
}
