import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
  Code,
  Trophy,
  Users,
  TrendingUp,
} from "lucide-react";

const Experience = ({isdark}) => {
  const [activeTab, setActiveTab] = useState("experience");
  const [hoveredItem, setHoveredItem] = useState(null);

  const experiences = [
    {
      id: 1,
      title:
        "Hackathon Participant – Semaine Régionale des Métiers du Digital 2025",
      company: "ISGI",
      location: "Casablanca, Morocco",
      period: "May 2025",
      type: "Hackathon",
      description:
        "Developed a full-stack reservation platform for managing room bookings in academic institutions during a regional digital innovation event. Collaborated in a cross-functional team to deliver a working MVP within 48 hours.",
      achievements: [
        "Built intuitive UI using React, ShadCN UI, and Inertia.js",
        "Integrated Laravel backend",
        "Presented solution during 'Innover et Entreprendre à l'ère du digital'",
      ],
      skills: ["React", "Laravel", "TypeScript", "ShadCN UI", "Inertia.js"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "F5C INDUSTRIE",
      location: "Casablanca, Morocco",
      period: "Mar 2025 – Apr 2025",
      type: "Internship",
      description:
        "Completed a one-month internship focused on building a custom eCommerce marketplace and admin panel tailored for industrial product management. Worked on both the client and server sides to deliver a functional and responsive solution.",
      achievements: [
        "Developed a dynamic product catalog and shopping system",
        "Built secure admin dashboard for inventory and order management",
        "Used modern tech stack to ensure fast and scalable performance",
      ],
      skills: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
      icon: <Code className="w-5 h-5" />,
    },

    // {
    //   id: 3,
    //   title: "Junior Web Developer",
    //   company: "StartUp Hub",
    //   location: "Austin, TX",
    //   period: "2020 - 2021",
    //   type: "Full-time",
    //   description:
    //     "Built and maintained web applications for startup clients. Gained experience in agile development and modern web technologies.",
    //   achievements: [
    //     "Contributed to 8 successful product launches",
    //     "Reduced bug reports by 35%",
    //     "Completed 200+ feature implementations",
    //   ],
    //   skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    //   icon: <TrendingUp className="w-5 h-5" />,
    // },
    // {
    //   id: 4,
    //   title: "Freelance Web Developer",
    //   company: "Self-Employed",
    //   location: "Remote",
    //   period: "2019 - 2020",
    //   type: "Freelance",
    //   description:
    //     "Provided web development services to small businesses and entrepreneurs. Built custom websites and e-commerce solutions.",
    //   achievements: [
    //     "Completed 25+ client projects",
    //     "Maintained 98% client satisfaction rate",
    //     "Generated $50K+ in revenue",
    //   ],
    //   skills: ["WordPress", "Shopify", "JavaScript", "Bootstrap"],
    //   icon: <Users className="w-5 h-5" />,
    // },
  ];

  const education = [
    {
      id: 1,
      title: "Diploma in Digital Development",
      institution: "CFPM - OFPPT",
      location: "Morocco",
      period: "2023 – Present",
      type: "Vocational Training Diploma",
      description:
        "Currently pursuing specialized training in full-stack web development, covering modern frontend and backend technologies. Focus on practical, industry-aligned digital solutions.",
      achievements: [
        "Built multiple full-stack projects during training",
        "Consistently ranked among top performers",
        "Actively participated in hackathons and workshops",
      ],
      skills: [
        "JavaScript",
        "React",
        "Laravel",
        "PHP",
        "Mysql",
        "MongoDB",
        "...",
      ],
      icon: <Award className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Baccalauréat in Physical Sciences",
      institution: "Moroccan Ministry of National Education",
      location: "Morocco",
      period: "2022 – 2023",
      type: "High School Diploma",
      description:
        "Completed secondary education with a focus on Physical Sciences. Acquired strong foundations in mathematics, physics, and general sciences, preparing for higher education in technology and engineering.",
      achievements: [
        "Graduated with honors",
        "Strong performance in math and physics",
        "Participated in science and tech clubs",
      ],
      skills: [
        "Analytical Thinking",
        "Problem Solving",
        "Scientific Reasoning",
      ],
      icon: <Award className="w-5 h-5" />,
    },
    // {
    //   id: 3,
    //   title: "Full Stack Web Development",
    //   institution: "FreeCodeCamp",
    //   location: "Online",
    //   period: "2018",
    //   type: "Certification",
    //   description:
    //     "Intensive program covering modern web development technologies and best practices. Built 10+ projects demonstrating proficiency.",
    //   achievements: [
    //     "300+ hours of coursework",
    //     "10 portfolio projects completed",
    //     "Responsive Web Design certification",
    //   ],
    //   skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    //   icon: <Code className="w-5 h-5" />,
    // },
    // {
    //   id: 4,
    //   title: "AWS Solutions Architect",
    //   institution: "Amazon Web Services",
    //   location: "Online",
    //   period: "2022",
    //   type: "Professional Certification",
    //   description:
    //     "Advanced certification demonstrating expertise in designing distributed systems on AWS platform.",
    //   achievements: [
    //     "Associate level prerequisite completed",
    //     "Hands-on labs completed",
    //     "Valid until 2025",
    //   ],
    //   skills: ["AWS", "Cloud Architecture", "DevOps", "Security"],
    //   icon: <Award className="w-5 h-5" />,
    // },
  ];

  const currentData = activeTab === "experience" ? experiences : education;

  return (
    <div className={`min-h-screen ${isdark ? "bg-gradient-to-br from-black via-purple-900 to-black" : " bg-white"} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 font-medium">Professional Journey</span>
          </div> */}
          <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${isdark ? "from-white via-purple-300 to-purple-500" : "from-gray-900 to-blue-600"} bg-clip-text text-transparent mb-6`}>
            My Journey
          </h1>
          <p className={`text-xl ${isdark ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto leading-relaxed`}>
            A timeline of growth, learning, and professional achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className={` ${isdark ? "bg-white/5" : "bg-blue-200"} backdrop-blur-lg border ${isdark ? 'border-white/10' : 'border-blue-400'}  rounded-2xl p-2`}>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "experience"
                    ? `${isdark ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" : "bg-blue-500 text-white shadow-lg shadow-purple-500/25"}`
                    : `${isdark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"}`
                }`}
              >
                <Briefcase className="w-5 h-5" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "education"
                    ? `${isdark ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" : "bg-blue-500 text-white shadow-lg shadow-purple-500/25"}`
                    : `${isdark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"}`
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                Education
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 ${isdark ? "bg-purple-500" : "bg-blue-500"} rounded-full border-4 border-black transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg  shadow-purple-500/50`}>
                  <div className={`absolute inset-0 ${isdark ? "bg-purple-400" : "bg-blue-400"} rounded-full animate-ping opacity-20`}></div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-lg border ${isdark ? "border-white/10" : "border-blue-100"} rounded-2xl p-6 ${isdark ? "hover:border-purple-500/50" : "hover:border-blue-500/50"} transition-all duration-500 hover:scale-105 hover:shadow-xl ${isdark ? "hover:shadow-purple-500/20" : "hover:shadow-blue-500/20"} ${
                      hoveredItem === item.id ? "bg-white/10" : ""
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${isdark ? "bg-purple-500/20" : "bg-blue-500/20"} rounded-lg ${isdark ? "text-purple-400" : "text-blue-400"}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${isdark ? "text-white" : "text-black"} mb-1`}>
                            {item.title}
                          </h3>
                          <p className={`font-semibold ${isdark ? "text-purple-300" : "text-blue-300"}`}>
                            {activeTab === "experience"
                              ? item.company
                              : item.institution}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === "Full-time" ||
                          item.type === "Master's Degree" ||
                          item.type === "Bachelor's Degree"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : item.type === "Freelance"
                            ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                            : `${isdark ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "bg-blue-500/20 text-blue-300 border border-blue-500/30"}`
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${isdark ? "text-white/60" : "text-black/60"}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`${isdark ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 flex items-center gap-2 ${isdark ? "text-white" : "text-black"}`}>
                        <Trophy className={`w-4 h-4 ${isdark ? "text-purple-400" : "text-blue-400"}`} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center gap-2 text-sm ${isdark ? "text-white/70" : "text-black/70"}`}
                          >
                            <ChevronRight className={`w-3 h-3 ${isdark ? "text-purple-400" : "text-blue-400"}`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className={`font-semibold mb-2 ${isdark ? "text-white" : "text-black"}`}>
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${isdark ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
