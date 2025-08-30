import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-b from-purple-50 via-white to-pink-50 text-gray-900 relative overflow-hidden">

            {/* Background Accent Circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Content */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Shaheer Ali
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-medium">
                Backend Developer
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <a
                    href="mailto:shaheeralirahoo555@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:opacity-90 transition"
                >
                    ✉️ Email Me
                </a>
                <a
                    href="tel:+923108573210"
                    className="px-6 py-3 bg-gray-200 text-gray-900 rounded-xl shadow hover:bg-gray-300 transition"
                >
                    📞 Call Me
                </a>
                <a
                    href="/Shaheer-ali(backend-Dev).pdf"
                    download
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover:opacity-90 transition"
                >
                    📄 Download Resume
                </a>
            </div>

            {/* Socials */}
            <div className="flex gap-8">
                <a
                    href="https://github.com/shaheeralirahoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-800 hover:text-purple-600 transition-transform transform hover:scale-110"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/shaheer-ali-25b400253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-110"
                >
                    <FaLinkedin />
                </a>
            </div>
        </section>
    );
}
