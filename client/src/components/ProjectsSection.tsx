import { FaShoppingCart, FaCheckCircle, FaCloudSun, FaBook, FaWaveSquare, FaRobot, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Amazon Clone",
      description: "HTML/CSS-based Amazon-style e-commerce UI with responsive design and modern styling.",
      icon: <FaShoppingCart className="text-indigo-400 text-xl" />,
      liveUrl: "https://kishorwadeyar.github.io/AmazonClone/",
      githubUrl: "https://github.com/KishorWadeyar/AmazonClone",
    },
    {
      title: "Todo App",
      description: "React + Material UI task manager with CRUD operations and modern user interface.",
      icon: <FaCheckCircle className="text-indigo-400 text-xl" />,
      githubUrl: "https://github.com/KishorWadeyar/To-doApp",
    },
    {
      title: "Weather App",
      description: "JavaScript application using weather API to display real-time weather information.",
      icon: <FaCloudSun className="text-indigo-400 text-xl" />,
      githubUrl: "https://github.com/KishorWadeyar/WeatherApp",
    },
    {
      title: "Bookstore Website",
      description: "Full-stack e-commerce platform built with MERN stack for online book shopping.",
      icon: <FaBook className="text-indigo-400 text-xl" />,
      githubUrl: "https://github.com/KishorWadeyar/BookStore",
    },
    {
      title: "Sonar Rock vs Mine Prediction",
      description: "Machine learning project using supervised learning to classify sonar signals.",
      icon: <FaWaveSquare className="text-indigo-400 text-xl" />,
      githubUrl: "https://github.com/KishorWadeyar/Sonar_Rock_Mine_Prediction",
    },
    {
      title: "Healthcare Chatbot (LLaMA 2)",
      description: "Python-based AI chatbot using RAG and NLP for healthcare assistance.",
      icon: <FaRobot className="text-indigo-400 text-xl" />,
      githubUrl: "https://github.com/KishorWadeyar/Healthcare_Chatbot",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover bg-slate-900/50 rounded-2xl p-6 border border-slate-700/20 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.icon}
                </div>
                <p className="text-slate-300 mb-6 text-sm">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.liveUrl ? "flex-1" : "w-full"} bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center`}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
