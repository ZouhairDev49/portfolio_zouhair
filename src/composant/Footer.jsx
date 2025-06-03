import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Heart,
  ArrowUp,
  Send,
  Globe,
  Code,
  Coffee
} from 'lucide-react';

const Footer = ({isdark}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/ZouhairDev49', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/zouhair-eddoubaji/', color: 'hover:text-blue-400' },
    // { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/Zouhaireddoubaji', color: 'hover:text-sky-400' },
    // { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#', color: 'hover:text-pink-400' }
  ];

  const quickLinks = [
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Contact', url: '#contact' }
  ];

  const services = [
    { name: 'Web Development', url: '#' },
    // { name: 'UI/UX Design', url: '#' },
    // { name: 'API Development', url: '#' },
    // { name: 'Consulting', url: '#' },
    // { name: 'Code Review', url: '#' },
    // { name: 'Mentoring', url: '#' }
  ];

  return (
    <footer className={` ${isdark ? "bg-gradient-to-br from-black via-purple-900 to-black border-t border-white/10" : "bg-white border-t border-gray-200" } `}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 ${isdark ? "bg-purple-500/10" : "bg-blue-500/10"} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isdark ? "bg-blue-500/10" : "bg-purple-500/10"} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className={`text-2xl font-bold ${isdark ? "bg-gradient-to-r from-white via-purple-300 to-purple-500" : "bg-gradient-to-r from-gray-900 to-blue-600"} bg-clip-text text-transparent mb-3`}>
                EDDOUBAJI Zouhair 
              </h3>
              <p className={`leading-relaxed ${isdark ? "text-white/70" : "text-gray-900/70"}`}>
                Passionate full-stack developer crafting digital experiences with modern web technologies. 
                Let's build something amazing together.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${isdark ? "text-white/70" : "text-gray-900/70"} hover:text-white transition-colors group`}>
                <Mail className={`w-4 h-4 ${isdark ? "text-purple-400" : "text-blue-400"} group-hover:text-purple-300`} />
                <span className="text-sm">zouhaireddouabji497@gmail.com</span>
              </div>
              <div className={`flex items-center gap-3 ${isdark ? "text-white/70" : "text-gray-900/70"} hover:text-white transition-colors group`}>
                <Phone className={`w-4 h-4 ${isdark ? "text-purple-400" : "text-blue-400"} group-hover:text-purple-300`} />
                <span className="text-sm">+212 7 73 71 09 07</span>
              </div>
              <div className={`flex items-center gap-3 ${isdark ? "text-white/70" : "text-gray-900/70"} hover:text-white transition-colors group`}>
                <MapPin className={`w-4 h-4 ${isdark ? "text-purple-400" : "text-blue-400"} group-hover:text-purple-300`} />
                <span className="text-sm">CASABLANCA , MA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold ${isdark ? "text-white" : "text-gray-900"} mb-6 flex items-center gap-2`}>
              <Globe className={`w-5 h-5 ${isdark ? "text-purple-400" : "text-blue-400"}`} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className={`${isdark ? "text-white/70" : "text-gray-900/70"} ${isdark ? "hover:text-white" : "hover:text-gray-900"} hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group`}
                  >
                    <span className={`w-1 h-1 ${isdark ? "bg-purple-400" : "bg-blue-400"} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-semibold ${isdark ? "text-white" : "text-gray-900"} mb-6 flex items-center gap-2`}>
              <Code className={`w-5 h-5 ${isdark ? "text-purple-400" : "text-blue-400"}`} />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className={`${isdark ? "text-white/70" : "text-gray-900/70"} ${isdark ? "hover:text-white" : "hover:text-gray-900"} hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group`}
                  >
                    <span className={`w-1 h-1 ${isdark ? "bg-purple-400" : "bg-blue-400"} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-lg font-semibold ${isdark ? "text-white" : "text-gray-900"} mb-6 flex items-center gap-2`}>
              <Coffee className={`w-5 h-5 ${isdark ? "text-purple-400" : "text-blue-400"}`} />
              Stay Updated
            </h4>
            <p className={`text-sm mb-4 ${isdark ? "text-white/70" : "text-gray-900/70"}`}>
              Get the latest updates on web development trends and my new projects.
            </p>
            
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 ${isdark ? "bg-white/5 border border-white/10" : "bg-gray-100 border border-gray-200"} rounded-xl ${isdark ? "text-white" : "text-gray-900"} ${isdark ? "placeholder-white/50" : "placeholder-gray-500/50"} focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300`}
                />
                <button
                  onClick={handleSubscribe}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 ${isdark ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gradient-to-r from-blue-500 to-cyan-500"} rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group`}
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className={`${isdark ? "text-white/70" : "text-gray-900/70"} text-sm mr-2`}>Follow me:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`p-3 bg-white/5 border border-white/10 rounded-xl ${isdark ? "text-white/70" : "text-gray-900/70"} ${social.color} hover:bg-white/10 ${isdark ? "hover:border-white/20" : "hover:border-gray-200"} hover:scale-110 transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={`p-3 ${isdark ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gradient-to-r from-blue-500 to-cyan-500"} rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-110 transition-all duration-300 group`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Copyright */}
          <div className={`mt-8 pt-6 border-t border-white/5 text-center`}>
            <p className={` ${isdark ? "text-white/50" : "text-gray-900/50"} text-sm flex items-center justify-center gap-2 flex-wrap`}>
              <span>© 2025 EDDOUBAJI. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
              <span>All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;