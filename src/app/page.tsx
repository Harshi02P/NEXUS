import { Search, Sparkles, BookOpen, Clock, Download, PlayCircle, Code2, LineChart, Target, CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-500">
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">COHORT 2025</span>
              <span>COLOMBO DISTRICT RANK: TARGET TOP 50</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-800">
              Welcome back, <span className="text-emerald-600">Kasun!</span> 👋
            </h1>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full w-max">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Groq LPU Engine Active (Llama 3.3 70B - 480 t/s)
              </p>
              <p className="flex items-center gap-2 text-sm text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full w-max">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                National Institute of Education (NIE) Syllabus Synchronized
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-center pr-8">
            <div>
              <div className="text-4xl font-bold text-emerald-600">142</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">DAYS</div>
            </div>
            <div className="text-4xl font-light text-slate-300">:</div>
            <div>
              <div className="text-4xl font-bold text-slate-700">14</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">HOURS</div>
            </div>
            <div className="text-4xl font-light text-slate-300">:</div>
            <div>
              <div className="text-4xl font-bold text-slate-700">32</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">MINS</div>
            </div>
            <div className="ml-6 pl-6 border-l border-slate-200 text-left">
              <div className="text-xs font-bold text-slate-800 mb-1 leading-tight">EXAM<br/>KICKOFF</div>
              <div className="text-sm text-slate-500">Aug 04,<br/>2025</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative z-10 max-w-3xl">
          <div className="flex items-center bg-white border-2 border-emerald-100 rounded-full p-2 shadow-sm focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-50 transition-all">
            <div className="flex items-center gap-2 pl-4 pr-3 border-r border-slate-200">
              <BotIcon className="text-indigo-600" />
              <span className="text-sm font-bold text-indigo-700 tracking-tight">GROQ COPILOT</span>
            </div>
            <input 
              type="text" 
              placeholder="Ask anything across LKAS, CBSL macro data, Business case studies, or Python 2D arrays..." 
              className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-700 placeholder:text-slate-400"
            />
            <div className="px-3">
              <kbd className="hidden sm:inline-block border border-slate-200 bg-slate-50 text-slate-500 text-xs px-2 py-1 rounded font-sans font-semibold">⌘ K</kbd>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
              Accelerate <Sparkles className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3 mt-4 text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider">Prompts:</span>
            <button className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">#ACC LKAS 16 Depreciation Methods</button>
            <button className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">#ECON CBSL Inflation vs Rates Essay</button>
            <button className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">#ICT 2D Array Trace Table</button>
          </div>
        </div>
      </section>

      {/* Curriculum Engine */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-1">Curriculum Engine</h2>
            <h3 className="text-2xl font-bold text-slate-800">Sri Lanka G.C.E. A/L Commerce Streams</h3>
          </div>
          <p className="text-sm font-medium text-slate-500">Overall Stream Mastery: <span className="text-emerald-600 font-bold">86.5%</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Accounting Card */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold font-mono">LK: ACC</div>
              <span className="text-2xl font-bold text-emerald-600">82%</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Financial & Cost Accounting</h4>
            <p className="text-sm text-slate-500 mb-6 h-10 line-clamp-2">Sri Lanka Accounting Standards (LKAS) & Manufacturing Statements.</p>
            
            <div className="bg-slate-50 rounded-lg p-3 mb-6">
              <div className="text-xs text-slate-400 font-semibold mb-1">ACTIVE UNIT</div>
              <div className="text-sm font-semibold text-slate-700 truncate">Unit 07: Partnership Acc...</div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-emerald-50 text-emerald-700 text-xs font-bold py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                Solve Ledger AI
              </button>
              <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">
                2024 Paper
              </button>
            </div>
          </div>

          {/* Business Studies Card */}
          <div className="bg-white p-6 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-bold font-mono">LK: BS</div>
              <span className="text-2xl font-bold text-indigo-600">74%</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Business Studies</h4>
            <p className="text-sm text-slate-500 mb-6 h-10 line-clamp-2">Management Theories, Financial Markets & Strategic Operations.</p>
            
            <div className="bg-slate-50 rounded-lg p-3 mb-6">
              <div className="text-xs text-slate-400 font-semibold mb-1">ACTIVE UNIT</div>
              <div className="text-sm font-semibold text-slate-700 truncate">Unit 12: Business Ethics ...</div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-indigo-50 text-indigo-700 text-xs font-bold py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                Flashcards AI
              </button>
              <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">
                Past Essays
              </button>
            </div>
          </div>

          {/* Economics Card */}
          <div className="bg-white p-6 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold font-mono">LK: ECON</div>
              <span className="text-2xl font-bold text-sky-600">89%</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Economics of Sri Lanka</h4>
            <p className="text-sm text-slate-500 mb-6 h-10 line-clamp-2">Micro, Macro models, Central Bank Data & Global Trade Balance.</p>
            
            <div className="bg-slate-50 rounded-lg p-3 mb-6">
              <div className="text-xs text-slate-400 font-semibold mb-1">ACTIVE UNIT</div>
              <div className="text-sm font-semibold text-slate-700 truncate">Unit 08: Fiscal Policy & C...</div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-sky-50 text-sky-700 text-xs font-bold py-2 rounded-lg hover:bg-sky-100 transition-colors">
                Ask Econ Tutor
              </button>
              <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">
                Model Papers
              </button>
            </div>
          </div>

          {/* ICT Card */}
          <div className="bg-white p-6 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-teal-50 text-teal-700 px-2 py-1 rounded text-xs font-bold font-mono">LK: ICT</div>
              <span className="text-2xl font-bold text-teal-600">91%</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">ICT & Computational Logic</h4>
            <p className="text-sm text-slate-500 mb-6 h-10 line-clamp-2">Relational Databases, Python Flowcharts, OSI & IoT architectures.</p>
            
            <div className="bg-slate-50 rounded-lg p-3 mb-6">
              <div className="text-xs text-slate-400 font-semibold mb-1">ACTIVE UNIT</div>
              <div className="text-sm font-semibold text-slate-700 truncate">Unit 06: Python Algorithm...</div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-teal-50 text-teal-700 text-xs font-bold py-2 rounded-lg hover:bg-teal-100 transition-colors">
                Debug Logic AI
              </button>
              <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">
                Marking 2023
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Velocity Telemetry */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-1">Velocity Telemetry</h2>
              <h3 className="text-xl font-bold text-slate-800">Weekly Study Rhythm</h3>
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              14 DAY STREAK
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8 border-b border-slate-100 pb-8">
            <div>
              <div className="text-sm text-slate-500 font-medium mb-1">Groq Inferences</div>
              <div className="text-3xl font-bold text-slate-800">38 <span className="text-base font-medium text-slate-400">Today</span></div>
              <div className="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> 0.24s avg
              </div>
            </div>
            <div className="border-l border-slate-100 pl-6">
              <div className="text-sm text-slate-500 font-medium mb-1">Past Paper MCQs</div>
              <div className="text-3xl font-bold text-slate-800">140 / 150</div>
              <div className="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                <LineChart className="w-3 h-3" /> 93.3% Accuracy
              </div>
            </div>
            <div className="border-l border-slate-100 pl-6">
              <div className="text-sm text-slate-500 font-medium mb-1">Essay Reviews</div>
              <div className="text-3xl font-bold text-slate-800">12 <span className="text-base font-medium text-slate-400">Graded</span></div>
              <div className="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Grade A Target
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-400 mb-4">
              <span>ACTIVE HOURS PER DAY (COMMERCE TRIAD + ICT)</span>
              <span>Total: 34.5 hrs this week</span>
            </div>
            {/* Mock Chart */}
            <div className="flex items-end justify-between h-40 gap-2">
              {[60, 80, 40, 100, 90, 100, 50].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-slate-100 rounded-t-sm h-full relative flex items-end">
                    <div 
                      className={`w-full rounded-t-sm transition-all group-hover:opacity-80 ${i === 3 || i === 4 || i === 5 ? 'bg-teal-600' : 'bg-emerald-500'}`}
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Mocks */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-1">Colombo Peer Collective</h2>
              <h3 className="text-xl font-bold text-slate-800">Upcoming Provincial Mocks</h3>
            </div>
            <div className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded">
              1,840 Students Active
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {/* Mock 1 */}
            <div className="flex gap-4 items-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/30">
              <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg text-center min-w-[50px]">
                <div className="text-lg font-bold">28</div>
                <div className="text-[10px] font-bold uppercase">Mar</div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-800">Western Province Model Examination</h4>
                <p className="text-xs text-slate-500">Paper 01 (MCQ) & Paper 02 (Essay)</p>
                <p className="text-[10px] font-semibold text-emerald-600 mt-1">Accounting</p>
              </div>
              <button className="bg-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-emerald-700">
                Enrolled
              </button>
            </div>

            {/* Mock 2 */}
            <div className="flex gap-4 items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
              <div className="bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700 p-2 rounded-lg text-center min-w-[50px] transition-colors">
                <div className="text-lg font-bold">05</div>
                <div className="text-[10px] font-bold uppercase">Apr</div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-800">Royal / Ananda Combined Mock</h4>
                <p className="text-[10px] font-semibold text-indigo-600 mt-1">Economics Case Analysis & CBSL Policy</p>
              </div>
              <button className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-2 rounded-lg hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                Join Mock
              </button>
            </div>

            {/* Mock 3 */}
            <div className="flex gap-4 items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
              <div className="bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700 p-2 rounded-lg text-center min-w-[50px] transition-colors">
                <div className="text-lg font-bold">12</div>
                <div className="text-[10px] font-bold uppercase">Apr</div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-800">Visakha / Devi Balika Commerce Invitational</h4>
                <p className="text-[10px] font-semibold text-indigo-600 mt-1">Business Studies - Full Paper Simulation</p>
              </div>
              <button className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-2 rounded-lg hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                Join Mock
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Department of Examinations Calibration</span>
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">DOE Level 1 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BotIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
      <path d="M12 8V4H8"></path>
      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
      <path d="M2 14h2"></path>
      <path d="M20 14h2"></path>
      <path d="M15 13v2"></path>
      <path d="M9 13v2"></path>
    </svg>
  );
}
