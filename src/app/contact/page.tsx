

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Mail, Phone } from "lucide-react";

const title = "Contact Us | Madhat";
const description = "Partner with Madhat to architect the future of your enterprise. Tell us about your technical challenges.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-24 pb-20 relative z-10 w-full min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-violet/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">
          
          <div className="text-center mb-16 relative">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Initiate <span className="neon-text">Protocol</span></h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Partner with Madhat to architect the future of your enterprise. Tell us about your technical challenges.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
              
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8">
                <Reveal delay={0.1}>
                  <div className="glass-card p-8 border-l-[3px] border-l-brand-cyan">
                      <MapPin className="w-8 h-8 text-brand-cyan mb-4" />
                      <h4 className="text-white font-bold text-lg mb-2">Global Headquarters</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                          200 Innovation Pathway<br />
                          Suite 404, Silicon Valley<br />
                          California, 94000
                      </p>
                  </div>
                </Reveal>
                  
                <Reveal delay={0.2}>
                  <div className="glass-card p-8 border-l-[3px] border-l-brand-violet">
                      <Mail className="w-8 h-8 text-brand-violet mb-4" />
                      <h4 className="text-white font-bold text-lg mb-2">Direct Communications</h4>
                      <p className="text-slate-400 text-sm mb-1 hover:text-white transition-colors"><a href="mailto:hello@madhat.tech">hello@madhat.tech</a></p>
                      <p className="text-slate-400 text-sm hover:text-white transition-colors"><a href="mailto:enterprise@madhat.tech">enterprise@madhat.tech</a></p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="glass-card p-8 border-l-[3px] border-l-brand-cyan">
                      <Phone className="w-8 h-8 text-brand-cyan mb-4" />
                      <h4 className="text-white font-bold text-lg mb-2">Encrypted Comms</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                          +1 (800) 555-0199<br />
                          Available Mon-Fri, 9am - 6pm PST
                      </p>
                  </div>
                </Reveal>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <Reveal delay={0.2}>
                  <div className="glass-card p-8 md:p-12 h-full">
                      <h3 className="text-2xl font-bold text-white mb-6">Secure Transmission Form</h3>
                      
                      <div className="w-full max-w-5xl mx-auto">
                        {/* Form Component (Client Side) extracted to avoid SSR errors */}
                        <ContactForm />
                      </div>
                  </div>
                </Reveal>
              </div>

          </div>
      </div>
    </main>
  );
}
