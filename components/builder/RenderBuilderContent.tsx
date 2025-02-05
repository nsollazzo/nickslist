import { BuilderComponent, builder, Builder } from '@builder.io/react'
import { ToolCardBuilder } from './ToolCardBuilder'

// Register your components
Builder.registerComponent(ToolCardBuilder, {
  name: 'Tool Card',
})

interface RenderBuilderContentProps {
  content: any // You might want to type this properly based on your needs
}

export function RenderBuilderContent({ content }: RenderBuilderContentProps) {
  return (
    <div className="flex-1">
      <BuilderComponent
        content={content}
        model="page"
      />
    </div>
  )
} 