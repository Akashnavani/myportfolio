import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-28 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[25%] -left-48 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-5 mb-5">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <Award size={22} className="text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Education
                        </h2>
                        <div className="h-[2px] bg-gradient-to-r from-primary/40 to-transparent flex-1 rounded-full"></div>
                    </div>
                    <p className="text-foreground/55 text-lg font-light ml-[52px]">My academic background and achievements.</p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">

                    {/* Education Item 1 - B.Tech */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-14 relative pl-8 md:pl-0 group"
                    >
                        <div className="absolute w-11 h-11 bg-background border-[3px] border-accent rounded-full left-[-23px] md:left-[-23px] top-7 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.2)] z-10 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]">
                            <GraduationCap className="text-accent w-4.5 h-4.5" />
                        </div>

                        <div className="md:ml-12 bg-white/[0.03] p-7 md:p-9 rounded-2xl border border-white/[0.07] group-hover:border-accent/20 transition-all duration-500 hover:shadow-[0_8px_35px_rgba(0,0,0,0.2)] backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">B.E in Information Science & Engineering</h3>
                                    <span className="text-accent text-xs font-semibold bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full inline-block w-max">
                                        2024 – Present
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center text-foreground/55 gap-2">
                                    <h4 className="font-medium text-sm">Ramaiah Institute of Technology, Bengaluru</h4>
                                    <strong className="text-accent bg-accent/5 px-3 py-1 rounded-lg border border-accent/10 text-sm">GPA: 7.84</strong>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item 2 - Diploma */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="mb-14 relative pl-8 md:pl-0 group"
                    >
                        <div className="absolute w-11 h-11 bg-background border-[3px] border-accent rounded-full left-[-23px] md:left-[-23px] top-7 flex items-center justify-center z-10 transition-all duration-400 group-hover:scale-110">
                            <GraduationCap className="text-accent w-4.5 h-4.5" />
                        </div>

                        <div className="md:ml-12 bg-white/[0.03] p-7 md:p-9 rounded-2xl border border-white/[0.07] group-hover:border-accent/20 transition-all duration-500 hover:shadow-[0_8px_35px_rgba(0,0,0,0.2)] backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">Diploma in Computer Science & Engineering</h3>
                                    <span className="text-accent text-xs font-semibold bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full inline-block w-max">
                                        2021 – 2024
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center text-foreground/55 mb-6 gap-2">
                                    <h4 className="font-medium text-sm">SJPN Trusts Polytechnic, Nidasoshi</h4>
                                    <strong className="text-accent bg-accent/5 px-3 py-1 rounded-lg border border-accent/10 text-sm">GPA: 9.56</strong>
                                </div>
                                <div className="bg-white/[0.04] border border-white/[0.08] p-5 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-primary rounded-l-xl"></div>
                                    <h5 className="font-bold text-foreground/85 mb-3 text-sm tracking-wide">Highlights</h5>
                                    <ul className="space-y-2 text-sm text-foreground/60 font-light">
                                        <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-accent rounded-full drop-shadow-[0_0_3px_rgba(96,165,250,0.6)]"></div> 1st Rank in CSE — Diploma topper</li>
                                        <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-accent rounded-full drop-shadow-[0_0_3px_rgba(96,165,250,0.6)]"></div> DCET Rank: 171 (highest in college)</li>
                                        <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-accent rounded-full drop-shadow-[0_0_3px_rgba(96,165,250,0.6)]"></div> 3rd place at Technovision-24 hackathon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item 3 - High School */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative pl-8 md:pl-0 group"
                    >
                        <div className="absolute w-11 h-11 bg-background border-[3px] border-accent rounded-full left-[-23px] md:left-[-23px] top-7 flex items-center justify-center z-10 transition-all duration-400 group-hover:scale-110">
                            <GraduationCap className="text-accent w-4.5 h-4.5" />
                        </div>

                        <div className="md:ml-12 bg-white/[0.03] p-7 md:p-9 rounded-2xl border border-white/[0.07] group-hover:border-accent/20 transition-all duration-500 hover:shadow-[0_8px_35px_rgba(0,0,0,0.2)] backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">High School (SSLC)</h3>
                                    <span className="text-accent text-xs font-semibold bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full inline-block w-max">
                                        2020 – 2021
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center text-foreground/55 gap-2">
                                    <h4 className="font-medium text-sm">Government High School Baad</h4>
                                    <strong className="text-accent bg-accent/5 px-3 py-1 rounded-lg border border-accent/10 text-sm">94.56%</strong>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;