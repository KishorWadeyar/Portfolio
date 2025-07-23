import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      title: "Email",
      value: "kishor.wadeyar@gmail.com",
      href: "mailto:kishor.wadeyar@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl text-white" />,
      title: "GitHub",
      value: "KishorWadeyar",
      href: "https://github.com/KishorWadeyar",
    },
    {
      icon: <FaLinkedin className="text-2xl text-white" />,
      title: "LinkedIn",
      value: "kishorwadeyar",
      href: "https://www.linkedin.com/in/kishorwadeyar/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="card-hover bg-slate-900/50 rounded-2xl p-8 border border-slate-700/20 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <a
                  href={method.href}
                  target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={method.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className="text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-700/20">
            <p className="text-slate-400">
              Let's connect and build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
