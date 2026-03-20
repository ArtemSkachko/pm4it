import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://pm4it.com'),
    title: {
        default: 'Artem Skachko | IT Project Manager & Engineer',
        template: '%s | pm4it.com'
    },
    description: 'Technical Project Manager with background in Software Engineering and Design. Expert in SDLC, Risk Management, and building scalable IT solutions.',
    keywords: ['Project Manager', 'Technical PM', 'Software Engineer', 'IT Management', 'Batumi', 'Next.js', 'SDLC'],
    authors: [{name: 'Artem Skachko'}],
    creator: 'Artem Skachko',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://pm4it.com',
        siteName: 'pm4it',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    other: {
        'geo.region': 'GE-AJ',
        'geo.placename': 'Batumi',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
            suppressHydrationWarning
        >
        <body
            className="min-h-screen flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
        <NextTopLoader
            color="#2563eb"
            showSpinner={false}
            shadow="0 0 10px #2563eb,0 0 5px #2563eb"
        />
        {/* Навигация сверху */}
        <Header/>
        {/* Основной контент (растягивается, чтобы прижать футер к низу) */}
        {children}
        {/* Подвал с копирайтом и стэком */}
        <Footer/>
        </body>
        </html>
    );
}