import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp, Users, Building2, CheckCircle2 } from 'lucide-react';

const StatsAndNews = () => {
    const news = [
        { date: '24 Feb 2026', title: 'New GIS-based Property Tax mapping launched for शिवाजीनगर zone.' },
        { date: '22 Feb 2026', title: 'UrbanPulse platform integration with central water department complete.' },
        { date: '20 Feb 2026', title: 'Mayor announces 5% rebate for online grievance resolution heroes.' },
    ];

    const stats = [
        { label: 'Citizen Reports', value: '1.2M+', icon: <Users size={24} /> },
        { label: 'Issues Resolved', value: '98.5%', icon: <CheckCircle2 size={24} /> },
        { label: 'Smart Zones', value: '45+', icon: <Building2 size={24} /> },
        { label: 'Efficiency Gain', value: '40%', icon: <TrendingUp size={24} /> },
    ];

    return (
        <section className="py-20 bg-pmc-light">
            <div className="container mx-auto px-4 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Stats Grid */}
                    <div>
                        <h2 className="section-title">Urban Impact</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3"
                                >
                                    <div className="text-pmc-orange">{stat.icon}</div>
                                    <div className="text-3xl font-black text-pmc-blue">{stat.value}</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* News Feed */}
                    <div>
                        <div className="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
                            <h2 className="text-2xl font-black text-pmc-blue uppercase">Latest Updates</h2>
                            <button className="text-pmc-orange font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                View Archive <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className="space-y-6">
                            {news.map((item, i) => (
                                <div key={i} className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-6 last:border-0">
                                    <div className="min-w-[80px] h-[80px] bg-pmc-blue/5 rounded-lg flex flex-col items-center justify-center border border-pmc-blue/10 group-hover:bg-pmc-blue group-hover:text-white transition-all">
                                        <span className="text-xl font-black leading-none">{item.date.split(' ')[0]}</span>
                                        <span className="text-[10px] uppercase font-bold">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-pmc-dark leading-snug group-hover:text-pmc-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-2 text-gray-400 text-xs">
                                            <Calendar size={12} />
                                            <span>Posted in Press Releases</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAndNews;
