import React from 'react';

const AppBanner = () => {
    return (
        <section className="bg-white py-12 border-b border-gray-100 font-sans">
            <div className="gov-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* UrbanPulse Care App Section */}
                    <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group border border-gray-200 shadow-sm">
                        <div className="relative z-10 w-full md:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-pmc-blue rounded-xl flex items-center justify-center shadow-lg border-2 border-pmc-saffron">
                                    <span className="text-white text-2xl font-black italic">UP</span>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-pmc-blue tracking-tighter">UrbanPulse <span className="text-pmc-saffron uppercase">Care</span></h4>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Official Citizen App</p>
                                </div>
                            </div>
                            <p className="text-gray-600 font-bold text-sm mb-8 leading-relaxed">
                                आत्ताच UrbanPulse Care App डाउनलोड करा. <br />
                                <span className="text-xs text-gray-400 font-medium italic">Download the app for instant grievance response.</span>
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="hover:scale-105 transition-transform">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
                                </a>
                                <a href="#" className="hover:scale-105 transition-transform">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative group-hover:scale-110 transition-transform duration-500">
                            {/* Mock Mobile Image */}
                            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl border-4 border-gray-100 overflow-hidden transform rotate-6 hover:rotate-0 transition-all">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop"
                                    alt="App Screenshot"
                                    className="rounded-[1.5rem] w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CSR Section */}
                    <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-gray-200 shadow-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
                        <div className="relative z-10 w-full md:w-1/2">
                            <h4 className="text-3xl font-black text-green-700 leading-tight mb-4">
                                प्रगतशील शहरासाठी <br />
                                <span className="text-pmc-blue">चला एकत्र येऊया !</span>
                            </h4>
                            <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-6 border-l-4 border-green-500 pl-3">
                                Cooperative Social Responsibility (CSR)
                            </p>
                            <p className="text-sm font-bold text-gray-600 mb-8 leading-relaxed">
                                शहराच्या शाश्वत विकासासाठी UrbanPulse सोबत भागीदारी करा..! <br />
                                <span className="text-xs text-gray-400 italic font-medium">Partner with us for sustainable urban development.</span>
                            </p>
                            <button className="px-8 py-3 bg-green-600 text-white font-black rounded-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-3">
                                Join CSR
                                <div className="bg-white/20 p-1 rounded">
                                    <MessageSquare size={14} className="text-white" />
                                </div>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[12px] border-green-50 shadow-2xl overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop"
                                    alt="CSR Activity"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-green-600/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-white">
                                    <span className="text-green-700 font-black text-[10px] uppercase tracking-widest">Impact Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simplified icon import for demo
const MessageSquare = ({ size, className }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export default AppBanner;
