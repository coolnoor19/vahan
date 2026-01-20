import { motion } from 'framer-motion';

const BrandMarquee = () => {
    // List of automotive brands and detailing product brands
    const brands = [
        "3M",
        "KENNEDY",
        "NORTON",
        "SBS",
        "BOSCH",
        "JOHNSON CONTROLS",
        "LUXSHIELD",
        "CERAMIC PRO",
        "XPEL",
        "SUNTEK",
        "AVERY DENNISON",
        "GYEON",
        "GTECHNIQ",
        "MEGUIAR'S",
        "CHEMICAL GUYS",
        "SONAX"
    ];

    // Duplicate brands array for seamless loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="relative bg-gray-900 py-12 overflow-hidden border-y border-gray-800">
            <div className="mb-6 text-center">
                <h3 className="text-sm font-bold tracking-wider uppercase text-gray-400">
                    OUR BRAND <span className="text-yellow-500">PARTNERS</span>
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

                {/* Scrolling Content */}
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{
                        x: [0, -1920], // Adjust based on content width
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 text-2xl font-bold text-white/40 hover:text-yellow-500 transition-colors duration-300 whitespace-nowrap"
                        >
                            {brand}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandMarquee;
