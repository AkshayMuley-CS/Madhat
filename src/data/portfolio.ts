export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  thumbnailUrl: string;
  color: "violet" | "cyan";
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "proj-1",
    slug: "global-fintech-security-overhaul",
    title: "Global FinTech Security Overhaul",
    client: "Nexus Financial Exchange",
    industry: "Financial Services",
    overview: "A complete zero-trust re-architecture for a top-50 global crypto exchange handling $2B+ daily volume.",
    problem: "The client faced repeated state-sponsored DDoS attacks and unauthorized lateral movement within their microservices cluster, risking billions in user funds.",
    solution: "Madhat implemented a zero-trust mesh using Istio, hardened all continuous integration pipelines, and established an automated incident response playbook.",
    technologies: ["Kubernetes", "Istio", "Cloudflare Magic Transit", "Go", "AWS KMS"],
    results: [
      "Zero successful penetrations post-deployment",
      "99.999% uptime maintained during DDoS attempts",
      "Compliance achieved for SOC2 Type II"
    ],
    thumbnailUrl: "/placeholders/fintech.jpg",
    color: "violet"
  },
  {
    id: "proj-2",
    slug: "predictive-ai-supply-chain",
    title: "Predictive AI Supply Chain Automation",
    client: "Logistix Global",
    industry: "Logistics",
    overview: "Built a machine learning platform to predict supply chain bottlenecks globally.",
    problem: "Inefficient routing and unpredictable port delays cost the enterprise over $50M annually in fuel and penalties.",
    solution: "Developed an end-to-end Python microservices architecture utilizing a proprietary Neural Network to process global shipping data in real-time.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "Redis"],
    results: [
      "14% reduction in fuel costs",
      "32% improvement in delivery time precision",
      "$40M saved in the first year of deployment"
    ],
    thumbnailUrl: "/placeholders/ai.jpg",
    color: "cyan"
  },
  {
    id: "proj-3",
    slug: "enterprise-ransomware-recovery",
    title: "Enterprise Ransomware Recovery",
    client: "Confidential Healthcare Provider",
    industry: "Healthcare",
    overview: "Emergency intervention and full infrastructure rebuild following a massive ransomware encryption event.",
    problem: "A sophisticated ransomware strain encrypted 400+ critical servers, halting patient care operations across 12 hospitals.",
    solution: "Madhat deployed a rapid response forensics team, isolated the network segments, reverse-engineered the payload, and securely restored data from air-gapped backups to entirely new, hardened active directories.",
    technologies: ["CrowdStrike Falcon", "Carbon Black", "Azure", "PowerShell", "Splunk"],
    results: [
      "System restored 48 hours faster than industry average",
      "Zero ransom paid to threat actors",
      "No patient data successfully leaked"
    ],
    thumbnailUrl: "/placeholders/healthcare.jpg",
    color: "violet"
  }
];
