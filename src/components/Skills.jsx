import { useState } from "react";

const technicalSkillsData = [
    {
        id: 1,
        category: "Data Analyst",
        skills: [
            { name: "Python", level: 95, icon: "bxl-react", color: "#61DAFB" },
            { name: "SQL", level: 90, icon: "bxl-javascript", color: "#F7DF1E" },
            { name: "Excel", level: 85, icon: "bxl-typescript", color: "#3178C6" },
            { name: "Power BI", level: 95, icon: "bxl-html5", color: "#E34F26" },
            { name: "Pandas", level: 90, icon: "bxl-css3", color: "#1572B6" },
            { name: "Matplotlib", level: 88, icon: "bxl-tailwind-css", color: "#06B6D4" }
        ],
        icon: "bx-laptop",
        color: "#0d6efd"
    },
    {
        id: 2,
        category: "Backend Development",
        skills: [
            { name: "Laravel", level: 88, icon: "bxl-nodejs", color: "#339933" },
            { name: "Next.js", level: 85, icon: "bx-server", color: "#000000" },
            { name: "PHP", level: 80, icon: "bxl-php", color: "#777BB4" },
            { name: "MySQL", level: 75, icon: "bxl-python", color: "#3776AB" },
            { name: "REST API", level: 78, icon: "bx-code-block", color: "#FF2D20" },
            { name: "Authentication", level: 90, icon: "bx-network-chart", color: "#FF6B35" }
        ],
        icon: "bx-server",
        color: "#198754"
    },
    {
        id: 3,
        category: "Digital Marketing",
        skills: [
            { name: "Canva", level: 85, icon: "bx-data", color: "#47A248" },
            { name: "Tiktok Ads Manager/GMV Max Product", level: 88, icon: "bx-cylinder", color: "#4479A1" },
            { name: "Shopee Campaigns", level: 82, icon: "bx-data", color: "#336791" },
            { name: "Google Analytics", level: 80, icon: "bxl-aws", color: "#FF9900" },
            { name: "Meta Business Suite", level: 75, icon: "bxl-firebase", color: "#FFCA28" },
            { name: "Email Marketing", level: 70, icon: "bx-memory-card", color: "#DC382D" }
        ],
        icon: "bx-cloud",
        color: "#fd7e14"
    }
];

const softSkillsData = [
    {
        id: 1,
        name: "Problem Solving",
        description: "Analytical thinking and creative solution development",
        level: 92,
        icon: "bx bx-book-open",
        color: "#0d6efd"
    },
    {
        id: 2,
        name: "Team Collaboration",
        description: "Effective communication and teamwork abilities",
        level: 90,
        icon: "bx-group",
        color: "#198754"
    },
    {
        id: 3,
        name: "Leadership",
        description: "Project management and team guidance skills",
        level: 85,
        icon: "bx-crown",
        color: "#fd7e14"
    },
    {
        id: 4,
        name: "Adaptability",
        description: "Quick learning and adaptation to new technologies",
        level: 88,
        icon: "bx-refresh",
        color: "#6610f2"
    },
    {
        id: 5,
        name: "Communication",
        description: "Clear technical communication and documentation",
        level: 87,
        icon: "bx-chat",
        color: "#dc3545"
    },
    {
        id: 6,
        name: "Time Management",
        description: "Efficient project planning and deadline management",
        level: 89,
        icon: "bx-time",
        color: "#20c997"
    }
];

const toolsData = [
  {
    id: 1,
    category: "Data & Development Tools",
    tools: [
      { name: "Jupyter Notebook", icon: "bx-notepad", color: "#DA5B0B" },
      { name: "VS Code", icon: "bx-code-alt", color: "#007ACC" },
      { name: "Google Colab", icon: "bx-cloud", color: "#F9AB00" },
      { name: "Git", icon: "bxl-git", color: "#F05032" },
      { name: "GitHub", icon: "bxl-github", color: "#181717" },
      { name: "Postman", icon: "bx-paper-plane", color: "#FF6C37" }
    ],
    icon: "bx-wrench",
    color: "#0d6efd"
  },
  {
    id: 2,
    category: "Design & Marketing Tools",
    tools: [
      { name: "Canva", icon: "bx-palette", color: "#00C4CC" },
      { name: "CapCut", icon: "bx-video", color: "#000000" },
      { name: "Meta Business Suite", icon: "bx-badge-check", color: "#4267B2" },
      { name: "TikTok Ads", icon: "bx-video-plus", color: "#010101" },
      { name: "Shopee Campaigns", icon: "bx-cart-alt", color: "#EE4D2D" }
    ],
    icon: "bx-paint",
    color: "#198754"
  },
  {
    id: 3,
    category: "Deployment & Presentation",
    tools: [
      { name: "Power BI", icon: "bx-bar-chart-alt", color: "#F2C811" },
      { name: "Netlify", icon: "bx-cloud-upload", color: "#00C7B7" },
      { name: "Vercel", icon: "bx-rocket", color: "#000000" },
      { name: "Google Slides", icon: "bx-slideshow", color: "#F4B400" },
      { name: "Streamlit", icon: "bx-desktop", color: "#FF4B4B" }
    ],
    icon: "bx-cog",
    color: "#fd7e14"
  }
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [hoveredTool, setHoveredTool] = useState(null);
    const [hoveredSoft, setHoveredSoft] = useState(null);

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500', progress: 'bg-blue-500' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500', progress: 'bg-green-500' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500', progress: 'bg-orange-500' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500', progress: 'bg-purple-500' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500', progress: 'bg-red-500' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500', progress: 'bg-teal-500' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    const ProgressBar = ({ level, color }) => {
        const colorClasses = getColorClasses(color);
        return (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                    className={`h-full ${colorClasses.progress} transition-all duration-1000 ease-out rounded-full`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        );
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="skills">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Technical competencies and professional skills I've developed through experience and continuous learning
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setActiveTab('technical')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'technical'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-code-curly text-xl"></i>
                                <span>Technical</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('soft')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'soft'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-chat text-xl"></i>
                                <span>Soft Skills</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('tools')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'tools'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-wrench text-xl"></i>
                                <span>Tools</span>
                            </button>
                        </div>
                    </div>

                    {/* Technical Skills Tab */}
                    {activeTab === 'technical' && (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {technicalSkillsData.map((category) => {
                                const colorClasses = getColorClasses(category.color);
                                return (
                                    <div key={category.id} className="group" data-aos="fade-up">
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                            {/* Category Header */}
                                            <div className="flex items-center mb-6">
                                                <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}>
                                                    <i className={`bx ${category.icon} text-xl`}></i>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {category.category}
                                                </h3>
                                            </div>

                                            {/* Skills List */}
                                            <div className="space-y-4">
                                                {category.skills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${hoveredSkill === `${category.id}-${index}`
                                                                ? 'bg-gray-50 dark:bg-gray-800 scale-105'
                                                                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                                            }`}
                                                        onMouseEnter={() => setHoveredSkill(`${category.id}-${index}`)}
                                                        onMouseLeave={() => setHoveredSkill(null)}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center">
                                                                <i className={`bx ${skill.icon} text-lg mr-2`} style={{ color: skill.color }}></i>
                                                                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                                            </div>
                                                            <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                                        </div>
                                                        <ProgressBar level={skill.level} color={skill.color} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Soft Skills Tab */}
                    {activeTab === 'soft' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softSkillsData.map((skill) => {
                                const colorClasses = getColorClasses(skill.color);
                                return (
                                    <div key={skill.id} className="group" data-aos="fade-up">
                                        <div
                                            className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer ${hoveredSoft === skill.id
                                                    ? `${colorClasses.border} -translate-y-2`
                                                    : 'border-transparent hover:-translate-y-1'
                                                }`}
                                            onMouseEnter={() => setHoveredSoft(skill.id)}
                                            onMouseLeave={() => setHoveredSoft(null)}
                                        >
                                            <div className="text-center">
                                                <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ${hoveredSoft === skill.id ? 'scale-110 rotate-12' : ''
                                                    }`}>
                                                    <i className={`bx ${skill.icon} text-2xl`}></i>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                                    {skill.description}
                                                </p>
                                                <div className="mb-2">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
                                                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                                    </div>
                                                    <ProgressBar level={skill.level} color={skill.color} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Tools Tab */}
                    {activeTab === 'tools' && (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {toolsData.map((category) => {
                                const colorClasses = getColorClasses(category.color);
                                return (
                                    <div key={category.id} className="group" data-aos="fade-up">
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                            {/* Category Header */}
                                            <div className="flex items-center mb-6">
                                                <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}>
                                                    <i className={`bx ${category.icon} text-xl`}></i>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {category.category}
                                                </h3>
                                            </div>

                                            {/* Tools Grid */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {category.tools.map((tool, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center ${hoveredTool === `${category.id}-${index}`
                                                                ? 'bg-gray-50 dark:bg-gray-800 scale-105 border-gray-300 dark:border-gray-600'
                                                                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                                            }`}
                                                        onMouseEnter={() => setHoveredTool(`${category.id}-${index}`)}
                                                        onMouseLeave={() => setHoveredTool(null)}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <i className={`bx ${tool.icon} text-2xl`} style={{ color: tool.color }}></i>
                                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                                {tool.name}
                                                            </span>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;