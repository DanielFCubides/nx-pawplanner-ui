// Landing Page Component
import React, {useState} from "react";
import {Calendar, Heart, Menu, Shield, X} from "lucide-react";

export const LandingPage = ({onNavigate}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: <Calendar className="w-8 h-8 text-blue-600"/>,
            title: "Smart Scheduling",
            description: "Never miss important pet events with intelligent reminders and calendar integration."
        },
        {
            icon: <Heart className="w-8 h-8 text-red-500"/>,
            title: "Health Tracking",
            description: "Monitor your pet's health milestones, vet visits, and medication schedules."
        },
        {
            icon: <Shield className="w-8 h-8 text-green-600"/>,
            title: "Secure Sharing",
            description: "Safely share pet information with vets, family members, and pet sitters."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Heart className="w-8 h-8 text-blue-600 mr-2"/>
                            <span className="text-2xl font-bold text-gray-900">PetTracker</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features"
                               className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                            <button
                                onClick={() => onNavigate('login')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
                            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
                            <button
                                onClick={() => onNavigate('login')}
                                className="block w-full text-left px-3 py-2 text-blue-600 font-medium"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Track Every Precious
                        <span className="text-blue-600 block">Pet Moment</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Never miss important events in your pet's life. From vet visits to daily walks,
                        keep everything organized and share with those who care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('login')}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                        >
                            Get Started Free
                        </button>
                        <button
                            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need for Pet Care
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive tools to keep your furry friends happy and healthy
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Tracking?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of pet parents who trust PetTracker with their furry family members.
                    </p>
                    <button
                        onClick={() => onNavigate('login')}
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Start Your Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
};