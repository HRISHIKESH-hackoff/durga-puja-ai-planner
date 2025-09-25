import React from 'react';
import { motion } from 'framer-motion';

const Results = ({ plannerData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            🎆 Creating Your Perfect Plan...
          </h2>
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500 mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-xl p-4 h-20"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!plannerData) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-4 border-purple-200">
          <div className="text-6xl mb-4">🎆</div>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">
            Ready for Your Adventure?
          </h2>
          <p className="text-purple-500 mb-4">
            Fill out the form to get your personalized Durga Puja pandal hopping plan!
          </p>
          <div className="text-4xl animate-bounce">🚀</div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-2">
          🎆 Your Perfect Durga Puja Plan!
        </h2>
        <p className="text-gray-600">
          Here's your customized pandal hopping itinerary!
        </p>
      </div>

      {/* Route Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
          🗺️ Recommended Route
        </h3>
        <div className="space-y-4">
          {plannerData.route?.map((pandal, index) => (
            <motion.div
              key={pandal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 border-l-4 border-orange-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-gray-800">{pandal.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{pandal.theme}</p>
                  <p className="text-sm text-orange-600 font-medium">{pandal.distance}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-bold">{pandal.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Food Recommendations */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
          🍽️ Food Recommendations
        </h3>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border-l-4 border-green-500">
          <div className="grid grid-cols-2 gap-2">
            {plannerData.foodRecommendations?.map((food, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-lg p-2 text-center shadow-sm"
              >
                <span className="text-sm font-medium text-gray-700">{food}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Transportation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center">
          🚇 Transportation Plan
        </h3>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 border-l-4 border-purple-500">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Mode:</p>
              <p className="font-bold text-gray-800">{plannerData.transportation?.mode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Est. Cost:</p>
              <p className="font-bold text-green-600">{plannerData.transportation?.estimatedCost}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">Duration:</p>
            <p className="font-bold text-gray-800">{plannerData.transportation?.duration}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-purple-600 mb-2">💡 Tips:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {plannerData.transportation?.tips?.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
          ⏰ Your Timeline
        </h3>
        <div className="space-y-3">
          {plannerData.timeline?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-blue-400"
            >
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {item.time.split(':')[0]}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.activity}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          📱 Save to Phone
        </button>
        <p className="text-sm text-gray-500 mt-4">
          🙏 Subho Bijoya! Have a wonderful Durga Puja!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Results;
