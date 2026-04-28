import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

const contactItems = [
    {
        icon: <Mail size={28} strokeWidth={1.5} />,
        label: 'Email',
        value: 'akashnavani25@gmail.com',
        href: 'mailto:akashnavani25@gmail.com',
        color: 'group-hover/item:border-blue-400/30 group-hover/item:shadow-[0_0_25px_rgba(59,130,246,0.15)]'
    },
    {
        icon: <Phone size={28} strokeWidth={1.5} />,
        label: 'Phone',
        value: '+91 8088337614',
        href: 'tel:+918088337614',
        color: 'group-hover/item:border-emerald-400/30 group-hover/item:shadow-[0_0_25px_rgba(52,211,153,0.15)]'
    },
    {
        icon: <MapPin size={28} strokeWidth={1.5} />,
        label: 'Location',
        value: 'Bengaluru, Karnataka',
        href: null,
        color: 'group-hover/item:border-amber-400/30 group-hover/item:shadow-[0_0_25px_rgba(251,191,36,0.15)]'
    }
];

const Contact = () => {
    return (
        <section id="contact" className="py-28 relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <Send size={22} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Get in Touch</h2>
                    </div>
                    <p className="text-foreground/55 text-lg max-w-xl mx-auto font-light">
                        Open to new opportunities, collaborations, or just a good conversation about tech. Feel free to reach out.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full max-w-3xl"
                    >
                        <div className="bg-white/[0.03] backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.15)] relative overflow-hidden group hover:border-white/12 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative z-10">
                                {contactItems.map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex flex-col items-center text-center gap-4 group/item"
                                    >
                                        <div className={`bg-white/[0.05] border border-white/10 p-5 rounded-2xl text-primary transition-all duration-400 ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-foreground/45 font-medium mb-1 tracking-[0.12em] uppercase">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-foreground/85 font-medium hover:text-primary transition-colors text-sm break-all">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-foreground/85 font-medium text-sm">{item.value}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/[0.07] flex flex-col items-center relative z-10">
                                <p className="text-xs tracking-[0.15em] uppercase text-foreground/40 font-semibold mb-5">Connect with me</p>
                                <div className="flex items-center gap-4">
                                    <a href="https://github.com/Akashnavani" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.05] border border-white/10 rounded-2xl text-foreground/65 hover:bg-white/[0.08] hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all duration-300" aria-label="GitHub">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/akash-navani-176b92378" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.05] border border-white/10 rounded-2xl text-foreground/65 hover:bg-primary/15 hover:border-primary/25 hover:text-primary hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] transition-all duration-300" aria-label="LinkedIn">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
