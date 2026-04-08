import React from "react";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business objectives, technical constraints, and security requirements to formulate a comprehensive execution plan.",
    icon: Search,
    color: "violet"
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "Our architects design scalable systems, robust database schemas, and intuitive user interfaces focusing on performance.",
    icon: PenTool,
    color: "cyan"
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Agile sprints, rigorous code reviews, and automated security testing ensure the product is built to enterprise standards.",
    icon: Code,
    color: "violet"
  },
  {
    num: "04",
    title: "Deployment & Support",
    desc: "Smooth CI/CD deployment, continuous monitoring, and ongoing technical support to guarantee maximum uptime.",
    icon: Rocket,
    color: "cyan"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-darker border-y border-white/5 relative z-20" id="process">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-semibold text-brand-violet tracking-widest uppercase mb-3">
              Our Process
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Engineering Excellence
            </h3>
            <p className="text-slate-400">
              A systematic, transparent, and highly iterative methodology that guarantees project success from inception to global deployment.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-dark glass-card flex items-center justify-center mb-6 border-b-2 border-b-brand-${step.color} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                    <step.icon className={`w-8 h-8 text-brand-${step.color}`} />
                  </div>
                  <div className={`text-5xl font-heading font-black text-white/5 mb-4`}>
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
