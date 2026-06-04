import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden hero-mesh">
            {/* Subtle ambient glows */}
            <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[25%] left-[10%] w-[350px] h-[350px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Role tag */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-7"
                >
                    <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/[0.08] bg-surface/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted font-medium">
                            Software Engineer
                        </span>
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1] tracking-[-0.03em] text-foreground mb-3"
                >
                    Akash Navani
                </motion.h1>

                {/* Gradient subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-8"
                >
                    Full Stack Developer
                </motion.p>

                {/* Terminal-style bio */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-10"
                >
                    <p className="font-mono text-sm md:text-base text-muted tracking-wide max-w-xl">
                        <span className="text-primary">{'>'}</span>{' '}
                        building scalable web apps, REST APIs & real-time systems
                        <span className="cursor-blink text-primary ml-0.5">_</span>
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm tracking-wide shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                    >
                        View My Work
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3.5 border border-white/[0.12] text-foreground/80 font-semibold rounded-xl hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-pointer hover:-translate-y-0.5 flex justify-center text-sm tracking-wide"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
