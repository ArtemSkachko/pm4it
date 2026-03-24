import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://pm4it.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/about',
                    '/resume',
                    '/blog',
                    '/resources'
                ],
                disallow: [
                    '/private/', // Твои скрытые файлы
                    '/api/',     // Внутренние API эндпоинты
                    '/_next/',   // Системные файлы Next.js
                    '/static/',  // Если есть папка со статикой, которую не нужно индексировать отдельно
                ],
            },
            {
                // Специальное правило для GPTBot и других AI-краулеров
                // Если хочешь, чтобы они тебя индексировали (для LLM), оставляем allow
                userAgent: ['GPTBot', 'ChatGPT-User'],
                allow: ['/', '/blog', '/resources'],
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}