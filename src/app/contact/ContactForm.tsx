"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
      return (
          <div className="glass-card p-12 text-center flex flex-col items-center justify-center border-brand-cyan/30 animate-in fade-in zoom-in duration-500 min-h-[500px]">
             <div className="w-20 h-20 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-6">
                 <CheckCircle className="w-10 h-10 text-brand-cyan" />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4">Transmission Secured</h3>
             <p className="text-slate-400 mb-8 max-w-sm">
                 Thank you for reaching out. We have received your encrypted message. A Madhat specialist will contact you shortly.
             </p>
             <button onClick={() => setIsSuccess(false)} className="text-brand-cyan hover:text-white transition-colors underline decoration-brand-cyan/30 hover:decoration-brand-cyan underline-offset-4 font-medium">
                 Send Another Message
             </button>
          </div>
      );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Contact Info Column */}
      <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-violet/10 flex items-center justify-center border border-brand-violet/20">
                      <Mail className="w-5 h-5 text-brand-violet" />
                  </div>
                  <div>
                      <h4 className="text-white font-bold">Secure Email</h4>
                      <a href="mailto:hello@madhat.tech" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">hello@madhat.tech</a>
                  </div>
              </div>
          </div>
          
          <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                      <Phone className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                      <h4 className="text-white font-bold">Encrypted Line</h4>
                      <a href="tel:+18005550199" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">+1 (800) 555-0199</a>
                  </div>
              </div>
          </div>
          
          <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-darker flex items-center justify-center border border-white/10">
                      <MapPin className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                      <h4 className="text-white font-bold">Global HQ</h4>
                      <p className="text-slate-400 text-sm">Silicon Valley, CA<br/>Innovation Bay, Suite 404</p>
                  </div>
              </div>
          </div>
      </div>
      
      {/* Form Column */}
      <div className="glass-card p-8 md:p-10 lg:col-span-3 h-full">
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-darker/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-brand-violet transition-colors text-white placeholder-slate-500"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-darker/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan transition-colors text-white placeholder-slate-500"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-300">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 bg-darker/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-brand-violet transition-colors text-white placeholder-slate-500"
                placeholder="Madhat Enterprises"
              />
          </div>
      
      <div className="space-y-2 flex-grow">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">How Can We Help?</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-darker/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-brand-violet transition-colors text-white placeholder-slate-500 resize-none flex-grow"
                placeholder="Describe your technical requirements, architecture constraints, or the problem you are trying to solve..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 mt-auto group flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? "Encrypting and Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
            <div className="flex items-center justify-center mt-6">
              <p className="text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan" /> Your data is transmitted via end-to-end encryption.
              </p>
            </div>
          </form>
        </div>
      </div>
  );
}
