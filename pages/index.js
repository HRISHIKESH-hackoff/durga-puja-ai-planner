import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PlannerForm from '../components/PlannerForm';
import Results from '../components/Results';
import { motion } from 'framer-motion';

const Home = () => {
  const [plannerData, setPlannerData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanGeneration = async (formData) => {
    setIsLoading(true);
    
    // Simulate AI planning logic
    setTimeout(() => {
      const mockPlan = {
        route: generateOptimalRoute(formData),
        foodRecommendations: getFoodRecommendations(formData.preferences),
        transportation: getTransportationPlan(formData),
        timeline: generateTimeline(formData)
      };
      
      setPlannerData(mockPlan);
      setIsLoading(false);
    }, 2000);
  };

  const generateOptimalRoute = (data) => {
    return [
      { id: 1, name: 'Ekdalia Evergreen Club', distance: '2.5 km', theme: 'Traditional Durga', rating: 4.8 },
      { id: 2, name: 'Mudiali Club', distance: '3.2 km', theme: 'Contemporary Art', rating: 4.7 },
      { id: 3, name: 'Bagbazar Sarbojanin', distance: '1.8 km', theme: 'Eco-friendly', rating: 4.9 },
      { id: 4, name: 'Ballygunge Cultural', distance: '4.1 km', theme: 'Heritage Revival', rating: 4.6 }
    ];
  };

  const getFoodRecommendations = (preferences) => {
    const foods = {
      vegetarian: ['Khichdi Bhog', 'Luchi-Alur Dom', 'Mishti Doi', 'Sandesh'],
      nonVegetarian: ['Mangsho Bhog', 'Fish Curry', 'Mutton Curry', 'Prawn Malai'],
      street: ['Phuchka', 'Jhalmuri', 'Kathi Roll', 'Telebhaja'],
      sweets: ['Rasgulla', 'Mishti Doi', 'Kheer Kadam', 'Chum Chum']
    };
    return foods[preferences] || foods.street;
  };

  const getTransportationPlan = (data) => {
    return {
      mode: data.transport || 'Walking + Metro',
      estimatedCost: data.transport === 'car' ? '₹800-1200' : '₹50-100',
      duration: '6-8 hours',
      tips: ['Start early morning', 'Keep metro card ready', 'Use ride-sharing for distant pandals']
    };
  };

  const generateTimeline = (data) => {
    return [
      { time: '8:00 AM', activity: 'Start from home', location: 'Home' },
      { time: '9:00 AM', activity: 'Visit first pandal', location: 'Ekdalia Evergreen' },
      { time: '11:00 AM', activity: 'Breakfast break', location: 'Local food stall' },
      { time: '12:00 PM', activity: 'Visit second pandal', location: 'Mudiali Club' },
      { time: '2:00 PM', activity: 'Lunch time', location: 'Traditional Bengali restaurant' },
      { time: '3:30 PM', activity: 'Visit third pandal', location: 'Bagbazar Sarbojanin' },
      { time: '5:00 PM', activity: 'Evening snacks', location: 'Street food stalls' },
      { time: '6:00 PM', activity: 'Final pandal visit', location: 'Ballygunge Cultural' },
      { time: '8:00 PM', activity: 'Return home', location: 'Home' }
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-yellow-500">
      <Head>
        <title>Durga Puja AI Planner - Plan Your Perfect Pandal Hopping Experience</title>
        <meta name="description" content="AI-powered Durga Puja pandal hopping planner to optimize your festival experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎭 Durga Puja AI Planner
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of Durga Puja like never before! Our AI-powered planner creates 
            the perfect pandal hopping route tailored to your preferences.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce delay-1000">🪔</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse delay-2000">🎪</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin delay-3000">⭐</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce delay-500">🎊</div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Planner Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-yellow-300"
          >
            <PlannerForm onSubmit={handlePlanGeneration} isLoading={isLoading} />
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-red-300"
          >
            <Results plannerData={plannerData} isLoading={isLoading} />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold mb-2">Smart Route Planning</h3>
            <p>Optimized pandal hopping routes based on distance, crowd density, and your preferences.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-2">Food Recommendations</h3>
            <p>Discover the best Durga Puja delicacies and street food along your route.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🚇</div>
            <h3 className="text-xl font-bold mb-2">Transport Guide</h3>
            <p>Complete transportation plan including metro routes, bus options, and ride-sharing tips.</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center text-white/80"
        >
          <p className="text-lg">Made with ❤️ for Durga Puja enthusiasts | শুভ দুর্গা পুজো</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Home;
