export function getBlogSchema(post: any) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "description": post.summary,
        "author": {
            "@type": "Person",
            "name": "Artem Skachko",
            "url": "https://pm4it.com"
        }
    };
}

export function getPersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Artem Skachko",
        "image": "https://pm4it.com/avatar.jpg", // Добавь свое фото в public
        "jobTitle": "Technical Project Manager & Software Engineer",
        "url": "https://pm4it.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Batumi",
            "addressCountry": "Georgia"
        },
        "sameAs": [
            "https://linkedin.com/in/artem-skachko", // Твой реальный линк
            "https://github.com/вашузернейм",
            "https://batfix.ge" // Твой бизнес — это мощный сигнал для Google
        ],
        "knowsAbout": [
            "Project Management",
            "Software Development (Next.js, React, Node.js)",
            "SDLC",
            "Risk Management",
            "Product Design (UX/UI)",
            "3D Printing & CNC",
            "Business Appraisal"
        ]
    };
}