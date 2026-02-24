import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bell, Calendar } from 'lucide-react';

const LatestUpdates = () => {
    const alerts = [
        { category: "Recruitment", title: "Recruitment for the post of Medical Officer Class-2 (GROUP-A) in UrbanPulse.", date: "Feb 23, 2026" },
        { category: "Property Tax", title: "GIS-based Property Tax mapping for year 2026-27 is now LIVE.", date: "Feb 22, 2026" },
        { category: "Tenders", title: "Invitation of Tenders for UrbanPulse E-Governance platform maintenance.", date: "Feb 20, 2026" },
        { category: "Health", title: "Water supply update for Kothrud and Bavdhan areas for coming Thursday.", date: "Feb 18, 2026" }
    ];

    return (
        <section className="py-20 bg-white font-sans">
            <div className="gov-container">
                <div className="flex justify-between items-center mb-12 border-b-4 border-gray-50 pb-6">
                    <div>
                        <h2 className="text-3xl font-black text-pmc-blue uppercase tracking-tighter">Latest Updates</h2>
                        <div className="w-12 h-1 bg-pmc-saffron mt-2"></div>
                    </div>
                    <button className="flex items-center gap-3 text-pmc-blue font-black uppercase text-xs tracking-widest hover:text-pmc-saffron transition-all group">
                        View All Digital Notices
                        <div className="bg-pmc-blue/5 p-1 rounded group-hover:bg-pmc-saffron group-hover:text-white transition-all">
                            <ArrowRight size={14} />
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alerts.map((alert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pmc-blue/20 hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-pmc-blue opacity-20 group-hover:bg-pmc-saffron group-hover:opacity-100 transition-all"></div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1.5 bg-pmc-blue/10 text-pmc-blue rounded-lg group-hover:bg-pmc-saffron group-hover:text-white transition-all">
                                    <Bell size={14} className="animate-pulse" />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{alert.category}</span>
                            </div>
                            <h4 className="font-bold text-gray-800 leading-snug mb-6 group-hover:text-pmc-blue transition-colors line-clamp-3">
                                {alert.title}
                            </h4>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">
                                    <Calendar size={12} />
                                    {alert.date}
                                </div>
                                <ArrowRight size={14} className="text-gray-300 group-hover:text-pmc-saffron group-hover:translate-x-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestUpdates;
