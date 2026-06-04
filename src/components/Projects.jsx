import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        title: 'Smart Report Generator',
        description: 'A full-stack academic reporting system using Next.js, Express.js, and FastAPI, enabling a modular microservice architecture and seamless communication between frontend, backend, and AI services.',
        tech: ['Next.js', 'Express.js', 'FastAPI', 'Redis', 'Groq (Llama 3.1)', 'Puppeteer', 'Cloudinary', 'Resend API', 'Prisma'],
        highlights: [
            'Developed a full-stack academic reporting system using Next.js, Express.js, and FastAPI, enabling a modular microservice architecture and seamless communication between frontend, backend, and AI services.',
            'Implemented secure session-based authentication utilizing Redis and UUIDs, establishing strict Role-Based Access Control (RBAC) for Student, Proctor, and Admin users.',
            'Engineered an AI-driven insight module using FastAPI and Groq (Llama 3.1), drastically reducing manual evaluation workloads by automatically generating personalized performance remarks from structured student data.',
            'Built an automated PDF report generation and email dispatch pipeline utilizing Puppeteer, Cloudinary, and the Resend API, streamlining administrative workflows and eliminating manual report sharing entirely.',
            'Designed scalable RESTful APIs with secure routing, robust middleware validation, and optimized data handling to ensure reliable and performant system operation.',
        ],
        github: 'https://github.com/Akashnavani/Smart-Report-Generator.git',
        live: 'https://msr-frontend-754411699176.us-central1.run.app/',
        image: '/projects/report-gen.png',
    },
    {
        title: 'Real-Time Chat Application',
        description: 'A full-stack real-time chat app built on the MERN stack — designed for instant messaging, user presence tracking, and seamless delivery without HTTP polling.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'React', 'JWT'],
        highlights: [
            'Built a real-time chat application utilizing Socket.io and Express.js, eliminating HTTP polling and enabling near-instant message delivery for a seamless user experience.',
            'Implemented JWT-based authentication utilizing HTTP-only, SameSite=Strict cookies, successfully mitigating XSS and CSRF vulnerabilities to ensure secure session management.',
            'Engineered a multi-provider email OTP verification system supporting Gmail SMTP, Gmail API, SendGrid, Resend, and EmailJS, with bcrypt-hashed OTPs and MongoDB TTL-based auto-expiry for secure user registration.',
            'Designed scalable MongoDB schemas via Mongoose, utilizing optimized object referencing to support fast data retrieval and efficient chat history loading.',
            'Enabled real-time presence tracking and instant message broadcasting, allowing the system to efficiently handle multiple concurrent user socket connections without performance degradation.',
            'Developed robust REST APIs following the MVC architecture pattern, ensuring a clean separation of concerns that improved code reusability and overall maintainability.',
        ],
        github: 'https://github.com/Akashnavani/chat-app',
        live: 'https://chat-app-7-vy0q.onrender.com/',
        image: '/projects/chat-app.png',
    },
    {
        title: 'PrepAI — AI Interview Prep & Resume Platform',
        description: 'A full-stack AI coaching platform using React 19, Vite, Sass, Express, and MongoDB to deliver customized interview plans and dynamic candidate-to-job matching metrics.',
        tech: ['React 19', 'Vite', 'Sass', 'Express', 'MongoDB', 'Google GenAI (Gemini)', 'Puppeteer', 'Multer', 'Zod'],
        highlights: [
            'Architected a full-stack AI coaching platform using React 19, Vite, Sass, Express, and MongoDB to deliver customized interview plans and dynamic candidate-to-job matching metrics.',
            'Integrated Google GenAI SDK (Gemini-3-Flash) with Zod-based schema validation to ensure type-safe, structured JSON generation for technical/behavioral preparation guides and day-wise study plans.',
            'Engineered an automated PDF compilation engine utilizing Puppeteer in headless mode to render tailored HTML profiles into pixel-perfect, ATS-friendly A4 resumes.',
            'Developed a memory-efficient file upload and parsing pipeline using Multer and pdf-parse to extract raw text from binary PDF resumes in-memory, minimizing server processing overhead.',
            'Designed structured MongoDB schemas via Mongoose to store user profile metrics, calculate job-alignment match scores, and track identified skill gaps classified by severity level.',
        ],
        github: 'https://github.com/Akashnavani/InterviewAI',
        live: 'https://prep-ai.onrender.com',
        image: '/projects/prepai.png',
    }
];

const ProjectCard = ({ project, idx }) => {
    const [expanded, setExpanded] = useState(false);
    const visibleHighlights = expanded ? project.highlights : project.highlights.slice(0, 3);

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
        >
            <div className="flex flex-col lg:flex-row items-stretch">
                {/* Screenshot or placeholder */}
                {project.image ? (
                    <div className="lg:w-[42%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                        <div className="p-5 h-full flex items-center">
                            <div className="w-full rounded-xl overflow-hidden border border-white/[0.06] aspect-video relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="lg:w-[42%] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                        <div className="p-5 h-full flex items-center justify-center min-h-[200px]">
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] border border-white/[0.06] flex items-center justify-center aspect-video">
                                <span className="font-display text-2xl font-bold text-white/10 tracking-tight">
                                    {project.title.split(' ')[0]}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-3 shrink-0">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-sm"
                                        aria-label="GitHub"
                                    >
                                        <Github size={16} />
                                        <span className="hidden sm:inline text-xs font-medium">Source</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1.5 text-sm"
                                        aria-label="Live Demo"
                                    >
                                        <ExternalLink size={16} />
                                        <span className="hidden sm:inline text-xs font-medium">Live</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-muted text-sm leading-relaxed mb-5">
                            {project.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2.5 mb-5">
                            {visibleHighlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-foreground/60 text-[0.85rem] leading-relaxed">
                                    <span className="mt-[7px] min-w-[5px] h-[5px] rounded-full bg-primary inline-block shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                        {project.highlights.length > 3 && (
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-primary/70 hover:text-primary transition-colors duration-200 font-medium mb-5"
                            >
                                {expanded ? '— Show less' : `+ ${project.highlights.length - 3} more`}
                            </button>
                        )}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-[0.72rem] font-medium text-muted border border-white/[0.06] bg-white/[0.02]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-[40%] left-[25%] w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        Projects
                    </h2>
                    <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
                    <p className="text-muted text-base font-light mt-4">
                        Some of the things I've built recently.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
