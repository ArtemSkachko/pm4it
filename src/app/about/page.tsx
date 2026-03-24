'use client';

import Image from 'next/image';
import { Target, Cpu, PenTool, Layout, Box, Code2, Zap, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto p-6 sm:p-12 font-mono text-slate-300 relative">

            {/* Заголовок */}
            <header className="border-b border-slate-800 pb-10">
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
                    I_Engineer_Systems
                </h1>
                <p className="text-xl text-slate-500 mt-2 font-light italic">
                    <span className="text-blue-500">~/</span>and_manage_chaos
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">

                {/* Левая колонка: Текст и Философия */}
                <div className="lg:col-span-7 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                            <span className="text-blue-600">01.</span> The Hybrid Identity
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-justify font-sans border-l-2 border-slate-900 pl-6">
                            <p>
                                My career is a non-linear journey through extreme environments. I am the architect where <strong className="text-white">digital logic meets physical precision</strong>. From managing the bankruptcy of state enterprises and scaling outstaffing firms from 70 to 300+ employees, to personally commissioning industrial CNC systems—I specialize in building systems that survive reality.
                            </p>
                            <p>
                                As a <strong className="text-white">Manager of Chaos</strong>, I excel in high-stakes environments where risk is high and clarity is low. As an <strong className="text-white">Engineer of Systems</strong>, I don&apos;t just write code; I design sustainable architectures, whether they are running on a Vercel server or a factory floor.
                            </p>
                            <p>
                                My background in forensic auditing and crisis management gives me a unique &quot;debug&quot; mindset: I see the bottlenecks in workflows, code, and business models before they become failures.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-900">
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                                <Target size={14} /> The 4 Pillars
                            </h3>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Optimization", "Speed", "Simplicity", "Reliability"].map(pill => (
                                    <span key={pill} className="px-2 py-1 bg-slate-900 border border-slate-800 text-[10px] text-blue-400 font-bold uppercase rounded">
                                        {pill}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[11px] leading-relaxed text-slate-500 mt-2 italic">
                                Efficiency isn’t about doing more; it’s about eliminating the redundant. My goal is a zero-friction system.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                                <Zap size={14} /> Global Mindset
                            </h3>
                            <p className="text-[11px] leading-relaxed text-slate-500">
                                Currently based in Batumi, Georgia. I operate globally, bridging gaps between international stakeholders, technical teams, and industrial production. I speak the languages of Business, Engineering, and Design fluently.
                            </p>
                        </div>
                    </section>

                    {/* Дополнительная секция "Quick Metrics" */}
                    <section className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-black text-white">320%</p>
                            <p className="text-[9px] text-slate-600 uppercase tracking-tighter">Team Growth</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white">80+</p>
                            <p className="text-[9px] text-slate-600 uppercase tracking-tighter">Sites Deployed</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white">15km</p>
                            <p className="text-[9px] text-slate-600 uppercase tracking-tighter">Daily Endurance</p>
                        </div>
                    </section>
                </div>

                {/* Правая колонка: Визуальные акценты и Тулкит */}
                <aside className="lg:col-span-5 space-y-12">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10"
                             style={{ paddingBottom: '125%' }}>
                            <Image
                                src="/my_photo.png"
                                alt="Artem Skachko"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                                fill
                                priority
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 object-top grayscale hover:grayscale-0"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-slate-900/50">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{"// "}Technical_Inventory</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <ToolCategory icon={<Layout size={16}/>} title="Operations" items={["Crisis Mgmt", "Scaling", "P&L", "Agile"]} />
                            <ToolCategory icon={<PenTool size={16}/>} title="Visual" items={["Parametric Design", "Figma", "Branding"]} />
                            <ToolCategory icon={<Code2 size={16}/>} title="Full-Stack" items={["Next.js", "React", "Node", "APIs"]} />
                            <ToolCategory icon={<Box size={16}/>} title="Industrial" items={["CNC", "3D Print", "G-Code", "HPL"]} />
                        </div>
                    </div>

                    <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-xl">
                        <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                            <ShieldCheck size={12}/> Current Status
                        </h3>
                        <p className="text-[11px] text-slate-400 font-sans italic">
                            Developing MatterIQ and providing digital transformation consultancy in Batumi. Open to high-impact projects.
                        </p>
                    </div>
                </aside>
            </div>

            {/* Подвал страницы */}
            <footer className="mt-24 pt-12 border-t border-slate-900 text-center">
                <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] mb-4 font-black italic underline decoration-blue-600 underline-offset-4">Proof_of_Work</p>
                <p className="text-xl font-black text-white italic tracking-tighter">
                    Batumi, Adjara, <span className="text-blue-600">Georgia</span>
                </p>
            </footer>
        </main>
    );
}

function ToolCategory({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
    return (
        <div className="p-4 border border-slate-900 bg-slate-900/10 rounded-xl hover:border-blue-500/30 transition-all group backdrop-blur-sm">
            <div className="text-blue-500 mb-3 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-[10px] font-black text-white uppercase mb-2 tracking-widest">{title}</h4>
            <div className="flex flex-wrap gap-1">
                {items.map(item => (
                    <span key={item} className="text-[8px] text-slate-500 uppercase font-bold px-1 bg-slate-800/50 rounded">{item}</span>
                ))}
            </div>
        </div>
    );
}