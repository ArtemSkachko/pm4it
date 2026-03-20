'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyResumePDF } from './PDFDocument';
import { FileText, Loader2 } from 'lucide-react';
import { buttonStyles } from './PDFClientWrapper';

export default function DownloadButton() {
    return (
        <PDFDownloadLink
            document={<MyResumePDF />}
            fileName="Artem_Skachko_Resume.pdf"
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