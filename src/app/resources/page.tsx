'use client';

import { useState, useEffect } from 'react';
import { resources, categories, ResourceCategory } from '@/data/resources-data';
import { Book, Code2, PenTool, Factory, Box, Download, ExternalLink} from 'lucide-react';

export default function ResourcesPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [inputBuffer, setInputBuffer] = useState('');

    // Секретный скрипт: активация по "!ilovepm"
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newBuffer = (inputBuffer + e.key).slice(-8);
            setInputBuffer(newBuffer);
            if (newBuffer === '!ilovepm') {
                setIsAdmin(true);
                console.log("Admin Mode: Active. Private links revealed.");
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [inputBuffer]);

    const getIcon = (cat: ResourceCategory) => {
        switch (cat) {
            case 'Management': return <Book size={18} />;
            case 'Engineering': return <Code2 size={18} />;
            case 'Design': return <PenTool size={18} />;
            case 'Industrial': return <Factory size={18} />;
            default: return <Box size={18} />;
        }
    };

    return (
        <main className="max-w-6xl mx-auto p-6 sm:p-12 font-mono text-slate-300">
            <header className="border-b border-slate-800 pb-10 mb-16">
                <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                    Knowledge_Base
                </h1>
                <p className="text-sm text-slate-500 mt-2 italic font-sans">
                    {isAdmin ? "[!] ADMIN_MODE ACTIVE: Accessing restricted files..." : "~/curated_resources_for_systems_thinking"}
                </p>
            </header>

            <div className="space-y-20">
                {categories.map(cat => {
                    const catResources = resources.filter(r => r.category === cat);
                    if (catResources.length === 0) return null;

                    return (
                        <section key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8 flex items-center gap-3">
                                {getIcon(cat)} {cat}_Assets
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {catResources.map((res, i) => (
                                    <div key={i} className="group relative p-6 bg-slate-900/20 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-[10px] text-slate-600 font-black">{res.year}</span>
                                                <div className="flex gap-3">
                                                    <a href={res.publicLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition">
                                                        <ExternalLink size={14} />
                                                    </a>
                                                    {isAdmin && (
                                                        <a href={res.privateLink} target="_blank" className="text-blue-500 hover:text-white transition animate-pulse">
                                                            <Download size={14} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <h3 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors leading-tight mb-2">
                                                {res.name}
                                            </h3>
                                            <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                                                {res.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}