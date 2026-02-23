import React from 'react';

const NewsTicker = () => {
    const alerts = [
        "IMPORTANT: GIS-based Property Tax mapping for year 2026-27 is now LIVE. Please verify your data.",
        "URGENT: Water supply update for Kothrud and Bavdhan areas for coming Thursday.",
        "New: Online building plan approval process (BPMS) simplified. Check service portal.",
        "Citizen Notice: Mayor's grievance resolution meet on Saturday at PMC Head Office."
    ];

    return (
        <div className="marquee-container text-[12px] font-bold">
            <div className="flex animate-marquee shrink-0 items-center">
                {alerts.map((alert, i) => (
                    <div key={i} className="flex items-center mx-12">
                        <span className="w-2 h-2 bg-pmc-saffron rounded-full mr-3 shadow-[0_0_8px_white]"></span>
                        {alert}
                    </div>
                ))}
                {/* Duplicate for infinite loop */}
                {alerts.map((alert, i) => (
                    <div key={`dup-${i}`} className="flex items-center mx-12">
                        <span className="w-2 h-2 bg-pmc-saffron rounded-full mr-3 shadow-[0_0_8px_white]"></span>
                        {alert}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsTicker;
