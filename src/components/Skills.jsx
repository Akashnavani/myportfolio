import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        color: 'from-blue-500/20 to-cyan-500/10',
        borderHover: 'hover:border-blue-400/25',
        skills: ['Java', 'C', 'Python', 'JavaScript']
    },
    {
        title: 'Backend',
        color: 'from-emerald-500/20 to-green-500/10',
        borderHover: 'hover:border-emerald-400/25',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth']
    },
    {
        title: 'Frontend',
        color: 'from-violet-500/20 to-purple-500/10',
        borderHover: 'hover:border-violet-400/25',
        skills: ['HTML', 'CSS']
    },
    {
        title: 'Databases',
        color: 'from-amber-500/20 to-orange-500/10',
        borderHover: 'hover:border-amber-400/25',
        skills: ['MongoDB', 'MySQL']
    },
    {
        title: 'Core CS',
        color: 'from-rose-500/20 to-pink-500/10',
        borderHover: 'hover:border-rose-400/25',
        skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Networks']
    },
    {
        title: 'Tools',
        color: 'from-sky-500/20 to-blue-500/10',
        borderHover: 'hover:border-sky-400/25',
        skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Tableau']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-28 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[30%] left-[15%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-5 mb-5">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <Wrench size={22} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Skills & Expertise</h2>
                        <div className="h-[2px] bg-gradient-to-r from-primary/40 to-transparent flex-1 rounded-full"></div>
                    </div>
                    <p className="text-foreground/55 text-lg font-light ml-[52px]">The tools and technologies I work with day to day.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                            className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:bg-white/[0.05] ${category.borderHover} transition-all duration-400 group relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]`}
                        >
                            {/* Category-specific gradient glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                            <h3 className="text-sm font-semibold mb-5 text-foreground/80 group-hover:text-white transition-colors tracking-[0.08em] uppercase relative z-10">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3.5 py-1.5 bg-white/[0.05] rounded-lg text-[0.8rem] font-medium text-foreground/70 border border-white/[0.07] group-hover:border-white/15 group-hover:text-foreground/90 group-hover:bg-white/[0.07] transition-all duration-300"
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
