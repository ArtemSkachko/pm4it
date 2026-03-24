'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyResumePDF } from './PDFDocument';
import { FileText, Loader2 } from 'lucide-react';
import { buttonStyles } from './PDFClientWrapper';

export default function DownloadButton() {
    // Формируем динамическое имя файла
    const currentYear = new Date().getFullYear();
    const dynamicFileName = `Artem Skachko - Project Manager - ${currentYear}.pdf`;

    return (
        <PDFDownloadLink
            document={<MyResumePDF />}
            fileName={dynamicFileName}
            className={buttonStyles}
        >
            {({ loading }) => (
                <div className="flex items-center justify-center gap-2">
                    {loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Preparing...</span>
                        </>
                    ) : (
                        <>
                            <FileText className="w-4 h-4" />
                            <span>Download CV</span>
                        </>
                    )}
                </div>
            )}
        </PDFDownloadLink>
    );
}