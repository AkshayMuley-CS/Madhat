import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { blogData } from "@/data/blog";

const title = "Intelligence Blog | Madhat";
const description = "Insights, research, and technical observations from Madhat engineers.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="flex-grow pt-24 pb-20 relative z-10 w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">
          
          <div className="text-center mb-20 relative">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Security <span className="neon-text">Intelligence</span></h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Insights, original research, and technical observations from the Madhat engineering team.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {blogData.map((post, index) => (
                  <Reveal key={post.id} delay={index * 0.1}>
                      <Link href={`/blog/${post.slug}`} prefetch={true} className="group h-full block">
                          <div className="h-full flex flex-col glass-card overflow-hidden hover:border-white/30 transition-all duration-300">
                               
                               {/* Image Placeholder */}
                               <div className="h-48 w-full bg-darker border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                                   <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/20 transition-colors"></div>
                                   <span className="text-white/20 font-heading font-medium tracking-widest uppercase">{post.category}</span>
                               </div>
                               
                               <div className="p-8 flex-grow flex flex-col">
                                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                  </div>
                                  
                                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{post.title}</h3>
                                  <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                                  
                                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                      <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 rounded-full bg-brand-violet/20 flex items-center justify-center">
                                              <User className="w-3 h-3 text-brand-violet" />
                                          </div>
                                          <span className="text-xs text-slate-300 font-medium">{post.author}</span>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-brand-cyan transform group-hover:translate-x-1 transition-transform" />
                                  </div>
                               </div>
                          </div>
                      </Link>
                  </Reveal>
              ))}
          </div>
      </div>
      <ContactCTA />
    </main>
  );
}
