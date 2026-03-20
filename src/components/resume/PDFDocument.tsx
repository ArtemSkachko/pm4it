import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { experience, SkillSection } from '@/data/resume-data';

// Регистрируем шрифт (стандартные шрифты PDF плохо дружат с кириллицей,
// но раз резюме на английском, пока можно без этого или использовать стандартные)
const styles = StyleSheet.create({
    page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica' },
    header: { marginBottom: 20, borderBottom: 1, pb: 10 },
    name: { fontSize: 24, fontWeight: 'bold' },
    sectionTitle: { fontSize: 12, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: '#2563eb', uppercase: true },
    job: { marginBottom: 15 },
    jobHeader: { flexDirection: 'row', justifyContent: 'space-between', fontWeight: 'bold' },
    company: { fontStyle: 'italic', marginBottom: 5 },
    summary: { color: '#4b5563', lineHeight: 1.4 }
});

export const MyResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>Artem Skachko</Text>
                <Text>Project Manager • Engineer • Designer</Text>
            </View>

            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((job, i) => (
                <View key={i} style={styles.job}>
                    <View style={styles.jobHeader}>
                        <Text style={{ fontWeight: 'bold' }}>{job.position}</Text>
                        <Text>{job.startDate} - {job.endDate || 'Present'}</Text>
                    </View>
                    <Text style={styles.company}>{job.companyName}</Text>
                    <Text style={styles.summary}>{job.description.summary[0]}</Text>
                </View>
            ))}
        </Page>
    </Document>
);