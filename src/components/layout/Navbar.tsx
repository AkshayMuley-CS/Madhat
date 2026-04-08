"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Intelligence", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection for sticky nav appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-dark/80 backdrop-blur-lg border-white/10 py-4 shadow-lg"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-neon p-[2px]">
              <div className="w-full h-full bg-dark rounded-xl flex items-center justify-center">
                <Hexagon className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-heading font-bold text-2xl text-white tracking-wider">
              MADHAT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                className={cn(
                  "font-medium transition-colors text-sm relative group overflow-hidden px-2 py-1",
                  pathname === link.href
                    ? "text-brand-cyan"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              prefetch={true}
              className="btn-primary text-sm px-5 py-2.5 ml-2"
            >
              <span>Start Project</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            title="Menu"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[60] flex flex-col pt-24 px-8 pb-8"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-6 text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-heading font-semibold transition-colors",
                    pathname === link.href
                      ? "text-brand-cyan"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-brand-cyan mt-4 inline-flex items-center gap-2 font-heading font-semibold"
              >
                Contact Us <ArrowRight className="w-6 h-6" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
