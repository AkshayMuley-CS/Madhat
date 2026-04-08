import React from "react";
import { notFound } from "next/navigation";
import { coursesData } from "@/data/courses";
import { Reveal } from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { CheckCircle2, ChevronRight, Clock, Code, Award, Users } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return coursesData.map((c) => ({
    course: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const courseItem = coursesData.find((c) => c.slug === course);
  if (!courseItem) return { title: "Course Not Found" };
  
  const title = `${courseItem.title} | Madhat Training`;
  const description = courseItem.overview;

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

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } =  await params;
  const course = coursesData.find((c) => c.slug === slug);
  
  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-brand-${course.color}/10 blur-[150px] rounded-full pointer-events-none z-0`}></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
              <Link href="/" prefetch={true} className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/courses" prefetch={true} className="hover:text-white transition-colors">Courses</Link>
              <ChevronRight className="w-4 h-4" />
              <span className={`text-brand-${course.color}`}>{course.title}</span>
            </div>
            
            <div className={`w-20 h-20 rounded-2xl bg-darker border border-brand-${course.color}/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
              <IconRenderer name={course.icon} className={`w-10 h-10 text-brand-${course.color}`} />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{course.title}</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              {course.overview}
            </p>

            <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 w-fit">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Duration</p>
                  <p className="text-white font-medium">{course.duration}</p>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Skill Level</p>
                  <p className="text-white font-medium">{course.skillLevel}</p>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Format</p>
                  <p className="text-white font-medium">Live Online</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <Reveal delay={0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Course Syllabus</h3>
                  <ul className="space-y-6">
                    {course.modules.map((mod, i) => (
                      <li key={i} className="flex gap-6 items-start">
                        <div className={`w-8 h-8 rounded-full bg-brand-${course.color}/20 text-brand-${course.color} flex items-center justify-center font-bold shrink-0 mt-0.5`}>
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-200 mb-2">Module {i + 1}: {mod}</h4>
                          <p className="text-slate-400 text-sm">In this module, students will dive deep into {mod.toLowerCase()} through practical exercises and real-world examples.</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4 flex items-center gap-3">
                    <Code className="w-6 h-6" /> Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {course.tools.map(tool => (
                      <span key={tool} className="px-5 py-3 bg-darker border border-white/10 rounded-xl text-slate-300 font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <Reveal delay={0.3}>
                <div className="glass-card p-8 sticky top-32">
                  <h3 className="text-xl font-bold mb-6 text-white">Career Outcomes</h3>
                  <ul className="space-y-4 mb-8">
                    {course.careerOutcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckCircle2 className={`w-5 h-5 text-brand-${course.color} shrink-0`} />
                        <span className="leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" prefetch={true} className="btn-primary w-full shadow-lg h-12">
                    <span className="text-sm">Enroll Now</span>
                  </Link>
                  <p className="text-center text-xs text-slate-500 mt-4">Next cohort starts soon.</p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
