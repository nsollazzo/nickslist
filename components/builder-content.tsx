'use client'

import { BuilderComponent } from '@builder.io/react'
import { builder } from '@/lib/builder'

interface BuilderContentProps {
  model: string
  content?: any
}

export function BuilderContent({ model, content }: BuilderContentProps) {
  return <BuilderComponent model={model} content={content} />
} 