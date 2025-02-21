import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  name: string
  description: string
  shortDescription?: string
  category: string
  url: string
  recommended?: boolean
  personalNote?: string
}

export function ToolCard({ 
  name, 
  description, 
  shortDescription,
  category, 
  url, 
  recommended = false,
  personalNote 
}: ToolCardProps) {
  return (
    <Card className={cn(
      "group relative flex flex-col h-full border-2 hover:bg-primary hover:text-primary-foreground transition-all",
      recommended ? "border-[#4CAF50]" : "border-primary"
    )}>
      {recommended && (
        <div className="absolute -top-3 left-4 z-20 px-2 py-0.5 bg-[#4CAF50] text-white text-xs font-semibold rounded flex items-center gap-1">
          <Star className="h-3 w-3" /> TOP PICK
        </div>
      )}
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
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm group-hover:text-primary-foreground transition-colors line-clamp-3">
          {shortDescription || description}
        </p>
        {personalNote && (
          <div className="mt-2 p-2 bg-muted/50 rounded-md text-sm italic group-hover:bg-primary-foreground/10">
            "Nick's note: {personalNote}"
          </div>
        )}
      </CardContent>
    </Card>
  )
} 