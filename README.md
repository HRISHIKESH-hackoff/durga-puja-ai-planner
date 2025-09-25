# 🎭 Durga Puja AI Planner

**AI-powered vibrant Durga Puja pandal hopping planner: plan your route, food, transport & enjoy the ultimate festival experience!**

![Durga Puja](https://img.shields.io/badge/Festival-Durga%20Puja-orange) ![Next.js](https://img.shields.io/badge/Next.js-13-blue) ![React](https://img.shields.io/badge/React-18-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-green)

## ✨ Features

### 🗺️ Smart Route Planning
- **AI-optimized routes** based on distance, crowd density, and your preferences
- **Real-time optimization** for the best pandal hopping experience
- **Multiple transport options** including metro, bus, walking, and private vehicle

### 🎨 Personalized Experience
- **Theme-based filtering**: Traditional, Modern, Eco-friendly, Artistic
- **Food preference matching**: Vegetarian, Non-vegetarian, Street food, Sweets
- **Budget-conscious planning**: From budget-friendly to luxury experiences
- **Time-based recommendations**: Optimal visit times to avoid crowds

### 🍽️ Food Recommendations
- **Authentic Bengali cuisine** suggestions along your route
- **Street food hotspots** near popular pandals
- **Traditional prasad** and bhog timings
- **Sweet shop recommendations** for the perfect Durga Puja treats

### 🚇 Transportation Guide
- **Metro route planning** with station information
- **Bus route suggestions** for comprehensive coverage
- **Walking directions** between nearby pandals
- **Ride-sharing integration** for distant locations

### 📱 Interactive UI
- **Beautiful vibrant design** with festival-themed colors
- **Smooth animations** using Framer Motion
- **Responsive layout** for all devices
- **Real-time loading states** and user feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HRISHIKESH-hackoff/durga-puja-ai-planner.git
   cd durga-puja-ai-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 📁 Project Structure

```
durga-puja-ai-planner/
├── components/
│   ├── PlannerForm.jsx      # Main planning form component
│   └── Results.jsx          # Results display component
├── data/
│   └── pandals.json         # Pandal database with details
├── pages/
│   └── index.js             # Main application page
├── public/
│   └── images/              # Image assets
└── README.md               # Project documentation
```

## 🎯 Usage

1. **Enter your starting location** (e.g., Salt Lake, Park Street, Esplanade)
2. **Select your preferences**:
   - Pandal theme preference
   - Transportation mode
   - Duration of visit
   - Food preferences
   - Budget range
   - Start time
3. **Click "Generate My Durga Puja Plan!"**
4. **Get your personalized itinerary** with:
   - Optimized route
   - Food recommendations
   - Transportation details
   - Timeline schedule

## 🎨 Customization

### Adding New Pandals
Edit `data/pandals.json` to add new pandal information:
```json
{
  "id": 7,
  "name": "New Pandal Name",
  "location": "Area, Kolkata",
  "theme": "Theme Description",
  "coordinates": { "lat": 22.xxxx, "lng": 88.xxxx },
  "rating": 4.5,
  "crowdLevel": "Medium",
  "bestTimeToVisit": "Morning (8-11 AM)",
  "specialFeatures": ["Feature 1", "Feature 2"],
  "imageUrl": "/images/pandals/pandal-name.jpg",
  "description": "Detailed description"
}
```

### Styling
The project uses **TailwindCSS** for styling. Modify classes in components for custom designs.

## 🔧 Technologies Used

- **Frontend**: Next.js, React.js
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: JavaScript/JSX
- **Package Manager**: npm/yarn

## 📱 Features in Development

- [ ] Real-time crowd density API integration
- [ ] Weather-based recommendations
- [ ] Social sharing functionality
- [ ] Offline mode with cached data
- [ ] Multi-language support (Bengali, Hindi)
- [ ] Photo gallery integration
- [ ] Review and rating system

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Durga Puja Committees** of Kolkata for their incredible cultural contributions
- **Bengali Community** for keeping traditions alive
- **Open Source Community** for amazing tools and libraries

## 📞 Contact

**Developer**: HRISHIKESH-hackoff  
**GitHub**: [https://github.com/HRISHIKESH-hackoff](https://github.com/HRISHIKESH-hackoff)

---

**শুভ দুর্গা পুজো! (Subho Durga Pujo!)**  
*Made with ❤️ for Durga Puja enthusiasts*

![Durga Puja Celebration](public/images/durgapuja1.jpg)
