import { useState } from "react";

const personalInfoData = [
  {
    id: 1,
    category: "Bio",
    details:
      "Fresh graduate Informatika UPN 'Veteran' Jawa Timur yang memiliki minat kuat dalam bidang Data Analytics. Memiliki pengalaman proyek dalam analisis data, visualisasi dashboard, dan pemodelan machine learning menggunakan Python, SQL, Excel, dan Power BI.",
    icon: "bx bx-id-card",
    color: "#0d6efd",
  },
  {
    id: 2,
    category: "Hobbies",
    details:
      "Menganalisis tren data, membuat dashboard interaktif, serta membaca buku dan eksplorasi teknologi terbaru di bidang data science.",
    icon: "bx bx-heart",
    color: "#198754",
  },
  {
    id: 3,
    category: "Languages",
    details: "Bahasa Indonesia (aktif) dan Bahasa Inggris (menengah–mahir).",
    icon: "bx bx-globe",
    color: "#fd7e14",
  },
  {
    id: 4,
    category: "Contact",
    details:
      "Email: firhaanali@gmail.com\nPhone: +6282132296483\nLinkedIn: linkedin.com/in/firhanalisofi",
    icon: "bx bx-envelope",
    color: "#6610f2",
  },
  {
    id: 5,
    category: "Location",
    details:
      "Domisili di Sidoarjo, Jawa Timur. Terbuka untuk kerja remote atau hybrid di seluruh Indonesia.",
    icon: "bx bx-map",
    color: "#dc3545",
  },
  {
    id: 6,
    category: "Education Summary",
    details:
      "S1 Informatika, Universitas Pembangunan Nasional 'Veteran' Jawa Timur (2020–2024). Sertifikasi: AIBIZ & DSBIZ (CertNexus), Google Data Analytics (Coursera).",
    icon: "bx bx-book",
    color: "#20c997",
  },
];

const heroData = {
  socialLinks: [
    { id: 1, href: "https://www.linkedin.com/in/firhanalisofi/", icon: "bxl-linkedin" },
    { id: 2, href: "https://github.com/firhaanali", icon: "bxl-github" },
    { id: 3, href: "https://twitter.com/firhaanali", icon: "bxl-twitter" }
  ],
  ctaPrimary: { href: "#", label: "Download CV" },
  ctaSecondary: { href: "#contact", label: "Contact Me" }
};

// Komponen SafeDownloadButtons
const SafeDownloadButtons = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        setIsDownloading(true);
        try {
            const response = await fetch("/assets/cv_firhan.pdf");
            if (!response.ok) {
                throw new Error(`File not found: ${response.status}`);
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV-Firhan-Ali-Sofi.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert(`Download failed: ${error.message}`);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="space-y-4 w-full">
            {/* Primary Action - dengan security indicator */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Preview Button - Primary untuk build trust */}
                <a
                    href="/assets/cv_firhan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <i className="bx bx-show mr-2"></i>
                    View CV
                </a>

                {/* Download Button - Secondary */}
                <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50"
                >
                    {isDownloading ? (
                        <>
                            <i className="bx bx-loader-alt bx-spin mr-2"></i>
                            Downloading...
                        </>
                    ) : (
                        <>
                            <i className="bx bx-download mr-2"></i>
                            Download CV
                        </>
                    )}
                </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                    <i className="bx bx-shield-check text-green-500"></i>
                    <span>Safe PDF File</span>
                </div>
                <div className="flex items-center space-x-1">
                    <i className="bx bx-file-doc text-blue-500"></i>
                    <span>2 Pages • 245KB</span>
                </div>
            </div>

            {/* Optional: Quick preview section */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What's in my CV:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Professional Summary & Contact Info</li>
                    <li>• Technical Skills (Python, SQL, Power BI, etc.)</li>
                    <li>• Work Experience & Projects</li>
                    <li>• Education & Certifications</li>
                </ul>
            </div>
        </div>
    );
};

const About = () => {
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

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden" id="about">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            About <span className="text-blue-600 dark:text-blue-400">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Discover my journey, passions, and the story behind my work
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Profile Image */}
                        <div className="lg:w-1/3 flex justify-center lg:justify-start" data-aos="fade-left">
                            <img
                                src="/assets/hero.jpg"
                                alt="Profile"
                                className="w-80 h-80 object-cover shadow-xl hover:rotate-3 transition-transform duration-300"
                            />
                        </div>

                        {/* Personal Info Grid */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-right">
                                {personalInfoData.map((info, index) => {
                                    const colorClasses = getColorClasses(info.color);
                                    return (
                                        <div
                                            key={info.id}
                                            className="flex flex-col"
                                            data-aos="fade-right"
                                            data-aos-delay={`${index * 100}`}
                                        >
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className={`p-4 ${colorClasses.bg} rounded-full shadow-lg flex items-center justify-center text-white shrink-0`}>
                                                    <i className={`bx ${info.icon} text-lg`}></i>
                                                </div>
                                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{info.category}</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                                {info.details}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CV Download Section - NEW */}
                            <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-delay="700">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Get My Complete CV
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Download or preview my detailed curriculum vitae
                                    </p>
                                </div>
                                <SafeDownloadButtons />
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up" data-aos-delay="800">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">Follow me on:</span>
                                    <div className="flex space-x-3">
                                        {heroData.socialLinks.map((social) => (
                                            <a
                                                key={social.id}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <i className={`bx ${social.icon} text-lg`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={heroData.ctaSecondary.href}
                                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <i className="bx bx-envelope mr-2"></i>
                                        {heroData.ctaSecondary.label}
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;