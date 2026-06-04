import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        accent: '#3B82F6',
        skills: ['Java', 'C', 'JavaScript', 'Python'],
    },
    {
        title: 'Frontend',
        accent: '#A78BFA',
        skills: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js'],
    },
    {
        title: 'Backend',
        accent: '#34D399',
        skills: ['Node.js', 'Express.js'],
    },
    {
        title: 'Databases',
        accent: '#FBBF24',
        skills: ['MySQL', 'MongoDB'],
    },
    {
        title: 'Core Concepts',
        accent: '#FB7185',
        skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    },
    {
        title: 'Other Technologies',
        accent: '#06B6D4',
        skills: ['JWT Authentication', 'REST APIs', 'Socket.io'],
    },
    {
        title: 'Tools',
        accent: '#38BDF8',
        skills: ['IntelliJ IDEA', 'Eclipse', 'VS Code', 'Git', 'GitHub'],
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        Skills & Expertise
                    </h2>
                    <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
                    <p className="text-muted text-base font-light mt-4">
                        The tools and technologies I work with day to day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="bg-surface rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                            style={{ borderTopColor: category.accent, borderTopWidth: '3px' }}
                        >
                            <h3
                                className="font-mono text-xs font-semibold mb-4 tracking-[0.12em] uppercase"
                                style={{ color: category.accent }}
                            >
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/[0.04] rounded-lg text-[0.8rem] font-medium text-foreground/65 border border-white/[0.06] group-hover:text-foreground/80 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
