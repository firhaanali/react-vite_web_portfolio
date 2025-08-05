import { useState } from "react";

const educationData = [
    {
        id: 1,
        degree: "Bachelor of Computer Science",
        major: "Data Analytics & Machine Learning",
        institution: "Universitas Pembangunan Nasioanal Veteran Jawa Timur",
        period: "2021 - 2025",
        location: "Surabaya, Indonesia",
        gpa: "3.85/4.00",
        status: "Graduated",
        description: "During college, I focused on data analysis, machine learning, and application development based on Python and SQL. My final project combined a XGBoost model with hyperparameter optimization for predicting sales in d'busana company.",
        courses: ["Data Mining", "Machine Learning", "Database Systems", "Python Programming", "Artificial Intelligence", "Big Data Analytics"],
        achievements: [
            "Dean's List for 6 consecutive semesters",
            "Best Capstone Project Award 2020",
            "Programming Competition 2nd Place"
        ],
        icon: "bx-book-open",
        color: "#0d6efd"
    },
    {
        id: 2,
        degree: "Mobile Development Trainee",
        major: "Independent Study Program (Kampus Merdeka)",
        institution: "Bangkit Academy led by Google, Tokopdeia, Gojek, and Traveloka",
        period: "2023 - 2024",
        location: "Online Certification",
        gpa: "Outstanding",
        status: "Certified",
        description: "A 24-week intensive program covering modern Android app development using Kotlin, Clean Architecture, Firebase, and Jetpack Compose. The final project focuses on a mobile-based solution for real-time road damage detection.",
        courses: ["Kotlin Programming", "Android Jetpack Compose", "MVVM Architecture", "Firebase Integration", "UI/UX Design for Mobile", "Capstone Project Development"],
        achievements: [
            "Top 10% of cohort",
            "Successfully deployed 5 full-stack applications",
            "Mentored junior bootcamp students"
        ],
        icon: "bx-code-curly",
        color: "#198754"
    },
    {
        id: 3,
        degree: "IBM Skillsbuild for AI & Cybersecurity",
        major: "Independent Study Program (Kampus Merdeka)",
        institution: "Skilvul",
        period: "2024",
        location: "Online Certification",
        gpa: "Certified",
        status: "Certified",
        description: "The self-paced learning program, organized by IBM and Skilvul, focuses on the fundamentals of artificial intelligence (AI) and cybersecurity. Participants are given practical modules and project-based exams.",
        courses: ["Introduction to AI", "Machine Learning Concepts", "Ethics in AI", "Cybersecurity Fundamentals", "Threat Detection", "Secure Application Development"],
        achievements: [
            "Complete all AI & Cybersecurity modules",
            "Earn an official badge from IBM SkillsBuild",
            "Participate in a final project on data security and responsible AI"
        ],
        icon: "bx-cloud",
        color: "#fd7e14"
    },
    {
        id: 4,
        degree: "Senior High School",
        major: "Mathematics and Natural Sciences",
        institution: "SMA Negeri 1 Waru",
        period: "2018 - 2021",
        location: "Sidoarjo, Indonesia",
        gpa: "90.5/100",
        status: "Graduated",
        description: "Strong foundation in mathematics, physics, and computer science. Active in programming club and mathematics olympiad competitions.",
        courses: ["Advanced Mathematics", "Physics", "Computer Science", "English", "Chemistry", "Biology"],
        achievements: [
            "Learn the basics of algorithms and programming logic",
            "Study mathematics and physics as a foundation for computer science",
            "Attend technology and IT career seminars."
        ],
        icon: "bx-book-open",
        color: "#6610f2"
    }
];

const certificationData = [
    { name: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2025", icon: "bxl-react" },
    { name: "Node.js Certified Developer", issuer: "OpenJS Foundation", year: "2021", icon: "bxl-nodejs" },
    { name: "MongoDB Associate", issuer: "MongoDB Inc.", year: "2021", icon: "bx-data" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2020", icon: "bxl-javascript" }
];

const Education = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredCourse, setHoveredCourse] = useState({ cardId: null, courseIndex: null });
    const [hoveredCert, setHoveredCert] = useState(null);
    const [activeTab, setActiveTab] = useState('formal');

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="education">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Educational <span className="text-blue-600 dark:text-blue-400">Background</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            My academic journey and continuous learning path in computer science and web development
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="bg-gray-100 dark:bg-gray-800 p-1 flex rounded-full shadow-lg">
                            <button
                                onClick={() => setActiveTab('formal')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'formal'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-graduation text-xl"></i>
                                <span>Formal Education</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('certifications')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'certifications'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-badge-check text-xl"></i>
                                <span>Certifications</span>
                            </button>
                        </div>
                    </div>

                    {/* Formal Education Tab */}
                    {activeTab === 'formal' && (
                        <div className="grid lg:grid-cols-2 gap-8">
                            {educationData.map((education) => {
                                const colorClasses = getColorClasses(education.color);
                                return (
                                    <div key={education.id} className="group" data-aos="fade-up">
                                        <div
                                            className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer ${hoveredCard === education.id
                                                    ? `${colorClasses.border} -translate-y-2`
                                                    : 'border-transparent hover:-translate-y-1'
                                                }`}
                                            onMouseEnter={() => setHoveredCard(education.id)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                        >
                                          

                                            {/* Header */}
                                            <div className="flex items-start mb-4 relative z-10">
                                                <div className={`w-14 h-14 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mr-4 shadow-lg transition-all duration-300 ${hoveredCard === education.id ? 'scale-110 rotate-12' : ''
                                                    }`}>
                                                    <i className={`bx ${education.icon} text-2xl`}></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                        {education.degree}
                                                    </h3>
                                                    <h4 className={`text-lg font-semibold ${colorClasses.text} mb-1`}>
                                                        {education.major}
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                                        {education.institution}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                        <span className="flex items-center">
                                                            <i className="bx bx-calendar mr-1"></i>
                                                            {education.period}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <i className="bx bx-map mr-1"></i>
                                                            {education.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <span className={`px-3 py-1 ${colorClasses.bgLight} ${colorClasses.text} rounded-full text-sm font-semibold`}>
                                                            GPA: {education.gpa}
                                                        </span>
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                                            {education.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                                {education.description}
                                            </p>

                                            {/* Courses */}
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Courses:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {education.courses.map((course, index) => (
                                                        <span
                                                            key={index}
                                                            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer ${hoveredCourse.cardId === education.id && hoveredCourse.courseIndex === index
                                                                    ? `${colorClasses.bg} text-white`
                                                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                                                }`}
                                                            onMouseEnter={() => setHoveredCourse({ cardId: education.id, courseIndex: index })}
                                                            onMouseLeave={() => setHoveredCourse({ cardId: null, courseIndex: null })}
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notable Achievements:</p>
                                                <ul className="space-y-1">
                                                    {education.achievements.map((achievement, index) => (
                                                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                            <i className="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Certifications Tab */}
                    {activeTab === 'certifications' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {certificationData.map((cert, index) => (
                                <div key={index} className="group" data-aos="fade-up">
                                    <div
                                        className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer ${hoveredCert === index
                                                ? 'border-blue-500 -translate-y-2 scale-105'
                                                : 'border-transparent hover:-translate-y-1'
                                            }`}
                                        onMouseEnter={() => setHoveredCert(index)}
                                        onMouseLeave={() => setHoveredCert(null)}
                                    >
                                       

                                        <div className={`w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ${hoveredCert === index ? 'rotate-360 scale-110' : ''
                                            }`}>
                                            <i className={`bx ${cert.icon} text-2xl`}></i>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            {cert.issuer}
                                        </p>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            
        </section>
    );
};

export default Education;