import { Link } from 'react-router-dom';
import { FaArrowRight, FaSprayCan, FaShieldAlt, FaCarSide, FaTools, FaCarCrash } from 'react-icons/fa';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { TiltedCard } from './react-bits/TiltedCard';

const ServicesGrid = () => {
    const services = [
        {
            title: "Paint Protection Film",
            description: "Shield your car's paint from scratches and rock chips with our premium self-healing PPF.",
            image: "/gallery/Defender.jpg",
            link: "/services/ppf",
            icon: <FaShieldAlt className="h-4 w-4 text-neutral-500" />,
            colSpan: "md:col-span-1"
        },
        {
            title: "Ceramic & Graphene Coating",
            description: "Achieve unmatched gloss and long-lasting protection with our advanced coating solutions.",
            image: "/gallery/Maruti Fronx.jpg",
            link: "/services/coatings",
            icon: <FaSprayCan className="h-4 w-4 text-neutral-500" />,
            colSpan: "md:col-span-2"
        },
        {
            title: "Panel Painting",
            description: "Expert color matching and refinishing for specific panels to restore factory perfection.",
            image: "/gallery/Raven Thar Part 1.jpg",
            link: "/services/denting-painting",
            icon: <FaTools className="h-4 w-4 text-neutral-500" />,
            colSpan: "md:col-span-1"
        },
        {
            title: "Full Body Painting",
            description: "Complete restoration or color change services using high-quality automotive paints.",
            image: "/gallery/Kia Sonet Dent Paint.jpg",
            link: "/services/denting-painting",
            icon: <FaCarSide className="h-4 w-4 text-neutral-500" />,
            colSpan: "md:col-span-1"
        },
        {
            title: "Insurance Repair",
            description: "Hassle-free insurance claims and accidental repairs to get you back on the road.",
            image: "/gallery/Mahindra 300.jpg",
            link: "/services/insurance",
            icon: <FaCarCrash className="h-4 w-4 text-neutral-500" />,
            colSpan: "md:col-span-1"
        }
    ];

    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                        WHAT WE <span className="text-yellow-500">DO</span>
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light">
                            At Vahan, we provide expert paint correction, protection and detailing services to enhance your car's appearance.
                            Experience holistic vehicle care with precision and attention to detail.
                        </p>
                        <Link
                            to="/services"
                            className="flex items-center px-6 py-3 border border-yellow-500/30 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold whitespace-nowrap transition-all duration-300 group"
                        >
                            View All Services <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Aceternity Bento Grid */}
                <BentoGrid className="max-w-7xl mx-auto">
                    {services.map((service, i) => (
                        <BentoGridItem
                            key={i}
                            title={service.title}
                            description={service.description}
                            header={
                                <Link to={service.link} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
                                    <div className="w-full h-full">
                                        <TiltedCard
                                            imageSrc={service.image}
                                            altText={service.title}
                                            containerHeight="100%"
                                            containerWidth="100%"
                                            imageHeight="100%"
                                            imageWidth="100%"
                                            rotateAmplitude={7}
                                            scaleOnHover={1.05}
                                            showTooltip={false}
                                            overlayContent={
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                            }
                                            displayOverlayContent={true}
                                        />
                                    </div>
                                </Link>
                            }
                            icon={service.icon}
                            className={i === 1 || i === 3 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};


export default ServicesGrid;
