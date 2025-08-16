import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gray-50 text-gray-900">
            <h1 className="text-5xl font-bold mb-4">Shaheer Ali</h1>
            <p className="text-xl mb-8 text-gray-700">Backend Developer</p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <a
                    href="mailto:shaheeralirahoo555@gmail.com"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Email Me
                </a>
                <a
                    href="tel:+923108573210"
                    className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300 transition"
                >
                    Call Me
                </a>
                <a
                    href="/Shaheer-ali(backend-Dev).pdf"
                    download
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                    📄 Download Resume
                </a>
            </div>

            <div className="flex gap-6">
                <a
                    href="https://github.com/shaheeralirahoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 text-3xl transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/shaheer-ali-25b400253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 text-3xl transition"
                >
                    <FaLinkedin />
                </a>
            </div>
        </section>
    );
}
