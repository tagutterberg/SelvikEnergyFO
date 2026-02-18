import React, { memo } from 'react';

/**
 * MarketWidget - Displays live market data using TradingView's iframe-based Mini Symbol Overview widget.
 * Uses an iframe directly to avoid React DOM conflicts.
 */
function MarketWidget({ symbol = "TVC:UKOIL" }) {
    // TradingView Mini Symbol Overview widget URL
    // This is a direct iframe embed that doesn't require script injection
    const widgetUrl = `https://s.tradingview.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22${encodeURIComponent(symbol)}%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%7D`;

    return (
        <iframe
            title="TradingView Market Data"
            src={widgetUrl}
            style={{
                width: '125%', // Compensate for scale down
                height: '80px',
                border: 'none',
                overflow: 'hidden',
                transform: 'scale(0.8)', // Scale down to ~80% to match text-sm
                transformOrigin: 'top left'
            }}
            allowTransparency={true}
            frameBorder="0"
        />
    );
}

export default memo(MarketWidget);
