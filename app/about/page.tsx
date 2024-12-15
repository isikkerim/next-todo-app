export default function About() {
    return (
      <section className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-6">About To-Do App</h1>
        <p className="text-lg mb-4">
          This To-Do App is a simple yet effective task management tool built with modern web technologies like Next.js, TypeScript, Tailwind CSS, ShadCN, and FontAwesome. It provides an intuitive interface for adding and managing daily tasks.
        </p>
        <p className="text-lg mb-4">
          This project was developed by <strong>Kerim Işık</strong>. Feel free to connect with me or check out my other work:
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/isikkerim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/kerim-i%C5%9F%C4%B1k-b47892211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    );
  }
  