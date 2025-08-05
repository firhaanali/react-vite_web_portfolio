import { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "Sales Forecasting",
        category: "Data Analytics",
        description: "Monthly fashion product sales prediction model using XGBoost and Bayesian Optimization.",
        technologies: ["Python", "XGBoost", "Bayesian Optimization", "Pandas", "Matplotlib"],
        icon: "bx bx-cart",
        github: "https://github.com/firhaanali/optimized-sales-forecasting",
        live: null,
        color: "#0d6efd"
    },
    {
        id: 2,
        title: "KUDSMarket Website",
        category: "Backend",
        description: " Laravel-based marketplace website to facilitate the buying and selling of products between cooperatives.",
        technologies: ["Laravel", "Vue.js", "MySQL"],
        icon: "bx bx-briefcase",
        github: "https://github.com/firhaanali/berniaga-KUDSMarket",
        color: "#198754"
    },
    {
        id: 3,
        title: "E-Commerce Analysis",
        category: "Data Analytics",
        description: "Data analysis project focusing on RFM segmentation, cohort analysis, and market basket analysis to uncover customer behavior and optimize marketing strategies.",
        technologies: ["Python", "RFM", "Cohort Analysis", "Market Basket Analysis"],
        icon: "bx bx-task",
        github: "https://github.com/firhaanali/ecommerce-rfm-cohort-marketbasket-analysis",
        live: null,
        color: "#fd7e14"
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        category: "Fullstack",
        description: "Real-time social media analytics dashboard",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
        icon: "bx bx-line-chart",
        github: "https://github.com/username/social-dashboard",
        live: "https://social-dashboard-demo.com",
        color: "#6610f2"
    },
    {
        id: 5,
        title: "Weather App",
        category: "Frontend",
        description: "Responsive weather application with real-time data",
        technologies: ["React.js", "Tailwind CSS", "OpenWeather API"],
        icon: "bx bx-cloud",
        github: "https://github.com/username/weather-app",
        live: "https://weather-app-demo.com",
        color: "#dc3545"
    },
    {
        id: 6,
        title: "Inventory Management",
        category: "Backend",
        description: "API for inventory tracking and management",
        technologies: ["Python", "FastAPI", "PostgreSQL"],
        icon: "bx bx-box",
        github: "https://github.com/username/inventory-api",
        live: null,
        color: "#20c997"
    },
    {
        id: 7,
        title: "Chat Application",
        category: "Fullstack",
        description: "Real-time chat app with group and private messaging",
        technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
        icon: "bx bx-chat",
        github: "https://github.com/username/chat-app",
        live: "https://chat-app-demo.com",
        color: "#0d6efd"
    },
    {
        id: 8,
        title: "Todo List App",
        category: "Frontend",
        description: "Interactive todo list with drag-and-drop functionality",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        icon: "bx bx-list-check",
        github: "https://github.com/username/todo-app",
        live: "https://todo-app-demo.com",
        color: "#fd7e14"
    },
    {
        id: 9,
        title: "Authentication Service",
        category: "Backend",
        description: "Secure authentication microservice with OAuth support",
        technologies: ["Node.js", "Express.js", "Redis", "OAuth2"],
        icon: "bx bx-lock",
        github: "https://github.com/username/auth-service",
        live: null,
        color: "#6610f2"
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(project => project.category.toLowerCase() === activeTab);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="projects">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Projects & <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A showcase of my work, demonstrating technical expertise and problem-solving skills across various domains
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto sm:flex-nowrap">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'all'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-grid-alt text-lg sm:text-xl"></i>
                                <span>All</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('data analytics')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'data analytics'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-laptop text-lg sm:text-xl"></i>
                                <span>Data Analytics</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('backend')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'backend'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-server text-lg sm:text-xl"></i>
                                <span>Backend</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('digital marketing')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'digital marketing'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-code-curly text-lg sm:text-xl"></i>
                                <span>Digital Marketing</span>
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => {
                            const colorClasses = getColorClasses(project.color);
                            return (
                                <div
                                    key={project.id}
                                    className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${hoveredProject === project.id ? colorClasses.border : 'border-transparent'
                                        } cursor-pointer ${hoveredProject === project.id
                                            ? 'z-[20] -translate-y-2'
                                            : 'z-0 hover:-translate-y-1'
                                        }`}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >

                                    <div className="text-center opacity-100">
                                        <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ${hoveredProject === project.id ? 'scale-110 rotate-12' : ''}`}>
                                            <i className={`bx ${project.icon} text-2xl`}></i>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className={`text-xs font-semibold ${colorClasses.bgLight} ${colorClasses.text} px-2 py-1 rounded-full`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-center space-x-4">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-sm ${colorClasses.text} hover:underline flex items-center space-x-1`}
                                                >
                                                    <i className="bx bxl-github text-lg"></i>
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-sm ${colorClasses.text} hover:underline flex items-center space-x-1`}
                                                >
                                                    <i className="bx bx-link-external text-lg"></i>
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;