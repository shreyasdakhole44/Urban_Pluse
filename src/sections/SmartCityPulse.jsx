import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroCity from '../components/HeroCity';

const SmartCityPulse = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 bg-pmc-blue/5 text-pmc-blue text-xs font-bold rounded-full mb-4 uppercase tracking-[0.2em]">
                            Technology Showcase
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-pmc-blue mb-8 leading-tight">
                            Digital Twin & <br />
                            <span className="text-pmc-orange">Real-Time City Pulse</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            UrbanPulse uses advanced neural networks to map every grievance node across the city.
                            Our "Digital Twin" technology allows municipal commissioners to visualize systemic issues
                            before they escalate into city-wide crises.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Neural Response Mapping", desc: "Visualize grievance categories in a real-time 3D dashboard." },
                                { title: "Predictive Analytics", desc: "AI predicts potential waste & water management failures." },
                                { title: "Resolution Traceability", desc: "Every point in the grid is a blockchain-verified status." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-pmc-blue text-white flex items-center justify-center shrink-0 font-bold text-[10px]">{i + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-pmc-dark">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-[400px] md:h-[500px] bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
                        <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
                            <Suspense fallback={null}>
                                <HeroCity />
                            </Suspense>
                        </Canvas>
                        {/* Overlay Controls */}
                        <div className="absolute top-6 right-6 flex flex-col gap-2">
                            <button className="bg-white/10 backdrop-blur-md p-2 rounded-lg text-white border border-white/20 hover:bg-white/20">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Live Pulse</span>
                            </button>
                            <button className="bg-pmc-blue p-2 rounded-lg text-white shadow-lg">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Toggle GIS</span>
                            </button>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white/50 text-[10px] uppercase font-bold tracking-[0.3em]">
                            Pune Urban Digital Twin v2.0
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartCityPulse;
