export interface Service {
  id: string;
  slug: string;
  title: string;
  overview: string;
  problemsSolved: string[];
  technologies: string[];
  methodology: string;
  icon: string;
  color: "violet" | "cyan";
}

export const servicesData: Service[] = [
  {
    id: "s1",
    slug: "software-development",
    title: "Software Development",
    overview: "Custom web applications, SaaS platforms, enterprise systems, and mobile applications engineered for global scalability.",
    problemsSolved: [
      "Fragmented enterprise systems causing data silos",
      "Outdated legacy infrastructure preventing agility",
      "Lack of mobile presence limiting user engagement"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Go"],
    methodology: "Agile Development, Test-Driven Design (TDD), CI/CD pipelines ensuring continuous deployment.",
    icon: "Code",
    color: "cyan"
  },
  {
    id: "s2",
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    overview: "Comprehensive security architecture, risk assessments, and robust security implementation protecting critical digital assets.",
    problemsSolved: [
      "Vulnerable infrastructure prone to cyber attacks",
      "Non-compliance with SOC2/HIPAA regulations",
      "Lack of internal security protocols"
    ],
    technologies: ["Zero-Trust Architectures", "AWS Shield", "HashiCorp Vault"],
    methodology: "Threat modeling, ongoing security posture assessments, and incident response planning.",
    icon: "ShieldCheck",
    color: "violet"
  },
  {
    id: "s3",
    slug: "digital-forensics",
    title: "Digital Forensics",
    overview: "Advanced investigation of cyber incidents, systematic data recovery, and immutable evidence analysis.",
    problemsSolved: [
      "Untracked internal data breaches",
      "Lost or corrupted critical business data",
      "Lack of legally verifiable evidence post-incident"
    ],
    technologies: ["EnCase", "FTK", "Wireshark", "Volatility"],
    methodology: "Chain of custody tracking, deep memory analysis, and comprehensive incident timeline reconstruction.",
    icon: "Search",
    color: "cyan"
  },
  {
    id: "s4",
    slug: "cyber-harassment-investigation",
    title: "Cyber Harassment Investigation",
    overview: "Online harassment tracing, attacker identity investigation, and legally compliant support reports.",
    problemsSolved: [
      "Anonymous online threats and harassment",
      "Corporate brand defamation attacks",
      "DoXing and unauthorized data exposure"
    ],
    technologies: ["OSINT Tools", "Maltego", "Dark Web Monitors"],
    methodology: "Digital footprint correlation, IP tracing, and legal documentation synthesis.",
    icon: "UserSearch",
    color: "violet"
  },
  {
    id: "s5",
    slug: "penetration-testing",
    title: "Penetration Testing",
    overview: "Deep vulnerability discovery, network security testing, and advanced application security auditing.",
    problemsSolved: [
      "Undiscovered zero-day application flaws",
      "Insecure API endpoints",
      "Weakly configured network barriers"
    ],
    technologies: ["Burp Suite", "Metasploit", "Nmap", "Kali Linux"],
    methodology: "Black-box, Gray-box, and White-box advanced attack simulations.",
    icon: "Target",
    color: "cyan"
  },
  {
    id: "s6",
    slug: "security-audits",
    title: "Security Audits",
    overview: "Infrastructure security review, automated code security analysis, and thorough compliance assessment.",
    problemsSolved: [
      "Unverified third-party dependencies",
      "Failing compliance audits (GDPR, PCI-DSS)",
      "Insecure IaC (Infrastructure as Code) templates"
    ],
    technologies: ["SonarQube", "Checkmarx", "Tenable", "AWS Config"],
    methodology: "Automated static analysis coupled with manual architectural review.",
    icon: "CheckSquare",
    color: "violet"
  }
];
