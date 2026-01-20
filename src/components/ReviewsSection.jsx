import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsSection = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            name: "Rajesh Kumar",
            location: "Mumbai",
            rating: 5,
            review: "Absolutely phenomenal service! The ceramic coating on my BMW looks stunning. The team was professional, and the attention to detail was exceptional. Highly recommend VAHAN for premium car care!",
            service: "Ceramic Coating",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            name: "Priya Sharma",
            location: "Delhi",
            rating: 5,
            review: "I got my Audi wrapped here and I'm blown away! The quality of work is top-notch. They delivered exactly what I wanted. The team is skilled and very cooperative throughout the process.",
            service: "Car Wrapping",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            name: "Arun Menon",
            location: "Bangalore",
            rating: 5,
            review: "Best detailing service in the city! My car interior looks brand new after their deep cleaning. They take pride in their work and it shows. Will definitely return for future services.",
            service: "Interior Detailing",
            gradient: "from-green-500 to-teal-500"
        },
        {
            name: "Sneha Patel",
            location: "Pune",
            rating: 5,
            review: "Had an amazing experience with their PPF installation. The paint protection film is flawless, and my car is now protected from scratches. Very satisfied with the result and customer service!",
            service: "PPF Installation",
            gradient: "from-orange-500 to-red-500"
        },
        {
            name: "Vikram Singh",
            location: "Hyderabad",
            rating: 5,
            review: "The denting and painting work was perfect! They matched the color exactly and you can't even tell there was damage. Professional team, fair pricing, and excellent quality work.",
            service: "Denting & Painting",
            gradient: "from-yellow-500 to-orange-500"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                        WHAT OUR <span className="text-yellow-500">CUSTOMERS SAY</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Don't just take our word for it - hear from our happy customers
                    </p>
                </motion.div>

                {/* Review Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentReview}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Review Card */}
                            <div className={`bg-gradient-to-br ${reviews[currentReview].gradient} p-1 rounded-3xl shadow-2xl`}>
                                <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className={`bg-gradient-to-br ${reviews[currentReview].gradient} p-4 rounded-full`}>
                                            <FaQuoteLeft className="text-2xl text-white" />
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex justify-center gap-2 mb-6">
                                        {[...Array(reviews[currentReview].rating)].map((_, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <FaStar className="text-yellow-500 text-2xl" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-white text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                                        "{reviews[currentReview].review}"
                                    </p>

                                    {/* Customer Info */}
                                    <div className="text-center">
                                        <h4 className="text-white text-xl font-bold mb-1">
                                            {reviews[currentReview].name}
                                        </h4>
                                        <p className="text-gray-400 mb-2">
                                            {reviews[currentReview].location}
                                        </p>
                                        <div className={`inline-block bg-gradient-to-r ${reviews[currentReview].gradient} text-white text-sm px-4 py-1 rounded-full font-semibold`}>
                                            {reviews[currentReview].service}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black p-4 rounded-full hover:scale-110 transition-transform shadow-lg z-10"
                        aria-label="Previous review"
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black p-4 rounded-full hover:scale-110 transition-transform shadow-lg z-10"
                        aria-label="Next review"
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentReview
                                    ? `w-12 h-3 bg-gradient-to-r ${reviews[index].gradient}`
                                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Review Counter */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        {currentReview + 1} / {reviews.length}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
