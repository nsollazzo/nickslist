import { Builder } from '@builder.io/react'
import { ToolCard } from '../ToolCard'

interface ToolCardBuilderProps {
  name: string
  description: string
  shortDescription?: string
  category: string
  url: string
}

export const ToolCardBuilder = ({ name, description, shortDescription, category, url }: ToolCardBuilderProps) => {
  return <ToolCard name={name} description={description} shortDescription={shortDescription} category={category} url={url} />
}

// Register the component with Builder.io
Builder.registerComponent(ToolCardBuilder, {
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
      name: 'shortDescription',
      type: 'string',
      required: false,
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