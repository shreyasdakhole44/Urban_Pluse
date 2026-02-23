import React from 'react';
import { Phone, Mail, Search, Globe, Accessibility } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-pmc-blue text-white text-[11px] py-1.5 px-4 md:px-20 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Phone size={12} fill="currentColor" />
                    <span className="font-semibold tracking-wide">Toll Free: 1800 103 0222</span>
                </div>
                <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-6">
                    <Mail size={12} fill="currentColor" />
                    <span>info@urbanpulse.gov.in</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <button className="hover:text-pmc-orange transition-colors">Screen Reader Access</button>
                    <div className="flex items-center gap-1 border-l border-white/20 pl-4">
                        <button className="px-1 hover:bg-white/10 rounded">A-</button>
                        <button className="px-1 bg-white text-pmc-blue font-bold rounded">A</button>
                        <button className="px-1 hover:bg-white/10 rounded">A+</button>
                    </div>
                </div>
                <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                    <button className="font-bold border-b-2 border-pmc-orange">English</button>
                    <button className="hover:text-pmc-orange transition-colors">मराठी</button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
