import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { blogData } from "@/data/blog";

// Static Site Generation for all blog posts
export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };
  
  const title = `${post.title} | Madhat Intelligence`;
  const description = post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Post Not Found</h2>
      </div>
    );
  }

  return (
    <main className="flex-grow pt-24 pb-20 relative z-10 w-full min-h-screen">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-violet/10 to-brand-cyan/5 pointer-events-none"></div>
      
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <Reveal>
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <Link href="/" prefetch={true} className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link href="/blog" prefetch={true} className="hover:text-white transition-colors">Intelligence</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className={`text-brand-cyan`}>{post.category}</span>
                </div>
                
                <Link href="/blog" prefetch={true} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Intelligence
                </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight font-heading">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-12 text-sm text-slate-400 border-t border-b border-white/10 py-6">
                 <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-brand-violet/20 flex items-center justify-center">
                         <User className="w-5 h-5 text-brand-violet" />
                     </div>
                     <div>
                        <span className="block text-white font-medium">{post.author}</span>
                        <span className="text-xs">Madhat Research</span>
                     </div>
                 </div>
                 
                 <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>
                 
                 <div className="flex items-center gap-2">
                     <Calendar className="w-4 h-4" /> {post.date}
                 </div>
                 
                 <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>
                 
                 <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4" /> {post.readTime}
                 </div>
                 
                 <button className="md:ml-auto flex items-center gap-2 text-brand-cyan hover:text-white transition-colors">
                     <Share2 className="w-4 h-4" /> Share Research
                 </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-brand-cyan prose-p:leading-relaxed prose-p:text-slate-300">
                 <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10 border-l-[4px] border-brand-violet pl-6">
                     {post.excerpt}
                 </p>
                 
                 <div className="w-full h-64 md:h-96 bg-darker rounded-xl border border-white/10 mb-10 overflow-hidden relative flex flex-col items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/10"></div>
                     <span className="relative z-10 text-white/30 text-2xl font-bold tracking-widest uppercase">Intelligence Assets Pending</span>
                 </div>
                 
                 {/* For this iteration, we safely render the plain text content. Later we can integrate next-mdx-remote */}
                 <div className="whitespace-pre-wrap">
                    {post.content}
                 </div>
             </div>
          </Reveal>

          <Reveal delay={0.2}>
              <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-darker flex items-center justify-center mb-6">
                      <span className="text-2xl">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Want more insights?</h3>
                  <p className="text-slate-400 mb-8 max-w-lg">Subscribe to our intelligence feed to get the latest vulnerability disclosures and architecture guides.</p>
                  
                  <div className="flex w-full max-w-md gap-2">
                      <input type="email" placeholder="Enter your email" className="flex-grow bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                      <button className="btn-primary">Subscribe</button>
                  </div>
              </div>
          </Reveal>
        </div>
        
        <div className="mt-20">
          <ContactCTA />
        </div>
    </main>
  );
}
