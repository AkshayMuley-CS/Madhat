import Link from "next/link";
import { Hexagon, Linkedin, Twitter, Github, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5 pt-16 pb-8 relative z-20 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-neon p-[1px]">
                <div className="w-full h-full bg-darker rounded-lg flex items-center justify-center">
                  <Hexagon className="text-white w-4 h-4" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wider">
                MADHAT
              </span>
            </Link>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Innovate. Secure. Evolve. A next-generation technology partner for ambitious enterprises and ambitious learners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Core Services</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/services/software-development" className="hover:text-brand-cyan transition-colors">Software Development</Link></li>
              <li><Link href="/services/cybersecurity-consulting" className="hover:text-brand-cyan transition-colors">Cybersecurity Consulting</Link></li>
              <li><Link href="/services/digital-forensics" className="hover:text-brand-cyan transition-colors">Digital Forensics</Link></li>
              <li><Link href="/services/penetration-testing" className="hover:text-brand-cyan transition-colors">Penetration Testing</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-brand-cyan transition-colors">Training Programs</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-cyan transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-brand-cyan transition-colors">Intelligence Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-violet shrink-0" />
                <span>Silicon Valley, CA<br />Innovation Bay, Suite 404</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="mailto:hello@madhat.tech" className="hover:text-brand-cyan">hello@madhat.tech</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Madhat Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
