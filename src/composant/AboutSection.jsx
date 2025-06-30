import React from "react";
import {
  Code,
  Database,
  Globe,
  Zap,
  Coffee,
  Sparkles,
  Calendar,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";

const AboutSection = ({ isdark }) => {
  // console.log(props.isdark);

  const experiences = [
    {
      title: "Experience",
      icon: <Calendar className="w-6 h-6" />,
      value: "1+",
      subtitle: "Years of Development",
      description: "Professional software development experience",
    },
    {
      title: "Projects",
      icon: <Code className="w-6 h-6" />,
      value: "15+",
      subtitle: "Completed Projects",
      description: "Successful projects delivered on time",
    },
    {
      title: "Technologies",
      icon: <Zap className="w-6 h-6" />,
      value: "8+",
      subtitle: "Tech Stack Mastery",
      description: "Modern frameworks and languages",
    },
    {
      title: "Passion",
      icon: <Lightbulb className="w-6 h-6" />,
      value: "∞",
      subtitle: "Learning & Growing",
      description: "Continuous improvement mindset",
    },
  ];

  return (
    <section
      className={` ${
        isdark
          ? "bg-gradient-to-br from-black via-purple-900 to-black text-white"
          : "bg-white"
      }   overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-72 h-72 ${
            isdark ? "bg-purple-500" : "bg-blue-500"
          } rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}
        ></div>
        <div
          className={`absolute top-40 right-10 w-96 h-96 ${
            isdark ? "bg-white" : "bg-gray-100"
          } rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute bottom-20 left-1/3 w-80 h-80 ${
            isdark ? "bg-purple-400" : "bg-blue-400"
          } rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500`}
        ></div>
      </div>

      <div className=" z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h1
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${
                isdark
                  ? "from-white via-purple-200 to-purple-400"
                  : "from-gray-900 to-blue-600"
              } bg-clip-text text-transparent animate-pulse`}
            >
              EDDOUBAJI ZOUHAIR
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
              <p
                className={`text-xl md:text-2xl ${
                  isdark ? "text-purple-200" : "text-gray-800"
                } font-light tracking-wide`}
              >
                Full Stack Developer
              </p>
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
            </div>
          </div>
        </div>

        {/* About Me Description */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-purple-400/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:transform hover:scale-105">
            <h2
              className={`text-3xl font-bold mb-6 text-transparent bg-gradient-to-r ${
                isdark ? "from-purple-400 to-white" : " from-blue-700 to-white"
              } bg-clip-text text-center`}
            >
              About Me
            </h2>
            <div
              className={`space-y-6 text-lg leading-relaxed ${
                isdark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <p>
                Hello! I'm Zouhair Eddoubaji, a passionate Full Stack Developer
                focused on building innovative web applications and digital
                solutions. My journey in software development began with a deep
                curiosity about how things work behind the scenes, which
                naturally evolved into a commitment to creating scalable,
                user-centric applications.
              </p>
              <p>
                I specialize in modern web technologies including React,
                Laravel, and various JavaScript frameworks. My expertise spans
                both frontend and backend development, allowing me to create
                comprehensive solutions from database design to pixel-perfect
                user interfaces. I believe in writing clean, maintainable code
                and following best practices to ensure optimal performance and
                scalability.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always eager to take on new
                challenges and collaborate with like-minded professionals to
                bring innovative ideas to life.
              </p>
              <div
                className={`flex items-center justify-center space-x-2 mt-6 ${
                  isdark ? "text-purple-300" : "text-blue-500"
                }`}
              >
                <Coffee className="w-5 h-5" />
                <span className="italic">
                  Fueled by coffee and driven by passion for excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-purple-400/20 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${
                    isdark
                      ? "from-purple-500 to-purple-700"
                      : "from-blue-500 to-blue-700"
                  } rounded-full flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
              </div>
              <div
                className={`text-3xl font-bold ${
                  isdark ? "text-purple-400" : "text-blue-400"
                } mb-2`}
              >
                {item.value}
              </div>
              <div
                className={`text-lg font-semibold ${
                  isdark ? "text-white" : "text-gray-800"
                } mb-1`}
              >
                {item.subtitle}
              </div>
              <div
                className={`text-sm ${
                  isdark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
