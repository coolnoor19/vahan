import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Link to="/services" className="text-yellow-500 hover:underline">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.heroImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 border border-yellow-500 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-4">
                                {service.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
                                {service.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {Array.isArray(service.showcaseImages) && service.showcaseImages.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="mb-10"
                                >
                                    <div className="flex items-end justify-between gap-4 mb-4">
                                        <h2 className="text-xl font-bold text-white">Trusted partners</h2>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                        {service.showcaseImages.map((img, index) => (
                                            <motion.div
                                                key={`${img.src}-${index}`}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.3 }}
                                                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                                                whileHover={{ y: -6, scale: 1.02 }}
                                                whileTap={{ scale: 0.99 }}
                                                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-4 sm:p-6"
                                            >
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent" />

                                                <div className="relative flex items-center justify-center">
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt || "PPF showcase"}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="h-14 sm:h-16 lg:h-14 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-yellow-500 text-3xl">{service.icon}</span>
                                Overview
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                {service.description}
                            </p>

                            <h3 className="text-xl font-bold text-white mb-6">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-500/50 transition-colors">
                                        <h4 className="text-yellow-500 font-bold mb-2">{benefit.title}</h4>
                                        <p className="text-gray-400 text-sm">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6">Our Process</h3>
                            <div className="relative border-l-2 border-gray-800 ml-4 space-y-8 pb-8">
                                {service.process.map((step, index) => (
                                    <div key={index} className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 border-4 border-gray-950"></span>
                                        <h4 className="text-white font-bold text-lg mb-1">Step {index + 1}</h4>
                                        <p className="text-gray-400">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 sticky top-24">
                            <h3 className="text-2xl font-bold text-white mb-2">Ready to Book?</h3>
                            <p className="text-gray-400 mb-6">Get a quote for {service.title} today.</p>

                            <a
                                href="tel:+919876543210"
                                className="block w-full py-4 bg-yellow-500 text-black text-center font-bold rounded-lg hover:bg-yellow-400 transition-colors mb-4"
                            >
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/919876543210"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 text-white text-center font-bold rounded-lg hover:bg-green-500 transition-colors mb-4"
                            >
                                <FaWhatsapp size={20} />
                                WhatsApp Us
                            </a>

                            <div className="mt-8 border-t border-gray-800 pt-6">
                                <h4 className="text-white font-bold mb-4">Other Services</h4>
                                <ul className="space-y-3">
                                    {Object.entries(servicesData).map(([key, s]) => {
                                        if (key === slug) return null;
                                        return (
                                            <li key={key}>
                                                <Link to={`/services/${key}`} className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center justify-between text-sm group">
                                                    {s.title}
                                                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
