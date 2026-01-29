import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Ceramic Coating', path: '/services#ceramic' },
            { name: 'Paint Protection Film', path: '/services#ppf' },
            { name: 'Detailing', path: '/services#detailing' },
            { name: 'Maintenance', path: '/services#maintenance' }
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Contact', path: '/contact' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Reviews', path: '/reviews' }
        ]
    };

    const socialLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/vahandetailing/', color: 'hover:text-pink-500' },
        { icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=100088953143492', color: 'hover:text-blue-500' },
        { icon: <FaYoutube />, url: 'https://www.youtube.com/channel/UC8_NgeWugVeVH6PMVUKo-5g', color: 'hover:text-red-500' },
        // { icon: <FaWhatsapp />, url: 'https://whatsapp.com', color: 'hover:text-green-500' }
    ];

    return (
        <footer className="bg-neutral-900 border-t border-yellow-500/20 pt-16 pb-8 text-neutral-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-yellow-500 text-3xl">⚡</span>
                            <img src="/logo.png" alt="VAHAN" width={100} height={100} />
                        </Link>
                        <p className="text-neutral-400 leading-relaxed">
                            Premium automotive detailing and protection services. We bring out the absolute best in your vehicle with world-class craftsmanship.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xl p-2 bg-neutral-800 rounded-full transition-colors ${social.color} text-white`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
                            Company
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-500 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
                            Our Services
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-500 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
                            Get in Touch
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1 shrink-0" />
                                <span>Plot No:128/4506, Koradakanta<br />Bhubaneswar , Khorda, Odisha - 75106</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhone className="text-yellow-500 shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-yellow-500 transition-colors">
                                    +91 73772 00009
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaEnvelope className="text-yellow-500 shrink-0" />
                                <a href="mailto:info@vahandetailing.com" className="hover:text-yellow-500 transition-colors">
                                    info@vahandetailing.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>© {currentYear} VAHAN Detailing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
