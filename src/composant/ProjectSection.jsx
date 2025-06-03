import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Eye } from 'lucide-react';

const ProjectSection = ({isdark}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "RH Management Dashboard",
      description: "Modern React dashboard with real-time analytics, inventory management, and beautiful data visualizations.",
      tech: ["React", "Laravel", "Tailwind", "Inertia.js","Vite"],
      image: "../../public/image.png",
      liveDemo: "https://dashboard-demo.vercel.app",
      github: "https://github.com/username/ecommerce-dashboard",
      status: "Live"
    },
    {
      id: 2,
      title: "Ecommerce Marketplace & Dashboard",
      description: "Intelligent chatbot interface with natural language processing and beautiful conversation UI.",
      tech: ["React", "Laravel", "Tailwind", "Inertia.js", "Vite"],
      image: "../../public/image2.png",
      liveDemo: "https://ai-chat-demo.herokuapp.com",
      github: "https://github.com/username/ai-chat",
      status: "Live"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and team collaboration features.",
      tech: ["React", "Vite", "CSS"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveDemo: "https://zouhairdev49.github.io/To-Do-App/",
      github: "https://github.com/ZouhairDev49/To-Do-App",
      status: "Live"
    },
    {
      id: 4,
      title: "Weather Analytics Platform",
      description: "Advanced weather forecasting platform with interactive maps and detailed climate analytics.",
      tech: ["React", "D3.js", "Weather API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      liveDemo: "https://weather-analytics.surge.sh",
      github: "https://github.com/username/weather-platform",
      status: "Coming Soon"
    },
    {
      id: 5,
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading bot with machine learning algorithms and risk management.",
      tech: ["Python", "React", "TensorFlow", "Binance API"],
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=500&h=300&fit=crop",
      liveDemo: "https://crypto-bot-dashboard.vercel.app",
      github: "https://github.com/username/crypto-bot",
      status: "Coming Soon"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics dashboard with sentiment analysis and engagement metrics.",
      tech: ["Vue.js", "Python", "AWS", "Redis"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop",
      liveDemo: "https://social-analytics.netlify.app",
      github: "https://github.com/username/social-analytics",
      status: "Coming Soon"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${isdark ? "from-black via-purple-900 to-black" : "bg-white"} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 font-medium">Featured Projects</span>
          </div> */}
          <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${isdark ? "from-white via-purple-300 to-purple-500" : "from-gray-900 to-blue-600"} bg-clip-text text-transparent mb-6`}>
            My Portfolio
          </h1>
          <p className={`text-xl ${isdark ? "text-white/70" : "text-gray-800"} max-w-2xl mx-auto leading-relaxed`}>
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-lg border ${isdark ? "border-white/10" : "border-gray-300"} rounded-2xl overflow-hidden  hover:border-purple-500/50 transition-all duration-500 hover:scale-105 `}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : project.status === 'Beta'
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300
                 ${
                  hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2  bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${isdark ? "text-white" : "text-gray-900"} mb-3 ${isdark ? "group-hover:text-purple-300" : "group-hover:text-blue-300"} transition-colors duration-200`}>
                  {project.title}
                </h3>
                <p className={` ${isdark ? "text-white/70" : "text-gray-800"} text-sm leading-relaxed mb-4`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${isdark ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-300"} rounded-full text-xs font-medium border ${isdark ? "border-purple-500/30" : "border-blue-500/30"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${isdark ? "text-purple-400" : "text-blue-500"} hover:text-purple-300 text-sm font-medium transition-colors duration-200`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${isdark ? "text-white/60" : "text-blue-500"} hover:text-white text-sm font-medium transition-colors duration-200`}
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>

              {/* Animated Border */}
              {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse" 
                     style={{padding: '1px', background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6) padding-box'}} />
              </div> */}
            </div>
          ))}
        </div>

     
      </div>
    </div>
  );
};

export default ProjectSection;