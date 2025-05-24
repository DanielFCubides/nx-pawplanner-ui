// Landing Page Component with White (70%), Orange (15%), Black (15%) theme
import React, {useState} from "react";
import {Calendar, Heart, Menu, Shield, X} from "lucide-react";

export const LandingPage = ({onNavigate}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: <Calendar className="w-8 h-8 text-orange-500"/>,
            title: "Smart Scheduling",
            description: "Never miss important pet events with intelligent reminders and calendar integration."
        },
        {
            icon: <Heart className="w-8 h-8 text-orange-500"/>,
            title: "Health Tracking",
            description: "Monitor your pet's health milestones, vet visits, and medication schedules."
        },
        {
            icon: <Shield className="w-8 h-8 text-orange-500"/>,
            title: "Secure Sharing",
            description: "Safely share pet information with vets, family members, and pet sitters."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-lg border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Heart className="w-8 h-8 text-orange-500 mr-2"/>
                            <span className="text-2xl font-bold text-black">PetTracker</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features"
                               className="text-black hover:text-orange-500 transition-colors font-medium">Features</a>
                            <a href="#about" className="text-black hover:text-orange-500 transition-colors font-medium">About</a>
                            <button
                                onClick={() => onNavigate('login')}
                                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-md"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
                                {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#features" className="block px-3 py-2 text-black font-medium">Features</a>
                            <a href="#about" className="block px-3 py-2 text-black font-medium">About</a>
                            <button
                                onClick={() => onNavigate('login')}
                                className="block w-full text-left px-3 py-2 text-orange-500 font-semibold"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                        Track Every Precious
                        <span className="text-orange-500 block">Pet Moment</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Never miss important events in your pet's life. From vet visits to daily walks,
                        keep everything organized and share with those who care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('login')}
                            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Get Started Free
                        </button>
                        <button
                            className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors"
                        >
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Everything You Need for Pet Care
                        </h2>
                        <p className="text-xl text-gray-700">
                            Comprehensive tools to keep your furry friends happy and healthy
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="text-center p-8 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                                <div className="flex justify-center mb-4 p-3 bg-orange-50 rounded-full w-fit mx-auto">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10K+</div>
                            <div className="text-gray-600 font-medium">Happy Pet Parents</div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50K+</div>
                            <div className="text-gray-600 font-medium">Events Tracked</div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99%</div>
                            <div className="text-gray-600 font-medium">Uptime</div>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-black py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Tracking?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Join thousands of pet parents who trust PetTracker with their furry family members.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('login')}
                            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                        >
                            Start Your Free Trial
                        </button>
                        <button
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center mb-4">
                                <Heart className="w-6 h-6 text-orange-500 mr-2"/>
                                <span className="text-xl font-bold text-black">PetTracker</span>
                            </div>
                            <p className="text-gray-600 mb-4 max-w-md">
                                The most trusted platform for tracking your pet's life events and health milestones.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Mobile App</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 mt-8 pt-8 text-center">
                        <p className="text-gray-600">© 2025 PetTracker. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};