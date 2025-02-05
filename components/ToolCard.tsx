import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ToolCardProps {
  name: string
  description: string
  category: string
  url: string
}

export function ToolCard({ name, description, category, url }: ToolCardProps) {
  return (
    <Card className="group relative flex flex-col h-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all">
      <Link 
        href={`/${encodeURIComponent(name.toLowerCase())}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${name}`}
      >
        <span className="sr-only">View details for {name}</span>
      </Link>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold line-clamp-1">{name}</CardTitle>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 text-primary group-hover:text-primary-foreground transition-colors"
            aria-label={`Visit ${name} website`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <CardDescription className="text-xs uppercase font-bold tracking-widest">
          {category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm group-hover:text-primary-foreground transition-colors line-clamp-3">
          {description}
        </p>
      </CardContent>
    </Card>
  )
} 