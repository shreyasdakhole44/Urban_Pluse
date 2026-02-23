import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, X, HelpCircle, ShieldCheck, FileWarning, Search, MessageSquare } from 'lucide-react';

const AshaAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [message, setMessage] = useState("Namaste! I am Asha, your PMC Digital Assistant. How can I guide you today?");

    const synth = window.speechSynthesis;
    const utteranceRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const speak = (text) => {
        if (synth.speaking) synth.cancel();
        if (isMuted) return;

        utteranceRef.current = new SpeechSynthesisUtterance(text);
        utteranceRef.current.onstart = () => setIsSpeaking(true);
        utteranceRef.current.onend = () => setIsSpeaking(false);

        const voices = synth.getVoices();
        const voice = voices.find(v => v.lang === 'hi-IN') || voices[0];
        if (voice) utteranceRef.current.voice = voice;

        synth.speak(utteranceRef.current);
    };

    const actions = [
        { label: "Track Grievance", icon: <Search size={14} />, onClick: () => speak("Please enter your grievance ID.") },
        { label: "Pay Bills", icon: <ShieldCheck size={14} />, onClick: () => speak("Redirecting you to the unified payment portal.") },
        { label: "New Report", icon: <FileWarning size={14} />, onClick: () => speak("Select a category to report a new issue.") },
    ];

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-2xl w-80 mb-4 overflow-hidden border border-gray-100"
                        >
                            {/* Header */}
                            <div className="bg-pmc-blue p-5 flex justify-between items-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-9 h-9 rounded-full bg-pmc-saffron flex items-center justify-center font-black text-white shadow-lg">A</div>
                                    <div>
                                        <h4 className="font-black text-white text-sm">PMC आशा (Asha)</h4>
                                        <p className="text-[10px] text-white/70 uppercase font-black tracking-widest">Digital Helpdesk</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors relative z-10">
                                    <X size={18} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Chat Area */}
                            <div className="p-6">
                                <div className="bg-blue-50/50 p-4 rounded-2xl rounded-tl-none mb-6 border border-blue-100/50">
                                    <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                                        {message}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black text-gray-400 mb-3 tracking-widest">How can I help?</p>
                                    {actions.map((action, i) => (
                                        <button
                                            key={i}
                                            onClick={action.onClick}
                                            className="flex items-center gap-3 w-full text-left text-[12px] p-3.5 rounded-xl border border-gray-100 hover:border-pmc-saffron hover:bg-orange-50/30 transition-all font-black text-gray-600"
                                        >
                                            <span className="text-pmc-blue">{action.icon}</span>
                                            {action.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className={`p-2 rounded-lg transition-colors ${isMuted ? 'bg-gray-100 text-gray-400' : 'bg-pmc-blue/5 text-pmc-blue'}`}
                                    >
                                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Agent Online</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full bg-pmc-blue flex items-center justify-center shadow-[0_10px_30px_rgba(13,71,161,0.4)] relative overflow-hidden group border-4 border-white"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-pmc-blue to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <MessageSquare className="relative z-10 text-white" size={24} fill="currentColor" />
                    <div className="absolute top-0 right-0 w-4 h-4 bg-pmc-saffron border-2 border-white rounded-full z-20"></div>
                </motion.button>
            </div>
        </>
    );
};

export default AshaAgent;
