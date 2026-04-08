import React from "react";
import Link from "next/link";
import { AlertTriangle, ShieldCheck, Activity, Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function CyberIncidentHelp() {
  return (
    <section className="py-24 relative z-20 overflow-hidden bg-brand-violet/5 border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-violet/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[300px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                <div className="lg:w-1/2">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Rapid Response Unit
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Under Attack? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-violet">We Can Help.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                            Our digital forensics and incident response (DFIR) team operates 24/7 to neutralize active threats, trace cyber harassment, and recover compromised digital assets.
                        </p>
                        
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-4 text-slate-300 font-medium">
                                <div className="w-10 h-10 rounded-full bg-darker flex items-center justify-center border border-white/10 shrink-0">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                </div>
                                Ransomware & Attack Remediation
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 font-medium">
                                <div className="w-10 h-10 rounded-full bg-darker flex items-center justify-center border border-white/10 shrink-0">
                                    <Search className="w-5 h-5 text-brand-cyan" />
                                </div>
                                Cyber Harassment & Stalking Tracing
                            </li>
                            <li className="flex items-center gap-4 text-slate-300 font-medium">
                                <div className="w-10 h-10 rounded-full bg-darker flex items-center justify-center border border-white/10 shrink-0">
                                    <Activity className="w-5 h-5 text-brand-violet" />
                                </div>
                                Digital Fraud & Breached Account Recovery
                            </li>
                        </ul>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=urgent" prefetch={true} className="btn-primary bg-red-600 hover:bg-red-700 hover:shadow-red-500/20 shadow-lg px-8 py-4 text-center">
                                Report Cyber Incident
                            </Link>
                            <a href="tel:+18005550199" className="btn-secondary px-8 py-4 text-center">
                                Emergency Hotline
                            </a>
                        </div>
                    </Reveal>
                </div>
                
                <div className="lg:w-1/2 w-full">
                    <Reveal delay={0.2}>
                        <div className="relative w-full aspect-square max-w-lg mx-auto md:max-w-none">
                            <div className="absolute inset-0 bg-gradient-to-tr from-dark to-darker rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                                
                                <div className="h-12 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-4 text-xs text-slate-500 font-mono">ir_terminal_session_808.sh</div>
                                </div>
                                
                                <div className="flex-grow p-6 font-mono text-xs sm:text-sm text-brand-cyan overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                                    <p className="mb-2 text-slate-400">root@madhat-dfir:~# ./trace_origin.py --target network_node_gamma</p>
                                    <p className="mb-2 text-yellow-400">Initializing packet deep-inspection...</p>
                                    <p className="mb-2 text-green-400">[OK] Captured 1.2M anomalous packets.</p>
                                    <p className="mb-2 text-slate-400">root@madhat-dfir:~# ./isolate_threat.sh --aggressive</p>
                                    <p className="mb-2 text-red-400">WARNING: Lateral movement detected.</p>
                                    <p className="mb-2 text-green-400">[OK] Zero-trust lockdown engaged. Threat isolated.</p>
                                    <div className="w-2 h-4 bg-brand-cyan animate-pulse mt-4"></div>
                                </div>

                                <div className="h-20 bg-black/60 border-t border-white/10 p-4 flex items-center justify-between">
                                     <div className="flex items-center gap-3">
                                         <ShieldCheck className="w-8 h-8 text-green-500" />
                                         <div>
                                             <p className="text-white font-bold text-sm">System Secured</p>
                                             <p className="text-slate-500 text-xs">Response time: 4m 12s</p>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>
        </div>
    </section>
  );
}
