import { BookOpen, BrainCircuit, Upload, Sparkles, Layers } from "lucide-react";

export default function Flashcards() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
            <BrainCircuit className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">AI Note & Flashcard Builder</h1>
        <p className="text-slate-500">Upload lengthy PDF notes or past paper answers. The Groq LPU engine will instantly extract the text and convert it into bulleted summaries and interactive flashcard sets optimized for active recall.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Upload Section */}
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-slate-100 group-hover:bg-emerald-100 rounded-full flex items-center justify-center mb-4 transition-colors">
            <Upload className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Upload Study Material</h3>
          <p className="text-sm text-slate-500 mb-6">Drag and drop PDFs, Word Docs, or Images here. Max size 50MB.</p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2">
            Browse Files
          </button>
        </div>

        {/* Recent Decks */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" /> Recent Decks
            </h3>
            <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View All</button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">Business Ethics & Governance</h4>
                <p className="text-xs text-slate-500 mt-1">Generated 2 hours ago • 45 Cards</p>
              </div>
              <div className="text-emerald-600">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
              <div className="bg-sky-100 text-sky-600 p-3 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">Macroeconomic Indicators 2024</h4>
                <p className="text-xs text-slate-500 mt-1">Generated yesterday • 28 Cards</p>
              </div>
              <div className="text-emerald-600">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">LKAS 16 Disclosures</h4>
                <p className="text-xs text-slate-500 mt-1">Generated last week • 12 Cards</p>
              </div>
              <div className="text-emerald-600">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
