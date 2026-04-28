import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-background/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2.5 group">
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Code2 className="text-primary w-7 h-7 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-white">Akash</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">.dev</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="!text-white !font-semibold"
                            className="relative text-foreground/60 hover:text-white cursor-pointer transition-colors duration-200 text-sm uppercase tracking-[0.12em] font-medium group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-foreground/80 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#0A0F1C]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
                    >
                        <div className="flex flex-col py-6 px-8 gap-5">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="text-foreground/80 hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-200 text-lg font-medium block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
