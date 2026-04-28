import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden text-center z-0">
            {/* Rich ambient background with depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-[25%] left-[15%] w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute top-[60%] right-[30%] w-[300px] h-[300px] bg-purple-600/6 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Subtle tag above heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-6"
                >
                    <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide">
                        Software Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.03em] mb-7 leading-[1.08]"
                >
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-accent inline-block drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        Akash Navani
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-foreground/55 max-w-2xl mb-12 leading-[1.7] font-light"
                >
                    I build backend systems, clean APIs, and real-time applications â€” focused on writing code that's scalable, secure, and actually enjoyable to work with.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-primary transition-all duration-300 shadow-[0_4px_25px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.45)] hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-4 rounded-2xl border border-white/15 bg-white/[0.04] text-foreground/90 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/25 hover:text-white transition-all duration-300 font-semibold cursor-pointer hover:-translate-y-1 flex justify-center"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.2, duration: 1 },
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-primary hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    <ChevronDown size={34} strokeWidth={1.5} />
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
