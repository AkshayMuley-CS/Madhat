import React from "react";
import { Layers, Box, Terminal, Database, Server, Hexagon, ShieldHalf } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  { name: "Next.js", icon: Layers, desc: "Server-side rendering and static site generation for peak web performance." },
  { name: "React", icon: Box, desc: "Building interactive, modular, and reusable user interfaces." },
  { name: "Node.js", icon: Terminal, desc: "Scalable backend architecture and scalable network applications." },
  { name: "Python", icon: Terminal, desc: "Data processing, AI modeling, and automation scripting." },
  { name: "PostgreSQL", icon: Database, desc: "Robust, enterprise-grade relational database management." },
  { name: "AWS", icon: Server, desc: "Cloud infrastructure provisioning and highly available deployments." },
  { name: "Blockchain", icon: Hexagon, desc: "Decentralized applications, smart contracts, and Web3 integration." },
  { name: "Security Tools", icon: ShieldHalf, desc: "Advanced forensic analysis, penetration testing utilities, and monitoring." },
];

export default function TechStackSection() {
  return (
    <section className="py-24 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand-cyan tracking-widest uppercase mb-3">
              Technology Stack
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              Powered by Modern Tech
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.05}>
              <div className="glass-card relative flex flex-col items-center justify-center p-8 hover:border-brand-cyan/50 hover:bg-dark group cursor-default h-48 overflow-hidden transition-all duration-300">
                  
                  {/* Default State */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                      <tech.icon className="w-12 h-12 text-slate-500 mb-4 transition-colors group-hover:text-brand-cyan" />
                      <span className="font-bold text-lg text-white">{tech.name}</span>
                  </div>
                  
                  {/* Hover State */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-violet/10 to-brand-cyan/5">
                      <tech.icon className="w-6 h-6 text-brand-cyan mb-2" />
                      <span className="font-bold text-sm text-white mb-2">{tech.name}</span>
                      <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
                  </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
