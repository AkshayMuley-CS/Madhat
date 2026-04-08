import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

// Generate static params for build
export async function generateStaticParams() {
  return servicesData.map((s) => ({
    service: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const serviceItem = servicesData.find((s) => s.slug === service);
  if (!serviceItem) return { title: "Service Not Found" };
  
  return {
    title: `${serviceItem.title} | Madhat Services`,
    description: serviceItem.overview,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-16 relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className={`text-brand-${service.color}`}>{service.title}</span>
            </div>
            
            <div className={`w-20 h-20 rounded-2xl bg-darker border border-brand-${service.color}/30 flex items-center justify-center mb-8`}>
              <IconRenderer name={service.icon} className={`w-10 h-10 text-brand-${service.color}`} />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-xl text-slate-400">
              {service.overview}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Core Methodology</h3>
                <p className="text-slate-400 leading-relaxed mb-10">
                  {service.methodology}
                </p>

                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-darker border border-white/10 rounded-lg text-sm text-slate-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card p-8 bg-brand-violet/5 border-brand-violet/20">
                <h3 className="text-xl font-bold mb-6 text-white">Problems We Solve</h3>
                <ul className="space-y-4">
                  {service.problemsSolved.map((problem, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300">
                      <CheckCircle2 className={`w-6 h-6 text-brand-${service.color} shrink-0`} />
                      <span className="leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
