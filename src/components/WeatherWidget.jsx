import React, { memo } from 'react';

/**
 * WeatherWidget - Displays live weather/sea conditions using an iframe.
 * Uses a direct iframe embed (e.g., from Windy.com) for stability.
 */
function WeatherWidget({ url, title = "Weather Info" }) {
    if (!url) return null;

    return (
        <div className="w-full h-full bg-black/20 backdrop-blur-sm overflow-hidden relative">
            <div className="bg-brand-dark/80 px-3 py-2 border-b border-white/10 flex justify-between items-center h-8">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{title}</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Live Data"></span>
            </div>
            <iframe
                title={title}
                src={url}
                className="w-full h-[calc(100%-32px)] opacity-85"
                frameBorder="0"
                style={{ border: 'none' }}
                allowTransparency="true"
            />
            {/* Green Tint Overlay */}
            <div className="absolute inset-0 top-8 bg-brand-light/10 mix-blend-overlay pointer-events-none z-10" />
        </div>
    );
}

export default memo(WeatherWidget);
