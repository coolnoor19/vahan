import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

const parseStatValue = (value) => {
    const raw = String(value ?? "");
    const numberPart = raw.replace(/[^\d]/g, "");
    const suffix = raw.replace(/[\d\s,]/g, "") || "";
    const target = Number(numberPart || 0);
    return { target, suffix };
};

const CountUpStat = ({ value, duration = 1.4 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    const { target, suffix } = useMemo(() => parseStatValue(value), [value]);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        setDisplay(0);
        const controls = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1], // smooth ease-out
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });

        return () => controls.stop();
    }, [duration, isInView, target]);

    const formatted = useMemo(() => {
        // Indian grouping for large numbers (e.g., 21,10,000)
        return new Intl.NumberFormat("en-IN").format(display);
    }, [display]);

    return (
        <span ref={ref} className="inline-flex items-baseline">
            <span className="inline-block drop-shadow-[0_0_18px_rgba(234,179,8,0.25)]">
                {formatted}
            </span>
            {suffix && <span className="ml-0.5">{suffix}</span>}
        </span>
    );
};

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
            link: "https://www.youtube.com/channel/UC8_NgeWugVeVH6PMVUKo-5g"
        },
        {
            value: "1400000+",
            label: "Instagram",
            type: "social",
            icon: FaInstagram,
            bgClass: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
            link: "https://www.instagram.com/vahandetailing/"
        },
        {
            value: "2250000+",
            label: "Facebook",
            type: "social",
            icon: FaFacebookF,
            bgClass: "bg-gradient-to-br from-blue-500 to-blue-600",
            link: "https://www.facebook.com/profile.php?id=100088953143492"
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
                                    <CountUpStat value={stat.value} />
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
