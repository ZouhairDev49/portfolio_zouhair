import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  Award,
  ChevronDown,
  Database,
  Globe,
  Zap,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import Experience from "./Experience";
import Skills from "./Skills";
import ContactSection from "./Contact";
import Footer from "./Footer";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const StarsBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
      const generateStars = () => {
        const newStars = [];
        for (let i = 0; i < 150; i++) {
          newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: Math.random() * 3,
            animationDuration: Math.random() * 3 + 2,
          });
        }
        setStars(newStars);
      };

      generateStars();
    }, []);

    if (!isDarkMode) return null;

    return (
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        {/* Shooting stars */}
        <div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-70"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "5s", animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "7s", animationDuration: "5s" }}
        />
      </div>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Full Stack Developer",
    // 'Backend Specialist',
    // 'Frontend Expert',
    // 'Web Architect',
    // 'Problem Solver'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentFullText = texts[currentIndex];

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping, texts]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const skills = [
    { icon: Code, name: "Frontend", color: "from-purple-500 to-purple-700" },
    { icon: Database, name: "Backend", color: "from-purple-600 to-purple-800" },
    { icon: Globe, name: "Full Stack", color: "from-purple-400 to-purple-600" },
    { icon: Zap, name: "Performance", color: "from-purple-700 to-purple-900" },
  ];

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsOpen(false);
  };

  const themeClasses = {
    background: isDarkMode ? "bg-black" : "bg-white",
    navbarBg: isDarkMode ? "bg-black/90" : "bg-white/90",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    border: isDarkMode ? "border-purple-500/20" : "border-blue-500/20",
    gradient: isDarkMode
      ? "from-purple-600 to-purple-800"
      : "from-blue-600 to-blue-800",
    gradientHover: isDarkMode
      ? "hover:from-purple-700 hover:to-purple-900"
      : "hover:from-blue-700 hover:to-blue-900",
    cardBg: isDarkMode ? "bg-purple-500/10" : "bg-blue-500/10",
    hoverBg: isDarkMode ? "hover:bg-purple-500/10" : "hover:bg-blue-500/10",
  };

  return (
    <div
      className={`min-h-screen bg-black transition-colors duration-500 ease-in-out ${themeClasses.background}`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? isDarkMode
              ? "bg-gray-950/80 backdrop-blur-2xl shadow-2xl border-b border-purple-500/20"
              : "bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="group cursor-pointer">
              <div className="flex-shrink-0 group">
                <span
                  className={`text-xl font-bold bg-gradient-to-r ${
                    isDarkMode
                      ? "from-white to-purple-300"
                      : "from-gray-900 to-blue-600"
                  } from-white to-purple-300 bg-clip-text text-transparent`}
                >
                  {isDarkMode ? (
                    <img
                      src="https://s3.ca-central-1.amazonaws.com/logojoy/logos/222255935/noBgColor.png?20426.799999952316"
                      alt="jjjj"
                      className="w-20"
                    />
                  ) : (
                    <img
                      src="https://s3.ca-central-1.amazonaws.com/logojoy/logos/222255935/noBgBlack.png?9659.300000011921"
                      alt="jjjj"
                      className="w-20"
                    />
                  )}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={`group relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-500 transform hover:scale-105 ${
                      isActive
                        ? isDarkMode
                          ? "text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-xl shadow-purple-500/30"
                          : "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl shadow-blue-500/30"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                    }`}
                  >
                    <div className="flex items-center space-x-2 relative z-10">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {!isActive && (
                      <div
                        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20"
                            : "bg-gradient-to-r from-blue-600/10 to-purple-600/10"
                        }`}
                      />
                    )}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-50 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
              href="#contact"
                // onClick={() => handleNavClick("#contact", "contact")}
                className={`relative overflow-hidden px-8 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40"
                }`}
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <button
                onClick={toggleTheme}
                className={`p-3 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-12 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-700/50"
                    : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-700 hover:text-gray-900 border border-gray-300/50"
                } backdrop-blur-sm`}
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 transition-transform duration-500" />
                )}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/50 text-gray-300 hover:text-white"
                    : "bg-gray-100/50 text-gray-700 hover:text-gray-900"
                }`}
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {isOpen ? (
                  <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-700 ease-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mx-4 mb-4 rounded-3xl backdrop-blur-2xl border shadow-2xl ${
              isDarkMode
                ? "bg-gray-950/95 border-purple-500/20"
                : "bg-white/95 border-gray-200/50"
            }`}
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-500 transform hover:scale-105 ${
                      isActive
                        ? isDarkMode
                          ? "text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/30"
                          : "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}

              <div className="pt-4">
                <button
                  onClick={() => handleNavClick("#contact", "contact")}
                  className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  } hover:shadow-xl`}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen  overflow-hidden">
        <StarsBackground />
        {/* Animated Background Elements */}
        {isDarkMode && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        )}

        {/* Light mode background elements */}
        {!isDarkMode && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        )}
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 mt-20 lg:px-8">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-44 items-center w-full">
              {/* Left Side - Content */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {/* Greeting */}
                <div className="mb-6">
                  <span
                    className={`inline-block px-4 py-2 ${
                      themeClasses.cardBg
                    } backdrop-blur-sm rounded-full ${
                      isDarkMode ? "text-purple-300" : "text-blue-600"
                    } text-sm font-medium ${themeClasses.border} border`}
                  >
                    👋 Hello, I'm
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ">
                  <span
                    className={`bg-gradient-to-r ${
                      isDarkMode
                        ? "from-white via-purple-100 to-purple-200"
                        : "from-gray-900 via-gray-700 to-gray-800"
                    } bg-clip-text text-transparent me-3`}
                  >
                    Zouhair
                  </span>
                  <span
                    className={`bg-gradient-to-r ${
                      isDarkMode
                        ? "from-purple-400 via-purple-500 to-purple-600"
                        : "from-blue-500 via-blue-600 to-blue-700"
                    } bg-clip-text text-transparent`}
                  >
                    <i>EDDOUBAJI</i>
                  </span>
                </h1>

                {/* Typing Animation */}
                <div className="mb-8">
                  <h2
                    className={`text-xl md:text-2xl lg:text-3xl ${themeClasses.textSecondary} font-light`}
                  >
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-blue-600"
                      }`}
                    >
                      I'm a{" "}
                    </span>
                    <span
                      className={`bg-gradient-to-r ${
                        isDarkMode
                          ? "from-purple-400 to-purple-600"
                          : "from-blue-500 to-blue-700"
                      } bg-clip-text text-transparent font-semibold`}
                    >
                      {currentText}
                    </span>
                    <span
                      className={`animate-pulse ${
                        isDarkMode ? "text-purple-400" : "text-blue-600"
                      }`}
                    >
                      |
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p
                  className={`text-lg ${themeClasses.textMuted} mb-10 leading-relaxed`}
                >
                  Passionate about creating exceptional digital experiences
                  through clean code, innovative solutions, and cutting-edge
                  technologies. Let's build something amazing together.
                </p>

                {/* Skills Icons */}
                <div className="flex space-x-4 mb-10">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`group relative p-3 bg-gradient-to-r ${skill.color} rounded-xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span
                            className={`text-xs ${themeClasses.textMuted} whitespace-nowrap`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#contact"
                    className={`cursor-pointer group relative px-8 py-4 bg-gradient-to-r ${themeClasses.gradient} text-white rounded-2xl font-semibold transition-all duration-300 ${themeClasses.gradientHover} hover:shadow-2xl hover:-translate-y-1 transform`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Get In Touch</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </a>

                  <a
                    href="../../public/ZE.pdf"
                    download
                    className={`cursor-pointer group px-8 py-4 border-2 ${
                      isDarkMode ? "border-purple-500/50" : "border-blue-500/50"
                    } ${
                      themeClasses.text
                    } rounded-2xl font-semibold transition-all duration-300 ${
                      isDarkMode
                        ? "hover:border-purple-400 hover:bg-purple-500/10"
                        : "hover:border-blue-400 hover:bg-blue-500/10"
                    } hover:-translate-y-1 transform backdrop-blur-sm`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download CV</span>
                    </span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/ZouhairDev49",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/zouhair-eddoubaji/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:zouhair.eddoubaji497@gmail.com",
                      label: "Email",
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`group p-3 ${themeClasses.cardBg} backdrop-blur-sm rounded-xl ${themeClasses.border} border transition-all duration-300 ${themeClasses.hoverBg} hover:-translate-y-1 transform`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon
                          className={`w-6 h-6 ${themeClasses.textMuted} group-hover:${themeClasses.text} transition-colors duration-300`}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Developer Visual */}
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative">
                  {/* Main Code Editor Container */}
                  <div
                    className={`bg-gradient-to-br ${
                      isDarkMode
                        ? "from-purple-500/10 to-purple-800/10"
                        : "from-blue-500/10 to-blue-800/10"
                    } backdrop-blur-sm rounded-3xl ${
                      themeClasses.border
                    } border p-6 shadow-2xl`}
                  >
                    {/* Code Editor Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span
                        className={`${themeClasses.textMuted} text-sm font-mono`}
                      >
                        portfolio.js
                      </span>
                    </div>

                    {/* Code Content */}
                    <div className="font-mono text-sm space-y-3">
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        }`}
                      >
                        <span className={`${themeClasses.textMuted}`}>01</span>{" "}
                        <span className="text-blue-400">const</span>{" "}
                        <span className={`${themeClasses.text}`}>
                          developer
                        </span>{" "}
                        <span className={`${themeClasses.textMuted}`}>=</span>{" "}
                        <span className="text-yellow-400">{"{"}</span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        }`}
                      >
                        <span className="text-gray-500">02</span>{" "}
                        <span className="text-blue-300">name</span>
                        <span className="text-gray-500">:</span>{" "}
                        <span className="text-green-400">
                          'Zouhair Eddoubaji'
                        </span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        } ml-4`}
                      >
                        <span className="text-gray-500">03</span>{" "}
                        <span className="text-blue-300">role</span>
                        <span className="text-gray-500">:</span>{" "}
                        <span className="text-green-400">
                          'Full Stack Developer'
                        </span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        } ml-4`}
                      >
                        <span className="text-gray-500">04</span>{" "}
                        <span className="text-blue-300">skills</span>
                        <span className="text-gray-500">:</span>{" "}
                        <span className="text-yellow-400">
                          [ 'React', 'laravel', 'javascript', 'typescript',
                          'PHP', 'Html', 'Css', 'Bootstrap', 'Python' ]
                        </span>
                        <span className="text-gray-500">,</span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        } ml-4`}
                      >
                        <span className="text-gray-500">05</span>{" "}
                        <span className="text-blue-300">passion</span>
                        <span className="text-gray-500">:</span>{" "}
                        <span className="text-green-400">
                          'Creating Amazing Solutions'
                        </span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        }`}
                      >
                        <span className="text-gray-500">06</span>{" "}
                        <span className="text-yellow-400">{"}"}</span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        } mt-4`}
                      >
                        <span className="text-gray-500">07</span>{" "}
                        <span className="text-blue-300">From</span>
                        <span className="text-gray-500">:</span>{" "}
                        <span className="text-green-400">
                          'Morocco - Casablanca'
                        </span>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        }`}
                      >
                        <span className="text-gray-500">08</span>{" "}
                        <span className="text-blue-400">export</span>{" "}
                        <span className="text-blue-400">default</span>{" "}
                        <span className={`${themeClasses.text}`}>
                          developer
                        </span>
                        <span className="text-gray-500">;</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${
                      isDarkMode
                        ? "from-purple-500 to-purple-700"
                        : "from-blue-500 to-blue-700"
                    } rounded-2xl flex items-center justify-center shadow-xl animate-pulse`}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </div>

                  <div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${
                      isDarkMode
                        ? "from-purple-600 to-purple-800"
                        : "from-blue-600 to-blue-800"
                    } rounded-xl flex items-center justify-center shadow-xl animate-pulse delay-1000`}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </div>

                  {/* Floating Code Snippets */}
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-2 border border-purple-500/30 animate-float">
                      <span className="text-purple-300 font-mono text-xs">
                        {"<div>"}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-1/4 -left-8">
                    <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-2 border border-purple-600/30 animate-float delay-1000">
                      <span className="text-purple-300 font-mono text-xs">
                        {"{ }"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-20px) rotate(5deg);
            }
            50% {
              transform: translateY(-10px) rotate(-5deg);
            }
            75% {
              transform: translateY(-15px) rotate(3deg);
            }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>
      </section>
      <section
        id="about"
        className="min-h-screen bg-black relative overflow-hidden"
      >
        <StarsBackground />
        <AboutSection isdark={isDarkMode} />
      </section>
      <section
        id="projects"
        className="min-h-screen bg-black relative overflow-hidden"
      >
        <StarsBackground />
        <ProjectSection isdark={isDarkMode} />
      </section>
      <section
        id="skills"
        className="min-h-screen bg-black relative overflow-hidden"
      >
        <StarsBackground />
        <Skills isdark={isDarkMode} />
      </section>
      <section
        id="experience"
        className="min-h-screen bg-black relative overflow-hidden"
      >
        <StarsBackground />
        <Experience isdark={isDarkMode} />
      </section>
      <section
        id="contact"
        className="min-h-screen bg-black relative overflow-hidden"
      >
        <StarsBackground />
        <ContactSection isdark={isDarkMode} />
      </section>
      <section className=" bg-black relative overflow-hidden">
        <StarsBackground />
        <Footer isdark={isDarkMode} />
      </section>
    </div>
  );
};

export default HeroSection;
