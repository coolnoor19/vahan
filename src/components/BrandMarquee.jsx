import { motion } from 'framer-motion';

const BrandMarquee = () => {
    // Logos served from Vite `public/` folder (accessible at `/logo/...`)
    const logoFiles = [
        "3m logo.png",
        "auto form logo.png",
        "auto stylenn.png",
        "AVERY DENNISON.png",
        "azoom logo.png",
        "BIMBRA LOGO.png",
        "detailmax.png",
        "glasurit logo.webp",
        "kapci-coatings-paints-uganda-logo-png_seeklogo-571237.png",
        "lightforce logo.png",
        "llumar_logo.avif",
        "manatech.jpg",
        "mann-filter-logo-png_seeklogo-217639.png",
        "menzerna logo.png",
        "mi logo.jpg",
        "moco logo.png",
        "motohunger image.png",
        "paintguard logo.png",
        "prad4x4-logo.webp",
        "qubo logo.png",
        "Saint-Gobain_logo.svg.png",
        "SUNTEK LOGO.jpg",
        "Tint-Orange-Logo.png",
        "toughdog logo.png",
        "turtle-wax-logo.avif",
        "V-KOOL-Logo.png",
        "veedol logo.png",
        "vextron logo.jpg",
        "wix filters.png",
        "wurth-logo-png_seeklogo-168611.png",
        "xpel logo.png",
    ];

    const toAlt = (file) =>
        file
            .replace(/\.[^.]+$/, "")
            .replace(/[_-]+/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    // Duplicate for seamless loop
    const duplicatedLogoFiles = [...logoFiles, ...logoFiles];

    return (
        <section className="relative bg-gray-900 py-12 overflow-hidden border-y border-gray-800">
            <div className="mb-6 text-center">
                <h3 className="text-lg font-bold tracking-wider uppercase text-gray-400">
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
                    className="flex w-max gap-16 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogoFiles.map((file, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                        >
                            <img
                                src={`/logo/${encodeURIComponent(file)}`}
                                alt={toAlt(file)}
                                loading="lazy"
                                decoding="async"
                                className="h-14 w-auto max-w-[180px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandMarquee;
