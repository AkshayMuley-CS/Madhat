import React from "react";
import { foundersData } from "@/data/founders";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { ShieldAlert, BookOpen, Quote } from "lucide-react";
import Image from "next/image";

const title = "Our Evolution | Madhat";
const description = "We are a collective of engineers, security researchers, and technology educators committed to building secure digital futures.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-violet/10 to-transparent pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our <span className="neon-text">Evolution</span></h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We are a collective of engineers, security researchers, and technology educators committed to building secure digital futures.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="glass-card p-10 h-full">
                <ShieldAlert className="w-12 h-12 text-brand-cyan mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  To provide uncompromising cybersecurity and robust software solutions that empower enterprises, while educating the next generation of technologists through practical, hands-on training.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-card p-10 h-full border-t border-t-brand-violet/50 bg-gradient-to-br from-brand-violet/5 to-transparent">
                <BookOpen className="w-12 h-12 text-brand-violet mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  To be the global standard for secure technical innovation and education, where a company&apos;s safety and a student&apos;s learning journey are treated with equal dedication.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <Quote className="w-16 h-16 text-white/10 mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-heading font-medium text-white mb-8 leading-snug">
              &quot;Technology without security is a liability. Education without application is a lost opportunity.&quot;
            </blockquote>
            <p className="text-brand-cyan font-semibold tracking-wider uppercase">— The Madhat Philosophy</p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the Founders</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Industry veterans driving the technical vision and security standards for Madhat.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {foundersData.map((founder, i) => (
              <Reveal key={founder.id} delay={i * 0.1}>
                <div className="glass-card p-8 md:p-10 flex flex-col h-full border-l-[3px] border-transparent hover:border-l-brand-violet transition-all duration-300">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-neon p-[2px] shrink-0 relative overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center font-heading font-bold text-2xl text-white relative z-10 overflow-hidden">
                        {founder.photoFallback}
                        {/* Example of optional Image loading if URL added to data */}
                        {/* {founder.imageUrl && <Image src={founder.imageUrl} alt={founder.name} fill className="object-cover" />} */}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                      <p className="text-brand-cyan font-medium text-sm">{founder.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                    {founder.biography}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map(exp => (
                        <span key={exp} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
