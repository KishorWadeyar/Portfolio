export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Kishor Wadeyar
            </span>{" "}
            👋
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Full Stack Developer | AIML Enthusiast | Final Year BE Student
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="hero-gradient px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={handleProjectsClick}
              className="border-2 border-slate-400 px-8 py-4 rounded-full text-slate-300 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-violet-500 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-500 rounded-full opacity-25 animate-pulse"></div>
      </div>
    </section>
  );
}
