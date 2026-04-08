export interface Course {
  id: string;
  slug: string;
  title: string;
  duration: string;
  overview: string;
  modules: string[];
  tools: string[];
  careerOutcomes: string[];
  icon: string;
  color: "cyan" | "violet";
  skillLevel: string;
}

export const coursesData: Course[] = [
  {
    id: "c1",
    slug: "full-stack-development",
    title: "Full Stack Web Development",
    duration: "6 months",
    overview: "Master modern web development from the browser to the database. Build scalable applications using the latest JavaScript frameworks.",
    modules: [
      "HTML CSS JavaScript Foundations",
      "React and Next.js Frameworks",
      "Backend Architecture with Node.js",
      "Relational & NoSQL Databases",
      "Deployment strategies and DevOps basics"
    ],
    tools: ["React", "Next.js", "Node.js", "MongoDB", "Git", "Docker"],
    careerOutcomes: [
      "Frontend Developer",
      "Full Stack Developer",
      "Web Application Engineer"
    ],
    icon: "MonitorPlay",
    color: "cyan",
    skillLevel: "Beginner to Intermediate"
  },
  {
    id: "c2",
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    duration: "3 months",
    overview: "A comprehensive introduction to securing digital assets, networks, and understanding the modern threat landscape.",
    modules: [
      "Networking protocol basics",
      "Core security concepts (CIA Triad)",
      "Vulnerability and threat analysis",
      "Incident response protocols"
    ],
    tools: ["Wireshark", "Splunk", "Linux CLI"],
    careerOutcomes: [
      "Security Analyst",
      "IT Support Technician",
      "Network Administrator"
    ],
    icon: "ShieldAlert",
    color: "violet",
    skillLevel: "Beginner"
  },
  {
    id: "c3",
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    duration: "4 months",
    overview: "Learn offensive security techniques to find and patch vulnerabilities before malicious actors exploit them.",
    modules: [
      "Penetration testing methodology",
      "Automated and manual vulnerability scanning",
      "Utilizing ethical hacking toolkits",
      "Network and web app exploitation"
    ],
    tools: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap"],
    careerOutcomes: [
      "Penetration Tester",
      "Security Consultant",
      "Vulnerability Researcher"
    ],
    icon: "TerminalSquare",
    color: "cyan",
    skillLevel: "Intermediate to Advanced"
  },
  {
    id: "c4",
    slug: "blockchain-development",
    title: "Blockchain Development",
    duration: "4 months",
    overview: "Architect decentralized applications (dApps) and write secure smart contracts on major blockchain networks.",
    modules: [
      "Blockchain cryptography and basics",
      "Solidity and smart contract programming",
      "DApp frontend integration",
      "Web3 technologies and protocols"
    ],
    tools: ["Solidity", "Hardhat", "Ethereum", "Web3.js/Ethers.js"],
    careerOutcomes: [
      "Blockchain Developer",
      "Smart Contract Auditor",
      "Web3 Engineer"
    ],
    icon: "Network",
    color: "violet",
    skillLevel: "Intermediate"
  },
  {
    id: "c5",
    slug: "ai-machine-learning-basics",
    title: "AI & Machine Learning Basics",
    duration: "5 months",
    overview: "Dive into data science and learn how to train, test, and deploy machine learning models and AI tools.",
    modules: [
      "Python programming for AI",
      "Data wrangling and analysis",
      "Supervised & unsupervised ML models",
      "AI model deployment and API integration"
    ],
    tools: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    careerOutcomes: [
      "Data Analyst",
      "Junior ML Engineer",
      "AI Integration Specialist"
    ],
    icon: "BrainCircuit",
    color: "cyan",
    skillLevel: "Intermediate"
  }
];
