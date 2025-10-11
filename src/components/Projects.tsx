import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DailyLog",
      description:
        "A secure journaling app using the MERN stack with JWT authentication and HTTP-only cookies ensuring 100% user data privacy. Implemented 50+ REST API endpoints and scalable MongoDB schemas managing 1,000+ journal entries.",
      tech: [
        "MongoDB",
        "React.js",
        "Node.js",
        "Express.js",
        "JWT",
        "REST API",
        "Redux Toolkit",
      ],
      github: "https://github.com/bindalharsh/DailyLog",
      live: "https://dailylog-v.netlify.app/",
      date: "May 2025",
      highlights: [
        "JWT authentication with HTTP-only cookies",
        "50+ REST API endpoints",
        "Manages 1,000+ journal entries",
        "Optimized Redux Toolkit state handling",
      ],
    },
    {
      title: "CodeSync",
      description:
        "A high-performance collaborative coding platform with real-time synchronization for 50+ concurrent users. Features multi-language execution container, real-time chat, presence detection, and tldraw-based whiteboarding.",
      tech: [
        "React.js",
        "TypeScript",
        "Socket.IO",
        "Node.js",
        "Express.js",
        "CodeMirror",
        "tldraw",
      ],
      github: "https://github.com/bindalharsh/Code-Sync",
      live: "https://codesynced.vercel.app/",
      date: "July 2024",
      highlights: [
        "Supports 50+ concurrent users",
        "Multi-language execution with Piston API",
        "Real-time WebSocket features",
        "Collaborative whiteboarding",
      ],
    },
    {
      title: "AI-Powered Smart Attendance System",
      description:
        "An AI-driven real-time attendance system using Python, OpenCV, and face recognition to automate identity detection and attendance tracking with high accuracy and performance optimization.",
      tech: [
        "Python",
        "OpenCV",
        "Face Recognition",
        "Google Sheets API",
        "SMTP Email",
      ],
      github:
        "https://github.com/bindalharsh/AI-Powered-Smart-Attendance-System",
      date: "April 2024",
      highlights: [
        "Real-time AI attendance with face recognition",
        "Fast, accurate ID via facial embeddings",
        "Attendance stored in Google Sheets",
        "Email alerts for attendance",
        "Reliable end-to-end system",
      ],
    },
    {
      title: "ChatApp",
      description:
        "A real-time chat application enabling 500+ users to register, exchange messages, and communicate securely. Features multi-factor authentication, Ajax-powered auto-scroll interface, and efficient session management.",
      tech: ["PHP", "MySQL", "JavaScript", "Ajax"],
      github: "https://github.com/bindalharsh/chatApp",
      date: "April 2024",
      highlights: [
        "500+ registered users",
        "Multi-factor authentication",
        "Real-time message updates",
        "Secure session management",
      ],
    },

    {
      title: "Blood Bank",
      description:
        "A full-stack MERN web application serving as a centralized blood bank platform, managing records of donors, hospitals, and organizations for efficient blood management. It provides role-based access for Admins, Donors, Hospitals, and Organizations to streamline blood donation, inventory tracking, and event coordination.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux Toolkit",
        "Bootstrap",
        "JWT",
      ],
      github: "https://github.com/bindalharsh/BloodBank",
      live: "https://taupe-pastelito-6625e3.netlify.app/login",
      date: "March 2024",
      highlights: [
        "Role-based access for Admin, Donor, Hospital, and Organization",
        "Secure authentication using JWT and bcrypt encryption",
        "Dynamic frontend built with React.js and Redux Toolkit",
        "Backend following MVC architecture using Express.js and MongoDB",
        "Real-time inventory and donation management system",
      ],
    },
    {
      title: "Shopper - Ecommerce Website",
      description:
        "Shopper is a full-stack eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a seamless online shopping experience. It features a dynamic home page, product listings, shopping cart, smooth checkout process, secure user authentication, and an admin panel to manage products. Custom CSS ensures a modern and responsive design for both desktop and mobile users, demonstrating end-to-end development with real-world eCommerce functionality.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS"],
      github: "https://github.com/bindalharsh/Shopper",
      date: "Nov 2023",
      highlights: [
        "Dynamic home page and product listings",
        "Shopping cart and smooth checkout process",
        "Secure user authentication and registration",
        "Admin panel to manage products",
        "Responsive design for desktop and mobile",
      ],
    },
    // {
    //   title: "Bharat Intern Clone",
    //   description:
    //     "A clone of the Bharat Intern platform built using HTML, CSS, and JavaScript. It replicates the core UI and user experience, including homepage layout, internship listings, navigation menus, search functionality, and interactive buttons. The project demonstrates strong frontend development skills with focus on responsive design, modern layouts, and client-side interactivity without backend integration.",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/bindalharsh/bharat-intern_clone",
    //   date: "July 2023",
    //   highlights: [
    //     "Replicated homepage layout and internship listings",
    //     "Implemented navigation menus and search functionality",
    //     "Interactive buttons and client-side interactivity",
    //     "Responsive and modern frontend design",
    //   ],
    // },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500">{project.date}</span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
