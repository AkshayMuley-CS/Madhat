"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Do you build custom software or use existing templates?",
    a: "We architect and build custom software from the ground up tailored to your specific enterprise requirements, ensuring maximum scalability and security."
  },
  {
    q: "What makes your cybersecurity services different?",
    a: "Our team consists of active security researchers and ethical hackers. We don't just run automated scans; we perform deep, manual penetration testing and advanced threat modeling."
  },
  {
    q: "How are the training programs delivered?",
    a: "Our courses are delivered live online by industry experts, focusing heavily on hands-on labs and real-world project scenarios rather than theoretical lectures."
  },
  {
    q: "Do you provide ongoing support after project deployment?",
    a: "Yes, we offer comprehensive Service Level Agreements (SLAs) for ongoing maintenance, security patching, and infrastructure monitoring."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-darker border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-cyan transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
