'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { quotes } from '@/data/quotes';
import ContactModal from '@/components/ui/ContactModal';
import { MessageSquare } from 'lucide-react';

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [currentQuote, setCurrentQuote] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentQuote((prev) => (prev + 1) % quotes.length);
                setIsExiting(false);
            }, 1000);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="flex-1 flex flex-col items-center justify-end lg:justify-center p-6 sm:p-10 min-h-0 relative overflow-hidden bg-[#030303]">

            {/* ГЛУБОКИЙ ГРАДИЕНТНЫЙ ФОН */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
                <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] bg-purple-600/10 blur-[130px] rounded-full" />

                <div className="relative w-full h-full max-w-[1600px] mx-auto">
                    <Image
                        src="/my_photo.png"
                        alt="Artem Skachko"
                        fill
                        priority
                        sizes="100vw"
                        className="object-contain object-bottom lg:object-right-bottom opacity-60 transition-opacity duration-1000 drop-shadow-[0_0_50px_rgba(0,0,0,1)]"
                        quality={75}
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 lg:via-[#030303]/30 to-transparent" />
            </div>

            {/* КОНТЕНТ */}
            <div className="max-w-5xl w-full flex flex-col lg:items-start lg:text-left items-center text-center space-y-8 sm:space-y-12 lg:space-y-20 z-10 relative mb-12 lg:mb-0">

                <div className="space-y-4">
                    {/* Исправлено: Добавлена прозрачность 80% для мобилок (opacity-80) и 100% для десктопа */}
                    <h1 className="text-6xl font-black tracking-tighter text-white opacity-80 lg:opacity-100 sm:text-7xl md:text-8xl leading-[0.9] animate-in fade-in slide-in-from-top-4 duration-1000 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        Artem Skachko
                    </h1>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                        <span className="h-[1px] w-8 bg-blue-600 hidden lg:block" />
                        <p className="text-base text-blue-500 font-bold uppercase tracking-[0.3em] sm:text-xl drop-shadow-md">
                            Project Manager • Engineer • Designer
                        </p>
                    </div>
                </div>

                {/* ЦИТАТЫ */}
                <div className="h-28 sm:h-40 flex items-center lg:items-start">
                    <div className={`transition-all duration-1000 transform ${isExiting ? 'opacity-0 -translate-y-2 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
                        <p className="text-lg sm:text-3xl md:text-4xl text-slate-300 font-light italic tracking-tight leading-tight max-w-3xl drop-shadow-lg">
                            "{quotes[currentQuote].text}"
                        </p>
                        <div className="flex items-center gap-3 mt-4 lg:mt-6 justify-center lg:justify-start">
                            <div className="w-1 h-1 bg-blue-600 rounded-full" />
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black">
                                {quotes[currentQuote].author}
                            </p>
                        </div>
                    </div>
                </div>

                {/* START A CONVERSATION */}
                <div className="pt-2 sm:pt-6">
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="cursor-pointer group relative flex items-center gap-4 sm:gap-6 px-6 py-3 sm:px-8 sm:py-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-blue-600 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95"
                    >
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-200 transition-colors font-bold">Interested in working together?</span>
                            <span className="text-lg sm:text-xl font-black text-white tracking-tight">Start a conversation</span>
                        </div>
                        <div className="p-2 sm:p-3 bg-blue-600 rounded-xl group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 rotate-[-10deg] group-hover:rotate-0 shadow-lg shrink-0">
                            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                    </button>
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </main>
    );
}