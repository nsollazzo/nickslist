# Tool Directory Template

This repository contains a fully featured tool directory website built with Next.js, Tailwind CSS, TypeScript, shadcn/ui, and integrated with Builder.io for visual content management. The site serves as a centralized directory for various tools and resources, combining a modern, component-driven UI with a headless CMS to allow non-developers to update content visually.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Components](#components)
- [Theme System](#theme-system)
- [Builder.io Integration](#builderio-integration)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Tool Directory Website is designed to showcase and catalog various digital tools in one place. It leverages:
- **Next.js 14** for fast server-side rendering and static site generation
- **Tailwind CSS** for utility-first styling
- **TypeScript** for type safety
- **shadcn/ui** for modern, accessible UI components
- **Builder.io** for headless CMS functionality

## Features

- **Modern UI Components:** Built using shadcn/ui and customized with Tailwind CSS
- **Dark Mode Support:** System-aware theme switching with pure black dark mode
- **Visual Content Management:** Seamless Builder.io integration for content editing
- **Tool Directory:**
  - Categorized tool listings
  - Dynamic filtering by category
  - Loading states and error handling
  - Responsive grid layout
- **Type-Safe Development:** Full TypeScript implementation
- **Responsive Design:** Mobile-first approach with responsive layouts
- **Performance Optimized:** Server-side rendering and client-side state management

## Tech Stack

- **Next.js 14** – React framework with App Router
- **Tailwind CSS** – Utility-first CSS framework
- **TypeScript** – Static typing and enhanced developer experience
- **shadcn/ui** – Customizable UI components
- **Builder.io** – Headless CMS
- **next-themes** – Theme management

## Project Structure

```
tool-directory-template/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page with tool directory
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── builder-content.tsx # Builder.io wrapper component
│   ├── theme-provider.tsx # Theme provider component
│   ├── theme-toggle.tsx   # Theme switching button
│   └── ToolCard.tsx      # Tool display component
├── lib/                  # Utility functions
│   └── builder.ts       # Builder.io configuration
├── types/               # TypeScript type definitions
├── public/             # Static assets
├── styles/            # Global styles
│   └── globals.css   # Global CSS with theme variables
├── .env.local        # Environment variables
└── tailwind.config.js # Tailwind configuration
```

## Components

### Core Components
- **ThemeProvider:** Manages application-wide theme state
- **ThemeToggle:** Button for switching between light and dark modes
- **BuilderContent:** Client-side wrapper for Builder.io components
- **ToolCard:** Displays individual tool information

### Theme System
The application includes a comprehensive theme system with:
- Light and dark mode support
- System theme detection
- Pure black dark mode
- Smooth theme transitions
- Persistent theme preference

### Builder.io Integration
The Builder.io integration is implemented with:
- Client-side rendering for Builder.io components
- Custom component registration
- Dynamic content fetching
- Error handling and loading states

## Configuration

### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_io_api_key
```

### Tailwind Configuration
The theme system is configured in `tailwind.config.js` with:
- Dark mode class strategy
- Custom color variables
- Extended theme configuration

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## Theme Customization

### Light Theme
The light theme uses a clean, neutral color palette:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables ... */
}
```

### Dark Theme
The dark theme uses pure black for maximum contrast:
```css
.dark {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  /* ... other variables ... */
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.