import { MessageSquare, Settings2, ShieldCheck, Zap, Copy, Maximize2, Mic, CheckCircle2, ChevronRight, Hash, Clock, FileText, Send, Paperclip } from "lucide-react";

export default function Tutor() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      
      {/* Tutor Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-800">Groq Neural Tutor v3.3</h1>
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-200 uppercase">G-LPU ONLINE</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Fine-tuned on Sri Lanka Department of Examinations A/L Marking Rubrics & CBSL Directives</p>
          </div>
        </div>

        <div className="flex gap-6 text-xs bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
          <div>
            <span className="text-slate-400 font-bold block mb-1">Inference Engine:</span>
            <span className="flex items-center gap-1 font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Groq LPU Llama 3.3 70B
            </span>
          </div>
          <div className="border-l border-slate-200 pl-6">
            <span className="text-slate-400 font-bold block mb-1">Speed:</span>
            <span className="font-bold text-emerald-600">512 t/s</span>
          </div>
          <div className="border-l border-slate-200 pl-6">
            <span className="text-slate-400 font-bold block mb-1">Latency:</span>
            <span className="font-bold text-indigo-600">210ms TTFT</span>
          </div>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
           <span className="text-lg leading-none">🏛</span> LKAS Accounting Solver <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded">SLFRS/LKAS</span>
        </button>
        <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
           <TrendingUpIcon /> Economics Essay Architect <span className="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded">CBSL 2024</span>
        </button>
        <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
           <BuildingsIcon /> Business Studies Analyst <span className="bg-indigo-50 text-indigo-600 text-[10px] px-1.5 py-0.5 rounded">PESTEL & Rubrics</span>
        </button>
        <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
           <CodeIcon /> ICT Logic Debugger <span className="bg-teal-50 text-teal-600 text-[10px] px-1.5 py-0.5 rounded">Python / SQL</span>
        </button>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 gap-6 min-h-0">
        
        {/* Left Sidebar */}
        <div className="w-[280px] flex flex-col gap-6 overflow-y-auto pr-2">
          
          {/* Active Threads */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">Active Stream Threads</h3>
              <button className="w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-200">+</button>
            </div>
            <div className="space-y-2">
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> LKAS 16 Deficit Reversal</span>
                  <span className="text-[10px] text-slate-400">Just now</span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 truncate">Revaluation Surplus offse...</h4>
                <p className="text-[10px] text-slate-500 mt-1">Accounting • 3 prompt rounds</p>
              </div>

              <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-3 cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-1.5 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span> Inflation Targeting Model</span>
                  <span className="text-[10px] text-slate-400">2h ago</span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 truncate">CBSL Monetary Policy 15...</h4>
                <p className="text-[10px] text-slate-500 mt-1">Economics • 8 prompt rounds</p>
              </div>
            </div>
          </div>

          {/* Syllabus Anchors */}
          <div>
             <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">A/L Syllabus Anchors</h3>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Unit 04 active</span>
            </div>
            <div className="space-y-2">
              <div className="border border-emerald-500 bg-emerald-50/20 rounded-lg p-3 flex justify-between items-center cursor-pointer">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Unit 04: LKAS & SLFRS</h4>
                  <p className="text-xs text-slate-500">Accounting Standards 16, 02, 38</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="border border-slate-200 bg-white rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-slate-300">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Unit 06: Final Accounts</h4>
                  <p className="text-xs text-slate-500">Manufacturing, Sole & Company</p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-indigo-50 border border-indigo-100 p-4 rounded-xl">
             <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-2 flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Pro Feature</h4>
             <h5 className="font-bold text-slate-800 mb-1">Sync National Model Papers</h5>
             <p className="text-xs text-slate-600 mb-3">Instant grading against the official Western Province & Colombo School joint papers.</p>
             <button className="w-full bg-indigo-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-indigo-700">Load 2024 Provincial Set</button>
          </div>
        </div>

        {/* Center Chat Area */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* User Message */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Kasun (A/L 2025)</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 rounded">English Medium</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-900 p-4 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                How do I treat the revaluation of land and buildings when there is a prior revaluation deficit according to LKAS 16 for Sri Lanka A/L Accounting?
              </div>
              <div className="text-[10px] text-slate-400 mt-1">10:42:15 AM • Token cost: 38</div>
            </div>

            {/* AI Message */}
            <div className="flex flex-col items-start max-w-[95%]">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-700">LKAS 16 Neural Specialist</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Standard Compliant</span>
                <span className="text-[10px] font-bold text-slate-400 ml-2 flex items-center gap-1"><Clock className="w-3 h-3"/> 0.24s total</span>
              </div>
              
              <div className="border border-slate-200 rounded-2xl rounded-tl-sm overflow-hidden w-full">
                {/* Rule Citation */}
                <div className="bg-slate-50 border-b border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-2">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    LKAS 16 - PARAGRAPH 39-40 RULE
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When an asset's carrying amount is increased as a result of a revaluation, the increase shall be recognized in <strong className="text-emerald-700">Other Comprehensive Income (OCI)</strong>. However, the increase shall be recognized in <strong className="text-emerald-700">Profit or Loss (SOPL)</strong> to the extent that it reverses a revaluation decrease of the same asset previously recognized in Profit or Loss.
                  </p>
                </div>

                {/* Ledger Table */}
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">A/L Double Entry Ledger Treatment</h4>
                    <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded">A/L Marking Code: [ACC-LKAS16-R2]</span>
                  </div>

                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Account Head</th>
                        <th className="px-4 py-3">Debit (LKR)</th>
                        <th className="px-4 py-3">Credit (LKR)</th>
                        <th className="px-4 py-3 rounded-tr-lg">A/L Rubric Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="px-4 py-3 font-semibold text-slate-800">Asset Account (Land & Building)</td>
                        <td className="px-4 py-3 text-emerald-600 font-bold">Total Gain</td>
                        <td className="px-4 py-3 text-slate-400">-</td>
                        <td className="px-4 py-3 text-emerald-600 font-bold">+1 Mark</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="px-4 py-3 pl-8 text-slate-600">↳ Profit or Loss (Reversal of Prior Deficit)</td>
                        <td className="px-4 py-3 text-slate-400">-</td>
                        <td className="px-4 py-3 text-indigo-600 font-medium">To Deficit Limit</td>
                        <td className="px-4 py-3 text-indigo-600 font-bold">+1 Mark (SOPL)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 pl-8 text-slate-600">↳ Revaluation Reserve (OCI)</td>
                        <td className="px-4 py-3 text-slate-400">-</td>
                        <td className="px-4 py-3 text-indigo-600 font-medium">Residual Excess</td>
                        <td className="px-4 py-3 text-indigo-600 font-bold">+2 Marks (OCI/SOFP)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Examiner Note */}
                <div className="bg-orange-50 border-t border-orange-100 p-4 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">Chief Examiner Marking Rubric Note (2022 A/L Q2)</h4>
                    <p className="text-xs text-orange-700 leading-relaxed">
                      Candidates consistently forfeit 2 marks by crediting the entire surplus straight to Revaluation Reserve without inspecting whether the previous year's deficit was charged to Profit or Loss. Always check trial balance line <strong className="font-bold">"Impairment / Deficit on PPE"</strong> before finalizing OCI.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-slate-50 border-t border-slate-200 p-3 flex gap-2">
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" /> Generate Practice Question
                  </button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> 2023 Marking Scheme PDF (Q2)
                  </button>
                  <button className="w-10 flex items-center justify-center bg-white border border-slate-200 text-slate-400 rounded-lg hover:text-emerald-600 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <div className="flex justify-between items-center mb-2 px-2">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Input Medium:</div>
               <div className="flex gap-2 text-xs font-bold">
                 <button className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">English</button>
                 <button className="text-slate-400 hover:text-slate-600">සිංහල</button>
                 <button className="text-slate-400 hover:text-slate-600">Singlish</button>
               </div>
               <div className="text-[10px] text-slate-400 flex items-center gap-1 ml-auto">
                 <kbd className="bg-slate-200 px-1 rounded">↵</kbd> Press Enter to dispatch to Groq LPUs
               </div>
            </div>
            <div className="relative">
              <input 
                type="text" 
                value="Now show me how this appears in the Statement of Changes in Equity (SOCIE)?"
                readOnly
                className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-24 py-4 text-sm focus:outline-none focus:border-emerald-500 shadow-sm text-slate-700" 
              />
              <div className="absolute left-4 top-4 text-slate-400 flex gap-2">
                <Paperclip className="w-5 h-5 cursor-pointer hover:text-slate-600" />
              </div>
              <button className="absolute right-2 top-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                Send <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[280px] flex flex-col gap-6 overflow-y-auto pl-2">
          
          {/* Voice Mode */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Voice Tutor Mode</h4>
                <p className="text-[10px] text-slate-400">Low Latency Audio Response</p>
              </div>
            </div>
            <div className="w-8 h-5 bg-slate-200 rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>

          {/* Formula Vault */}
          <div className="bg-white border border-slate-200 rounded-xl p-4">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">Formula & Standards Vault</h3>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">A/L High Yield</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-emerald-700">LKAS 02: Inventories</span>
                  <span className="text-slate-500">Lower of C or NRV</span>
                </div>
                <p className="text-[10px] text-slate-500">NRV = Estimated Selling Price - (Completion + Selling Costs)</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-indigo-700">LKAS 16: Property, Plant & Eq</span>
                  <span className="text-slate-500">Cost vs Reval</span>
                </div>
                <p className="text-[10px] text-slate-500">Depreciable amount allocated over useful life; review annually.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-teal-700">LKAS 38: Intangible Assets</span>
                  <span className="text-slate-500">PIR Criteria</span>
                </div>
                <p className="text-[10px] text-slate-500">Research costs expensed immediately; development costs capitalized if viable.</p>
              </div>
            </div>
          </div>

          {/* Examiner Heatmap */}
          <div className="bg-white border border-slate-200 rounded-xl p-4">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">Examiner Scoring Heatmap</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-600">LKAS Disclosure Marks</span>
                <span className="text-xs font-bold text-emerald-600">14 / 15 pts avg</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-600">Double Entry Accuracy</span>
                <span className="text-xs font-bold text-indigo-600">18 / 20 pts avg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-600">Time Per Sub-Question</span>
                <span className="text-xs font-bold text-teal-600">3.2m / 5.0m limit</span>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-3">
             <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
             <div>
               <h4 className="text-xs font-bold text-emerald-800 mb-1">National Syllabus Verified</h4>
               <p className="text-[10px] text-emerald-700 leading-relaxed">Content synchronized with National Institute of Education (NIE) Sri Lanka 2024-2025 A/L Teacher Guides.</p>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function TrendingUpIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>;
}
function BuildingsIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
}
function CodeIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
}
