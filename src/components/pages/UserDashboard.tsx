// User Dashboard Component
import React, {useEffect, useState} from "react";
import {mockAPI} from "../../services/api";
import {Bell, Calendar, Clock, Heart, LogOut, Menu, Plus, User} from "lucide-react";

export const UserDashboard = ({user, onLogout}) => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddEvent, setShowAddEvent] = useState(false);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            const eventsData = await mockAPI.getEvents();
            setEvents(eventsData);
        } catch (error) {
            console.error('Failed to load events:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            health: 'bg-red-100 text-red-800',
            exercise: 'bg-green-100 text-green-800',
            grooming: 'bg-purple-100 text-purple-800',
            training: 'bg-orange-100 text-orange-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your pet events...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Heart className="w-8 h-8 text-orange-600 mr-2"/>
                            <span className="text-2xl font-bold text-gray-900">PetTracker</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setShowAddEvent(true)}
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
                            >
                                <Plus className="w-4 h-4"/>
                                <span>Add Event</span>
                            </button>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-white"/>
                                </div>
                                <span className="text-gray-700 font-medium">{user.name}</span>
                                <button
                                    onClick={onLogout}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <LogOut className="w-5 h-5"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, {user.name}!
                    </h1>
                    <p className="text-gray-600">
                        Here's what's happening with your pets today.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <Calendar className="w-8 h-8 text-blue-600 mr-3"/>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{events.length}</p>
                                <p className="text-gray-600">Total Events</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <Clock className="w-8 h-8 text-green-600 mr-3"/>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">2</p>
                                <p className="text-gray-600">Upcoming</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <Bell className="w-8 h-8 text-orange-600 mr-3"/>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">1</p>
                                <p className="text-gray-600">Reminders</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events List */}
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Events</h2>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {events.map((event) => (
                            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {event.title}
                                            </h3>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                                        </div>

                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                                            <span>{event.date}</span>
                                            <span>{event.time}</span>
                                            <span>Pet: {event.pet}</span>
                                        </div>

                                        {event.notes && (
                                            <p className="text-gray-600">{event.notes}</p>
                                        )}
                                    </div>

                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <Menu className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};