export interface Tool {
  name: string
  description: string
  category: string
  url: string
  image?: string
  features?: string[]
  documentation?: string
  pricing?: {
    free?: boolean
    hasPaidPlan?: boolean
    priceRange?: string
  }
  platforms?: string[]
  alternatives?: string[]
} 