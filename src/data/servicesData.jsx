import { FaShieldAlt, FaCar, FaSprayCan, FaTools, FaGem, FaFileContract, FaLayerGroup, FaCogs } from 'react-icons/fa';

import ceramicImg from '../assets/hero_ceramic_coating_1768887606831.png';
import interiorImg from '../assets/hero_luxury_interior_1768887637851.png';
import ppfImg from '../assets/hero_ppf_polishing_1768887667898.png';

export const servicesData = {
    'coatings': {
        title: "Ceramic & Graphene Coatings",
        subtitle: "Ultimate Paint Protection",
        icon: <FaGem />,
        description: "Experience the pinnacle of paint protection with our advanced Ceramic and Graphene coatings. These nanoscopic layers bond permanently to your vehicle's paint, creating a sacrificial barrier that repels water, dirt, and UV rays while enhancing gloss to an incredible level.",
        heroImage: ceramicImg,
        showcaseImages: [
            { src: "/ceramic/xpel%20logo.png", alt: "XPEL PPF" },
            { src: "/ceramic/detailmax.png", alt: "SUNTEK PPF" },
            { src: "/ceramic/paintguard%20logo.png", alt: "PaintGuard PPF" },
            { src: "/ceramic/menzerna logo.png", alt: "Tint Orange" },
            { src: "/ceramic/Saint-Gobain_logo.svg.png", alt: "PaintGuard PPF" },
            { src: "/ceramic/turtle-wax-logo.avif", alt: "Tint Orange" },
        ],
        benefits: [
            { title: "9H/10H Hardness", desc: "Superior resistance against minor scratches and swirl marks." },
            { title: "Hydrophobic", desc: "Water beads up and rolls off, taking dirt with it." },
            { title: "Deep Gloss", desc: "Enhances the depth and clarity of your vehicle's paint." },
            { title: "UV Protection", desc: "Prevents paint oxidation and fading from harsh sunlight." }
        ],
        process: [
            "Decontamination Wash & Clay Bar",
            "Paint Correction (Buffing & Polishing)",
            "Surface Preparation (IPA Wipe)",
            "Multi-layer Coating Application",
            "IR Curing for Max Hardness"
        ]
    },
    'detailing': {
        title: "Detailing & Interior Cleaning",
        subtitle: "Revitalize Your Cabin",
        icon: <FaCar />,
        description: "A clean car is a happy car. Our deep cleaning services go beyond a simple vacuum. We use steam cleaning, leather conditioning, and fabric extraction to remove stains, odors, and bacteria, restoring your interior to a factory-fresh feel.",
        heroImage: interiorImg,
        benefits: [
            { title: "Deep Cleaning", desc: "Removal of deep-seated dirt, spills, and stains." },
            { title: "Leather Care", desc: "Conditioning to prevent cracking and aging." },
            { title: "Sanitization", desc: "Steam cleaning kills 99.9% of bacteria and germs." },
            { title: "Odor Removal", desc: "Neutralizing unpleasant smells for a fresh cabin." }
        ],
        process: [
            "Dry Vacuuming of Carpets & Seats",
            "Steam Cleaning of Vents & Crevices",
            "Leather Cleaning & Conditioning",
            "Fabric Extraction & Matt Cleaning",
            "Dashboard & Trim Dressing"
        ]
    },
    'denting-painting': {
        title: "Denting & Painting",
        subtitle: "Factory-Finish Restoration",
        icon: <FaSprayCan />,
        description: "Accidents happen, but they don't have to leave a permanent mark. Our state-of-the-art paint booth and expert technicians ensure color matching perfection and seamless blending. From minor dings to major restorations, we bring your car back to life.",
        heroImage: ceramicImg, // Placeholder, reusing existing usually fine or generic
        benefits: [
            { title: "Color Match", desc: "Computerized color matching for invisible repairs." },
            { title: "Premium Paint", desc: "Using high-grade automotive paints like PPG/Glasurit." },
            { title: "Rust Protection", desc: "Anti-rust primer application on bare metal." },
            { title: "Bake Booth", desc: "Dust-free painting environment for a flawless finish." }
        ],
        process: [
            "Damage Assessment & Quoting",
            "Denting Removal & Surface Leveling",
            "Primer Application & Sanding",
            "Base Coat & Clear Coat Painting",
            "Polishing & Quality Check"
        ]
    },
    'accessories': {
        title: "Car Accessories",
        subtitle: "Upgrade Your Drive",
        icon: <FaCogs />,
        description: "Personalize your vehicle with our range of premium accessories. From dash cams and ambient lighting to seat covers and custom mats, we offer high-quality installations that enhance comfort, style, and utility.",
        heroImage: interiorImg, // Reuse interior
        benefits: [
            { title: "Custom Fit", desc: "Accessories tailored specifically for your car model." },
            { title: "Professional Install", desc: "Clean wiring and secure mounting by experts." },
            { title: "Warranty", desc: "Manufacturer warranty on all electronic accessories." },
            { title: "Wide Range", desc: "Everything from aesthetics to performance upgrades." }
        ],
        process: [
            "Consultation & Selection",
            "Professional Installation",
            "Testing & Demonstration",
            "Warranty Registration"
        ]
    },
    'ppf': {
        title: "Paint Protection Films (PPF)",
        subtitle: "Invisible Armor",
        icon: <FaShieldAlt />,
        description: "The ultimate defense against road debris, rock chips, and scratches. Our TPU Paint Protection Films are virtually invisible, self-healing, and provide a thick layer of protection for your vehicle's most vulnerable areas.",
        heroImage: ppfImg,
        showcaseImages: [
            { src: "/ppf/xpel%20logo.png", alt: "XPEL PPF" },
            { src: "/ppf/SUNTEK%20LOGO.jpg", alt: "SUNTEK PPF" },
            { src: "/ppf/paintguard%20logo.png", alt: "PaintGuard PPF" },
            { src: "/ppf/Tint-Orange-Logo.png", alt: "Tint Orange" },
        ],
        benefits: [
            { title: "Self-Healing", desc: "Scratches disappear with heat exposure." },
            { title: "Impact Resistance", desc: "Protects against stone chips and minor abrasions." },
            { title: "Hydrophobic", desc: "Easy cleaning maintenance." },
            { title: "Resale Value", desc: "Keeps factory paint in pristine condition." }
        ],
        process: [
            "Thorough Wash & Claying",
            "Paint Correction (if needed)",
            "Pattern Plotting or Custom Cutting",
            "Wet Installation with Slip Solution",
            "Squeegee & Edge Wrapping"
        ]
    },
    'wraps': {
        title: "Wrap Jobs",
        subtitle: "Change Your Look",
        icon: <FaLayerGroup />,
        description: "Bored of your car's color? Change it instantly with our premium vinyl wraps. Choose from matte, satin, gloss, or color-shift finishes. Protects original paint while giving your car a completely new identity.",
        heroImage: ceramicImg, // Placeholder
        benefits: [
            { title: "Reversible", desc: "Can be removed anytime without damaging original paint." },
            { title: "Customization", desc: "Endless color and texture options available." },
            { title: "Paint Protection", desc: "Acts as a light shield against UV and minor scratches." },
            { title: "Quick Turnaround", desc: "Full color change in just a few days." }
        ],
        process: [
            "Design Consultation",
            "Deep Cleaning & Disassembly",
            "Vinyl Application",
            "Post-Heating (to set memory)",
            "Reassembly & Quality Check"
        ]
    },
    'insurance': {
        title: "Insurance Claims",
        subtitle: "Hassle-Free Repairs",
        icon: <FaFileContract />,
        description: "We handle cashless insurance claims with all major insurance providers. Our team manages the paperwork, survey, and repair process so you can have peace of mind while we restore your car to pre-accident condition.",
        heroImage: ceramicImg, // Placeholder
        benefits: [
            { title: "Cashless Facility", desc: "Direct settlement with insurance companies." },
            { title: "Documentation", desc: "We handle all the filing and paperwork." },
            { title: "Quality Repairs", desc: "OEM standard repairs guaranteed." },
            { title: "Quick Approval", desc: "Established relationships with surveyors." }
        ],
        process: [
            "Claim Intimation",
            "Surveyor Inspection",
            "Approval & Work Commencement",
            "Final Inspection & Delivery",
            "Direct Billing"
        ]
    },
    'others': {
        title: "Other Services",
        subtitle: "Comprehensive Care",
        icon: <FaTools />,
        description: "Beyond the basics, we offer a wide range of specialized automotive services including underbody coating, silencer coating, AC servicing, headlight restoration, and more.",
        heroImage: ppfImg, // Placeholder
        benefits: [
            { title: "One-Stop Shop", desc: "All your car care needs under one roof." },
            { title: "Expert Diagnosis", desc: "Trained mechanics for mechanical issues." },
            { title: "Preventive Care", desc: "Services that prolong your vehicle's life." },
            { title: "Genuine Parts", desc: "Only original spares used for replacements." }
        ],
        process: [
            "Issue Diagnosis",
            "Estimation",
            "Service Execution",
            "Trial Run",
            "Delivery"
        ]
    }
};
