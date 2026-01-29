import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const services = [
        { name: "Ceramic & Graphene Coatings", link: "/services/coatings" },
        { name: "Detailing & Interior Cleaning", link: "/services/detailing" },
        { name: "Denting & Painting", link: "/services/denting-painting" },
        { name: "Car Accessories", link: "/services/accessories" },
        { name: "Paint Protection Films", link: "/services/ppf" },
        { name: "Wrap Jobs", link: "/services/wraps" },
        { name: "Insurance Claims", link: "/services/insurance" },
        { name: "Other Services", link: "/services/others" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            <img src="/logo.png" alt="VAHAN" width={200} height={200} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'}`}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'}`}>About</NavLink>

                            {/* Services Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white inline-flex items-center group">
                                    Services
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[600px] rounded-xl shadow-2xl bg-gray-900 border border-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-200">
                                        <div className="p-6 grid grid-cols-2 gap-4">
                                            {services.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    to={service.link}
                                                    className="block p-3 rounded-lg hover:bg-gray-800 transition-colors"
                                                >
                                                    <p className="text-base font-medium text-white">{service.name}</p>
                                                    <p className="mt-1 text-xs text-gray-400">Professional {service.name.toLowerCase()} for your car.</p>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="bg-gray-800 p-4">
                                            <Link to="/services" className="text-sm text-yellow-400 hover:text-yellow-300 font-medium flex items-center justify-center">
                                                View All Services &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <NavLink to="/gallery" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'}`}>Gallery</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>Contact Us</NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">About</NavLink>

                        <div className="border-t border-gray-800 pt-2 pb-2 mt-2">
                            <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Services</div>
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    to={service.link}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 pl-6"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>

                        <NavLink to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Gallery</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-black bg-yellow-500 hover:bg-yellow-600 mt-4">Contact Us</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
