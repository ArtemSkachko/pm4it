import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import NextTopLoader from 'nextjs-toploader';
import { getPersonSchema } from '@/lib/seo'; // Импортируем нашу схему
import { GoogleAnalytics } from '@next/third-parties/google'; // <-- 1. Импортируем аналитику

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

// Настройки вьюпорта вынесены в отдельный экспорт (требование Next.js 15)
export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://pm4it.com'),
    title: {
        default: 'Artem Skachko | IT Project Manager & Systems Engineer',
        template: '%s | pm4it.com'
    },
    description: 'Hybrid professional: IT Project Manager, Systems Engineer, and Designer. Specialist in SDLC optimization, crisis management, and scaling complex IT solutions.',
    keywords: ['Project Manager', 'Technical PM', 'Systems Engineer', 'IT Management', 'Batumi', 'Next.js', 'SDLC', 'Manager of Chaos'],
    authors: [{ name: 'Artem Skachko' }],
    creator: 'Artem Skachko',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://pm4it.com',
        siteName: 'pm4it',
        title: 'Artem Skachko | Manager of Chaos & Engineer of Systems',
        description: 'Systems-driven Project Management and Engineering Portfolio.'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Artem Skachko | IT Project Manager',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/icon.svg', type: 'image/svg+xml' }, // Основная иконка
            { url: '/favicon.ico' },                    // Фолбек для старых браузеров
        ],
        apple: [
            { url: '/apple-touch-icon.png' },           // Для iOS
        ],
    },
    other: {
        'geo.region': 'GE-AJ',
        'geo.placename': 'Batumi',
        'apple-mobile-web-app-title': 'pm4it',
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
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
            suppressHydrationWarning
        >
        <head>
            {/* JSON-LD Схема для LLM и Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
            />
        </head>
        <body
            className="min-h-screen flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans"
        >
        <NextTopLoader
            color="#2563eb"
            showSpinner={false}
            shadow="0 0 10px #2563eb,0 0 5px #2563eb"
        />
        <Header />
            {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        </body>
        </html>
    );
}