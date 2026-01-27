import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import BrandMarquee from '../components/BrandMarquee';
import ServicesGrid from '../components/ServicesGrid';
import StatsSection from '../components/StatsSection';
import ReviewsSection from '../components/ReviewsSection';
import { Spotlight } from '../components/ui/Spotlight';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { SplitText } from '../components/react-bits/SplitText';
import { BlurText } from '../components/react-bits/BlurText';
import { Magnet } from '../components/react-bits/Magnet';

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
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[current].image})` }}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-neutral-950/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Content */}
                <div className="absolute inset-0 flex items-center z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <span className="h-[2px] w-12 bg-yellow-500"></span>
                                <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm">
                                    {slides[current].subtitle}
                                </span>
                            </motion.div>

                            <div className="mb-8">
                                <TextGenerateEffect
                                    words={slides[current].title}
                                    className="text-6xl md:text-8xl font-black text-white leading-[0.9]"
                                />
                            </div>

                            <motion.p
                                key={`desc-${current}`}
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
                                transition={{ delay: 0.8 }}
                            >
                                <a
                                    href={slides[current].link}
                                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-black bg-yellow-500 hover:bg-white transition-all duration-300 transform"
                                >
                                    {slides[current].cta.toUpperCase()}
                                    <FaArrowRight size={14} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-12 right-12 flex items-center gap-6 hidden md:flex z-20">
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
                <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4 z-20">
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
            <section className="relative bg-black text-white py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Bold Statement */}
                        <div className="relative z-10">
                            <SplitText
                                className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-8"
                                delay={50}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                threshold={0.2}
                                rootMargin="-50px"
                                textAlign="left"
                            >
                                At Vahan, we don't just service cars - we build excellence
                            </SplitText>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 1 }}
                                className="h-1 bg-yellow-500 mt-6"
                            />
                        </div>

                        {/* Right - Premium VAHAN Interactions */}
                        <div className="flex justify-center lg:justify-end relative">
                            {/* Senior Developer Level Microinteraction: Text Mask Reveal */}
                            <div className="relative cursor-default group" aria-label="VAHAN">
                                {/* Base Layer: Outline Text */}
                                <h3 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent"
                                    style={{
                                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                                    }}>
                                    VAHAN
                                </h3>

                                {/* Animated Layer: Gradient Fill that fills on hover/view */}
                                <motion.h3
                                    className="absolute top-0 left-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600"
                                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                >
                                    VAHAN
                                </motion.h3>

                                {/* Accent Highlight - Gold Stroke appears on top */}
                                <motion.h3
                                    className="absolute top-0 left-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent"
                                    style={{
                                        WebkitTextStroke: '2px #EAB308', /* yellow-500 */
                                    }}
                                    initial={{ opacity: 0, x: -10, y: -10 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 1, type: "spring" }}
                                >
                                    VAHAN
                                </motion.h3>

                                {/* Decorative Background Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
