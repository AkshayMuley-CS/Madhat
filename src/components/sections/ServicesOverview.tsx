import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";

import { IconRenderer } from "@/components/ui/IconRenderer";

export default function ServicesOverview() {
  return (
    <section className="py-24 relative z-20" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-brand-cyan tracking-widest uppercase mb-3">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Pioneering Digital Solutions
            </h3>
            <p className="text-slate-400">
              Transform your business capabilities with our enterprise-grade
              technical consulting and development services.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="glass-card group flex flex-col h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-darker border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:border-brand-${service.color}/50`}
                >
                  <IconRenderer
                    name={service.icon}
                    className={`w-7 h-7 text-brand-${service.color}`}
                  />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h4>
                <p className="text-slate-400 mb-6 line-clamp-3 flex-grow">
                  {service.overview}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-brand-violet hover:text-brand-cyan font-medium transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
