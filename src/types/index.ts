export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url?: string
  github?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
  rating: number
}