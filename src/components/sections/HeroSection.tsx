import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Layers, Smartphone, FileSearch } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden w-full pt-12 pb-20">
      
      {/* Option 1: Subtle animated gradient background (as requested) */}
      <div className="absolute inset-0 bg-dark z-0 overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-violet/20 blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-cyan/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
         {/* Subtle Tech Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10 flex flex-col h-full justify-center">
        <div className="flex flex-col items-center justify-center w-full min-h-[85vh] text-center">
            
            <Reveal>
            <div className="inline-flex glass-card px-4 py-2 border-brand-violet/30 rounded-full mb-8 items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide uppercase">NEXT-GENERATION DIGITAL INNOVATION</span>
            </div>
            </Reveal>

            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight mx-auto max-w-4xl">
                <span className="block text-white mb-2">Innovate.</span>
                <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan pr-4">Secure.</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">Evolve.</span>
                </span>
            </h1>
            </Reveal>

            <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Madhat builds powerful software systems, cybersecurity solutions, and professional technology training programs for the next generation of digital businesses.
            </p>
            </Reveal>

            <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                    <span>Start a Project</span>
                </Link>
                <Link href="/services" className="btn-secondary w-full sm:w-auto text-lg gap-2 px-8 py-4">
                    Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            </Reveal>
            
        </div>

        {/* Structured Technology Highlight Section Below Hero */}
        <Reveal delay={0.5}>
          <div className="mt-32 pt-10 border-t border-white/5">
             <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Core Capabilities</p>
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                 
                 <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-brand-violet/50 hover:bg-brand-violet/5 transition-all cursor-default group">
                     <Cpu className="w-5 h-5 text-slate-400 group-hover:text-brand-violet transition-colors" />
                     <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">AI & Machine Learning</span>
                 </div>
                 
                 <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all cursor-default group">
                     <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-brand-cyan transition-colors" />
                     <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Cybersecurity</span>
                 </div>
                 
                 <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-default group">
                     <Layers className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                     <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Blockchain Development</span>
                 </div>
                 
                 <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default group">
                     <Smartphone className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                     <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Full Stack Development</span>
                 </div>
                 
                 <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-rose-500/50 hover:bg-rose-500/5 transition-all cursor-default group">
                     <FileSearch className="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-colors" />
                     <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Digital Forensics</span>
                 </div>

             </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
