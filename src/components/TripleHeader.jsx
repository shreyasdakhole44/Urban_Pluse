import React from 'react';
import { Search, Globe, Accessibility, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const TripleHeader = () => {
    return (
        <header className="w-full font-heading">
            {/* 1. TOP UTILITY BAR */}
            <div className="bg-gray-100 border-b border-gray-200 py-1 px-4 md:px-20">
                <div className="flex justify-between items-center text-[10px] md:text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 hover:text-pmc-blue cursor-pointer transition-colors">
                            <Accessibility size={12} /> <span>Screen Reader Access</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1 cursor-pointer">
                            <span className="hover:bg-gray-200 px-1 rounded transition-colors">A-</span>
                            <span className="bg-pmc-blue text-white px-1 rounded">A</span>
                            <span className="hover:bg-gray-200 px-1 rounded transition-colors">A+</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-pmc-blue cursor-pointer">English</span>
                            <span className="hover:text-pmc-blue cursor-pointer">मराठी</span>
                        </div>
                        <div className="flex items-center border-l border-gray-300 pl-6 gap-3">
                            <Facebook size={12} className="hover:text-pmc-blue cursor-pointer" />
                            <Twitter size={12} className="hover:text-pmc-blue cursor-pointer" />
                            <Instagram size={12} className="hover:text-pmc-blue cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN LOGO HEADER */}
            <div className="bg-white py-4 px-4 md:px-20 border-b border-pmc-border">
                <div className="flex justify-between items-center">
                    {/* Logo Group */}
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-pmc-blue rounded-full shadow-lg flex items-center justify-center border-2 border-pmc-saffron">
                            <span className="text-white text-2xl md:text-3xl font-black italic">UP</span>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-3xl font-black text-pmc-blue leading-none tracking-tighter">
                                PUNE <span className="text-pmc-saffron uppercase">UrbanPulse</span>
                            </h1>
                            <p className="text-[9px] md:text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-[0.4em]">
                                Digital Governance Board
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            <div className="bg-pmc-blue/5 p-2 rounded-full text-pmc-blue">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Helpline</p>
                                <p className="text-sm font-black text-pmc-blue tracking-tight">1800 103 0222</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 py-2 hover:border-pmc-blue transition-all w-64 group">
                            <input
                                type="text"
                                placeholder="Search PMC Services..."
                                className="bg-transparent border-none text-xs focus:ring-0 w-full font-bold text-gray-600 outline-none"
                            />
                            <Search size={16} className="text-gray-400 group-hover:text-pmc-blue transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. NAVIGATION BAR */}
            <nav className="header-nav shadow-lg">
                <div className="px-4 md:px-20 flex overflow-x-auto scrollbar-none">
                    {['The Corporation', 'Online Services', 'Departments', 'City Pulse', 'Policies', 'Contact Us'].map((item, i) => (
                        <button
                            key={i}
                            className={`px-6 py-4 text-[13px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-4 border-transparent hover:border-pmc-saffron hover:bg-white/5 ${i === 1 ? 'bg-white/10' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default TripleHeader;
