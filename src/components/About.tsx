import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate software developer and recent B.Tech graduate in
              Electronics and Communication from IIIT Surat. With a strong
              foundation in data structures, algorithms, and full-stack
              development, I enjoy building scalable web applications that solve
              real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in competitive programming has strengthened my
              problem-solving skills, with over 1000+ problems solved across
              platforms like LeetCode and CodeChef. I specialize in the MERN
              stack and have hands-on experience in building real-time
              collaborative applications, secure authentication systems, and
              RESTful APIs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Recently, I completed an internship as a Software Developer at
              Sahajanand Technology, where I developed real-time monitoring
              dashboards for over 2000+ projects and implemented role-based
              access control systems, enhancing efficiency and security across
              multiple modules.
            </p>
          </div>

          {/* <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-slate-300 font-medium">
                    Bachelor of Technology
                  </p>
                  <p className="text-slate-400">
                    Electronics and Communication
                  </p>
                  <p className="text-cyan-400 font-medium mt-1">
                    CGPA: 8.33/10
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">
                    Indian Institute of Information Technology Surat
                  </p>
                  <p className="text-slate-400">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Calendar className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                  <p className="text-slate-300">December 2021 - August 2025</p>
                  <p className="text-slate-400">B.Tech Graduate</p>
                </div>
              </div>
            </div>
          </div>
          
          */}

          <div className="space-y-6">
            {/* Education Block */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-slate-300 font-medium">
                    Bachelor of Technology
                  </p>
                  <p className="text-slate-300 font-medium">
                    Indian Institute of Information Technology Surat
                  </p>
                  <p className="text-slate-400">
                    Electronics and Communication
                  </p>
                  <p className="text-slate-400">Surat, Gujarat, India</p>
                  <p className="text-slate-400">December 2021 - August 2025</p>
                  <p className="text-cyan-400 font-medium mt-1">
                    CGPA: 8.33/10
                  </p>
                </div>
              </div>
            </div>

            {/* Location Block */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">
                    Current: South City-1, Sector 41, Gurugram, Haryana
                  </p>
                  <p className="text-slate-300">
                    Native: 22, Nahar Kothi Jagner, Agra, Uttar Pradesh, 283115
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
