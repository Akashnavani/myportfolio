import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="border-t border-white/[0.06] py-8 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex items-center gap-3">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                            <span className="font-display text-sm font-bold text-foreground/60 hover:text-primary transition-colors duration-300">
                                Akash<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <span className="text-white/10">·</span>
                        <span className="text-xs text-muted/40">
                            © {new Date().getFullYear()}
                        </span>
                    </div>

                    <p className="text-[0.7rem] text-muted/30 tracking-wider">
                        React · Tailwind CSS · Framer Motion
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Akashnavani" target="_blank" rel="noopener noreferrer" className="text-muted/40 hover:text-primary transition-colors duration-300" aria-label="GitHub">
                            <Github size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/akash-navani-176b92378" target="_blank" rel="noopener noreferrer" className="text-muted/40 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <span className="text-white/[0.06]">|</span>
                        <Link to="home" smooth={true} duration={800} className="cursor-pointer text-xs text-muted/40 hover:text-primary transition-colors duration-300">
                            ↑ Top
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
