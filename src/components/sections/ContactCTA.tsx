import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section className="py-24 relative z-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Reveal>
          <div className="glass-card p-10 md:p-16 text-center border-brand-violet/20 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 to-brand-cyan/5 pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
              Ready to <span className="neon-text">Evolve</span> Your Tech?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
              Whether you need enterprise software, security assessments, or corporate training, our team is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Link href="/contact" className="btn-primary text-lg w-full sm:w-auto">
                <span>Contact Us Today</span>
              </Link>
              <Link href="/about" className="text-brand-cyan font-medium hover:text-white transition-colors flex items-center gap-2 mt-4 sm:mt-0 ml-0 sm:ml-4">
                Learn about our team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
