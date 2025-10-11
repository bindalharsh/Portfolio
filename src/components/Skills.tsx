import { Code2, Database, Cloud, Wrench, Globe, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-cyan-500 to-blue-600",
      skills: [
        "C",
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "PHP",
        "SQL",
        "TypeScript",
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-blue-500 to-violet-600",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      color: "from-violet-500 to-purple-600",
      skills: [
        "MongoDB",
        "MySQL",
        "DBMS",
        "Redis",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-green-500 to-emerald-600",
      skills: [
        "AWS EC2",
        "S3",
        "Lambda",
        "RDS",
        "IAM",
        "VPC",
        "CloudWatch",
        "Git",
        "GitHub",
        "Postman",
      ],
    },
    {
      title: "Software Development",
      icon: Wrench,
      color: "from-orange-500 to-red-600",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "System Design",
        "SDLC",
        "Agile",
      ],
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      skills: [
        "OpenCV",
        "NumPy",
        "Pandas",
        "scikit-learn",
        "Matplotlib",
        "TensorFlow",
        "Keras",
        "Seaborn",
        "PyTorch",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">
            Additional Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-300 mb-3">
                Development Practices
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Optimization Algorithms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Web Services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Collaborative Development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Agile Methodology</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-300 mb-3">
                Systems Knowledge
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Operating Systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Network Architecture</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Routing & Switching</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>System Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
