'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PDFClientWrapper from '@/components/resume/PDFClientWrapper';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';
import { sendGAEvent } from '@next/third-parties/google';

export default function Header() {
    const pathname = usePathname();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Resume', href: '/resume' },
        { name: 'Blog', href: '/blog' },
        { name: 'Knowledge', href: '/resources' }
    ];

    // Блокируем скролл основной страницы при открытом меню
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    // УДАЛИЛИ useEffect, который вызывал ошибку линтера.
    // Вместо него используем onClick в самих ссылках ниже.

    return (
        <>
            {/* 1. ОСНОВНОЙ ХЕДЕР */}
            <header className="sticky top-0 z-[100] w-full bg-black/60 backdrop-blur-xl border-b border-slate-800/50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-baseline gap-1 group">
                        <span className="text-xl font-black tracking-tighter transition-colors group-hover:text-blue-500 text-white">
                            pm4it<span className="text-blue-600">.</span>com
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-all duration-300 hover:text-white py-1 ${
                                    pathname === link.href ? 'text-blue-500' : 'text-slate-400'
                                }`}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-in fade-in slide-in-from-left-2 duration-500" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={() => {
                                sendGAEvent({ event: 'contact_click', source: 'desktop_header' });
                                setIsContactOpen(true);
                            }}
                            className="hidden sm:flex items-center justify-center px-5 py-2 text-sm font-bold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full transition-all bg-white/5 hover:bg-white/10 active:scale-95"
                        >
                            Contact
                        </button>

                        <div className="scale-90 origin-right">
                            <PDFClientWrapper />
                        </div>

                        {/* Кнопка открытия меню (только мобилка) */}
                        <button
                            className="p-2 text-white md:hidden transition-transform active:scale-90"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. ВЫЕЗЖАЮЩАЯ ШТОРКА */}
            <div className={`
                fixed inset-0 z-[200] bg-black/80 backdrop-blur-2xl md:hidden transition-all duration-500 ease-in-out flex flex-col
                ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}>
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/50 shrink-0">
                    <span className="text-xl font-black tracking-tighter text-white">
                        pm4it<span className="text-blue-600">.</span>com
                    </span>
                    <button
                        className="p-2 text-white transition-transform active:scale-90"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={28} />
                    </button>
                </div>

                <nav className="flex-1 flex flex-col justify-between p-8 pb-12 overflow-hidden">
                    <div className="flex flex-col gap-[3vh] mt-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">{'//'}Navigation</p>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)} // ЗАКРЫВАЕМ ПРИ КЛИКЕ
                                className={`text-[clamp(2.5rem,12vw,5rem)] leading-none font-black tracking-tighter flex items-center justify-between group transition-colors ${
                                    pathname === link.href ? 'text-blue-600' : 'text-white'
                                }`}
                            >
                                {link.name}
                                <ArrowRight className={`w-[8vw] max-w-[40px] h-auto transition-opacity ${pathname === link.href ? 'opacity-100' : 'opacity-20'}`} />
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <button
                            onClick={() => {
                                sendGAEvent({ event: 'contact_click', source: 'mobile_menu' });
                                setIsMobileMenuOpen(false);
                                setIsContactOpen(true);
                            }}
                            className="w-full flex items-center justify-between px-8 py-6 text-[clamp(1.2rem,6vw,1.8rem)] font-black text-white bg-blue-600 rounded-2xl active:scale-[0.98] transition-all shadow-xl shadow-blue-900/40"
                        >
                            Get in Touch
                            <Mail size={28} />
                        </button>

                        <div className="flex justify-between items-center text-slate-500 text-[10px] font-mono pt-4 border-t border-white/5">
                            <span>© 2026 pm4it.com</span>
                            <span className="text-blue-900/50 uppercase tracking-widest">Batumi, Georgia</span>
                        </div>
                    </div>
                </nav>
            </div>

            {/* 3. МОДАЛКА КОНТАКТОВ */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}