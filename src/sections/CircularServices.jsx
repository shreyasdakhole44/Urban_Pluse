import React from 'react';
import { motion } from 'framer-motion';

const CircularServices = () => {
    const lhsMenu = [
        { name: "तक्रार निवारण", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-12/pmcgrievence-control.png", label: "Grievance Redressal" },
        { name: "रुग्णालये", icon: "https://webadmin.pmc.gov.in/sites/default/files/2024-12/Frame%201000009336.png", label: "Hospitals" },
        { name: "कचरा व्यवस्थापन", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-12/pmcGarbageCollection.png", label: "Garbage Collection" },
        { name: "नाट्यगृह आणि आर्ट गॅलरी", icon: "https://webadmin.pmc.gov.in/sites/default/files/2024-12/Entertainment.png", label: "Theater & Art" },
        { name: "स्मशानभूमी", icon: "https://webadmin.pmc.gov.in/sites/default/files/2024-12/Frame%201000009341.png", label: "Crematoriums" }
    ];

    const rhsMenu = [
        { name: "ऑनलाईन सेवा", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-03/pmc-online-services.png", label: "Online Services" },
        { name: "मिळकत कर आकारणी", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-12/Property20tax.png", label: "Property Tax" },
        { name: "सार्वजनिक वाहतूक", icon: "https://webadmin.pmc.gov.in/sites/default/files/2026-02/Transport-1.png", label: "Public Transport" },
        { name: "सेवाभरती", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-12/recruitment.png", label: "Recruitment" },
        { name: "उद्याने", icon: "https://webadmin.pmc.gov.in/sites/default/files/2025-12/Frame%20201000009339.png", label: "Gardens" }
    ];

    return (
        <section className="relative py-32 bg-gray-50 overflow-hidden font-sans">
            {/* Background Rotating Ornaments - Enhanced */}
            <div className="rotateAnimationLeftTop border-[40px] border-pmc-blue/5 rounded-full blur-3xl opacity-20"></div>
            <div className="rotateAnimationBottomRight border-[40px] border-pmc-blue/5 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-pmc-blue mb-4 tracking-tighter">
                        UrbanPulse सेवा आपल्यासाठी
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-0.5 w-12 bg-pmc-saffron rounded-full"></div>
                        <span className="text-sm font-black text-pmc-saffron uppercase tracking-[0.4em]">Services for You</span>
                        <div className="h-0.5 w-12 bg-pmc-saffron rounded-full"></div>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
                    {/* Left Menu - Orbit Animated (Horizontal/Grid on Mobile) */}
                    <div className="w-full lg:w-1/3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-10 lg:items-end">
                            {lhsMenu.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="circular-menu-item group flex lg:flex-row-reverse"
                                >
                                    <a href="#" className="flex lg:flex-row-reverse text-left lg:text-right items-center w-full">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                                            className="image-wrapper group-hover:border-pmc-saffron group-hover:bg-pmc-blue group-hover:text-white transition-all duration-500 w-12 h-12 lg:w-14 lg:h-14 shrink-0"
                                        >
                                            <img src={item.icon} alt={item.label} className="w-6 h-6 lg:w-7 lg:h-7 object-contain group-hover:invert transition-all" />
                                        </motion.div>
                                        <div className="flex flex-col px-4 lg:pr-6">
                                            <span className="text-gray-900 font-black text-sm lg:text-lg group-hover:text-pmc-blue transition-colors leading-tight">{item.name}</span>
                                            <span className="text-[9px] lg:text-[10px] text-pmc-saffron font-black uppercase tracking-widest">{item.label}</span>
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Central Logo - Floating & Rotating Orbits */}
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Rotating Orbital Rings - Responsive sizes */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-dashed border-pmc-blue/10 rounded-full"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-dashed border-pmc-saffron/10 rounded-full"
                        ></motion.div>

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotateZ: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut"
                            }}
                            className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center p-6 md:p-8 border-[8px] md:border-[12px] border-gray-50/50 relative z-20 backdrop-blur-sm"
                        >
                            <div className="bg-pmc-blue w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 md:mb-6 border-2 md:border-4 border-pmc-saffron shadow-lg relative overflow-hidden group">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
                                ></motion.div>
                                <span className="text-white text-2xl md:text-4xl font-black italic relative z-10">UP</span>
                            </div>
                            <h3 className="text-lg md:text-2xl font-black text-pmc-blue tracking-tighter text-center leading-none">
                                URBAN<span className="text-pmc-saffron">PULSE</span>
                            </h3>
                            <div className="h-0.5 w-6 bg-pmc-saffron/20 my-2 md:my-3 rounded-full"></div>
                            <p className="text-[7px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center max-w-[100px] md:max-w-[120px]">
                                Municipal E-Governance Portal
                            </p>
                        </motion.div>

                        {/* Pulsing Dots around the center - Hidden on small mobile */}
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ repeat: Infinity, duration: i + 2, delay: i * 0.2 }}
                                className="absolute w-2 h-2 md:w-3 md:h-3 bg-pmc-saffron/20 rounded-full hidden md:block"
                                style={{
                                    transform: `rotate(${deg}deg) translateX(180px)`
                                }}
                            ></motion.div>
                        ))}
                    </div>

                    {/* Right Menu - Orbit Animated (Horizontal/Grid on Mobile) */}
                    <div className="w-full lg:w-1/3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-10 lg:items-start">
                            {rhsMenu.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="circular-menu-item group"
                                >
                                    <a href="#" className="text-left items-center flex w-full">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                                            className="image-wrapper group-hover:border-pmc-blue group-hover:bg-pmc-saffron group-hover:text-white transition-all duration-500 w-12 h-12 lg:w-14 lg:h-14 shrink-0"
                                        >
                                            <img src={item.icon} alt={item.label} className="w-6 h-6 lg:w-7 lg:h-7 object-contain group-hover:invert transition-all" />
                                        </motion.div>
                                        <div className="flex flex-col pl-4 lg:pl-6">
                                            <span className="text-gray-900 font-black text-sm lg:text-lg group-hover:text-pmc-blue transition-colors leading-tight">{item.name}</span>
                                            <span className="text-[9px] lg:text-[10px] text-pmc-saffron font-black uppercase tracking-widest">{item.label}</span>
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CircularServices;
