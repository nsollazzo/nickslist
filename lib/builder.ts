'use client'

import { Builder, builder } from '@builder.io/react'
import { ToolCard } from '@/components/ToolCard'

// Initialize the Builder instance with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

// Register your components
Builder.registerComponent(ToolCard, {
  name: 'Tool Card',
  inputs: [
    {
      name: 'name',
      type: 'string',
      required: true,
    },
    {
      name: 'description',
      type: 'string',
      required: true,
    },
    {
      name: 'category',
      type: 'string',
      required: true,
    },
    {
      name: 'url',
      type: 'string',
      required: true,
    },
  ],
})

// Export builder instance for use in other files
export { builder }
export default Builder 