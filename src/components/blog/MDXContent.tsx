import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import React from 'react';

type MDXComponentProps = React.HTMLAttributes<HTMLElement>;
type MDXAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const components = {
    // Твои существующие компоненты
    h1: (props: MDXComponentProps) => <h1 className="text-2xl font-bold text-blue-400 mb-6 font-mono" {...props} />,
    h2: (props: MDXComponentProps) => <h2 className="text-xl font-bold text-white mb-4 font-mono border-b border-slate-800 pb-2" {...props} />,
    p: (props: MDXComponentProps) => <p className="text-slate-400 leading-relaxed mb-6 text-sm" {...props} />,
    code: (props: MDXComponentProps) => <code className="bg-slate-800 px-1.5 py-0.5 rounded text-orange-300 text-xs font-mono" {...props} />,
    pre: (props: MDXComponentProps) => (
        <pre className="bg-[#1e1e1e] border border-slate-800 rounded-lg p-4 overflow-x-auto my-6 shadow-xl" {...props} />
    ),
    ul: (props: MDXComponentProps) => <ul className="list-none space-y-2 mb-6" {...props} />,
    li: (props: MDXComponentProps) => (
        <li className="flex items-start gap-3 text-slate-400 font-mono text-sm">
            <span className="text-blue-500/50 mt-1">→</span>
            <span>{props.children}</span>
        </li>
    ),
    a: (props: MDXAnchorProps) => (
        <a
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    ),

    // --- НОВЫЕ КОМПОНЕНТЫ ДЛЯ ТАБЛИЦ ---
    table: (props: MDXComponentProps) => (
        <div className="my-8 overflow-x-auto border border-slate-800 rounded-xl">
            <table className="w-full border-collapse text-sm text-left" {...props} />
        </div>
    ),
    thead: (props: MDXComponentProps) => <thead className="bg-slate-800/50 text-blue-300" {...props} />,
    th: (props: MDXComponentProps) => <th className="p-4 font-bold border-b border-slate-700" {...props} />,
    td: (props: MDXComponentProps) => <td className="p-4 border-b border-slate-800 text-slate-400" {...props} />,
    tr: (props: MDXComponentProps) => <tr className="hover:bg-slate-800/30 transition-colors" {...props} />,
    blockquote: (props: MDXComponentProps) => (
        <blockquote className="relative my-8 pl-6 pr-4 py-4 bg-slate-900/50 border-l-4 border-blue-500 rounded-r-xl italic shadow-inner" {...props}>
            {/* Опционально: можно добавить кавычку-иконку через псевдоэлемент или просто оставить чистый border */}
            <div className="text-slate-300 leading-relaxed">
                {props.children}
            </div>
        </blockquote>
    ),

    // Добавим горизонтальную линию (hr), она у тебя есть в посте (---)
    hr: () => <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />,
};

export function MDXContent({ source }: { source: string }) {
    return (
        <div className="prose prose-invert max-w-none">
            <MDXRemote
                source={source}
                components={components}
                // КЛЮЧЕВОЙ МОМЕНТ: Передаем опции сюда
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        // Если будут нужны еще плагины (например, для формул или эмодзи), добавляй их сюда
                    }
                }}
            />
        </div>
    );
}