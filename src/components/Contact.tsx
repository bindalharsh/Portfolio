import { Mail, Phone, Github, Linkedin, FileText, MapPin } from 'lucide-react';
import { Instagram, Twitter, Telegram } from './SocialIcons';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bindalharsh025@gmail.com',
      link: 'mailto:bindalharsh025@gmail.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8302907658',
      link: 'tel:+918302907658',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Agra, Uttar Pradesh, India',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/bindalharsh',
      color: 'hover:text-slate-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/harsh-bindal-49546522b',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/_oye_harsh/',
      color: 'hover:text-pink-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://x.com/Harsh283115?t=lZ1rBrjH1yvQmdshAAPA8A&s=09',
      color: 'hover:text-blue-500'
    },
    {
      icon: Telegram,
      label: 'Telegram',
      link: 'https://t.me/Hkbindal',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-200">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${method.color} rounded-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">{method.label}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="text-slate-200 hover:text-cyan-400 transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-slate-200 font-medium">{method.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-200">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all ${social.color} group`}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-6 text-slate-200">Quick Links</h3>
            <div className="space-y-4">
              <a
                href="https://dailylog-v.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="font-semibold text-slate-200 group-hover:text-cyan-400 mb-1">DailyLog</h4>
                <p className="text-sm text-slate-400">Secure journaling application</p>
              </a>
              <a
                href="https://codesynced.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="font-semibold text-slate-200 group-hover:text-cyan-400 mb-1">CodeSync</h4>
                <p className="text-sm text-slate-400">Collaborative coding platform</p>
              </a>
              <a
                href="https://leetcode.com/u/hkbindal/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <h4 className="font-semibold text-slate-200 group-hover:text-cyan-400 mb-1">LeetCode Profile</h4>
                <p className="text-sm text-slate-400">Knight status, 1000+ problems</p>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1FcFyc1TUCpKw9rDDfL9k281j1mOsipn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-4 transition-all hover:from-cyan-600 hover:to-blue-700"
              >
                <h4 className="font-semibold text-white mb-1">Download Resume</h4>
                <p className="text-sm text-slate-100">View full credentials</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 rounded-xl px-8 py-4 border border-slate-700">
            <p className="text-slate-500 text-sm mt-1">
              copyright © 2025 Harsh Bindal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
