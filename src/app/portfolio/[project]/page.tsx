import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Target, Settings, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { portfolioData } from "@/data/portfolio";

// Static Site Generation for all projects
export function generateStaticParams() {
  return portfolioData.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const resolvedParams = await params;
  const proj = portfolioData.find((p) => p.slug === resolvedParams.project);
  if (!proj) return { title: "Project Not Found" };
  
  const title = `${proj.title} | Madhat Case Studies`;
  const description = proj.overview;

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

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Project Not Found</h2>
      </div>
    );
  }

  return (
    <main className="flex-grow pt-24 pb-20 relative z-10 w-full min-h-screen">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-brand-violet/10 to-transparent pointer-events-none"></div>
      
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <Link href="/" prefetch={true} className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link href="/portfolio" prefetch={true} className="hover:text-white transition-colors">Portfolio</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className={`text-brand-${project.color}`}>{project.client}</span>
                </div>
                
                <Link href="/portfolio" prefetch={true} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-12">
              {project.overview}
            </p>

            <div className={`w-full h-[1px] bg-gradient-to-r from-brand-${project.color} to-transparent mb-12 opacity-30`}></div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                 <div>
                     <div className="flex items-center gap-3 mb-4">
                         <Target className={`w-6 h-6 text-brand-${project.color}`} />
                         <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                     </div>
                     <p className="text-slate-400 leading-relaxed">
                         {project.problem}
                     </p>
                 </div>
                 
                 <div>
                     <div className="flex items-center gap-3 mb-4">
                         <Settings className={`w-6 h-6 text-brand-${project.color}`} />
                         <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                     </div>
                     <p className="text-slate-400 leading-relaxed">
                         {project.solution}
                     </p>
                 </div>
             </div>
          </Reveal>

          <Reveal delay={0.2}>
              <div className="glass-card p-8 md:p-10 mb-16 border-l-[4px] border-l-brand-cyan">
                  <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="w-6 h-6 text-brand-cyan" />
                      <h3 className="text-2xl font-bold text-white">Key Outcomes</h3>
                  </div>
                  <ul className="space-y-4">
                      {project.results.map((result, i) => (
                          <li key={i} className="flex gap-4">
                              <span className="text-brand-cyan">✦</span>
                              <span className="text-slate-300">{result}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </Reveal>

          <Reveal delay={0.3}>
              <div className="mb-20">
                  <h3 className="text-xl font-bold text-white mb-6">Technologies Applied</h3>
                  <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-darker border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:border-brand-violet transition-colors">
                              {tech}
                          </span>
                      ))}
                  </div>
              </div>
          </Reveal>
        </div>
        
        <ContactCTA />
    </main>
  );
}
