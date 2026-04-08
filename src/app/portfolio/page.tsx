import React from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink, ShieldAlert, Cpu, Activity } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { portfolioData } from "@/data/portfolio";

const title = "Case Studies & Portfolio | Madhat";
const description = "Explore how Madhat defends enterprises and scales digital infrastructure across the globe.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <main className="flex-grow pt-24 pb-20 relative z-10 w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-violet/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">
          
          <div className="text-center mb-20 relative">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Proven <span className="neon-text">Results</span></h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Discover how we engineer secure, scalable, and innovative technology solutions for world-class enterprises.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {portfolioData.map((project, index) => (
                  <Reveal key={project.id} delay={index * 0.1}>
                      <div className="h-full flex flex-col glass-card group overflow-hidden border-t border-white/10 hover:border-brand-cyan/30 transition-all duration-300">
                           {/* Thumbnail Placeholder */}
                           <div className={`h-48 w-full bg-gradient-to-br from-darker to-dark flex items-center justify-center border-b border-white/5 relative`}>
                               {index === 0 && <ShieldAlert className="w-16 h-16 text-brand-violet/50" />}
                               {index === 1 && <Cpu className="w-16 h-16 text-brand-cyan/50" />}
                               {index === 2 && <Activity className="w-16 h-16 text-brand-violet/50" />}
                               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                           </div>
                           
                           <div className="p-8 flex-grow flex flex-col">
                              <div className="flex justify-between items-start mb-4">
                                  <span className={`text-xs font-bold tracking-wider uppercase text-brand-${project.color}`}>
                                      {project.industry}
                                  </span>
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                              <p className="text-sm text-slate-400 mb-6 flex-grow">{project.overview}</p>
                              
                              <Link href={`/portfolio/${project.slug}`} prefetch={true} className="mt-auto flex items-center text-white font-medium group-hover:text-brand-cyan transition-colors">
                                  <span>Read Case Study</span>
                                  <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                              </Link>
                           </div>
                      </div>
                  </Reveal>
              ))}
          </div>
      </div>
      <ContactCTA />
    </main>
  );
}
