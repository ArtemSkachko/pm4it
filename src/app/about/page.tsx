'use client';

import Image from 'next/image';
import { Target, Cpu, PenTool, Layout, Box, Code2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto p-6 sm:p-12 font-mono text-slate-300 relative">

            {/* Заголовок */}
            <header className="border-b border-slate-800 pb-10">
                <h1 className="text-4xl font-black tracking-tighter text-white">About_Me</h1>
                <p className="text-xl text-slate-500 mt-2 font-light italic">
                    <span className="text-blue-500">~/</span>human_behind_the_code
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">

                {/* Левая колонка: Текст и Философия */}
                <div className="lg:col-span-7 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                            <span className="text-blue-600">01.</span> The Hybrid Identity
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-justify font-sans">
                            <p>
                                My career is built at the intersection of three disciplines. As a <strong className="text-white">Project Manager</strong>, I build processes and lead teams. As an <strong className="text-white">Engineer</strong>, I understand the technical constraints and possibilities. As a <strong className="text-white">Designer</strong>, I ensure that the final product is intuitive and aesthetic.
                            </p>
                            <p>
                                I don't just manage projects; I live them. From the first sketch in Figma to the final deployment on Vercel, I bridge the gap between business goals and technical execution.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-900">
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                                <Target size={14} /> Philosophy
                            </h3>
                            <p className="text-[11px] leading-relaxed text-slate-500">
                                Efficiency is not about doing more; it's about doing what matters. I believe in clean code, clear communication, and pixel-perfect results.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                                <Cpu size={14} /> Approach
                            </h3>
                            <p className="text-[11px] leading-relaxed text-slate-500">
                                I treat every project as a complex system. If one part fails, the whole system suffers. My job is to ensure synergy between design and engineering.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Правая колонка: Визуальные акценты и Тулкит */}
                <aside className="lg:col-span-5 space-y-12">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10"
                             style={{ paddingBottom: '125%' }}> {/* 4:5 aspect ratio */}
                            <Image
                                src="/my_photo.png"
                                alt="Artem Skachko"
                                fill
                                priority
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 object-top"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-slate-900/50">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">// My_Toolkit</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <ToolCategory icon={<Layout size={16}/>} title="Management" items={["Jira", "Notion", "Agile"]} />
                            <ToolCategory icon={<PenTool size={16}/>} title="Design" items={["Figma", "Photoshop", "UI/UX"]} />
                            <ToolCategory icon={<Code2 size={16}/>} title="Engineering" items={["Next.js", "React", "Node.js"]} />
                            <ToolCategory icon={<Box size={16}/>} title="Hardware" items={["CNC", "3D Print", "IoT"]} />
                        </div>
                    </div>
                </aside>
            </div>

            {/* Подвал страницы */}
            <footer className="mt-24 pt-12 border-t border-slate-900 text-center">
                <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] mb-4">Current_Base</p>
                <p className="text-xl font-black text-white italic tracking-tighter">
                    Batumi, Adjara, <span className="text-blue-600">Georgia</span>
                </p>
            </footer>
        </main>
    );
}

function ToolCategory({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
    return (
        <div className="p-4 border border-slate-900 bg-slate-900/20 rounded-xl hover:border-blue-500/30 transition-all group">
            <div className="text-blue-500 mb-3 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-[10px] font-black text-white uppercase mb-2 tracking-widest">{title}</h4>
            <div className="flex flex-wrap gap-1">
                {items.map(item => (
                    <span key={item} className="text-[8px] text-slate-600 uppercase font-bold">{item}</span>
                ))}
            </div>
        </div>
    );
}