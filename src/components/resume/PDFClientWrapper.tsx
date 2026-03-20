'use client';

import dynamic from 'next/dynamic';
import { Loader2, FileText } from 'lucide-react';

// Выносим стили в константу. Добавляем min-w для стабильности.
export const buttonStyles = "inline-flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-500/20 h-[38px] whitespace-nowrap min-w-[155px]";

const DownloadButton = dynamic(() => import('./DownloadButton'), {
    ssr: false,
    loading: () => (
        /* Этот блок отрендерится на сервере и сразу будет в HTML.
           Никаких прыжков, так как размеры и стили идентичны. */
        <div className={`${buttonStyles} cursor-wait opacity-90`}>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Preparing...</span>
        </div>
    )
});

export default function PDFClientWrapper() {
    return (
        /* Оборачиваем в div с фиксированной высотой для верности */
        <div className="flex items-center h-10">
            <DownloadButton />
        </div>
    );
}