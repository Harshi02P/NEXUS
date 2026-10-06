import Link from "next/link";
import { BookOpen, Calculator, LineChart, Cpu, Bot } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col pt-20">
      <div className="px-6 pb-6">
        <h3 className="text-xs font-semibold text-slate-400 tracking-wider mb-4 uppercase">
          Subject Mastery Matrix
        </h3>
        
        <div className="space-y-6">
          {/* Accounting */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                Accounting
              </div>
              <span className="text-xs font-semibold text-emerald-600">LKAS - 88%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: "88%" }}></div>
            </div>
          </div>

          {/* Business Studies */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                Business Studies
              </div>
              <span className="text-xs font-semibold text-indigo-600">BST - 74%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: "74%" }}></div>
            </div>
          </div>

          {/* Economics */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                Economics
              </div>
              <span className="text-xs font-semibold text-sky-600">ECON - 82%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600 rounded-full" style={{ width: "82%" }}></div>
            </div>
          </div>

          {/* ICT */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                ICT
              </div>
              <span className="text-xs font-semibold text-teal-600">Python - 91%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-600 rounded-full" style={{ width: "91%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-slate-100">
        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold">
          <Bot className="w-4 h-4" />
          GROQ COPILOT ACTIVE <span className="w-2 h-2 rounded-full bg-emerald-500 ml-auto animate-pulse"></span>
        </div>
      </div>
    </aside>
  );
}
