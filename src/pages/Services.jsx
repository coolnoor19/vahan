import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSprayCan, FaCarSide, FaGem, FaTools, FaCheckCircle } from 'react-icons/fa';

// Import assets
import ceramicImg from '../assets/hero_ceramic_coating_1768887606831.png';
import interiorImg from '../assets/hero_luxury_interior_1768887637851.png';
import ppfImg from '../assets/hero_ppf_polishing_1768887667898.png';

const Services = () => {
    const services = [
        {
            id: 'ceramic',
            title: 'Ceramic Coating',
            description: 'The ultimate protection for your vehicle\'s paint. Our 10H ceramic coatings provide unmatched gloss, hydrophobicity, and chemical resistance.',
            features: ['5-Year Warranty', '9H/10H Hardness', 'Extreme Gloss', 'Self-Cleaning Properties'],
            image: ceramicImg,
            icon: <FaGem />
        },
        {
            id: 'ppf',
            title: 'Paint Protection Film',
            description: 'Invisible armor for your car. Protect high-impact areas from rock chips, scratches, and road debris with our self-healing PPF.',
            features: ['Self-Healing Technology', '10-Year Warranty', 'Invisible Finish', 'Stain Resistance'],
            image: ppfImg,
            icon: <FaShieldAlt />
        },
        {
            id: 'detailing',
            title: 'Interior Detailing',
            description: 'Restore your cabin to showroom condition. We deep clean, condition leather, and sanitize every surface for a fresh, luxurious feel.',
            features: ['Leather Conditioning', 'Steam Cleaning', 'Odor Removal', 'Stain Extraction'],
            image: interiorImg,
            icon: <FaCarSide />
        },
        {
            id: 'correction',
            title: 'Paint Correction',
            description: 'Remove swirls, scratches, and oxidation. We restore your paint\'s true reflection before applying any protection.',
            features: ['Swirl Removal', 'Scratch Elimination', 'Mirror Finish', 'Depth Enhancement'],
            image: '/hero/vahan.jpg', // Using public image
            icon: <FaSprayCan />
        },
        {
            id: 'maintenance',
            title: 'Premium Maintenance',
            description: 'Regular care programs designed to maintain your coating and keep your vehicle looking perfect year-round.',
            features: ['PH Neutral Wash', 'Coating Inspection', 'Interior Touch-up', 'Wheel Detailing'],
            image: ceramicImg, // Reusing for variety
            icon: <FaTools />
        }
    ];

    return (
        <div className="bg-neutral-950 min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-8 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
                >
                    Our <span className="text-yellow-500">Services</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                >
                    World-class automotive protection and restoration solutions tailored to your vehicle's needs.
                </motion.p>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 md:px-8">
                <div className="space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-16 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                                    <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Icon Badge */}
                                    <div className="absolute top-6 right-6 w-16 h-16 bg-neutral-900/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-yellow-500 text-3xl shadow-lg z-20 border border-white/10">
                                        {service.icon}
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -z-10`}></div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
                                    <div className="h-px bg-yellow-500/30 flex-grow"></div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    {service.title}
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <FaCheckCircle className="text-yellow-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6">
                                    <button className="px-8 py-3 bg-transparent border border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-full uppercase tracking-wider text-sm">
                                        Book Service
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 md:px-8 mt-32">
                <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                        Not sure what your car needs?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                        Our experts are here to help. Get a free consultation and customized protection plan for your vehicle.
                    </p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full hover:bg-white transition-colors shadow-lg relative z-10">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
