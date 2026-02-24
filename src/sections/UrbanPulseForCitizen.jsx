import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bus, Trees, Hospital, Trash2, BookOpen, Music } from 'lucide-react';

const UrbanPulseForCitizen = () => {
    const initiatives = [
        {
            title: "Public Transportation",
            desc: "PMPML Bus services, Metro updates, and last-mile connectivity.",
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
            icon: <Bus size={24} />,
            link: "#"
        },
        {
            title: "Parks & Gardens",
            desc: "Explore 200+ municipal parks and botanical gardens in the city.",
            img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
            icon: <Trees size={24} />,
            link: "#"
        },
        {
            title: "Health & Hospitals",
            desc: "Access details of municipal clinics and multi-speciality hospitals.",
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
            icon: <Hospital size={24} />,
            link: "#"
        },
        {
            title: "Garbage Collection",
            desc: "SWaCH door-to-door collection schedules and composting info.",
            img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
            icon: <Trash2 size={24} />,
            link: "#"
        },
        {
            title: "UrbanPulse Libraries",
            desc: "Digital and physical library catalogs across 15 administrative zones.",
            img: "https://images.unsplash.com/photo-1507842217351-5188813738cf?q=80&w=800&auto=format&fit=crop",
            icon: <BookOpen size={24} />,
            link: "#"
        },
        {
            title: "Cultural Theaters",
            desc: "Booking and schedules for city-owned theaters and art galleries.",
            img: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=800&auto=format&fit=crop",
            icon: <Music size={24} />,
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="gov-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-pmc-blue rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="font-black italic">UP</span>
                            </div>
                            <span className="text-xs font-black text-pmc-saffron uppercase tracking-[0.4em]">Life in the City</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-pmc-blue tracking-tighter leading-none mb-6">
                            UrbanPulse for Citizen <br />
                            <span className="text-2xl font-bold text-gray-400 mt-2 block">शहरातील जीवन</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-pmc-saffron rounded-full"></div>
                    </div>
                    <button className="flex items-center gap-3 text-pmc-blue font-black uppercase text-xs tracking-widest hover:text-pmc-saffron transition-all group border-2 border-pmc-blue/10 px-6 py-3 rounded-full hover:border-pmc-saffron">
                        Explore Full City Index
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-gray-100"
                        >
                            {/* Background Image with Zoom Animation */}
                            <motion.img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-pmc-blue/90 via-pmc-blue/40 to-transparent group-hover:via-pmc-blue/60 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 group-hover:bg-pmc-saffron group-hover:border-pmc-saffron transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm font-medium text-white/80 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-pmc-saffron font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                    Explore Services <ArrowRight size={12} />
                                </div>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={14} className="-rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UrbanPulseForCitizen;
