export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Bachelor of Engineering
                </h3>
                <p className="text-xl text-indigo-400 mb-2">
                  Information Science and Engineering
                </p>
                <p className="text-slate-300">
                  Dayananda Sagar College of Engineering, Bangalore
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full w-24 h-24 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold">8.77</span>
                </div>
                <p className="text-slate-400 text-sm">Average CGPA</p>
                <p className="text-slate-500 text-sm mt-1">2022-2026 (Expected)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
