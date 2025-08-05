import { useState } from "react";
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    id: 1,
    type: "Email",
    details: [
      {
        name: "Personal Email",
        value: "firhanalisofi58@gmail.com",
        icon: "bx-envelope",
        color: "#0d6efd",
        link: "mailto:firhanalisofi58@gmail.com"
      },
      {
        name: "Work Email",
        value: "firhanalisofi58@gmail.com",
        icon: "bx-envelope-open",
        color: "#198754",
        link: "mailto:firhanalisofi58@gmail.com"
      },
    ],
    icon: "bx-mail-send",
    color: "#0d6efd",
  },
  {
    id: 2,
    type: "Social Media",
    details: [
      {
        name: "LinkedIn",
        value: "linkedin.com/in/firhanalisofi",
        icon: "bxl-linkedin",
        color: "#0A66C2",
        link: "https://www.linkedin.com/in/firhanalisofi"
      },
      {
        name: "Twitter",
        value: "@firhaanali",
        icon: "bxl-twitter",
        color: "#1DA1F2",
        link: "https://twitter.com/firhaanali"
      },
      {
        name: "GitHub",
        value: "github.com/firhaanali",
        icon: "bxl-github",
        color: "#181717",
        link: "https://github.com/firhaanali"
      },
      {
        name: "Instagram",
        value: "instagram.com/firhaanali",
        icon: "bxl-instagram",
        color: "#E1306C",
        link: "https://instagram.com/firhaanali"
      },
    ],
    icon: "bx-share-alt",
    color: "#fd7e14",
  },
  {
    id: 3,
    type: "Phone",
    details: [
      {
        name: "Mobile",
        value: "082132296483",
        icon: "bx-phone",
        color: "#198754",
        link: "tel:+6282132296483"
      },
      {
        name: "WhatsApp",
        value: "082132296483",
        icon: "bxl-whatsapp",
        color: "#25D366",
        link: "https://wa.me/6282132296483"
      },
    ],
    icon: "bx-phone-call",
    color: "#6610f2",
  },
];


const Contact = () => {
    const [activeTab, setActiveTab] = useState('form');
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [hoveredMethod, setHoveredMethod] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    // EmailJS Configuration - GANTI DENGAN DATA ANDA
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_xxxxxxx', // Ganti dengan Service ID Anda
        TEMPLATE_ID: 'template_xxxxxxx', // Ganti dengan Template ID Anda
        PUBLIC_KEY: 'xxxxxxxxxxxxxxx' // Ganti dengan Public Key Anda
    };

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500', hover: 'hover:bg-blue-600' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500', hover: 'hover:bg-green-600' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500', hover: 'hover:bg-orange-600' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500', hover: 'hover:bg-purple-600' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500', hover: 'hover:bg-red-600' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500', hover: 'hover:bg-teal-600' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Reset status ketika user mulai mengetik lagi
        if (submitStatus) setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Template parameters untuk EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'firhanalisofi58@gmail.com', // Email tujuan
                reply_to: formData.email
            };

            // Kirim email menggunakan EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus('success');
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleContactMethodClick = (detail) => {
        if (detail.link) {
            window.open(detail.link, '_blank');
        }
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="contact">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Reach out to collaborate, discuss opportunities, or just say hello!
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setActiveTab('form')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'form'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-edit text-xl"></i>
                                <span>Contact Form</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('methods')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'methods'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-share-alt text-xl"></i>
                                <span>Contact Methods</span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Form Tab */}
                    {activeTab === 'form' && (
                        <div className="max-w-2xl mx-auto" data-aos="fade-up">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                                        <div className="flex items-center">
                                            <i className="bx bx-check-circle text-green-500 text-xl mr-3"></i>
                                            <div>
                                                <h4 className="text-green-800 dark:text-green-300 font-semibold">Message Sent Successfully!</h4>
                                                <p className="text-green-600 dark:text-green-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                                        <div className="flex items-center">
                                            <i className="bx bx-error-circle text-red-500 text-xl mr-3"></i>
                                            <div>
                                                <h4 className="text-red-800 dark:text-red-300 font-semibold">Failed to Send Message</h4>
                                                <p className="text-red-600 dark:text-red-400 text-sm">Please try again or contact me directly via email.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                            rows="5"
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="bx bx-loader-alt bx-spin text-lg"></i>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="bx bx-send text-lg"></i>
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Contact Methods Tab */}
                    {activeTab === 'methods' && (
                        <div className="grid lg:grid-cols-3 gap-8" data-aos="fade-up">
                            {contactMethods.map((method) => {
                                const colorClasses = getColorClasses(method.color);
                                return (
                                    <div key={method.id} className="group">
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                            {/* Category Header */}
                                            <div className="flex items-center mb-6">
                                                <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}>
                                                    <i className={`bx ${method.icon} text-xl`}></i>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {method.type}
                                                </h3>
                                            </div>

                                            {/* Methods List */}
                                            <div className="space-y-4">
                                                {method.details.map((detail, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${hoveredMethod === `${method.id}-${index}`
                                                            ? 'bg-gray-50 dark:bg-gray-800 scale-105'
                                                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                                            }`}
                                                        onMouseEnter={() => setHoveredMethod(`${method.id}-${index}`)}
                                                        onMouseLeave={() => setHoveredMethod(null)}
                                                        onClick={() => handleContactMethodClick(detail)}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-2">
                                                                <i className={`bx ${detail.icon} text-lg`} style={{ color: detail.color }}></i>
                                                                <div>
                                                                    <p className="font-semibold text-gray-900 dark:text-white">{detail.name}</p>
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{detail.value}</p>
                                                                </div>
                                                            </div>
                                                            <i className="bx bx-link-external text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
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

export default Contact;