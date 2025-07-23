import { FaCode, FaBrain } from "react-icons/fa";

export default function SkillsSection() {
  const fullStackSkills = ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"];
  const mlSkills = ["Python", "NumPy", "Pandas", "Matplotlib"];
  const techniques = ["Regression", "Classification", "Clustering", "Dimensionality Reduction", "Model Tuning"];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Stack Development */}
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
                <FaCode className="text-indigo-400 mr-3" />
                Full-Stack Development
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {fullStackSkills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-4 py-2 rounded-full text-white text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Machine Learning & AI */}
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
                <FaBrain className="text-violet-400 mr-3" />
                Machine Learning & AI
              </h3>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {mlSkills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-4 py-2 rounded-full text-white text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-2">Techniques:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techniques.map((technique) => (
                    <span
                      key={technique}
                      className="bg-slate-700/50 px-3 py-1 rounded-full text-slate-300 text-xs"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
