import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-gray-900 text-gray-100 text-center">
      {/* Contact Info */}
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-3">
        <a
          href="mailto:shaheeralirahoo555@gmail.com"
          className="text-blue-400 hover:text-blue-500 underline"
        >
          shaheeralirahoo555@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+923108573210"
          className="ml-2 text-blue-400 hover:text-blue-500 underline"
        >
          +92 310 8573210
        </a>
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a
          href="https://github.com/shaheeralirahoo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shaheer-ali-25b400253/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} Shaheer Ali. All rights reserved.
      </p>
    </footer>
  );

}
