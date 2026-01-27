import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { DecryptedText } from './react-bits/DecryptedText';

const StatsSection = () => {
    const stats = [
        {
            value: "10000+",
            label: "Happy Customers",
            type: "business",
            bgClass: "bg-gray-800"
        },
        {
            value: "30000+",
            label: "Hours of Work",
            type: "business",
            bgClass: "bg-gray-800"
        },
        {
            value: "4000+",
            label: "Projects Handled",
            type: "business",
            bgClass: "bg-gray-800"
        },
        {
            value: "8+",
            label: "Years of Experience",
            type: "business",
            bgClass: "bg-gray-800"
        },
        {
            value: "2110000+",
            label: "YouTube",
            type: "social",
            icon: FaYoutube,
            bgClass: "bg-gradient-to-br from-red-400 to-red-500",
            link: "https://youtube.com"
        },
        {
            value: "1400000+",
            label: "Instagram",
            type: "social",
            icon: FaInstagram,
            bgClass: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
            link: "https://instagram.com"
        },
        {
            value: "2250000+",
            label: "Facebook",
            type: "social",
            icon: FaFacebookF,
            bgClass: "bg-gradient-to-br from-blue-500 to-blue-600",
            link: "https://facebook.com"
        }
    ];

    const businessStats = stats.filter(s => s.type === 'business');
    const socialStats = stats.filter(s => s.type === 'social');

    return (
        <section className="bg-black py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                    {/* Business Stats - Left Side */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {businessStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${stat.bgClass} rounded-xl p-6 flex flex-col justify-center items-center text-center`}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                                    <DecryptedText
                                        text={stat.value}
                                        speed={50}
                                        maxIterations={20}
                                        characters="1234567890"
                                        animateOn="view"
                                        revealDirection="end"
                                        parentClassName="inline-block"
                                        className="inline-block"
                                    />
                                </div>
                                <p className="text-sm text-gray-300">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Media Stats - Right Side */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                        {socialStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={stat.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (businessStats.length + index) * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`${stat.bgClass} rounded-xl p-6 flex items-center justify-between text-white hover:shadow-2xl transition-all cursor-pointer`}
                                >
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-1">
                                            {stat.value}
                                        </h3>
                                        <p className="text-sm opacity-90">
                                            {stat.label}
                                        </p>
                                    </div>
                                    <div className="text-4xl opacity-90">
                                        <Icon />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
