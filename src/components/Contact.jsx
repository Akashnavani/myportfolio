import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const contactItems = [
    {
        icon: <Mail size={20} strokeWidth={1.5} />,
        label: 'Email',
        value: 'akashnavani25@gmail.com',
        href: 'mailto:akashnavani25@gmail.com',
    },
    {
        icon: <Phone size={20} strokeWidth={1.5} />,
        label: 'Phone',
        value: '+91 8088337614',
        href: 'tel:+918088337614',
    },
    {
        icon: <MapPin size={20} strokeWidth={1.5} />,
        label: 'Location',
        value: 'Bengaluru, Karnataka',
        href: null,
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Let's build{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            something.
                        </span>
                    </h2>
                    <p className="text-muted text-base md:text-lg font-light max-w-lg mx-auto">
                        Open to new opportunities, collaborations, or just a good conversation about tech.
                    </p>
                </motion.div>

                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10"
                >
                    {contactItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-3 group">
                            <span className="text-muted group-hover:text-primary transition-colors duration-300">
                                {item.icon}
                            </span>
                            <div>
                                <p className="text-xs text-muted/50 uppercase tracking-wider mb-0.5 font-medium">{item.label}</p>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="text-foreground/80 text-sm font-medium">{item.value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA + Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/Akashnavani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                        <span className="text-white/10">|</span>
                        <a
                            href="https://www.linkedin.com/in/akash-navani-176b92378"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
