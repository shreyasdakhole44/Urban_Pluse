import React from 'react';
import {
    Home,
    Droplet,
    FileCheck,
    Building2,
    Trash2,
    Car,
    BadgeCheck,
    Gavel,
    ClipboardList,
    Stethoscope,
    Trees,
    Hospital
} from 'lucide-react';

const services = [
    { id: 1, name: "Property Tax", icon: <Home size={32} />, color: "bg-blue-600", desc: "Pay and view receipts" },
    { id: 2, name: "Water Tax", icon: <Droplet size={32} />, color: "bg-cyan-500", desc: "Manage bills online" },
    { id: 3, name: "Building Plan", icon: <Building2 size={32} />, color: "bg-amber-600", desc: "BPMS Applications" },
    { id: 4, name: "Birth/Death", icon: <FileCheck size={32} />, color: "bg-emerald-600", desc: "Online Certificates" },
    { id: 5, name: "Grievance", icon: <ClipboardList size={32} />, color: "bg-rose-600", desc: "Report civic issues" },
    { id: 6, name: "Trade License", icon: <BadgeCheck size={32} />, color: "bg-indigo-600", desc: "New & Renewals" },
    { id: 7, name: "Solid Waste", icon: <Trash2 size={32} />, color: "bg-teal-600", desc: "Garbage collection" },
    { id: 8, name: "Sky Sign", icon: <Gavel size={32} />, color: "bg-violet-600", desc: "License & Permits" }
];

const ServiceGrid = () => {
    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="gov-container">
                <div className="text-center mb-16">
                    <h2 className="section-title-mod">Citizen Services</h2>
                    <p className="text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-wider text-sm">
                        Access municipal services with ease and efficiency through our unified portal.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="gov-card p-8 flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className={`${service.color} text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>
                            <h3 className="font-black text-pmc-blue text-lg mb-2">{service.name}</h3>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="w-8 h-1 bg-pmc-saffron mt-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="btn-pmc-blue border-4 border-white shadow-xl">
                        View All Online Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
