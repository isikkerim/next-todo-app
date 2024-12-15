import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/isikkerim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kerim-i%C5%9F%C4%B1k-b47892211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} To-Do App. Developed by{" "}
          <a
            href="https://github.com/isikkerim"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Kerim Işık
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
