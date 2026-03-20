export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-4 border-t border-slate-800/50 bg-transparent mt-auto">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-slate-500 font-mono">
                    © {year} pm4it.com
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="text-[10px] uppercase tracking-widest text-slate-600 font-bold italic">
                        Built with
                    </div>
                    <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                        <span className="hover:text-slate-300 transition-colors">Artem Skachko</span>
                        <span className="text-slate-700">•</span>
                        <span className="text-blue-500/80">Next.js 16</span>
                        <span className="text-slate-700">•</span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-bold">
                            Gemini LLM
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}