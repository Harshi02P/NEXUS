"use client";

import Link from "next/link";
import { Bell, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Past Papers & Resources", href: "/resources" },
    { name: "Groq AI Tutor", href: "/tutor" },
    { name: "Note & Flashcard AI", href: "/flashcards" },
    { name: "Analytics & Progress", href: "/analytics" },
  ];

  return (
    <header className="h-20 bg-white border-b border-slate-200 fixed top-0 w-full z-50 flex items-center px-6 justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
            N
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800 hidden md:block">NEXUS</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>A/L 2025: <strong className="font-bold">142 Days Remaining</strong></span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`font-medium pb-7 pt-7 px-2 transition-colors ${
                isActive 
                  ? "text-emerald-600 border-b-2 border-emerald-600 font-semibold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-semibold">
          <button className="px-3 py-1 bg-white shadow-sm rounded-md text-emerald-700">EN</button>
          <button className="px-3 py-1 text-slate-500 hover:text-slate-800 transition-colors">සිං</button>
          <button className="px-3 py-1 text-slate-500 hover:text-slate-800 transition-colors">தமிழ்</button>
        </div>
        
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold">
              KP
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Kasun Perera</p>
            <p className="text-xs text-slate-500">2025 Cohort - Commerce</p>
          </div>
        </div>
      </div>
    </header>
  );
}
