import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ArrowDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import ProfileImg from "../image/Profile_new.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titles = [
    "Software Developer",
    "Competitive Programmer",
    "Full Stack Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // typing
          setDisplayText(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === currentTitle.length) {
            // full word typed, start deleting after a pause
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // deleting
          setDisplayText(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex - 1 === 0) {
            // deleted completely, move to next word
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 100 : 150
    ); // faster deleting

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[3px] shadow-2xl shadow-cyan-500/50">
            <img
              src={ProfileImg}
              alt="Harsh Bindal"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Harsh Bindal
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-6 animate-fade-in-up animation-delay-200">
          {displayText}
          <span className="blink">|</span>
        </p>

        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          DSA Enthusiast | MERN Stack Developer | IIIT Surat ECE | Building
          Scalable Web Apps
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/bindalharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-bindal-49546522b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1FcFyc1TUCpKw9rDDfL9k281j1mOsipn6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-all hover:scale-105"
          >
            <FileText size={20} />
            <span>Resume</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-400 animate-fade-in-up animation-delay-800">
          <a
            href="mailto:bindalharsh025@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">bindalharsh025@gmail.com</span>
          </a>
          <a
            href="tel:+918302907658"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm">+91 8302907658</span>
          </a>
        </div>

        <button
          onClick={scrollToContact}
          className="mt-12 animate-fade-in-up animation-delay-1000 group"
          aria-label="Scroll to contact"
        >
          <ArrowDown
            size={32}
            className="mx-auto text-slate-500 group-hover:text-cyan-400 transition-all group-hover:translate-y-1 animate-bounce"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
