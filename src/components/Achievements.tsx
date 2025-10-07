import { Trophy, Award, Target, Star, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const codingProfiles = [
    {
      platform: 'LeetCode',
      status: 'Knight (Max Rating: 1943)',
      problems: '1000+ problems solved',
      achievement: 'Ranked 610th out of 20,000+ participants in Biweekly Contest 126',
      link: 'https://leetcode.com/u/hkbindal/',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      platform: 'CodeChef',
      status: '3★ Coder (Max Rating: 1707)',
      problems: '500+ problems attempted',
      achievement: 'Consistent performer in monthly contests',
      link: 'https://www.codechef.com/users/oye_harsh',
      color: 'from-orange-500 to-red-600'
    },
    {
      platform: 'Codeforces',
      status: 'Rated 1282',
      problems: '400+ problems completed',
      achievement: 'Focused on core algorithms and problem-solving',
      link: 'https://codeforces.com/profile/Hkbindal',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      platform: 'GeeksForGeeks',
      status: 'Active Contributor',
      problems: '450+ DSA problems',
      achievement: 'Enhanced mastery in core CS fundamentals',
      link: 'https://www.geeksforgeeks.org/user/bindalharsh025/',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const competitions = [
    {
      title: 'Finalist - 3v3 ShowDown',
      description: 'Team-based competitive programming event hosted by IIIT Surat',
      icon: Trophy
    },
    {
      title: '37th Rank - CodeRush',
      description: 'Coding competition at IIIT Surat',
      icon: Award
    },
    {
      title: '610th Rank - LeetCode Contest',
      description: 'Out of 20,000+ global participants in Biweekly Contest 126',
      icon: Target
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" size={28} />
            <span className="text-slate-200">Competition Highlights</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {competitions.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <Icon className="text-yellow-500" size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-200 mb-2">{comp.title}</h4>
                  <p className="text-slate-400 text-sm">{comp.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Star className="text-cyan-500" size={28} />
            <span className="text-slate-200">Coding Profiles</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {codingProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-200 mb-1">{profile.platform}</h4>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                      {profile.status}
                    </p>
                  </div>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
                  >
                    <ExternalLink size={20} className="text-cyan-400" />
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-300 font-medium">{profile.problems}</p>
                  <p className="text-slate-400 text-sm">{profile.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Total Problems Solved</h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            2350+
          </p>
          <p className="text-slate-400">Across all competitive programming platforms</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
