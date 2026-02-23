import React from 'react';
import {
    Home,
    Droplet,
    Trash2,
    Car,
    FileText,
    AlertTriangle,
    Zap,
    Trees,
    Hospital,
    BookOpen,
    Stethoscope,
    MapPin
} from 'lucide-react';

const services = [
    { name: 'Property Tax', icon: <Home className="text-pmc-blue" size={32} />, color: 'bg-blue-50' },
    { name: 'Water Tax', icon: <Droplet className="text-blue-500" size={32} />, color: 'bg-blue-50' },
    { name: 'Waste Mgmt', icon: <Trash2 className="text-green-600" size={32} />, color: 'bg-green-50' },
    { name: 'Building Plan', icon: <FileText className="text-orange-500" size={32} />, color: 'bg-orange-50' },
    { name: 'Grievance', icon: <AlertTriangle className="text-red-500" size={32} />, color: 'bg-red-50' },
    { name: 'Trade License', icon: <Zap className="text-yellow-600" size={32} />, color: 'bg-yellow-50' },
    { name: 'Hall Booking', icon: <Home className="text-purple-600" size={32} />, color: 'bg-purple-50' },
    { name: 'Sky Sign', icon: <AlertTriangle className="text-pink-600" size={32} />, color: 'bg-pink-50' },
];

const QuickServices = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-20">
                <div className="mb-12">
                    <h2 className="section-title">Citizen Services</h2>
                    <p className="text-gray-500 max-w-2xl">
                        Access simplified municipal services online. Fast, secure, and transparent processing for all your civic needs.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="gov-card flex flex-col items-center justify-center text-center group cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-pmc-dark group-hover:text-pmc-blue transition-colors">
                                {service.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="btn-outline">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuickServices;
