import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";
import ContactCTA from "@/components/sections/ContactCTA";

const title = "Our Services | Madhat";
const description = "Explore our range of technology and cybersecurity consulting services.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-16 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our <span className="neon-text">Expertise</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive technical solutions designed to secure, scale, and innovate your enterprise.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1}>
                <div className="glass-card group flex flex-col h-full border-t-2 border-t-transparent hover:border-t-brand-cyan transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-darker border border-white/10 flex items-center justify-center mb-8`}>
                    <IconRenderer
                      name={service.icon}
                      className={`w-8 h-8 text-brand-${service.color}`}
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 mb-8 flex-grow">
                    {service.overview}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h5 className="text-sm font-semibold text-white uppercase tracking-wider">Key Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    prefetch={true}
                    className="mt-auto btn-secondary w-full justify-between group"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
