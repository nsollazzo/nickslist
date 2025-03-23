export interface Tool {
  name: string
  description: string
  shortDescription?: string
  category: string
  url: string
  image?: string
  icon?: string
  recommended?: boolean
  personalNote?: string
  features?: string[]
  documentation?: string
  pricing?: {
    free?: boolean
    hasPaidPlan?: boolean
    priceRange?: string
  }
  platforms?: string[]
  alternatives?: string[]
  lastTestedDate?: string
  rating?: number // 1-5 scale
} 