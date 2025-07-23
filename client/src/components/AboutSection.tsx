export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/20 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              An enthusiastic and driven Information Science and Engineering student at Dayananda Sagar College of Engineering with a strong command over full-stack web development using the MERN stack. I have hands-on experience in building responsive and dynamic web applications. Passionate about solving real-world problems through technology, I'm eager to contribute to projects that combine the power of intelligent systems and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
