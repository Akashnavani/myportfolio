import { Code2, Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-transparent border-t border-white/[0.06] py-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/4 blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 group">
                        <Code2 className="text-primary w-6 h-6 group-hover:rotate-180 transition-transform duration-700 ease-in-out drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
                        <span className="text-lg font-bold tracking-tight">
                            <span className="text-foreground/80">Akash</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">.dev</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/Akashnavani" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase flex items-center gap-1.5">
                            <Github size={16} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/akash-navani-176b92378" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors text-sm font-semibold tracking-wide uppercase flex items-center gap-1.5">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>

                    {/* Back to top */}
                    <Link to="home" smooth={true} duration={800} className="cursor-pointer p-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-foreground/50 hover:text-white hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                        <ArrowUp size={18} />
                    </Link>
                </div>

                <div className="text-center text-foreground/35 text-sm flex flex-col items-center gap-2 font-light">
                    <p>© {new Date().getFullYear()} Akash Navani. All rights reserved.</p>
                    <p>Built with React, Tailwind CSS & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
