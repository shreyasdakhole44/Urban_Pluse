import React from 'react';
import { motion } from 'framer-motion';

const MayorMessage = () => {
    const leaders = [
        {
            name: "Hon. Murlidhar Mohol",
            title: "Guardian Minister, Pune",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
            msg: "UrbanPulse represents our commitment to a transparent and responsive Pune. We are building a city that listens to its citizens."
        },
        {
            name: "Hon. Vikram Kumar",
            title: "Municipal Commissioner",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            msg: "Integration of AI and Blockchain in grievance redressal is a milestone for PMC. We aim for 100% digital resolution."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="gov-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-8 items-center md:items-start"
                        >
                            <div className="shrink-0">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-8 border-gray-50 shadow-xl relative group">
                                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 border-4 border-white/20"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-12 h-1 bg-pmc-saffron mb-6"></div>
                                <h3 className="text-2xl font-black text-pmc-blue mb-1">{leader.name}</h3>
                                <p className="text-xs font-black text-pmc-saffron uppercase tracking-widest mb-6">{leader.title}</p>
                                <p className="text-gray-500 italic font-medium leading-relaxed relative">
                                    <span className="text-5xl text-gray-100 absolute -top-4 -left-4 font-serif">"</span>
                                    {leader.msg}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MayorMessage;
