export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Will act as markdown/raw HTML string for now
  author: string;
  date: string;
  category: "Software Development" | "Cybersecurity" | "Technology Trends" | string;
  readTime: string;
  thumbnailUrl: string;
}

export const blogData: BlogPost[] = [
  {
    id: "post-1",
    slug: "zero-trust-architecture-2024",
    title: "Implementing Zero Trust Architecture in 2024",
    excerpt: "Why the perimeter-based security model is dead, and how to build a network where every request must prove its identity regardless of origin.",
    content: "Zero Trust Architecture (ZTA) assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location. In this article, we cover how to strictly implement Identity-Aware Proxies, micro-segmentation, and dynamic policies.",
    author: "Yash Raut",
    date: "March 10, 2024",
    category: "Cybersecurity",
    readTime: "8 min read",
    thumbnailUrl: "/placeholders/zero-trust.jpg"
  },
  {
    id: "post-2",
    slug: "nextjs-app-router-migration",
    title: "Migrating Enterprise Apps to Next.js App Router",
    excerpt: "A deep dive into the performance gains achieved by transitioning from React SPA architectures to Server Components.",
    content: "The introduction of React Server Components inside Next.js 14 represents a paradigm shift in how we deliver JavaScript to the browser. By aggressively pruning client bundles and fetching data directly on the server, we have seen Lighthouse scores jump by 40% on average for our clients.",
    author: "Akshay Muley",
    date: "February 28, 2024",
    category: "Software Development",
    readTime: "12 min read",
    thumbnailUrl: "/placeholders/nextjs.jpg"
  },
  {
    id: "post-3",
    slug: "ai-in-penetration-testing",
    title: "The Role of AI in Automated Penetration Testing",
    excerpt: "How threat actors are utilizing Large Language Models to write malicious payloads, and how defenders can use them to patch vulnerabilities.",
    content: "The cybersecurity arms race has entered a new phase. AI agents are now capable of mapping attack surfaces, identifying CVEs, and autonomously generating exploit chains. To defend against this, organizations must integrate LLMs into their defensive posture, utilizing AI-driven fuzzing and code review.",
    author: "Madhat Research Team",
    date: "February 15, 2024",
    category: "Technology Trends",
    readTime: "6 min read",
    thumbnailUrl: "/placeholders/ai-hacking.jpg"
  }
];
