import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import BrandMarquee from '../components/BrandMarquee';
import ServicesGrid from '../components/ServicesGrid';
import StatsSection from '../components/StatsSection';
import ReviewsSection from '../components/ReviewsSection';

// Import images from assets folder
import heroImg2 from '../assets/hero_luxury_interior_1768887637851.png';
import heroImg3 from '../assets/hero_ppf_polishing_1768887667898.png';

const slides = [
    {
        image: '/hero/vahan.jpg', // Public folder assets are referenced directly
        title: "Ceramic Protection",
        subtitle: "Unmatched Gloss & Durability",
        description: "Shield your vehicle with our premium ceramic and graphene coatings for a showroom shine that lasts.",
        cta: "Explore Coatings",
        link: "/services/coatings"
    },
    {
        image: heroImg2,
        title: "Premium Interiors",
        subtitle: "Luxury in Every Detail",
        description: "Revitalize your cabin with our deep cleaning and leather restoration services.",
        cta: "See Interior/Detailing",
        link: "/services/detailing"
    },
    {
        image: heroImg3,
        title: "Expert Correction",
        subtitle: "Flawless Paint Restoration",
        description: "Remove swirls, scratches, and imperfections with our professional paint correction and PPF services.",
        cta: "View Corrections",
        link: "/services/ppf"
    }
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <>
            {/* Hero Carousel Section */}
            <div className="relative h-screen w-full overflow-hidden bg-neutral-950 text-white">
                {/* Carousel */}
                <AnimatePresence initial={false} mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[current].image})` }}
                        />
                        {/* Overlay Gradient - Darker for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <span className="h-0.5 w-12 bg-yellow-500"></span>
                                <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm">
                                    {slides[current].subtitle}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] text-white"
                            >
                                {slides[current].title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg font-light"
                            >
                                {slides[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <a
                                    href={slides[current].link}
                                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-black bg-yellow-500 hover:bg-white transition-all duration-300 transform"
                                >
                                    {slides[current].cta.toUpperCase()}
                                    <FaArrowRight size={14} />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-12 right-12 flex items-center gap-6 hidden md:flex">
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                        >
                            <FaChevronLeft size={14} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                        >
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4">
                    <span className="text-sm font-mono text-yellow-500">0{current + 1}</span>
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-1 transition-all duration-500 ${index === current ? 'w-12 bg-yellow-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-mono text-gray-500">0{slides.length}</span>
                </div>
            </div>

            {/* Banner Section */}
            <section className="relative bg-black text-white py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Bold Statement */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
                                AT <span className="text-yellow-500">VAHAN</span>, WE DON'T JUST SERVICE CARS -{' '}
                                <span className="text-yellow-500 block mt-2">WE BUILD EXCELLENCE</span>
                            </h2>
                        </motion.div>

                        {/* Right - Stylized Logo Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                <h3 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 opacity-30">
                                        VAHAN
                                    </span>
                                </h3>
                                <h3 className="absolute top-0 left-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                                    style={{
                                        WebkitTextStroke: '2px #FFD700',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                    VAHAN
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Brand Partners Marquee */}
            <BrandMarquee />

            {/* What We Do - Services Grid */}
            <ServicesGrid />

            {/* Stats & Social Media */}
            <StatsSection />

            {/* Customer Reviews */}
            <ReviewsSection />
        </>
    );
};

export default Home;
