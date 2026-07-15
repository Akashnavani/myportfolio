import { motion } from 'framer-motion';
import { Trophy, Briefcase } from 'lucide-react';

const workExperience = [
    {
        role: 'Full Stack Developer Intern',
        company: 'A2lytics Pvt Ltd, Remote',
        duration: 'Jan 2025 – Mar 2025',
        description: 'Developed an AI-powered interview preparation platform using the MERN stack, enabling users to generate interview questions, analyze resumes, and receive AI-driven feedback through a scalable cloud-ready architecture.',
        highlights: [
            'Architected a modern Full-Stack web application using React.js (Vite), Node.js, Express.js, and MongoDB, delivering a responsive user experience and scalable backend services.',
            'Integrated Google Gemini AI API to generate personalized interview questions and provide intelligent feedback based on user profiles and responses.',
            'Developed an automated PDF resume parsing system using pdf-parse, extracting candidate information to streamline interview preparation workflows.',
            'Designed and implemented a CI/CD pipeline using Jenkins, Docker, SonarQube, and Trivy, enabling automated builds, code quality analysis, vulnerability scanning, and deployment.'
        ]
    }
];

const education = [
    {
        degree: 'B.E in Information Science & Engineering',
        institution: 'Ramaiah Institute of Technology, Bengaluru',
        year: '2024 – Present',
        score: 'GPA: 8.06',
    },
    {
        degree: 'Diploma in Computer Science & Engineering',
        institution: 'SJPN Trusts Polytechnic, Nidasoshi',
        year: '2021 – 2024',
        score: 'GPA: 9.56',
    },
    {
        degree: 'High School (SSLC)',
        institution: 'Government High School Baad',
        year: '2020 – 2021',
        score: '94.56%',
    },
];

const achievements = [
    {
        title: 'Diploma Topper',
        description: 'Secured 1st Rank in Computer Science and Engineering.',
    },
    {
        title: 'DCET Rank: 171',
        description: 'Achieved Rank 171, highest in the college.',
    },
    {
        title: 'Hackathon Award',
        description: 'Secured 3rd place in Project Exhibition "Technovision-25".',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-[25%] -left-48 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        Experience & Education
                    </h2>
                    <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
                </motion.div>

                {/* Work Experience */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase size={20} className="text-primary" />
                        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                            Work Experience
                        </h3>
                    </div>
                    <div className="space-y-8">
                        {workExperience.map((item, idx) => (
                            <motion.div
                                key={item.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="bg-surface rounded-2xl p-6 md:p-8 border border-white/[0.06] hover:border-primary/20 transition-all duration-300 relative group"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 rounded-l-2xl group-hover:bg-primary transition-colors duration-300" />
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pl-3">
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-1 tracking-tight">
                                            {item.role}
                                        </h3>
                                        <p className="text-primary/90 text-sm font-medium">
                                            {item.company}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs font-semibold text-muted/80 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-lg shrink-0 w-fit">
                                        {item.duration}
                                    </span>
                                </div>
                                <div className="pl-3 space-y-4 text-muted text-sm leading-relaxed">
                                    <p>{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2.5">
                                                <span className="mt-[7px] min-w-[5px] h-[5px] rounded-full bg-accent/70 inline-block shrink-0" />
                                                <span className="text-foreground/70">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education timeline */}
                <div className="space-y-0 mb-16">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-6">
                        Education
                    </h3>
                    {education.map((item, idx) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="group py-7 border-b border-white/[0.06] last:border-b-0"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                                    {item.degree}
                                </h3>
                                <span className="font-mono text-sm font-bold text-accent bg-accent/[0.08] border border-accent/[0.15] px-3 py-1 rounded-lg shrink-0">
                                    {item.score}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                <p className="text-muted text-sm">{item.institution}</p>
                                <span className="font-mono text-xs text-muted/60">{item.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy size={20} className="text-accent" />
                        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                            Achievements
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className="bg-surface rounded-xl p-5 border border-white/[0.06] hover:border-accent/20 transition-colors duration-300"
                            >
                                <h4 className="font-semibold text-foreground text-sm mb-1.5">
                                    {item.title}
                                </h4>
                                <p className="text-muted text-sm font-light leading-relaxed">
                                    {item.description}
                                    {item.link && (
                                        <>
                                            {' '}
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-accent hover:text-primary transition-colors duration-200 link-underline"
                                            >
                                                (Certificate)
                                            </a>
                                        </>
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;