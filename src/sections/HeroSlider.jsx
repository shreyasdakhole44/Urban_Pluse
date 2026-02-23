import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bell, FileText, Info } from 'lucide-react';

const HeroSlider = () => {
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1590483736622-39da8af75620?q=80&w=2000&auto=format&fit=crop",
            title: "स्वच्छ पुणे, सुंदर पुणे",
            subtitle: "Clean Pune, Beautiful Pune Initiative",
            cta: "Participate Now"
        },
        {
            image: "https://images.unsplash.com/photo-1517089534706-3d5efebb2442?q=80&w=2000&auto=format&fit=crop",
            title: "Digital Grievance System",
            subtitle: "Real-time AI monitoring for your civic issues.",
            cta: "Report Issue"
        },
        {
            image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2000&auto=format&fit=crop",
            title: "24x7 Water Supply Project",
            subtitle: "Upgrading infrastructure for a smarter city.",
            cta: "Read More"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[400px] md:h-[550px] overflow-hidden bg-gray-200">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img src={slides[current].image} alt="Slide" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pmc-blue/70 via-pmc-blue/30 to-transparent"></div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Content */}
            <div className="absolute inset-0 z-10 flex items-center px-4 md:px-20">
                <div className="max-w-3xl">
                    <motion.h2
                        key={`t-${current}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black text-white leading-none mb-4 drop-shadow-lg"
                    >
                        {slides[current].title}
                    </motion.h2>
                    <motion.p
                        key={`p-${current}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-bold text-white/90 mb-8 max-w-xl"
                    >
                        {slides[current].subtitle}
                    </motion.p>
                    <motion.button
                        key={`b-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="btn-pmc-saffron"
                    >
                        {slides[current].cta}
                    </motion.button>
                </div>
            </div>

            {/* Right Sidebar - Gov Style Notifications */}
            <div className="absolute right-0 top-0 bottom-0 h-full w-80 bg-white/95 backdrop-blur hidden xl:flex flex-col border-l border-pmc-border z-20">
                <div className="bg-pmc-blue p-4 flex items-center gap-3 text-white">
                    <Bell size={20} className="animate-bounce" />
                    <span className="font-black uppercase tracking-widest text-sm text-[12px]">Latest Updates</span>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {[
                        "Recruitment for Medical Officer 2026",
                        "Amendment in Property Tax Rebate Rules",
                        "Invitation of Tenders for Smart Parking",
                        "World Environment Day Celebrations",
                    ].map((news, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pmc-saffron shrink-0"></div>
                                <p className="text-[13px] font-bold text-gray-700 leading-snug group-hover:text-pmc-blue transition-colors">
                                    {news}
                                </p>
                            </div>
                            <div className="mt-2 text-[10px] text-gray-400 font-bold uppercase pl-4">Feb 24, 2026</div>
                            <hr className="mt-4 border-gray-100 last:hidden" />
                        </div>
                    ))}
                </div>
                <div className="p-4 border-t border-gray-100 text-center">
                    <button className="text-xs font-black text-pmc-blue uppercase tracking-widest hover:text-pmc-saffron transition-colors">
                        View All Digital Notices
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 left-4 md:left-20 flex gap-2 z-30">
                <button onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)} className="p-3 bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"><ChevronLeft /></button>
                <button onClick={() => setCurrent(prev => (prev + 1) % slides.length)} className="p-3 bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"><ChevronRight /></button>
            </div>
        </section>
    );
};

export default HeroSlider;
