import { Search, Filter, Download, Bookmark, Share2, BookOpen, TrendingUp, Grid, Code, ChevronDown, CheckCircle2, CloudLightning } from "lucide-react";

export default function Resources() {
  return (
    <div className="flex gap-8 max-w-[1600px] mx-auto">
      
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 tracking-wider mb-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            SRI LANKA DOE REPOSITORY SYNCED / SYLLABUS 2025 COMPLIANT
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Commerce Resource Archive & Past Paper Engine</h1>
          <p className="text-sm text-slate-500">Complete, verified national archives with instant Groq LPU powered marking rubric breakdowns, dual-medium balance sheet resolvers, and official examiner marking rubrics.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex gap-2 text-sm font-semibold overflow-x-auto pb-2">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-full whitespace-nowrap">All Subjects (1,420)</button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-600"></div> Accounting (LK-ACC)
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div> Business Studies (BS)
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-600"></div> Economics (LK-ECON)
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div> ICT (LK-ICT)
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input type="text" placeholder="Search: e.g. 2023 Accounting Part II Marking..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500" />
            </div>
            <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 outline-none">
              <option>Year: 2015 - 2024</option>
            </select>
            <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 outline-none">
              <option>Medium: All Medium</option>
            </select>
            <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 outline-none">
              <option>Type: All Resources</option>
            </select>
          </div>

          <div className="flex gap-2 items-center text-xs">
            <span className="font-bold text-slate-400">POPULAR FILTERS:</span>
            <button className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">#LKAS-Statement-Of-Financial-Position</button>
            <button className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full font-medium">#Central-Bank-SL-2024-Report</button>
            <button className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">#Python-Dictionary-Marking-Rubric</button>
          </div>
        </div>

        {/* Resource Cards */}
        <div className="space-y-4">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex gap-2 items-center text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">2024 DOE OFFICIAL</span>
                    <span className="text-slate-500">ACCOUNTING (LK-ACC)</span>
                    <span className="text-slate-400">PAPER ID: 2024-ACC-24-REV2</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">2024 G.C.E. A/L Accounting Part I & II (Official DOE)</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-emerald-600 text-xs font-bold flex items-center gap-1 justify-end"><CheckCircle2 className="w-3 h-3"/> Complete Set</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">PDF • 4.2 MB</div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Full official examination package including standard LKAS 1 Financial Statements, Cash Flow, Partnership Restructuring, and Cost Accounting variations with verified adjustments.
            </p>

            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 mb-1">Available Mediums:</div>
                  <div className="flex gap-2 text-sm font-bold text-slate-700">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> සිංහල</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> English</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> தமிழ்</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Official Marking Scheme Available
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wide">
                  <CloudLightning className="w-4 h-4" /> STEP-BY-STEP AI LEDGER BREAKDOWN
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold">LPU Latency: 140ms</div>
              </div>
              <p className="text-sm text-slate-600">Interactive T-accounts available for Q2 (Partnership Goodwill Allocation & Revaluation) and Q5 (Manufacturing Cost Variance) with automatic Sri Lanka Accounting Standards cross-referencing.</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button className="bg-emerald-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                  <CloudLightning className="w-4 h-4" /> Open in Groq AI Tutor
                </button>
                <button className="bg-white border border-slate-200 text-slate-600 text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF (4.2 MB)
                </button>
              </div>
              <div className="flex gap-3">
                <button className="text-slate-400 hover:text-emerald-600 p-2"><Bookmark className="w-5 h-5" /></button>
                <button className="text-slate-400 hover:text-emerald-600 p-2"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex gap-2 items-center text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded">2023 G.C.E.</span>
                    <span className="text-slate-500">ECONOMICS (LK-ECON)</span>
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Q05 SPOTLIGHT</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">2023 Economics Paper II - Essay Question 05 (Fiscal Policy Analysis)</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sky-600 text-xs font-bold flex items-center gap-1 justify-end"><CheckCircle2 className="w-3 h-3"/> Chief Examiner Answer</div>
                <div className="text-xs text-slate-400 font-semibold mt-1">PDF • 1.8 MB</div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mb-6 line-clamp-2">
              In-depth Sri Lankan macroeconomic structural deficit review, Central Bank of Sri Lanka (CBSL) statistical framework, and revenue expenditure reform rubric.
            </p>

            <div className="flex gap-3">
                <button className="bg-sky-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
                  Inspect Model Marking Scheme
                </button>
                <button className="bg-white border border-slate-200 text-slate-600 text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Essay Model
                </button>
            </div>
          </div>

           {/* Card 3 (ICT Sandbox) */}
           <div className="bg-white rounded-2xl border border-teal-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex gap-2 items-center text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="text-teal-600 bg-teal-50 px-2 py-0.5 rounded">2022 G.C.E. A/L</span>
                    <span className="text-slate-500">ICT (LK-ICT)</span>
                    <span className="text-slate-400">PAPER II SECTION B</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">2022 A/L ICT Python Programming & Database Queries</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-teal-600 text-xs font-bold">Interactive Sandbox</div>
                <div className="text-[10px] text-slate-400 font-semibold mt-1 uppercase">Code + Scheme</div>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mb-4">
              Section B Structured Programming: File manipulation algorithms, recursion trace tables, and relational SQL statements (JOIN, GROUP BY, HAVING) with automated rubric marks test.
            </p>

            <div className="bg-[#1e1e1e] rounded-xl p-4 mb-6 font-mono text-sm overflow-x-auto relative">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-400">15 / 15 MARKS ALLOCATION</div>
              <div className="text-slate-400 text-xs mb-2 uppercase tracking-wider font-sans font-bold">ALGO TRACE: Q04 FILE READ & COMPUTE TOTAL</div>
              <div className="text-blue-400">def <span className="text-yellow-200">process_ledger</span><span className="text-white">(filepath):</span></div>
              <div className="pl-4 text-slate-400"># Groq AI checks syntax+specific variable syntax standard</div>
              <div className="pl-4 text-purple-400">with <span className="text-yellow-200">open</span><span className="text-white">(filepath, 'r')</span> as <span className="text-white">fp:</span></div>
              <div className="pl-8 text-purple-400">return <span className="text-yellow-200">sum</span><span className="text-white">([</span><span className="text-yellow-200">float</span><span className="text-white">(line.split(',')[</span><span className="text-orange-300">2</span><span className="text-white">])</span> for <span className="text-white">line</span> in <span className="text-white">fp])</span></div>
            </div>

            <div className="flex gap-3">
                <button className="bg-teal-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" /> Run Interactive Trace Table
                </button>
                <button className="bg-white border border-slate-200 text-slate-600 text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Python Scheme
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[340px] space-y-6">
        
        {/* Top metrics */}
        <div className="flex gap-4 mb-2">
           <div className="flex-1 text-center">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Index Coverage</div>
             <div className="text-lg font-bold text-emerald-600">2012 - 2024</div>
           </div>
           <div className="flex-1 text-center border-l border-r border-slate-200">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">DOE Verified</div>
             <div className="text-lg font-bold text-sky-600">100% Schemes</div>
           </div>
           <div className="flex-1 text-center">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">LPU Solver</div>
             <div className="text-lg font-bold text-indigo-600">0.18s</div>
           </div>
        </div>

        {/* Download Packs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Download Packs</h3>
            <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">BATCH SAVE</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100">
            <h4 className="text-sm font-bold text-slate-800 mb-2">2020 - 2024 Past Papers Complete Pack</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Includes Accounting, Business Studies, Economics, and ICT. Both Part I (MCQ with answer key) and Part II with bilingual official marking schemes.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400">Size: ~48.5 MB (ZIP Archive)</span>
              <button className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <Download className="w-3 h-3" /> Download Bundle
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-2">
            <div>
              <div className="text-sm font-bold text-slate-800">Offline LPU Cache</div>
              <div className="text-[10px] text-slate-500">Keep resources indexed locally for power cuts</div>
            </div>
            <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
        </div>

        {/* Active Bookmarks */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Active Bookmarks</h3>
            <span className="text-[10px] font-bold text-slate-400">4 SAVED</span>
          </div>
          <div className="space-y-3">
            {[
              { title: "2023 ACC Q1 - Bank Recon", desc: "Marking scheme step 2" },
              { title: "2024 ECON Q02 - Market Equilibrium", desc: "Tax incidence graphs" },
              { title: "2021 BST - Joint Venture Law", desc: "Companies Act No. 7" },
              { title: "2022 ICT - SQL Subquery Syntax", desc: "Aggregate clauses" }
            ].map((b, i) => (
              <div key={i} className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                <div>
                  <div className="text-sm font-bold text-slate-700">{b.title}</div>
                  <div className="text-xs text-slate-500">{b.desc}</div>
                </div>
                <button className="text-slate-300 hover:text-rose-500">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Examiner Prediction Radar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Examiner Prediction Radar</h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">Based on 12-year cyclic recurrence analysis of G.C.E. A/L Commerce streams:</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Accounting: Manufacturing Statement</span>
                <span className="text-emerald-600">94% High</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full">
                <div className="h-full bg-emerald-600 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Economics: Exchange Rate Float Systems</span>
                <span className="text-sky-600">88% High</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full">
                <div className="h-full bg-sky-600 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Business Studies: Global Outsourcing Trends</span>
                <span className="text-indigo-600">76% Med</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full">
                <div className="h-full bg-indigo-600 rounded-full" style={{width: '76%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
