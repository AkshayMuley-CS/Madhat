import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, UserCheck } from "lucide-react";
import { coursesData } from "@/data/courses";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";

export default function TrainingPrograms() {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <section className="py-24 bg-darker border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold text-brand-violet tracking-widest uppercase mb-3">
                Professional Training
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Master Advanced Technologies
              </h3>
              <p className="text-slate-400">
                Accelerate your career with hands-on training programs taught by active industry engineers and security researchers.
              </p>
            </div>
            <Link href="/courses" className="btn-secondary whitespace-nowrap hidden md:inline-flex shrink-0">
              Browse Calendar
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-0">
          {featuredCourses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.15}>
              <div className="glass-card group flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                {/* Abstract corner gradient */ }
                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-brand-${course.color}/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-brand-${course.color}/30 transition-colors`}></div>

                <div className="mb-6 relative z-10 flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-dark border border-white/10 flex items-center justify-center text-brand-${course.color}`}>
                    <IconRenderer name={course.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {course.skillLevel}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold mb-3 text-white relative z-10 pr-6">
                  {course.title}
                </h4>
                
                <p className="text-slate-400 mb-6 text-sm flex-grow relative z-10">
                  {course.overview}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-slate-500 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-brand-cyan" /> Expert Led
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 relative z-10 mt-auto">
                   <Link href={`/courses/${course.slug}`} className="flex items-center justify-between text-white font-medium group-hover:text-brand-cyan transition-colors">
                     <span>View Syllabus</span>
                     <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Mobile only Browse Button */}
        <div className="md:hidden mt-8 text-center">
            <Link href="/courses" className="btn-secondary w-full justify-center">
              Browse All Courses
            </Link>
        </div>

      </div>
    </section>
  );
}
