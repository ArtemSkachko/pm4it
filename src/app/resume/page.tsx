'use client';

import { useState, useEffect, useMemo } from 'react';
import { experience, skills, languages, education, interests } from "@/data/resume-data";
import PDFClientWrapper from "@/components/resume/PDFClientWrapper";
import { getPersonSchema } from '@/lib/seo';
import { ExternalLink, Target, Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function ResumePage() {
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
    const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({});
    const [showAllEdu, setShowAllEdu] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 300;
            setShowFloatingButton(window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleGroup = (groupName: string) => {
        setExpandedGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
    };

    const toggleJob = (idx: number) => {
        setExpandedJobs(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const sortedExperience = useMemo(() => {
        return [...experience].sort((a, b) => {
            const aStart = Number(a.startDate);
            const bStart = Number(b.startDate);
            const aEnd = a.endDate ? Number(a.endDate) : 2099; // Будущее для Present
            const bEnd = b.endDate ? Number(b.endDate) : 2099;

            if (bEnd !== aEnd) return bEnd - aEnd;
            return bStart - aStart;
        });
    }, []);

    const sortedEducation = useMemo(() => {
        // Извлекаем тип одного элемента из массива education
        type EducationItem = (typeof education)[number];

        const sortFn = (a: EducationItem, b: EducationItem): number => {
            const aEnd = a.endDate ? Number(a.endDate) : 9999;
            const bEnd = b.endDate ? Number(b.endDate) : 9999;
            const aStart = Number(a.startDate);
            const bStart = Number(b.startDate);

            return (bEnd - aEnd) || (bStart - aStart);
        };

        return {
            main: education.filter(edu => !edu.additional).sort(sortFn),
            additional: education.filter(edu => edu.additional).sort(sortFn)
        };
    }, []);

    return (
        <main className="max-w-6xl mx-auto p-6 sm:p-4 sm:py-12 font-mono text-slate-300 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
            />

            {/* Header */}
            <header className="flex justify-between items-end border-b border-slate-800 pb-10">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic underline decoration-blue-600 underline-offset-8">Artem_Skachko</h1>
                    <p className="text-xl text-slate-500 mt-4 font-light italic">
                        <span className="text-blue-500">~/</span>Project_Manager • Engineer • Designer
                    </p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-2 text-right">
                    <span className="text-[9px] text-slate-700 uppercase font-bold tracking-[0.3em] font-sans">
                        build_v2.7.0_stable
                    </span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-75" />
                        <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-150" />
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                {/* Левая колонка: Skills & Bio */}
                <aside className="lg:col-span-4 space-y-12">
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8 flex items-center gap-2">
                            <Code2 size={14} /> Skills_Inventory
                        </h2>
                        {skills.map((section) => {
                            const isExpanded = expandedGroups[section.section];
                            const limit = 7;
                            const displayItems = isExpanded ? section.items : section.items.slice(0, limit);
                            return (
                                <div key={section.section} className="mb-8 group">
                                    <h3 className="text-[10px] font-bold text-slate-600 uppercase mb-4 flex justify-between border-b border-slate-900 pb-1 group-hover:border-blue-900 transition-colors">
                                        <span>{"// "}{section.section}</span>
                                        {section.items.length > limit && (
                                            <button onClick={() => toggleGroup(section.section)} className="text-blue-500 text-[9px] hover:text-white transition uppercase">
                                                {isExpanded ? '[-] hide' : `[+${section.items.length - limit}]`}
                                            </button>
                                        )}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {displayItems.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className={`text-[11px] px-3 py-1.5 border border-slate-800 bg-slate-900/30 text-slate-400 flex items-center gap-2 whitespace-nowrap transition-all hover:border-blue-500/30 ${
                                                    skill.experience >= 8 ? 'border-blue-500/40 text-blue-100 shadow-[0_0_10px_rgba(59,130,246,0.05)]' : ''
                                                }`}
                                            >
                                                <span>{skill.name}</span>
                                                <span className="opacity-30 italic text-[9px] border-l border-slate-800 pl-2 font-sans">{skill.experience}y</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    <section className="pt-8 border-t border-slate-900">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rotate-45" /> Languages
                        </h2>
                        <div className="space-y-3">
                            {languages.map(lang => (
                                <div key={lang.name} className="flex justify-between items-center group">
                                    <span className="text-xs text-slate-400 group-hover:text-white transition uppercase tracking-widest">{lang.name}</span>
                                    <span className="text-[9px] font-black text-blue-500 bg-blue-500/5 border border-blue-500/20 px-2 py-0.5 rounded uppercase">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pt-8 border-t border-slate-900">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rotate-45" /> Interests
                        </h2>
                        <div className="space-y-6">
                            {interests.map((interest, i) => (
                                <div key={i} className="group p-3 hover:bg-slate-900/20 rounded-lg transition-colors border border-transparent hover:border-slate-800">
                                    <h3 className="text-[11px] font-black text-slate-200 uppercase mb-2 flex items-center gap-2">
                                        <span className="text-blue-600">#</span>{interest.name}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-sans group-hover:text-slate-400 transition-colors">
                                        {interest.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>

                {/* Правая колонка: Experience & Education */}
                <div className="lg:col-span-8 space-y-20">
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-10 flex items-center gap-3 italic">
                            <Briefcase size={14} /> Experience_Log
                        </h2>
                        <div className="space-y-12">
                            {sortedExperience.map((job, idx) => {
                                const isExpanded = expandedJobs[idx];
                                return (
                                    <article key={idx} className="relative pl-8 border-l border-slate-800 group">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border-2 border-blue-600 rounded-full group-hover:scale-125 transition-transform" />

                                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                                            <h3 className="text-xl font-black text-white group-hover:text-blue-500 transition-colors uppercase tracking-tighter">
                                                {job.position}
                                            </h3>
                                            <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 font-black uppercase tracking-widest">
                                                {job.startDate} — {job.endDate || 'Present'}
                                            </span>
                                        </div>

                                        <p className="text-blue-500 font-black uppercase text-[11px] mt-1 tracking-[0.2em]">{job.companyName}</p>

                                        <div className="mt-4">
                                            <p className="text-slate-400 text-sm leading-relaxed font-sans">{job.description.summary[0]}</p>

                                            {isExpanded && (
                                                <div className="mt-6 space-y-6 pt-6 border-t border-slate-900 animate-in fade-in slide-in-from-top-4 duration-500">

                                                    {/* Summary Extension */}
                                                    {job.description.summary.slice(1).length > 0 && (
                                                        <div className="space-y-3">
                                                            {job.description.summary.slice(1).map((p, pi) => (
                                                                <p key={pi} className="text-slate-400 text-sm font-sans leading-relaxed">{p}</p>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Goals Block */}
                                                    {job.description.goals && job.description.goals.length > 0 && (
                                                        <div className="bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl">
                                                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                                <Target size={12} /> Strategic_Goals
                                                            </h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                                                {job.description.goals.map((goal, gi) => (
                                                                    <li key={gi} className="text-[11px] text-slate-400 flex items-start gap-2">
                                                                        <span className="text-blue-600 font-black">✓</span>
                                                                        <span>{goal}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Responsibilities */}
                                                    {job.description.responsibilities.length > 0 && (
                                                        <div className="space-y-3">
                                                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{"// "}Key_Responsibilities</h4>
                                                            <ul className="space-y-3">
                                                                {job.description.responsibilities.map((r, ri) => (
                                                                    <li key={ri} className="flex items-start gap-3 text-slate-400 text-[13px] font-sans">
                                                                        <span className="text-blue-600 mt-1.5 text-[8px] shrink-0">▶</span>
                                                                        <span className="leading-snug">{r}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <button
                                                onClick={() => toggleJob(idx)}
                                                className="mt-6 text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-[0.3em] flex items-center gap-2 group/btn"
                                            >
                                                <span className="text-blue-500 group-hover/btn:translate-x-1 transition-transform">
                                                    {isExpanded ? '[–]' : '[+]'}
                                                </span>
                                                {isExpanded ? 'collapse_log' : 'view_details'}
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="pt-10 border-t border-slate-900">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-10 flex items-center gap-3 italic">
                            <GraduationCap size={16} /> Academic_&_Certs
                        </h2>
                        <div className="space-y-12">
                            <div className="space-y-8">
                                {sortedEducation.main.map((edu, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-8 group">
                                        <div className="text-blue-600 font-black text-[10px] pt-1 shrink-0 uppercase tracking-tighter">
                                            {edu.startDate} — {edu.endDate}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-base font-black text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight italic">
                                                {edu.name}
                                            </h3>
                                            <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest border-l-2 border-blue-600 pl-3">
                                                {edu.qualification}
                                            </p>
                                            <p className="text-[12px] text-slate-500 leading-relaxed font-sans">{edu.description[0]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-slate-900/50">
                                <h3 className="text-[10px] font-black text-slate-600 uppercase mb-6 tracking-[0.3em]">{"// "}Verifiable_Certifications</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(showAllEdu ? sortedEducation.additional : sortedEducation.additional.slice(0, 4)).map((edu, i) => (
                                        <a
                                            key={i}
                                            href={edu.link || '#'}
                                            target={edu.link ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className={`p-4 border border-slate-800 bg-slate-900/10 rounded-xl transition-all group relative backdrop-blur-sm ${edu.link ? 'hover:border-blue-500/50 hover:bg-slate-900/40 cursor-pointer' : 'cursor-default'}`}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="text-[9px] text-blue-500 font-black uppercase tracking-widest">{edu.startDate} — {edu.endDate}</div>
                                                {edu.link && <ExternalLink size={12} className="text-slate-700 group-hover:text-blue-500 transition-colors" />}
                                            </div>
                                            <h4 className="text-[11px] font-black text-slate-200 group-hover:text-white mb-1 leading-tight uppercase tracking-tight">{edu.qualification}</h4>
                                            <p className="text-[9px] text-slate-600 uppercase font-bold tracking-tighter">{edu.name}</p>
                                        </a>
                                    ))}
                                </div>
                                <button onClick={() => setShowAllEdu(!showAllEdu)} className="mt-8 text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] hover:text-white transition-colors underline underline-offset-8 decoration-slate-800 hover:decoration-blue-600">
                                    {showAllEdu ? '[–] collapse_certs' : `[+] decode_all_${sortedEducation.additional.length}_certs`}
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-in-out ${showFloatingButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
                <div className="bg-black/60 backdrop-blur-3xl border border-white/10 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-white/20">
                    <PDFClientWrapper />
                </div>
            </div>

            {/* SEO Shadow Section */}
            <section className="sr-only" aria-hidden="true">
                <p>{skills.flatMap(s => s.items.map(i => i.name)).join(', ')}</p>
                <p>{education.map(e => `${e.name} ${e.qualification}`).join(', ')}</p>
                <p>{experience.map(j => `${j.position} at ${j.companyName}. Goals: ${j.description.goals?.join('; ')}`).join(', ')}</p>
                <p>{languages.map(l => `${l.name} ${l.level}`).join(', ')}</p>
            </section>
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