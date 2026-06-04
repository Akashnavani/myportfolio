import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        About Me
                    </h2>
                    <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Summary pull-quote */}
                    <p className="font-display text-xl md:text-2xl font-semibold text-foreground/90 leading-[1.5] tracking-tight mb-8">
                        Software Engineer passionate about developing efficient, reliable,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            and production-ready applications.
                        </span>
                    </p>

                    <div className="space-y-5 text-muted text-[1.02rem] md:text-lg leading-[1.8] font-light">
                        <p>
                            I have strong expertise in{' '}
                            <span className="font-mono text-primary text-[0.88em]">Java</span>,{' '}
                            <span className="font-mono text-primary text-[0.88em]">Data Structures & Algorithms</span>,
                            and Full Stack Development. I'm experienced in building scalable web applications,
                            REST APIs, real-time systems, secure authentication, and responsive user interfaces
                            using modern technologies.
                        </p>
                        <p>
                            I work hands-on with{' '}
                            <span className="font-mono text-primary text-[0.88em]">React.js</span>,{' '}
                            <span className="font-mono text-primary text-[0.88em]">Node.js</span>,{' '}
                            <span className="font-mono text-primary text-[0.88em]">Express.js</span>, and{' '}
                            <span className="font-mono text-primary text-[0.88em]">MongoDB</span>{' '}
                            — building everything from authentication flows and AI-powered platforms
                            to real-time messaging applications.
                        </p>
                        <p>
                            Whether it's architecting microservice systems, setting up session management with{' '}
                            <span className="font-mono text-primary text-[0.88em]">Redis</span>,
                            or wiring up WebSocket connections — I focus on writing code that's clean,
                            reliable, and built to scale.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
