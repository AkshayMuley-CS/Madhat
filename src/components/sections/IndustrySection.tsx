import React from "react";
import { Building2, Activity, ShoppingCart, GraduationCap, Factory } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    name: "Financial Technology",
    icon: Building2,
    desc: "Secure transaction processing, algorithmic trading platforms, and compliance-ready infrastructure.",
    color: "violet"
  },
  {
    name: "Healthcare",
    icon: Activity,
    desc: "HIPAA-compliant data systems, telemedicine platforms, and IoMT security.",
    color: "cyan"
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    desc: "High-conversion storefronts, scalable inventory systems, and fraud prevention.",
    color: "violet"
  },
  {
    name: "Education Technology",
    icon: GraduationCap,
    desc: "Interactive learning management systems (LMS) and secure virtual classrooms.",
    color: "cyan"
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Supply chain tracking with blockchain and industrial IoT security.",
    color: "violet"
  }
];

export default function IndustrySection() {
  return (
    <section className="py-24 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-brand-cyan tracking-widest uppercase mb-3">
              Industries Served
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Tailored Sector Solutions
            </h3>
            <p className="text-slate-400">
              We apply domain-specific knowledge to solve the most complex technical challenges across diverse industries.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.1}>
              <div className={`glass-card p-8 group border-t-2 border-t-transparent hover:border-t-brand-${ind.color} transition-all duration-300 h-full`}>
                <ind.icon className={`w-10 h-10 text-brand-${ind.color} mb-6 opacity-80 group-hover:opacity-100 transition-opacity`} />
                <h4 className="text-xl font-bold mb-3 text-white">{ind.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
