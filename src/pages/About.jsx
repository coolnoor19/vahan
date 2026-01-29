import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaTools, FaHistory } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaAward />, label: 'Years Experience', value: '10+' },
        { icon: <FaUsers />, label: 'Happy Clients', value: '5000+' },
        { icon: <FaTools />, label: 'Projects Completed', value: '8000+' },
        { icon: <FaHistory />, label: 'Established', value: '2014' },
    ];

    const values = [
        {
            title: "Perfectionism",
            description: "We don't settle for 'good enough'. Every detail matters, from the stitching to the paint reflection."
        },
        {
            title: "Innovation",
            description: "Using the latest technology in ceramic coatings, PPF, and detailing tools to provide superior results."
        },
        {
            title: "Transparency",
            description: "Honest advice and clear communication about what your vehicle truly needs to look its best."
        }
    ];

    return (
        <div className="bg-neutral-900 min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
                    style={{ backgroundImage: 'url("/about/about.jpg")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900"></div>
                </div> */}

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4 inline-block px-4 py-1 border border-yellow-500/30 rounded-full bg-black/30 backdrop-blur-sm"
                    >
                        <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">Est. 2014</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8"
                    >
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">VAHAN</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        Redefining vehicle care with precision, passion, and premium craftsmanship. We are not just detailers; we are <span className="text-white font-medium">automotive preservationists</span>.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-6">
                            Our Journey to <br />
                            <span className="text-yellow-500">Excellence</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Founded in 2014, VAHAN started with a simple belief: every vehicle deserves to look as good as the day it left the showroom, if not better. What began as a small garage project has grown into a premier detailing studio trusted by luxury car owners across the region.
                            </p>
                            <p>
                                Our team consists of certified professionals who share a deep passion for automotive aesthetics. We treat every car that enters our studio as a canvas, using world-class products and techniques to restore and protect its beauty.
                            </p>
                            <p>
                                From daily drivers to exotic supercars, our standard remains the same—absolute perfection.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6">
                            <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-yellow-500/50 transition-colors">
                                <h4 className="text-yellow-500 text-xl font-bold mb-2">Certified</h4>
                                <p className="text-sm text-gray-400">Officially certified by major coating brands.</p>
                            </div>
                            <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-yellow-500/50 transition-colors">
                                <h4 className="text-yellow-500 text-xl font-bold mb-2">Insured</h4>
                                <p className="text-sm text-gray-400">Fully insured facility for your peace of mind.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="/about/about.jpg"
                                alt="Detailing Workshop"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-yellow-500/20 rounded-xl -z-0 hidden md:block"></div>
                        <div className="absolute -bottom-10 -left-10 w-full h-full bg-neutral-800 rounded-xl -z-10 hidden md:block"></div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="bg-yellow-500 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center text-neutral-900"
                            >
                                <div className="text-4xl mb-4 flex justify-center opacity-80">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                                <div className="font-bold uppercase tracking-wider text-sm md:text-base opacity-80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-500 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                <span className="text-yellow-500 font-bold text-xl group-hover:text-black">0{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl p-12 border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Transform Your Ride?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Experience the difference that true passion and expertise make. Visit VAHAN today.
                    </p>
                    <a href="/contact" className="inline-block bg-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105 shadow-xl relative z-10">
                        Get a Free Quote
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
