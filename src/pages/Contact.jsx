import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Spotlight } from '../components/ui/Spotlight';
import { SplitText } from '../components/react-bits/SplitText';
import { BlurText } from '../components/react-bits/BlurText';
import { Magnet } from '../components/react-bits/Magnet';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-12 relative overflow-hidden">
            {/* Ambient Lighting */}
            {/* <Spotlight className="-top-40 right-0 md:right-60 md:-top-20 opacity-50" fill="yellow" /> */}
            {/* <Spotlight className="top-40 left-0 md:left-20 opacity-30" fill="white" /> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                    >
                        <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Connect With Us</span>
                    </motion.div>

                    <div className="mb-6 flex justify-center">
                        <SplitText
                            className="text-5xl md:text-7xl font-black text-white leading-tight text-center"
                            delay={40}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            textAlign="center"
                        >
                            GET IN TOUCH
                        </SplitText>
                    </div>

                    <BlurText
                        text="Ready to transform your vehicle? Reach out for a consultation, quote, or to schedule your premium service."
                        className="text-gray-400 text-lg md:text-xl leading-relaxed justify-center"
                        delay={200}
                        animateBy="words"
                        direction="top"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Contact Info & Socials */}
                    <div className="space-y-12">
                        {/* Contact Cards */}
                        <div className="grid gap-6">
                            {[
                                { icon: FaPhone, title: "Call Us", value: "+91 73772 00009", link: "tel:+919876543210" },
                                { icon: FaWhatsapp, title: "WhatsApp", value: "Chat Now", link: "https://wa.me/919876543210" },
                                { icon: FaEnvelope, title: "Email Us", value: "info@vahandetailing.com", link: "mailto:info@vahandetailing.com" },
                                { icon: FaMapMarkerAlt, title: "Visit Us", value: "Plot No:128/4506 , Koradakanta , Bhubaneswar, Khordha, Odisha - 75106", link: "#" }
                            ].map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.link}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{item.title}</h3>
                                        <p className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Media Magnets */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                Follow Our Work <div className="h-px flex-1 bg-gray-800"></div>
                            </h3>
                            <div className="flex gap-4">
                                {[
                                    {
                                        Icon: FaInstagram,
                                        url: "https://www.instagram.com/vahandetailing/"
                                    },
                                    {
                                        Icon: FaFacebookF,
                                        url: "https://www.facebook.com/profile.php?id=100088953143492"
                                    },
                                    {
                                        Icon: FaYoutube,
                                        url: "https://www.youtube.com/channel/UC8_NgeWugVeVH6PMVUKo-5g"
                                    }
                                ].map(({ Icon, url }, i) => (
                                    <Magnet key={i} padding={50} magnetStrength={3}>
                                        <a
                                            href={url}
                                            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 text-xl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon />
                                        </a>
                                    </Magnet>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Glassmorphic Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
                        <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formState.service}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-400"
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="ppf">Paint Protection Film</option>
                                        <option value="coating">Ceramic Coating</option>
                                        <option value="detail">Detailing</option>
                                        <option value="paint">Painting & Denting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600 resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <Magnet padding={50} magnetStrength={5}>
                                        <button
                                            type="submit"
                                            className="w-full py-4 px-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-xl transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-3 cursor-pointer"
                                        >
                                            <FaPaperPlane /> Send Message
                                        </button>
                                    </Magnet>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
