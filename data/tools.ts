import { Tool } from "@/types/tool"

export const tools: Tool[] = [
  {
    name: "VS Code",
    description: "A powerful code editor with extensive plugin support and Git integration.",
    category: "Development",
    url: "https://code.visualstudio.com",
    image: "/images/tools/vscode.png",
    features: [
      "Integrated Git support",
      "Rich extension ecosystem",
      "IntelliSense code completion",
      "Built-in terminal",
      "Live Share collaboration"
    ],
    documentation: "https://code.visualstudio.com/docs",
    pricing: {
      free: true,
      hasPaidPlan: false
    },
    platforms: ["Windows", "macOS", "Linux"],
    alternatives: ["Sublime Text", "Atom", "WebStorm"]
  },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running applications in containers.",
    category: "DevOps",
    url: "https://www.docker.com",
    image: "/images/tools/docker.png",
    features: [
      "Container orchestration",
      "Docker Compose",
      "Docker Hub registry",
      "Multi-platform support",
      "Resource isolation"
    ],
    documentation: "https://docs.docker.com",
    pricing: {
      free: true,
      hasPaidPlan: true,
      priceRange: "$5-$7/user/month"
    },
    platforms: ["Windows", "macOS", "Linux"],
    alternatives: ["Podman", "Kubernetes", "LXC"]
  },
  {
    name: "Postman",
    description: "Popular API client for testing and documenting APIs.",
    category: "API Development",
    url: "https://www.postman.com",
    image: "/images/tools/postman.png",
    features: [
      "API testing",
      "Automated testing",
      "API documentation",
      "Team collaboration",
      "Mock servers"
    ],
    documentation: "https://learning.postman.com",
    pricing: {
      free: true,
      hasPaidPlan: true,
      priceRange: "$12-$30/user/month"
    },
    platforms: ["Windows", "macOS", "Linux", "Web"],
    alternatives: ["Insomnia", "Thunder Client", "Hoppscotch"]
  },
  {
    name: "GitHub",
    description: "Web-based platform for version control and collaboration using Git.",
    category: "Version Control",
    url: "https://github.com",
    image: "/images/tools/github.png",
    features: [
      "Git repository hosting",
      "Pull requests",
      "Issue tracking",
      "GitHub Actions",
      "Project management"
    ],
    documentation: "https://docs.github.com",
    pricing: {
      free: true,
      hasPaidPlan: true,
      priceRange: "$4-$21/user/month"
    },
    platforms: ["Web"],
    alternatives: ["GitLab", "Bitbucket", "Azure DevOps"]
  },
  {
    name: "Figma",
    description: "Collaborative interface design tool for creating UI/UX designs.",
    category: "Design",
    url: "https://www.figma.com",
    image: "/images/tools/figma.png",
    features: [
      "Real-time collaboration",
      "Component libraries",
      "Auto-layout",
      "Prototyping",
      "Developer handoff"
    ],
    documentation: "https://help.figma.com",
    pricing: {
      free: true,
      hasPaidPlan: true,
      priceRange: "$12-$45/user/month"
    },
    platforms: ["Windows", "macOS", "Web"],
    alternatives: ["Adobe XD", "Sketch", "Penpot"]
  },
  {
    name: "MongoDB Compass",
    description: "GUI for MongoDB database management and exploration.",
    category: "Database",
    url: "https://www.mongodb.com/products/compass",
    image: "/images/tools/mongodb-compass.png",
    features: [
      "Visual query builder",
      "Data visualization",
      "Schema analysis",
      "Performance optimization",
      "CRUD operations"
    ],
    documentation: "https://docs.mongodb.com/compass",
    pricing: {
      free: true,
      hasPaidPlan: false
    },
    platforms: ["Windows", "macOS", "Linux"],
    alternatives: ["Studio 3T", "NoSQLBooster", "MongoDB Atlas"]
  }
] 