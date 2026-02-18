
// Website Content Configuration
// Edit this file to update text, links, and images across the site.

export const brand = {
    name: "SELVÍK",
    nameHighlight: "ENERGY",
    logo: "/site_icon.svg",
    slogan: "Bunkering at Sea"
};

export const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Operations', href: '#map' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
];

export const hero = {
    bgImage: "/background_day.webp",
    bgImageNight: "/night_background.webp",
    bgImageMorning: "/background_morning.webp",

    title: "Bunkering at Sea",
    subtitle: "Performance Delivered",
    description: "",
    ctaPrimary: "Request Quote",
    ctaSecondary: "Explore Services",
    features: [
        { title: "Strategic Locations", desc: "Key positions throughout NEAFC zones in the North-Atlantic for rapid response and reliable supply chains." },
        { title: "Optimized Performance", desc: "Ensures a dedicated service tailored for the most demanding client. Complete dedication from us." },
        { title: "24/7 Operations", desc: "Flexible and solution oriented services. Always available and ready on call." },
        {
            title: "Low Sulphur Gasoil",
            desc: "Live Market Data",
            isMarketData: true,
            widgetSymbol: "VELOCITY:LOW_SULPHUR_GASOIL"
        }
    ]
};

export const services = {
    title: "Our Services",
    description: "",
    images: ["/bunker_sea.webp", "/bunker_port.webp"],
    centerText: {
        title: "Fewer transits. Fewer idle days.",
        highlight: " Less CO₂",
        paragraphs: []
    },
    imageOverlays: [
        {
            title: "ECONOMIC WIN",
            subtitle: "More Productive Days at Sea",
            desc: "Reclaim days lost to port transit. Increase productive time, directly lowering costs and boosting potential revenue per voyage adding productive days at sea."
        },
        {
            title: "CO₂ ENVIRONMENTAL WIN",
            subtitle: "Lower Net Emissions",
            desc: "Drastically cut overall CO₂ emissions (17-32%) by eliminating high-burn, non-productive transit. Optimize the entire system for improved fuel efficiency. (Source: IMO GHG Study and Modal Comparison)"
        },
        {
            title: "STRATEGIC WIN",
            subtitle: "Greater Operational Flexibility",
            desc: "Follow fish stocks dynamically without being tethered to a port's location or schedule. Adapt to changing conditions and opportunities on the open sea."
        }
    ],
    items: [
        {
            title: "Offshore Bunkering",
            desc: "Direct-to-vessel bunkering in open waters with our specialized tanker fleet offering safe and reliable supply on-site for optimizing your operations."
        },

        {
            title: "Lubricants & Additives",
            desc: "Full range of marine lubricants delivered alongside fuel supplies for more affordable prices and less hassle when you need it fast."
        },
        {
            title: "Logistics Support",
            desc: "End-to-end supply chain management for spare parts and provisions delivered at sea.  You simply ask and we deliver on-site."
        },
        {
            title: "Zero Compromise",
            desc: "We are your guarantee of adherence to Nordic product quality standards and product origin. We never compromise on quality in our supply-chain."
        }

    ]
};

export const map = {
    title: "Unique",
    titleHighlight: "Expertise",
    label: "Operational Zone",
    description: "We provide specialized bunker optimization for the complex Arctic and NEAFC regulatory environments. With strategic positioning that enables rapid response where other providers cannot operate, we guarantee reliability under the strict supervision of our seasoned experts.",
    zones: [
        'Norwegian Economic Zone',
        'Svalbard Fishery Protection Zone',
        'NEAFC Regulatory Areas',
        'Greenland, Iceland & Faroe Is.'
    ],
    image: "/neafc_t.webp",
    hotspots: [
        { label: "NEAFC RA 1A", top: "40%", left: "90%" },
        { label: "NEAFC RA 2A&B", top: "35%", left: "65%" }
    ],
    weather: {
        title: "Live Sea Conditions (Waves)",
        url: "https://embed.windy.com/embed2.html?lat=72.00&lon=20.00&detailLat=72.00&detailLon=20.00&width=650&height=450&zoom=4&level=surface&overlay=waves&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1"
    },
    worldClocks: [
        { label: "Nuuk", timezone: "America/Nuuk" },
        { label: "Tórshavn", timezone: "Atlantic/Faroe" },
        { label: "Reykjavik", timezone: "Atlantic/Reykjavik" },
        { label: "Ålesund", timezone: "Europe/Oslo" },
        { label: "Cuxhaven", timezone: "Europe/Berlin" },
        { label: "Tallin", timezone: "Europe/Tallinn" }
    ],
    emissions: {
        label: "Green Shift",
        title: "Optimize Fuel Consumption & Emissions",
        description: "Port calls represent the least efficient phase of any voyage. Just one 500nm round-trip diversion for bunkering generates 30 tonnes of CO₂ without generating any revenue. If you are not on-board yet, maybe it is time to rethink this outdated operational model?",
        source: "(Source: IMO, Study of Greenhouse Gas Emissions from Ships).",
        subsections: [
            {
                title: "Emissions & Time Loss",
                text: "Port approaches not only involve time loss but also significantly increase emissions. To minimize downtime, ships often speed up during these legs, which sharply raises both fuel use and CO₂ output."
            },
            {
                title: "Benefits of Speed Reduction",
                text: "A 10% reduction in speed can lower CO₂ emissions by up to 23.3%. The fuel consumption per distance sailed will approximately increase proportionally with minimum the square of the speed.",
            }
        ],
        overlayCO2_2: {
            title: "How One Tanker Cuts Emissions for an Entire Fleet",
            items: [
                {
                    subtitle: "",
                    text: "Slash CO₂ emissions by up to 32% simply by maximising productive days at sea and reducing port stops to a bare minimum. Then stop losing days to port transit. Maximize your fishing windows, boost revenue per voyage, and slash your logistical costs."
                },
                {
                    subtitle: "Recover Production Time",
                    text: "For every port cycle avoided, a fleet may gain 50+ hours of fishing time per vessel. This amounts to over 500 hours of collective production time per fueling cycle for a fleet of 10 vessels."
                },
                {
                    subtitle: "Cut Costs",
                    text: "Trade multiple port expenses for one efficient solution. Avoid harbour dues, pilotage fees, and wasted fuel by switching to a single, cost-effective tanker operation."
                }
            ]
        }
    }
};

export const compliance = {
    title: "Global Regulatory",
    titleHighlight: "Framework",
    videoUrl: "https://www.youtube.com/embed/dowbG-UX8F8?autoplay=1&mute=1&controls=0&loop=1&playlist=dowbG-UX8F8&start=1&end=28&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1", // Loops 1s to 28s
    description: "Operating within the strict environmental standards of the NEAFC and North Atlantic requires unwavering adherence to international maritime protocols. Our rigorous adherence to international sanctions and regulations adds a vital layer of security for all our clients and partners.",
    items: [
        {
            title: "OFAC & EU",
            desc: "We demand strict compliance with the U.S. Office of Foreign Assets Control (OFAC) and European Union sanctions lists. This vigilant screening process ensures that our supply chain remains free from legal and reputational risks."
        },
        {
            title: "Partner Safety & Security",
            desc: "By enforcing these stringent protocols, we protect our partners from inadvertent exposure to illicit actors. This creates a secure trading environment where you can operate with absolute confidence."
        },
        {
            title: "Transparent Documentation",
            desc: "Full traceability and transparent documentation are provided for every transaction, ensuring that all operations meet the highest regulatory standards required by global financial institutions."
        }
    ],
    helpSection: {
        title: "We help you",
        items: [
            "Identify at-risk cargo movements and ship-to-ship transfers",
            "Uncover AIS gaps and spoofing activities",
            "Effectively decode potential illicit activities"
        ]
    },
    linkText: "Review our General Terms and Conditions →"
};

export const about = {
    images: ["/crew.webp"],
    experienceBadge: "Founded",
    experienceText: "on Excellence & Innovation",
    title: "Reliability and",
    titleHighlight: "Trust",
    paragraphs: [
        "With nearly 25 years of proven expertise in bunker trading and logistics, our team have developed some of the region's most successful marine fuel supply concepts, serving the North Atlantic offshore bunker market as principals and preferred by majors.",
        "Selvík Energy’s leadership team brings deep experience in maritime and energy operations. Since our inception, we've expanded rapidly to win the trust of our clients and partners—streamlining logistics, complying with complex regulations, and overcoming regional political and regulatory challenges.",
        "At the heart of our operations is a steadfast commitment to innovation, safety and compliance. Our rigorous policies ensure transparency, reliability, and lasting trust in every transaction."
    ],
    team: {
        triggerLabel: "Meet our CEO",
        image: "/sverri_out.webp",
        name: "Sverri Steintún",
        role: "Selvík & Sandvík CEO",
        quote: "Don't tell me the price of oil, tell me the cost of wasted time. A week lost to unnecessary port calls is revenue lost forever.",
        bio: [
            "Sverri Steintún is a visionary leader with over 20 years of experience in maritime logistics and energy trading (Statoil and Effo). He and his partners established Selvík to solve the inefficiencies witnessed firsthand in the global bunker supply chain.",
            "Sverri Steintún’s combination of operational excellence and community commitment has earned him recognition as a leading figure in the Faroe society, as well as the North Atlantic bunker industry."
        ]
    },
    stats: [
        { label: "Optimized", value: "CO₂" },
        { label: "Support", value: "24/7" },
        { label: "Approved", value: "NEAFC" },
        { label: "Services", value: "Screening" }
    ]
};

export const footer = {
    description: "Your strategic partner for bunkering and marine logistics in the North Atlantic.",
    address: "Torshavn, 100\nFaroe Islands",
    phone: "+298 210510",
    email: "sales@selvikenergy.fo",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    newsletterTitle: "Stay Updated",
    newsletterDesc: "Subscribe to receive market updates and operational notices.",
    copyright: `© ${new Date().getFullYear()} Selvik Energy. All rights reserved.`
};
