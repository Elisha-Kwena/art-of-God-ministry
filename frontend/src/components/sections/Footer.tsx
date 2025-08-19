import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import map from '../../../public/images/banners/location.png';

const links = [
    { id: 1, label: "About", path: ROUTES.ABOUT },
    { id: 2, label: "Services", path: ROUTES.SERVICES },
    { id: 3, label: "Sermon", path: ROUTES.SERMON },
    { id: 4, label: "Leadership", path: ROUTES.LEADERSHIP },
    { id: 5, label: "Gallery", path: ROUTES.GALLERY },
    { id: 6, label: "Events", path: ROUTES.EVENTS },
    { id: 7, label: "Contact", path: ROUTES.CONTACT },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#302a29] text-white">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Church Info */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">The Ark of God Ministry</h1>
                        <p className="text-gray-300">
                            Established in 2011, The Ark of God Ministry has been a beacon of hope in Dandora Phase 5, 
                            serving the community with unwavering faith.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-300 hover:text-white transition">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition">
                                <i className="fab fa-youtube text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="space-y-2">
                            {links.map(item => (
                                <li key={item.id}>
                                    <Link 
                                        to={item.path} 
                                        className="text-gray-300 hover:text-[#ab4f43] transition duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" >
                        <h2 className="text-xl font-bold">Contact Us</h2>
                        <address className="not-italic space-y-2">
                            <p className="flex items-start">
                                <span className="mr-2">📍</span>
                                Dandora Phase 5, Sharp Corner<br />(Near Police Station)
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📬</span>
                                P.O. Box 194-00516
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📞</span>
                                <a href="tel:+254723055078" className="hover:text-[#ab4f43] transition">
                                    0723 055 078
                                </a>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📧</span>
                                <a href="mailto:tagm2011@gmail.com" className="hover:text-[#ab4f43] transition">
                                    tagm2011@gmail.com
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Map */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Our Location</h2>
                        <div className="rounded-lg overflow-hidden border-2 border-[#ab4f43]">
                        <div className="w-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51405373155!2d36.89503399144966!3d-1.2436234781153424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15b9f24ea1c5%3A0x486fe9a009446c8e!2sSharp%20Corner!5e0!3m2!1sen!2ske!4v1755543645898!5m2!1sen!2ske"
                        //   width="600"
                        //   height="450"
                          className="w-full h-[200px]"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="The Ark of God Ministry Location"
                          aria-label="Map to The Ark of God Ministry in Dandora Phase 5"
                        />
                    </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-[#ab4f43]">Sunday Services</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>8:00 AM – 10:30 AM: First Service</li>
                            <li>10:30 AM – 11:00 AM: Praise & Worship</li>
                            <li>11:00 AM – 1:00 PM: Second Service</li>
                            <li>After 1:00 PM: Fellowship Tea</li>
                        </ul>
                    </div>
                    <div className="space-y-2" >
                        <h3 className="text-lg font-semibold text-[#ab4f43]">Weekly Activities</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>Wednesday: 10:00 AM – Midweek Service</li>
                            <li>Thursday: Door-to-Door Prayer</li>
                            <li>Friday: Night Prayers (9PM-4AM)</li>
                            <li>Saturday: Church Cleaning</li>
                        </ul>
                    </div>
                    <div className="space-y-2" >
                        <h3 className="text-lg font-semibold text-[#ab4f43]">Our Leadership</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>Bishop: Overseer of churches</li>
                            <li>Senior Pastor: Spiritual head</li>
                            <li>Deacons & Elders</li>
                            <li>JT Pastors</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-12 py-6 bg-[#201c1b] text-center">
                <p className="text-gray-400">
                    Copyright © {currentYear} The Ark of God Ministry. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Website by: <a href="tel:+254707575589" className="hover:text-[#ab4f43]">Luminary Softwares - 0707 575 589</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;