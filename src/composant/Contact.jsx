import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = ({isdark}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setFormStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "zouhaireddoubaji497 @gmail.com",
      description: "Send me an email anytime",
      href: "mailto:zouhaireddoubaji497@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+212 7 73 71 09 07",
      description: "Mon-Fri from 9am to 6pm",
      href: "tel:+212 7 73 71 09 07",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Casablanca, MA",
      description: "Available for remote work",
      href: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+212 7 73 71 09 07",
      description: "Quick messages welcome",
      // href: "https://wa.me/15551234567",
      color: "from-green-400 to-green-600"
    }
  ];



  return (
    <div className={`min-h-screen ${isdark ? "bg-gradient-to-br from-black via-purple-900 to-black" : "bg-white"} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Send className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 font-medium">Get In Touch</span>
          </div> */}
          <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${isdark ? "from-white via-purple-300 to-purple-500" : "from-gray-900 to-blue-600"} bg-clip-text text-transparent mb-6`}>
            Let's Connect
          </h1>
          <p className={`text-xl ${isdark ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto leading-relaxed`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl font-bold ${isdark ? "text-white" : "text-blue-900"} mb-6`}>Get in Touch</h2>
              <p className={`mb-8 leading-relaxed ${isdark ? "text-white/70" : "text-black/70"}`}>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a question, want to discuss a project, or just want to say hello, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={`block group ${isdark ? "bg-white/5" : "bg-gray-100"} backdrop-blur-lg border ${isdark ? "border-white/10" : "border-gray-200"} rounded-2xl p-6 ${isdark ? "hover:border-purple-500/50" : "hover:border-blue-500/50"} transition-all duration-300 hover:scale-105 hover:shadow-xl ${isdark ? "hover:shadow-purple-500/20" : "hover:shadow-blue-500/20"}`}
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} ${isdark ? "text-white" : "text-gray-900"}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold ${isdark ? "text-white" : "text-gray-900"} mb-1 ${isdark ? "group-hover:text-purple-300" : "group-hover:text-blue-300"} transition-colors`}>
                        {method.title}
                      </h3>
                      <p className={`font-medium mb-1 ${isdark ? "text-purple-300" : "text-blue-300"}`}>{method.value}</p>
                      <p className={`${isdark ? "text-white/60" : "text-black/60"} text-sm`}>{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={` ${isdark ? "bg-white/5" : "bg-gray-100"} backdrop-blur-lg border border-white/10 rounded-2xl p-8`}>
            <h2 className={`text-2xl font-bold ${isdark ? "text-white" : "text-blue-900"} mb-6`}>Send Message</h2>

            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block ${isdark ? "text-white/80" : "text-gray-900"} text-sm font-medium mb-2`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${isdark ? "bg-white/5 border border-gray/20" : "bg-gray-100 border border-gray-200"} rounded-xl px-4 py-3 ${isdark ? "text-white" : "text-gray-900"} ${isdark ? "placeholder-white/50" : "placeholder-gray-500/50"} ${isdark ? "focus:border-purple-500" : "focus:border-blue-500"} focus:outline-none focus:ring-2 ${isdark ? "focus:ring-purple-500/20" : "focus:ring-blue-500/20"} transition-all duration-200`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={`block ${isdark ? "text-white/80" : "text-gray-900"} text-sm font-medium mb-2`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${isdark ? "bg-white/5 border border-gray/20" : "bg-gray-100 border border-gray-200"} rounded-xl px-4 py-3 ${isdark ? "text-white" : "text-gray-900"} ${isdark ? "placeholder-white/50" : "placeholder-gray-500/50"} ${isdark ? "focus:border-purple-500" : "focus:border-blue-500"} focus:outline-none focus:ring-2 ${isdark ? "focus:ring-purple-500/20" : "focus:ring-blue-500/20"} transition-all duration-200`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`block ${isdark ? "text-white/80" : "text-gray-900"} text-sm font-medium mb-2`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isdark ? "bg-white/5 border border-white/20" : "bg-gray-100 border border-gray-200"} rounded-xl px-4 py-3 ${isdark ? "text-white" : "text-gray-900"} ${isdark ? "placeholder-white/50" : "placeholder-gray-500/50"} ${isdark ? "focus:border-purple-500" : "focus:border-blue-500"} focus:outline-none focus:ring-2 ${isdark ? "focus:ring-purple-500/20" : "focus:ring-blue-500/20"} transition-all duration-200`}
                  placeholder="Project Inquiry"
                />
              </div>


              {/* Message */}
              <div>
                <label className={`block ${isdark ? "text-white/80" : "text-gray-900"} text-sm font-medium mb-2`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className={`w-full ${isdark ? "bg-white/5 border border-white/20" : "bg-gray-100 border border-gray-200"} rounded-xl px-4 py-3 ${isdark ? "text-white" : "text-gray-900"} ${isdark ? "placeholder-white/50" : "placeholder-gray-500/50"} ${isdark ? "focus:border-purple-500" : "focus:border-blue-500"} focus:outline-none focus:ring-2 ${isdark ? "focus:ring-purple-500/20" : "focus:ring-blue-500/20"} transition-all duration-200 resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className={`w-full bg-gradient-to-r ${isdark ? "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500" : "from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${isdark ? "hover:shadow-purple-500/25" : "hover:shadow-blue-500/25"} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;