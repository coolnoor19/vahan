import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServicesGrid = () => {
    const services = [
        {
            title: "Paint Protection Film",
            image: "/services/ppf.jpg",
            link: "/services/ppf"
        },
        {
            title: "Ceramic & Graphene Coating",
            image: "/services/ceramic.jpg",
            link: "/services/coatings"
        },
        {
            title: "Panel Painting",
            image: "/services/panel-painting.jpg",
            link: "/services/denting-painting"
        },
        {
            title: "Full Body Painting",
            image: "/services/full-body-painting.jpg",
            link: "/services/denting-painting"
        },
        {
            title: "Insurance/Accidental Repair",
            image: "/services/insurance.jpg",
            link: "/services/insurance"
        }
    ];

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                        WHAT WE <span className="text-yellow-500">DO</span>
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <p className="text-gray-400 text-sm md:text-base max-w-4xl leading-relaxed">
                            At Brotomotiv, we provide expert paint correction, paint protection and detailing services to enhance your car's appearance and protect its finish. Our body shop handles repairs for dents and scratches, while customization options like custom colors and body kits add a personalized touch. Experience holistic vehicle care with precision and attention to detail.
                        </p>
                        <Link
                            to="/services"
                            className="flex items-center text-yellow-500 hover:text-yellow-400 font-semibold whitespace-nowrap transition-colors group"
                        >
                            More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-8">
                        CHOOSE FROM A RANGE OF <span className="text-yellow-500">PREMIUM SERVICES</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={service.link}
                                    className="group block relative overflow-hidden rounded-lg bg-gray-800 hover:ring-2 hover:ring-yellow-500 transition-all duration-300"
                                >
                                    {/* Service Image */}
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Service Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-semibold text-white">
                                                {service.title}
                                            </h4>
                                            <FaArrowRight className="text-yellow-500 text-xs group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
