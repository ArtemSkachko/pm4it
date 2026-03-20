'use client';

import { X, Mail, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Кастомные иконки в стиле Lucide (stroke-width: 2)
const WhatsAppIcon = () => (
    <svg
        viewBox="0 0 50 50"
        width="20"
        height="20"
        fill="currentColor" // Чтобы наследовала цвет текста (slate-400 / blue-400)
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        viewBox="0 0 50 50"
        width="20"
        height="20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
    </svg>
);

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                    <X size={20} />
                </button>

                <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">
                    Get in touch<span className="text-blue-600">.</span>
                </h2>

                <div className="space-y-3">
                    <ContactLink
                        icon={<Mail size={20} />}
                        label="Email"
                        value="as.skachko@gmail.com"
                        href="mailto:as.skachko@gmail.com"
                    />
                    <ContactLink
                        icon={<Send size={20} />}
                        label="Telegram"
                        value="@ArtemSkachko"
                        href="https://t.me/ArtemSkachko"
                    />
                    <ContactLink
                        icon={<LinkedInIcon />}
                        label="LinkedIn"
                        value="Artem Skachko"
                        href="https://www.linkedin.com/in/art-skachko/"
                    />
                    <ContactLink
                        icon={<WhatsAppIcon />}
                        label="WhatsApp"
                        value="+380 99 115 3048"
                        href="https://wa.me/380991153048"
                    />
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        Based in Batumi, Georgia
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
        >
            <div className="p-3 bg-white/5 rounded-xl text-slate-400 group-hover:text-blue-400 transition-colors">
                {icon}
            </div>
            <div className="flex-1">
                <p className="text-[9px] uppercase font-black text-slate-600 tracking-widest mb-0.5">{label}</p>
                <p className="text-white text-sm font-bold tracking-tight">{value}</p>
            </div>
        </a>
    );
}