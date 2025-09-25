import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PlannerForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    location: '',
    preferences: 'traditional',
    transport: 'metro',
    duration: '6',
    foodType: 'vegetarian',
    budget: 'medium',
    startTime: '09:00'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">
          🎭 Plan Your Perfect Day
        </h2>
        <p className="text-gray-600">
          Tell us your preferences and we'll create the ultimate Durga Puja experience!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Location Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-bold text-gray-700 mb-2">
            📍 Starting Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., Salt Lake, Park Street, Esplanade"
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            required
          />
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-bold text-gray-700 mb-2">
            🎨 Pandal Preference
          </label>
          <select
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all bg-white"
          >
            <option value="traditional">Traditional & Classic</option>
            <option value="modern">Modern & Contemporary</option>
            <option value="eco">Eco-friendly</option>
            <option value="artistic">Artistic & Creative</option>
            <option value="all">Mix of Everything</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-4"
        >
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl'
            } text-white`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Creating Your Perfect Plan...</span>
              </div>
            ) : (
              <>
                🧿 Generate My Durga Puja Plan! 🎆
              </>
            )}
          </button>
        </motion.div>
      </form>

      {/* Fun Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-l-4 border-yellow-500"
      >
        <h3 className="font-bold text-yellow-800 mb-2">💡 Pro Tips:</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Start early to avoid crowds</li>
          <li>• Carry a portable charger</li>
          <li>• Wear comfortable shoes</li>
          <li>• Stay hydrated and carry water</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default PlannerForm;
