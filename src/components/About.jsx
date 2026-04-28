import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group hover:border-primary/20 transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
                >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex items-center gap-5 mb-10 relative z-10">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <User size={22} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            About Me
                        </h2>
                        <div className="h-[2px] bg-gradient-to-r from-primary/40 to-transparent flex-1 rounded-full"></div>
                    </div>

                    <div className="space-y-5 text-foreground/65 text-[1.05rem] md:text-lg leading-[1.8] font-light relative z-10">
                        <p>
                            I'm a <strong className="text-white font-medium">software engineer</strong> with a solid foundation in Java, data structures, and algorithms. I enjoy the challenge of building backend systems that are clean, reliable, and built to last.
                        </p>
                        <p>
                            Over the past few years, I've been working hands-on with <strong className="text-white font-medium">Node.js, Express.js, and REST APIs</strong> — building everything from authentication flows to real-time messaging. I care about writing code that's not just functional, but thoughtfully structured.
                        </p>
                        <p>
                            Whether it's setting up <strong className="text-white font-medium">session management with Redis</strong> or wiring up WebSocket connections, I'm always looking for the cleanest way to solve a problem without over-engineering it.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
