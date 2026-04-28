import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Globe, Cpu, FileText, Shield, FolderGit2 } from 'lucide-react';

const techColorMap = {
    'Next.js': { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.12)', text: '#E2E8F0' },
    'Express.js': { bg: 'rgba(104,211,145,0.08)', border: 'rgba(104,211,145,0.20)', text: '#68D391' },
    'FastAPI': { bg: 'rgba(0,150,136,0.08)', border: 'rgba(0,150,136,0.20)', text: '#4FD1C5' },
    'Redis': { bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.20)', text: '#FC8181' },
    'Groq (Llama 3.1)': { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.20)', text: '#C084FC' },
    'Puppeteer': { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.20)', text: '#FBBF24' },
    'Cloudinary': { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.20)', text: '#93C5FD' },
    'Resend API': { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.20)', text: '#F9A8D4' },
    'Prisma': { bg: 'rgba(100,116,139,0.10)', border: 'rgba(148,163,184,0.20)', text: '#94A3B8' },
    'Node.js': { bg: 'rgba(104,211,145,0.08)', border: 'rgba(104,211,145,0.20)', text: '#68D391' },
    'MongoDB': { bg: 'rgba(72,187,120,0.08)', border: 'rgba(72,187,120,0.20)', text: '#68D391' },
    'Mongoose': { bg: 'rgba(72,187,120,0.06)', border: 'rgba(72,187,120,0.15)', text: '#9AE6B4' },
    'Socket.io': { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.10)', text: '#E2E8F0' },
    'React': { bg: 'rgba(97,218,251,0.08)', border: 'rgba(97,218,251,0.20)', text: '#61DAFB' },
};

const defaultTechColor = { bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.15)', text: '#93C5FD' };

const highlightIcons = {
    'full-stack': <Globe size={15} className="text-emerald-400 shrink-0" />,
    'authentication': <Shield size={15} className="text-amber-400 shrink-0" />,
    'ai-powered': <Cpu size={15} className="text-purple-400 shrink-0" />,
    'pdf': <FileText size={15} className="text-rose-400 shrink-0" />,
    'api': <Database size={15} className="text-sky-400 shrink-0" />,
};

const projects = [
    {
        title: 'Real-Time Chat Application',
        description: 'A full-stack real-time chat app built on the MERN stack â€” designed for instant messaging, user presence tracking, and seamless delivery without HTTP polling.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'React'],
        highlights: [
            'Built a real-time chat application using Socket.io and Express.js, eliminating HTTP polling and enabling near-instant message delivery for a seamless user experience.',
            'Implemented JWT-based authentication with HTTP-only, SameSite=Strict cookies, mitigating XSS and CSRF vulnerabilities for secure session management.',
            'Designed scalable MongoDB schemas via Mongoose, using optimized object referencing for fast data retrieval and efficient chat history loading.',
            'Enabled real-time presence tracking and instant message broadcasting, handling multiple concurrent socket connections without performance degradation.',
            'Developed robust REST APIs following the MVC architecture pattern, ensuring clean separation of concerns for better reusability and maintainability.'
        ],
        github: 'https://github.com/Akashnavani/chat-app',
        live: 'https://chat-app-vw56.onrender.com/'
    },
    {
        title: 'Smart Report Generator',
        description: 'A full-stack academic reporting system built on a modular microservice architecture. It ties together the frontend, backend, and AI layers to automate student performance analysis â€” from raw data to personalized reports delivered via email.',
        tech: ['Next.js', 'Express.js', 'FastAPI', 'Redis', 'Groq (Llama 3.1)', 'Puppeteer', 'Cloudinary', 'Resend API', 'Prisma'],
        highlights: [
            'Built the full system end-to-end with Next.js, Express.js, and FastAPI â€” each service owns a clear responsibility, keeping things modular and easy to scale.',
            'Set up session-based auth using Redis and UUIDs, with role-based access control for Students, Proctors, and Admins so each user only sees what they should.',
            'Developed an AI insights module with FastAPI and Groq (Llama 3.1) that generates personalized performance remarks automatically â€” saving hours of manual evaluation.',
            'Created a pipeline that generates PDF reports via Puppeteer, stores them on Cloudinary, and sends them through Resend â€” fully automated, no manual sharing needed.',
            'Designed clean REST APIs with input validation, secure routing, and query optimization to keep response times fast and the system reliable.'
        ],
        github: 'https://github.com/Akashnavani/Smart-Report-Generator.git',
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[40%] left-[25%] w-[700px] h-[700px] bg-primary/6 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-5 mb-5">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <FolderGit2 size={22} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Projects</h2>
                        <div className="h-[2px] bg-gradient-to-r from-primary/40 to-transparent flex-1 rounded-full"></div>
                    </div>
                    <p className="text-foreground/55 text-lg font-light ml-[52px]">Some of the things I've built recently.</p>
                </motion.div>

                <div className="space-y-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                            className="group bg-white/[0.03] rounded-3xl overflow-hidden border border-white/[0.07] hover:border-primary/20 transition-all duration-500 relative backdrop-blur-sm hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="p-7 md:p-10 relative z-10">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <div className="hidden md:flex items-center gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.05] border border-white/10 rounded-xl hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" aria-label="GitHub">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.05] border border-white/10 rounded-xl hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" aria-label="Live Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-foreground/60 text-[1.02rem] md:text-lg mb-8 leading-relaxed font-light">
                                    {project.description}
                                </p>

                                {/* Key Contributions label */}
                                {project.highlightIcons && (
                                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-semibold mb-5">Key Contributions</p>
                                )}

                                {/* Highlights */}
                                <ul className="mb-8 space-y-4">
                                    {project.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3.5 text-foreground/70 font-light text-[0.93rem] leading-relaxed group/item">
                                            {project.highlightIcons ? (
                                                <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] shrink-0 group-hover/item:border-primary/25 group-hover/item:bg-white/[0.07] transition-all duration-300">
                                                    {highlightIcons[project.highlightIcons[index]] || <Database size={15} className="text-sky-400" />}
                                                </span>
                                            ) : (
                                                <span className="mt-[8px] min-w-[6px] h-[6px] rounded-full bg-primary inline-block shrink-0 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" />
                                            )}
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2.5 mb-6 md:mb-0">
                                    {project.tech.map((tech) => {
                                        const colors = techColorMap[tech] || defaultTechColor;
                                        return (
                                            <span
                                                key={tech}
                                                className="px-3.5 py-1.5 rounded-lg text-[0.78rem] font-semibold transition-all duration-300 hover:scale-105 cursor-default border"
                                                style={{
                                                    backgroundColor: colors.bg,
                                                    borderColor: colors.border,
                                                    color: colors.text,
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>


                                {/* Mobile Links */}
                                <div className="flex md:hidden items-center gap-5 mt-8 pt-6 border-t border-white/[0.07]">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/75 hover:text-primary font-semibold transition-colors text-sm">
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/75 hover:text-primary font-semibold transition-colors text-sm">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
