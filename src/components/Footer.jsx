import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="p-8 bg-gray-50 text-gray-900 text-center">
      <p className="mb-2">Contact me:</p>
      <p className="mb-2">
        <a href="mailto:shaheeralirahoo555@gmail.com" className="text-blue-500 hover:text-blue-600 underline">shaheeralirahoo555@gmail.com</a> | 
        <a href="tel:+923108573210" className="ml-2 text-blue-500 hover:text-blue-600 underline">+92 310 8573210</a>
      </p>

      <div className="flex justify-center gap-6 mt-4 mb-2 text-2xl">
        <a href="https://github.com/shaheeralirahoo" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shaheer-ali-25b400253/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition">
          <FaLinkedin />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-2">&copy; 2025 Shaheer Ali. All rights reserved.</p>
    </footer>
  );
}
