export interface Founder {
  id: string;
  name: string;
  role: string;
  photoFallback: string; // Used when image isn't available
  biography: string;
  expertise: string[];
}

export const foundersData: Founder[] = [
  {
    id: "founder-1",
    name: "Akshay Muley",
    role: "Co-Founder & Technology Director",
    photoFallback: "AM",
    biography: "With over a decade of experience architecting high-performance distributed systems, Akshay leads the engineering division at Madhat. His focus is on scalable cloud infrastructure, zero-trust backend architecture, and leading the transition of enterprise monolithic applications into resilient microservices.",
    expertise: ["Cloud Architecture", "Distributed Systems", "Next.js & React", "Zero-Trust Engineering"]
  },
  {
    id: "founder-2",
    name: "Yash Raut",
    role: "Co-Founder & Cybersecurity Lead",
    photoFallback: "YR",
    biography: "A seasoned offensive security researcher and digital forensics expert, Yash directs Madhat's incident response and penetration testing teams. He has successfully mitigated large-scale ransomware events and frequently consults for Fortune 500 companies on hardening their attack surfaces against emerging AI-driven threats.",
    expertise: ["Digital Forensics", "Penetration Testing", "Threat Intelligence", "Incident Response"]
  }
];
