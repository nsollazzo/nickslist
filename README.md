# Nick's List

A curated collection of tools and resources that Nick recommends for developers and tech enthusiasts. Built with Next.js, TypeScript, and Tailwind CSS.

## About

Nick's List is a personal recommendation platform where I share my favorite development tools, software, and resources. Each tool comes with:

- Detailed description
- Personal experience notes
- Rating and last tested date
- Categories and features
- Pricing information (when applicable)
- Documentation links
- Alternative options

## Features

- 🎯 Personal recommendations and top picks
- 📝 Detailed tool descriptions with personal notes
- 🏷️ Category-based filtering
- 💫 Modern, responsive UI built with shadcn/ui
- 🚀 Fast and SEO-friendly with Next.js
- 📱 Mobile-first design
- 🎨 Beautiful animations and transitions
- 🔍 Quick search functionality

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Builder.io
- **Package Manager**: Yarn

## Development

### Prerequisites

- Node.js 18+
- Yarn
- Builder.io account (for content management)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nickslist.git
   cd nickslist
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your Builder.io API key to `.env.local`

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
nickslist/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Global layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── ToolCard.tsx    # Tool display component
├── lib/                # Utility functions
├── types/              # TypeScript types
└── public/             # Static assets
```

## Contributing

While this is primarily a personal list of recommendations, I welcome suggestions for tools to review. Please open an issue to suggest a tool.

## License

MIT License - feel free to use this project as a template for your own tool directory.

---

Built with ❤️ by Nick