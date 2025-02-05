# Tool Directory Templategit

This repository contains a fully featured tool directory website built with Next.js, Tailwind CSS, TypeScript, shadcn/ui, and integrated with Builder.io for visual content management. The site serves as a centralized directory for various tools and resources, combining a modern, component-driven UI with a headless CMS to allow non-developers to update content visually.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Using shadcn/ui Components](#using-shadcnui-components)
- [Integrating Builder.io](#integrating-builderio)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

The Tool Directory Website is designed to showcase and catalog various digital tools in one place. It leverages:
- **Next.js** for fast server-side rendering and static site generation.
- **Tailwind CSS** to quickly style components with a utility-first approach.
- **TypeScript** to ensure code quality and catch errors during development.
- **shadcn/ui** to provide modern, accessible UI components built on top of Tailwind.
- **Builder.io** as a headless CMS and visual editor to allow marketers and non-technical users to manage content without touching the code.

## Features

- **Modern UI Components:** Built using shadcn/ui and customized with Tailwind CSS.
- **Type-Safe Development:** All code is written in TypeScript for robustness.
- **Visual Content Management:** Seamless integration with Builder.io to allow visual editing.
- **Optimized Performance:** Uses Next.js for server-side rendering and static generation.
- **Responsive Design:** Fully responsive layout that works on desktops, tablets, and mobile devices.
- **Modular Architecture:** Easily extend and maintain features.

## Tech Stack

- **Next.js** – React framework for server-rendered and statically generated apps.  
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.  
- **TypeScript** – Typed superset of JavaScript for writing robust applications.  
- **shadcn/ui** – Pre-built UI components that integrate seamlessly with Tailwind CSS.  
- **Builder.io** – Visual headless CMS to build and manage pages without hard coding.

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v18 or above)
- **Yarn** (preferred package manager)
- **Git**

## Installation and Setup

Follow these steps to set up the project locally:

### Clone the Repository:
```bash
git clone https://github.com/yourusername/tool-directory-website.git
cd tool-directory-website
```

### Install Dependencies:
```bash
yarn install
```

### Initialize shadcn/ui:
```bash
yarn dlx shadcn-ui@latest init
```

### Configure Tailwind CSS:
Ensure that your `tailwind.config.js` includes paths to all of your component and page files. For example:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Set Up Builder.io:
- Install the Builder.io React SDK:
```bash
yarn add @builder.io/react
```
- Create a `.env.local` file in the root directory and add your Builder.io API key:
```env
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_io_api_key
```

## Project Structure

```
tool-directory-website/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Global layout component
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ToolCard.tsx      # Component for displaying a tool entry
├── lib/                  # Utility functions and API clients
│   └── builder.ts        # Builder.io integration utilities
├── public/               # Static assets
├── styles/               # Global styles
├── .env.local            # Environment variables
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Using shadcn/ui Components

To add a new component:
```bash
yarn dlx shadcn-ui@latest add button
```

Import and use the component in your pages:
```tsx
import { Button } from '@/components/ui/button';
export default function HomePage() {
  return (
    <div className="p-4">
      <Button>Click Me</Button>
    </div>
  );
}
```

## Integrating Builder.io

Create a file (e.g., `lib/builder.ts`) to initialize Builder.io:
```tsx
import { builder } from '@builder.io/react';
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);
export default builder;
```

## Development

To start developing the website:
```bash
yarn dev
```

Other useful commands:
- **Linting:** `yarn lint`
- **Building for Production:** `yarn build`

## Deployment

Deploy easily on Vercel by connecting your repository, or follow the respective guides for other platforms.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Builder.io](https://www.builder.io/)