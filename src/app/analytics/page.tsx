import { Target, TrendingUp, BarChart2, Activity } from "lucide-react";

export default function Analytics() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Analytics & Progress</h1>
          <p className="text-sm text-slate-500">Track your exam readiness across the A/L Commerce triad.</p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold border border-emerald-100 flex items-center gap-2">
          <Target className="w-5 h-5" /> Projected Z-Score: 2.615
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Activity className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-700">Total Study Hours</h3>
          </div>
          <div className="text-4xl font-bold text-slate-800 mb-2">342.5</div>
          <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12.5 hrs this week</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><BarChart2 className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-700">Mock Papers Completed</h3>
          </div>
          <div className="text-4xl font-bold text-slate-800 mb-2">24</div>
          <p className="text-xs font-semibold text-indigo-600 flex items-center gap-1">8 papers graded by Groq AI</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sky-100 text-sky-600 rounded-lg"><Target className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-700">Weakest Area</h3>
          </div>
          <div className="text-xl font-bold text-slate-800 mb-2 leading-tight">LKAS 38 Intangible Assets</div>
          <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">Requires urgent revision</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 h-96 flex flex-col items-center justify-center text-center">
         <BarChart2 className="w-16 h-16 text-slate-200 mb-4" />
         <h3 className="text-lg font-bold text-slate-600 mb-2">Detailed Analytics Engine Loading...</h3>
         <p className="text-sm text-slate-400 max-w-sm">The detailed performance graphs, cohort comparisons, and granular topic mastery data will appear here once you complete more mock exams.</p>
      </div>

    </div>
  );
}
