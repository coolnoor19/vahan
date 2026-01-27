import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const galleryImages = [
    { src: '/gallery/BMWX3PPFThumbnail.jpg', alt: 'BMW X3 PPF' },
    { src: '/gallery/Defender.jpg', alt: 'Land Rover Defender' },
    { src: '/gallery/Honda Civivc Type R KIt.jpg', alt: 'Honda Civic Type R Kit' },
    { src: '/gallery/Intro Thumbnail 2026.jpg', alt: 'Workshop Intro' },
    { src: '/gallery/Kia Carens.jpg', alt: 'Kia Carens' },
    { src: '/gallery/Kia Sonet Dent Paint.jpg', alt: 'Kia Sonet Dent Paint' },
    { src: '/gallery/Mahindra 300.jpg', alt: 'Mahindra XUV 300' },
    {
        src: '/gallery/Mahindra Scorpio N ppf+black warp roof & spoiler+3m cr90 windshield film.jpg',
        alt: 'Mahindra Scorpio N Customization',
    },
    { src: '/gallery/Mahindra Thar Roxx.jpg', alt: 'Mahindra Thar Roxx' },
    { src: '/gallery/Mahindra xev 9 Thumbnail.jpg', alt: 'Mahindra XEV 9' },
    { src: '/gallery/Maruti Fronx.jpg', alt: 'Maruti Fronx' },
    { src: '/gallery/Maruti Ignis Thumbnail.jpg', alt: 'Maruti Ignis' },
    { src: '/gallery/Nissan magnite under bodycoat.jpg', alt: 'Nissan Magnite Underbody Coat' },
    { src: '/gallery/Raven Thar Part 1.jpg', alt: 'Raven Thar' },
    { src: '/gallery/Skoda kylaq white suntek ppf.jpg', alt: 'Skoda Kylaq PPF' },
    { src: '/gallery/Toyota Fortuner PPFf.jpg', alt: 'Toyota Fortuner PPF' },
    { src: '/gallery/volkswagen taigun.jpg', alt: 'Volkswagen Taigun' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Work <span className="text-yellow-500">Gallery</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our latest projects and transformations. From PPF installations to custom wraps, see the quality we deliver.
                    </p>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            layoutId={`image-${index}`}
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-gray-900 aspect-video"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    >
                        <motion.button
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <IoClose size={32} />
                        </motion.button>
                        <motion.div
                            layoutId={`image-${galleryImages.indexOf(selectedImage)}`}
                            className="relative max-w-5xl max-h-[90vh] w-full rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-full object-contain max-h-[90vh]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-white text-xl font-bold text-center">
                                    {selectedImage.alt}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
