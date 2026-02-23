import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-main font-sans bg-white border-t-8 border-pmc-blue">
            {/* Upper Footer - Links */}
            <div className="py-16 px-4 md:px-20 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About PMC */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-pmc-blue uppercase tracking-widest border-b-2 border-pmc-saffron pb-2 inline-block">About Corporation</h4>
                        <p className="text-[13px] text-gray-500 font-bold leading-relaxed">
                            Pune Municipal Corporation is committed to providing efficient and citizen-focus services. UrbanPulse is our latest digital leap towards excellence.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-400 hover:bg-pmc-blue hover:text-white transition-all shadow-sm">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-pmc-blue uppercase tracking-widest border-b-2 border-pmc-saffron pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Tenders', 'RTI Portal', 'Careers', 'Notifications', 'Sitemap'].map((link, i) => (
                                <li key={i} className="flex items-center gap-2 group cursor-pointer">
                                    <ArrowRight size={12} className="text-pmc-saffron group-hover:translate-x-1 transition-transform" />
                                    <span className="text-[13px] font-bold text-gray-600 group-hover:text-pmc-blue">{link}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-pmc-blue uppercase tracking-widest border-b-2 border-pmc-saffron pb-2 inline-block">Reach Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <MapPin size={28} className="text-pmc-saffron shrink-0" strokeWidth={3} />
                                <span className="text-[13px] font-bold text-gray-600">PMC Main Building, Near Mangla Theatre, Shivajinagar, Pune- 411005</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-pmc-saffron shrink-0" strokeWidth={3} />
                                <span className="text-[13px] font-bold text-gray-600">1800 103 0222 (Toll Free)</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-pmc-saffron shrink-0" strokeWidth={3} />
                                <span className="text-[13px] font-bold text-gray-600">info@urbanpulse.gov.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Visitor */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-pmc-blue uppercase tracking-widest border-b-2 border-pmc-saffron pb-2 inline-block">Visitor Connect</h4>
                        <div className="p-4 bg-white border border-gray-200 rounded shadow-sm text-center">
                            <p className="text-[10px] uppercase font-black text-gray-400 mb-2">Visitor Count</p>
                            <div className="flex justify-center gap-1">
                                {'0124589'.split('').map((n, i) => (
                                    <span key={i} className="w-6 py-1 bg-pmc-blue text-white font-black rounded text-sm">{n}</span>
                                ))}
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold italic text-center">Last Updated: Feb 24, 2026</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-pmc-blue py-6 px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/70">
                    <div className="text-center md:text-left">
                        &copy; 2026 Pune Municipal Corporation (UrbanPulse). Content Designed by IT Dept, PMC.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Copyright Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Hyperlink Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
