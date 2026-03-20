'use client';

import { useState, useEffect, useMemo } from 'react';
import { experience, skills, languages, education, interests } from "@/data/resume-data";
import PDFClientWrapper from "@/components/resume/PDFClientWrapper";
import { getPersonSchema } from '@/lib/seo';
import { ExternalLink } from 'lucide-react';

export default function ResumePage() {
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
    const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({});
    const [showAllEdu, setShowAllEdu] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = document.documentElement.scrollHeight * 0.25;
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

    // 1. Сортировка опыта: Present (null) всегда сверху
    const sortedExperience = useMemo(() => {
        return [...experience].sort((a, b) => {
            // Превращаем в числа для сравнения (даже если там пришла строка)
            const aStart = Number(a.startDate);
            const bStart = Number(b.startDate);
            const aEnd = a.endDate ? Number(a.endDate) : null;
            const bEnd = b.endDate ? Number(b.endDate) : null;

            // 1. Логика для Present (endDate === null)
            if (aEnd === null && bEnd === null) return bStart - aStart;
            if (aEnd === null) return -1;
            if (bEnd === null) return 1;

            // 2. Сортировка по дате окончания, если обе даты есть
            if (bEnd !== aEnd) return bEnd - aEnd;

            // 3. Если даты окончания равны, сортируем по дате начала
            return bStart - aStart;
        });
    }, []);

    // 2. Сортировка обучения: Сначала основные, потом курсы, всё по убыванию даты
    const sortedEducation = useMemo(() => {
        // Вместо (a: any, b: any) используем тип из твоих данных
        const sortFn = (a: (typeof education)[0], b: (typeof education)[0]): number => {
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
                    <h1 className="text-4xl font-black tracking-tighter text-white">Artem Skachko</h1>
                    <p className="text-xl text-slate-500 mt-2 font-light italic">
                        <span className="text-blue-500">~/</span>Project Manager • Engineer • Designer
                    </p>
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                    <span className="text-[9px] text-slate-700 uppercase font-bold tracking-widest font-sans">
                        build_v2.6.0_stable
                    </span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                {/* Левая колонка */}
                <aside className="lg:col-span-4 space-y-12">
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full" /> Skills
                        </h2>
                        {skills.map((section) => {
                            const isExpanded = expandedGroups[section.section];
                            const limit = 7;
                            const displayItems = isExpanded ? section.items : section.items.slice(0, limit);
                            return (
                                <div key={section.section} className="mb-8">
                                    <h3 className="text-[10px] font-bold text-slate-600 uppercase mb-4 flex justify-between border-b border-slate-900 pb-1">
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
                                                className={`text-[11px] px-3 py-1.5 border border-slate-800 bg-slate-900/30 text-slate-400 flex items-center gap-2 whitespace-nowrap ${
                                                    skill.experience >= 8 ? 'border-blue-500/40 text-blue-100' : ''
                                                }`}
                                            >
                                                <span>{skill.name}</span>
                                                <span className="opacity-30 italic text-[9px] border-l border-slate-800 pl-2">{skill.experience}y</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    <section className="pt-8 border-t border-slate-900">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full" /> Languages
                        </h2>
                        <div className="space-y-3">
                            {languages.map(lang => (
                                <div key={lang.name} className="flex justify-between items-center group">
                                    <span className="text-sm text-slate-400 group-hover:text-white transition">{lang.name}</span>
                                    <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pt-8 border-t border-slate-900">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full" /> Interests
                        </h2>
                        <div className="space-y-6">
                            {interests.map((interest, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-[11px] font-bold text-slate-300 uppercase mb-1 flex items-center gap-2">
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

                {/* Правая колонка */}
                <div className="lg:col-span-8 space-y-20">
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-10 italic">Experience_Log</h2>
                        <div className="space-y-12">
                            {sortedExperience.map((job, idx) => {
                                const isExpanded = expandedJobs[idx];
                                return (
                                    <article key={idx} className="relative pl-8 border-l border-slate-800 group">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border-2 border-blue-600 rounded-full" />
                                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                                            <h3 className="text-xl font-black text-white">{job.position}</h3>
                                            <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 font-bold uppercase tracking-tighter">
                                                {job.startDate} — {job.endDate || 'Present'}
                                            </span>
                                        </div>
                                        <p className="text-blue-500 font-bold uppercase text-[11px] mt-1 tracking-wider">{job.companyName}</p>
                                        <div className="mt-4">
                                            <p className="text-slate-400 text-sm leading-relaxed">{job.description.summary[0]}</p>
                                            {isExpanded && (
                                                <div className="mt-4 space-y-4 pt-4 border-t border-slate-900 animate-in fade-in slide-in-from-top-2">
                                                    {job.description.summary.slice(1).map((p, pi) => <p key={pi} className="text-slate-400 text-sm">{p}</p>)}
                                                    {job.description.responsibilities.length > 0 && (
                                                        <ul className="space-y-2">
                                                            {job.description.responsibilities.map((r, ri) => (
                                                                <li key={ri} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                    <span className="text-blue-600 mt-1.5 text-[8px]">▶</span>
                                                                    <span>{r}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                            <button onClick={() => toggleJob(idx)} className="mt-4 text-[10px] font-bold text-slate-600 hover:text-blue-500 uppercase tracking-widest">
                                                {isExpanded ? '[–] collapse' : '[+] details'}
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    <section className="pt-10 border-t border-slate-900">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-10 italic">Academic_&_Courses</h2>
                        <div className="space-y-12">
                            <div className="space-y-8">
                                {sortedEducation.main.map((edu, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="text-blue-600 font-bold text-xs pt-1 shrink-0">{edu.startDate} — {edu.endDate}</div>
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{edu.name}</h3>
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">{edu.qualification}</p>
                                            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{edu.description[0]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-slate-900/50">
                                <h3 className="text-[10px] font-bold text-slate-600 uppercase mb-6 tracking-widest">{"// "}Professional_Certifications</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(showAllEdu ? sortedEducation.additional : sortedEducation.additional.slice(0, 4)).map((edu, i) => (
                                        <a
                                            key={i}
                                            href={edu.link || '#'}
                                            target={edu.link ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className={`p-4 border border-slate-800 bg-slate-900/20 rounded-xl transition-all group relative ${edu.link ? 'hover:border-blue-500/50 hover:bg-slate-900/40 cursor-pointer' : 'cursor-default'}`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="text-[9px] text-blue-500 font-bold uppercase tracking-tighter">{edu.startDate} — {edu.endDate}</div>
                                                {edu.link && <ExternalLink size={12} className="text-slate-700 group-hover:text-blue-500 transition-colors" />}
                                            </div>
                                            <h4 className="text-[11px] font-bold text-slate-200 group-hover:text-white mb-1 leading-tight">{edu.qualification}</h4>
                                            <p className="text-[9px] text-slate-500 uppercase tracking-tighter">{edu.name}</p>
                                        </a>
                                    ))}
                                </div>
                                <button onClick={() => setShowAllEdu(!showAllEdu)} className="mt-6 text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-white transition-colors">
                                    {showAllEdu ? '[–] show less' : `[+] view all ${sortedEducation.additional.length} certificates`}
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-100 transition-all duration-700 ${showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-2 rounded-full shadow-2xl scale-110 sm:scale-100">
                    <PDFClientWrapper />
                </div>
            </div>

            <section className="sr-only" aria-hidden="true">
                <p>{skills.flatMap(s => s.items.map(i => i.name)).join(', ')}</p>
                <p>{education.map(e => `${e.name} ${e.qualification}`).join(', ')}</p>
                <p>{languages.map(l => `${l.name} ${l.level}`).join(', ')}</p>
            </section>
        </main>
    );
}