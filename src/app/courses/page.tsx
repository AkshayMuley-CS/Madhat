import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, UserCheck } from "lucide-react";
import { coursesData } from "@/data/courses";
import { Reveal } from "@/components/ui/Reveal";
import { IconRenderer } from "@/components/ui/IconRenderer";
import ContactCTA from "@/components/sections/ContactCTA";

const title = "Training Programs | Madhat";
const description = "Accelerate your tech career with our premium courses in Development, Security, and AI.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="pt-24 pb-16 relative">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Professional <span className="neon-text">Training</span></h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real-world skills taught by industry practitioners. Level up your capabilities in software engineering, cybersecurity, and emerging technologies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <Reveal key={course.id} delay={index * 0.1}>
                <div className="glass-card group flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                  <div className={`absolute -right-20 -top-20 w-40 h-40 bg-brand-${course.color}/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-brand-${course.color}/30 transition-colors`}></div>

                  <div className="mb-6 relative z-10 flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-dark border border-white/10 flex items-center justify-center text-brand-${course.color}`}>
                      <IconRenderer name={course.icon} className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {course.skillLevel}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-white relative z-10">
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
                     <Link href={`/courses/${course.slug}`} prefetch={true} className="flex items-center justify-between text-white font-medium group-hover:text-brand-cyan transition-colors">
                       <span>View Syllabus Details</span>
                       <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
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
