export type ResourceCategory = 'Management' | 'Engineering' | 'Design' | 'Industrial' | 'Other';

export interface Resource {
    name: string;
    year: string;
    description: string;
    publicLink: string; // Ссылка на официальный ресурс/магазин
    privateLink: string; // Скрытая ссылка на файл
    category: ResourceCategory;
}

export const categories: ResourceCategory[] = ['Management', 'Engineering', 'Design', 'Industrial', 'Other'];

export const resources: Resource[] = [
    {
        name: "The Goal: A Process of Ongoing Improvement",
        year: "2014",
        description: "Fundamental book on the Theory of Constraints (TOC). Essential for understanding bottlenecks in any system.",
        publicLink: "https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951",
        privateLink: "https://your-private-storage.com/books/the-goal.pdf",
        category: "Management"
    },
    {
        name: "Refactoring UI",
        year: "2018",
        description: "Practical guide to designing beautiful interfaces as an engineer. Highly recommended for 'Hybrid' roles.",
        publicLink: "https://www.refactoringui.com/",
        privateLink: "https://your-private-storage.com/design/refactoring-ui.pdf",
        category: "Design"
    },
    {
        name: "Next.js 15+ Advanced Patterns",
        year: "2025",
        description: "Deep dive into Server Components, Actions and Caching strategies.",
        publicLink: "https://nextjs.org/docs",
        privateLink: "https://github.com/your-private-repo",
        category: "Engineering"
    }
];