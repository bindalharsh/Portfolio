// import { Briefcase, Calendar, MapPin } from 'lucide-react';

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-12 text-center">
//           <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             Work Experience
//           </span>
//         </h2>

//         <div className="relative">
//           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

//           <div className="relative">
//             <div className="mb-8 md:mb-0">
//               <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all md:ml-auto md:w-[calc(50%-2rem)] relative">
//                 <div className="absolute left-0 md:left-auto md:right-full top-8 md:mr-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 md:translate-x-1/2"></div>

//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 bg-cyan-500/10 rounded-lg">
//                     <Briefcase className="text-cyan-400" size={24} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-200">Software Developer Internship</h3>
//                 </div>

//                 <div className="mb-6 space-y-2">
//                   <p className="text-xl font-semibold text-cyan-400">Sahajanand Technology Private Ltd.</p>
//                   <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
//                     <div className="flex items-center gap-2">
//                       <MapPin size={16} />
//                       <span>Surat</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar size={16} />
//                       <span>January 2025 - May 2025</span>
//                     </div>
//                   </div>
//                 </div>

//                 <ul className="space-y-4">
//                   <li className="flex gap-3">
//                     <span className="text-cyan-400 mt-1">•</span>
//                     <span className="text-slate-300 leading-relaxed">
//                       Constructed real-time monitoring dashboards and alerts for <strong className="text-slate-200">2000+ diamond-processing projects</strong> in the Project Planning System using Delphi (FMX) and MySQL, enabling predictive maintenance and cutting downtime handling time.
//                     </span>
//                   </li>
//                   <li className="flex gap-3">
//                     <span className="text-cyan-400 mt-1">•</span>
//                     <span className="text-slate-300 leading-relaxed">
//                       Forged role-based access control and employee-role mapping features across <strong className="text-slate-200">eight modules</strong> of the PPS using Delphi, OOPs, and Atlassian tools, streamlining workflows and reducing unauthorized data access incidents.
//                     </span>
//                   </li>
//                   <li className="flex gap-3">
//                     <span className="text-cyan-400 mt-1">•</span>
//                     <span className="text-slate-300 leading-relaxed">
//                       Implemented an HTML-to-PDF export feature and reporting functionality for data analysis using FMX Delphi, with task coordination through Paymo and inventory sync via Fishbowl, reducing report preparation time and improving usability.
//                     </span>
//                   </li>
//                 </ul>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">Delphi</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">MySQL</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">OOP</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">HTML</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">CSS</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">Atlassian</span>
//                   <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600">Real-time Dashboards</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "PharmEasy",
    location: "Bengaluru, Karnataka, India",
    duration: "Nov 2025 – Present",
    points: [
      "Built and maintained backend services using Java, Spring Boot, and REST APIs, contributing to real-time production features across SCM and Finance domains.",
      "Worked on domain-driven design, API scalability, and optimized business logic for high-traffic backend workflows.",
      "Gained hands-on experience with deployment pipelines, debugging tools, and writing clean, efficient, and maintainable backend code.",
    ],
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kotlin"],
  },
  {
    title: "SAP ABAP Internship",
    company: "Softfairy Consulting",
    location: "Gurugram",
    duration: "AUG 2025 - SEPT 2025",
    points: [
      "Implemented CRUD operations on student master tables using 1 and 2-screen TMG efficiently, handling validations.",
      "Developed ALV reports, module pool programs, and interactive frontend screens for seamless data entry and display.",
      "Created Excel upload/download, PDF export, and calculators using function modules, classes, and Forms effectively.",
      "Worked on SAP CRM, BOL, and optimized ABAP programs to manage transactions and business partners efficiently.",
    ],
    skills: [
      "SAP ABAP",
      "SAP CRM",
      "BOL Framework",
      "ALV Reports",
      "TMG (1-screen & 2-screen)",
      "Function Modules & Classes",
      "PDF Export",
      "Business Partner & Transaction Management",
    ],
  },
  {
    title: "Software Developer Internship",
    company: "Sahajanand Technology Private Ltd.",
    location: "Surat",
    duration: "January 2025 - May 2025",
    points: [
      "Constructed real-time monitoring dashboards and alerts for 2000+ diamond-processing projects in the Project Planning System using Delphi (FMX) and MySQL, enabling predictive maintenance and cutting downtime handling time.",
      "Forged role-based access control and employee-role mapping features across eight modules of the PPS using Delphi, OOPs, and Atlassian tools, streamlining workflows and reducing unauthorized data access incidents.",
      "Implemented an HTML-to-PDF export feature and reporting functionality for data analysis using FMX Delphi, with task coordination through Paymo and inventory sync via Fishbowl, reducing report preparation time and improving usability.",
    ],
    skills: [
      "Delphi",
      "MySQL",
      "OOP",
      "HTML",
      "CSS",
      "Atlassian",
      "Real-time Dashboards",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

          <div className="relative space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div
                  className={`bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all md:w-[calc(50%-2rem)] relative ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  }`}
                >
                  <div
                    className={`absolute top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 ${
                      index % 2 === 0
                        ? "left-0 md:left-auto md:right-full md:translate-x-1/2"
                        : "left-0 md:left-full md:-translate-x-1/2"
                    }`}
                  ></div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Briefcase className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="mb-6 space-y-2">
                    <p className="text-xl font-semibold text-cyan-400">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-slate-300 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
