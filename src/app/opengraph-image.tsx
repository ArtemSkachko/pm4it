import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // Идеально для Vercel: картинка генерируется за миллисекунды

export const alt = 'Artem Skachko | IT Project Manager & Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            // Сетка и дизайн карточки
            <div
                style={{
                    background: '#0d1117', // Тот самый темно-синий из IDE
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px',
                    border: '1px solid #1e293b', // Легкая рамка как в IDE
                }}
            >
                {/* Лого pm4it.com */}
                <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    fontSize: '110px',
                    fontWeight: 900,
                    letterSpacing: '-5px',
                    color: 'white',
                    marginBottom: '20px'
                }}>
                    pm4it<span style={{color: '#2563eb', marginLeft: '-5px'}}> . </span>com
                </div>

                {/* Заголовок и Био */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '28px',
                    color: '#94a3b8', // Серый text-slate-400
                    fontFamily: 'sans-serif',
                    marginTop: '20px',
                }}>
                    Artem Skachko
                </div>

                <div style={{
                    fontSize: '24px',
                    color: '#475569', // Еще темнее, text-slate-600
                    marginTop: '10px'
                }}>
                    Technical Project Manager • Engineer • Designer
                </div>

                {/* Маленький статус-бар внизу (для интриги) */}
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: '30px',
                    left: '30px',
                    right: '30px',
                    fontSize: '18px',
                    color: '#334155',
                    fontFamily: 'monospace',
                    borderTop: '1px solid #1e293b',
                    paddingTop: '15px'
                }}>
                    ~/pm4it/batumi/open_for_projects
                </div>
            </div>
        ),
        { ...size }
    );
}