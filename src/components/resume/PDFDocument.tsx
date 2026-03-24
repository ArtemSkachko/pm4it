'use client';

import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import { experience, skills, education, languages, interests } from '@/data/resume-data';

Font.register({
    family: 'Inter',
    fonts: [
        { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
        { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 }
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Inter',
        paddingTop: 10
    },
    sidebarBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '28%',
        backgroundColor: '#f8fafc',
        borderRightWidth: 1,
        borderRightColor: '#e2e8f0',
        borderRightStyle: 'solid',
        zIndex: -1 // Убеждаемся, что фон всегда сзади
    },
    leftColumn: {
        width: '28%',
        padding: 20,
        paddingTop: 30, // Перенесли отступы сюда
        paddingBottom: 30
    },
    rightColumn: {
        width: '72%',
        padding: 25,
        paddingTop: 30, // И сюда
        paddingBottom: 30
    },

    name: { fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 2, tracking: -0.5 },
    title: { fontSize: 9, color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', marginBottom: 15, letterSpacing: 0.5 },

    sectionTitle: { fontSize: 8, fontWeight: 700, color: '#1e293b', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 8, marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#2563eb', borderBottomStyle: 'solid', paddingBottom: 2 },

    sidebarHeading: { fontSize: 7, fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginTop: 8, marginBottom: 3 },

    // Добавили стиль для ссылок
    sidebarText: { fontSize: 7, color: '#64748b', lineHeight: 1.4, marginBottom: 2, textDecoration: 'none' },
    sidebarLink: { fontSize: 7, color: '#2563eb', lineHeight: 1.4, marginBottom: 2, textDecoration: 'none', fontWeight: 700 },

    jobBlock: { marginBottom: 12 },
    jobHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 },
    jobPos: { fontSize: 11, fontWeight: 700, color: '#0f172a' },
    jobDate: { fontSize: 7.5, color: '#64748b', fontWeight: 700 },
    company: { fontSize: 9, color: '#2563eb', fontWeight: 700, marginBottom: 3 },

    atsSummary: { fontSize: 8, color: '#334155', lineHeight: 1.4, marginBottom: 4, textAlign: 'justify' },
    bullet: { fontSize: 7.5, color: '#475569', lineHeight: 1.4, marginBottom: 2, paddingLeft: 8 },

    eduItem: { marginBottom: 8 },
    eduName: { fontSize: 9, fontWeight: 700, color: '#1e293b' },
    eduQual: { fontSize: 7.5, color: '#64748b', marginTop: 1 },

    tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 4 },
    tag: { fontSize: 6, color: '#475569', backgroundColor: '#f1f5f9', paddingVertical: 2, paddingHorizontal: 5, borderRadius: 2, borderWidth: 1, borderColor: '#e2e8f0' }
});

export const MyResumePDF = () => {
    const currentYear = new Date().getFullYear();
    const documentTitle = `Artem Skachko - Project Manager - ${currentYear}`;

    const sortedExperience = [...experience].sort((a, b) => {
        const aEnd = a.endDate === null || a.endDate === 'Present' ? 9999 : Number(a.endDate);
        const bEnd = b.endDate === null || b.endDate === 'Present' ? 9999 : Number(b.endDate);
        if (aEnd !== bEnd) return bEnd - aEnd;
        return Number(b.startDate) - Number(a.startDate);
    });

    return (
        <Document title={documentTitle} author="Artem Skachko" subject="Professional Resume">
            <Page size="A4" style={styles.page}>
                <View style={styles.sidebarBackground} fixed />

                {/* LEFT COLUMN */}
                <View style={styles.leftColumn}>
                    <Text style={styles.sectionTitle}>Contact</Text>
                    <Text style={styles.sidebarText}>Batumi, Georgia</Text>
                    <Link src="mailto:as.skachko@gmail.com" style={styles.sidebarLink}>as.skachko@gmail.com</Link>
                    <Link src="https://t.me/ArtemSkachko" style={styles.sidebarLink}>TG: @ArtemSkachko</Link>
                    <Link src="https://wa.me/380991153048" style={styles.sidebarLink}>WA: +380991153048</Link>

                    {/* Новые ссылки */}
                    <Link src="https://www.linkedin.com/in/art-skachko/" style={styles.sidebarLink}>IN: /art-skachko</Link>
                    <Link src="https://pm4it.com" style={styles.sidebarLink}>WEB: Portfolio Site</Link>

                    <Text style={styles.sectionTitle}>Key Expertise</Text>
                    {skills.map((s, i) => (
                        <View key={i} style={{ marginBottom: 8 }}>
                            <Text style={styles.sidebarHeading}>{'// '} {s.section}</Text>
                            <Text style={styles.sidebarText}>
                                {s.items.slice(0, 8).map(item => item.name).join(', ')}
                            </Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitle}>Languages</Text>
                    {languages.map((l, i) => (
                        <Text key={i} style={styles.sidebarText}>{l.name}: {l.level}</Text>
                    ))}

                    <Text style={styles.sectionTitle}>Core Principles</Text>
                    {interests.slice(0, 4).map((interest, i) => (
                        <View key={i} style={{ marginBottom: 4 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700, color: '#475569' }}>{interest.name}</Text>
                        </View>
                    ))}
                </View>

                {/* RIGHT COLUMN */}
                <View style={styles.rightColumn}>
                    <View style={{ marginBottom: 15}}>
                        <Text style={styles.name}>Artem Skachko</Text>
                        <Text style={styles.title}>Project Manager • Systems Engineer • Technical Designer</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Professional Experience</Text>
                    {sortedExperience.map((job, i) => {
                        const endYear = job.endDate === null || job.endDate === 'Present' ? 9999 : Number(job.endDate);

                        const isRecent = endYear >= 2022;
                        const isMid = endYear >= 2017 && endYear < 2022;
                        const isLegacy = endYear < 2017;

                        return (
                            <View key={i} style={styles.jobBlock} wrap={false}>
                                <View style={styles.jobHeader}>
                                    <Text style={styles.jobPos}>{job.position}</Text>
                                    <Text style={styles.jobDate}>{job.startDate} — {job.endDate || 'Present'}</Text>
                                </View>
                                <Text style={styles.company}>{job.companyName}</Text>

                                {!isLegacy && (
                                    <Text style={styles.atsSummary}>
                                        {job.description.atsSummary || job.description.summary[0]}
                                    </Text>
                                )}

                                {isRecent && (
                                    <View>
                                        {(job.description.atsResponsibilities || job.description.responsibilities)
                                            .slice(0, 3)
                                            .map((r, ri) => (
                                                <Text key={ri} style={styles.bullet}>• {r}</Text>
                                            ))}
                                    </View>
                                )}
                            </View>
                        );
                    })}

                    <Text style={styles.sectionTitle}>Education</Text>
                    {education.filter(e => !e.additional).map((edu, i) => (
                        <View key={i} style={styles.eduItem} wrap={false}>
                            <Text style={styles.eduName}>{edu.name}</Text>
                            <Text style={styles.eduQual}>{edu.qualification} | {edu.startDate} — {edu.endDate}</Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitle}>Certifications</Text>
                    <View style={styles.tagContainer}>
                        {education.filter(e => e.additional).slice(0, 8).map((edu, i) => (
                            <Text key={i} style={styles.tag}>
                                {edu.qualification}
                            </Text>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};