import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Cloud } from 'lucide-react';

const Skills = ({isdark}) => {      
  const [activeCategory, setActiveCategory] = useState( 'frontend');
  const [animatedCubes, setAnimatedCubes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedCubes(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "jQuery", icon: "💛" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PHP", icon: "🐘" },
        { name: "Laravel", icon: "🔥" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "MySQL", icon: "🗄️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: "🔧" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Postman", icon: "📮" },
        { name: "VS Code", icon: "💻" },
        { name: "Firebase", icon: "🔥" }
      ]
    }
  };

  const currentSkills = skillCategories[activeCategory];

  return (
    <div className={`min-h-screen ${isdark ? "bg-gradient-to-br from-black via-purple-900 to-black" : "bg-white"} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${isdark ? "from-white via-purple-300 to-purple-500" : "from-gray-900 to-blue-600"} bg-clip-text text-transparent mb-6`}>
            Web Development Skills
          </h1>
          <p className={`text-xl ${isdark ? "text-white/70" : "text-gray-800"} max-w-2xl mx-auto leading-relaxed`}>
            Specialized in modern web technologies and full-stack development
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl transform scale-105`
                  : `${isdark ? "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20" : "bg-gray-100/5 text-gray-800/70 border border-gray-200 hover:text-gray-800 hover:bg-gray-100/10 border border-gray-100/10 hover:border-gray-100/20"}`
              }`}
            >
              <div className="relative z-10 flex items-center gap-3">
                {category.icon}
                <span className="font-medium">{category.title}</span>
              </div>
              {activeCategory !== key && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              )}
            </button>
          ))}
        </div>
        {/* Skills Cube Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${currentSkills.color} bg-clip-text text-transparent mb-4`}>
              {currentSkills.title}
            </h2>
            <p className={`text-lg ${isdark ? "text-white/60" : "text-gray-800"}`}>Technologies I work with</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {currentSkills.skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative transform transition-all duration-500 hover:scale-110 cursor-pointer ${
                  animatedCubes ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Cube Container */}
                <div className="relative w-20 h-20 mx-auto mb-3">
                  {/* Main Cube */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Cube Shadow/3D Effect */}
                  <div className={`absolute -bottom-1 -right-1 w-full h-full bg-gradient-to-br ${currentSkills.color} rounded-xl opacity-20 -z-10 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300`}></div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSkills.color} rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 -z-10`}></div>
                </div>
                
                {/* Skill Name */}
                <div className="text-center">
                  <h3 className={`text-sm font-semibold ${isdark ? "text-white/90" : "text-black/90"} group-hover:text-white transition-colors duration-300`}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Skills;