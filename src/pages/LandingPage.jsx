import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Ticket, Calendar, MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';

// --- DUMMY DATA ---
const MATCHES = [
  {
    id: 1,
    team1: "Argentina",
    team2: "Spain",
    date: "June 15, 2026",
    time: "20:00 Local Time",
    venue: "MetLife Stadium, New York/New Jersey",
    price: "From $500",
    stage: "Group Stage - Match 14",
    flag1: "🇦🇷",
    flag2: "🇪🇸"
  },
  {
    id: 2,
    team1: "Brazil",
    team2: "France",
    date: "June 18, 2026",
    time: "17:00 Local Time",
    venue: "SoFi Stadium, Los Angeles",
    price: "From $550",
    stage: "Group Stage - Match 22",
    flag1: "🇧🇷",
    flag2: "🇫🇷"
  },
  {
    id: 3,
    team1: "USA",
    team2: "England",
    date: "June 20, 2026",
    time: "21:00 Local Time",
    venue: "Azteca Stadium, Mexico City",
    price: "From $600",
    stage: "Group Stage - Match 30",
    flag1: "🇺🇸",
    flag2: "🏴󠁧󠁢󠁥弄"
  }
];

// --- COMPONENTS ---

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-06-11T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-center mt-12">
      {Object.keys(timeLeft).map((interval, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + (index * 0.1) }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl flex items-center justify-center text-2xl md:text-4xl font-bold text-white shadow-lg shadow-emerald-500/10">
            {timeLeft[interval] !== undefined ? timeLeft[interval] : "00"}
          </div>
          <span className="text-slate-400 text-xs md:text-sm mt-3 uppercase tracking-widest">{interval}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default function LandingPage() {
  const navigate = useNavigate();

  const scrollToMatches = () => {
    document.getElementById('matches').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">WorldCup<span className="text-emerald-400">Tix</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={scrollToMatches} className="hover:text-white transition-colors">Matches</button>
            <button className="hover:text-white transition-colors">Hospitality</button>
            <button className="hover:text-white transition-colors">Venues</button>
          </div>
          <button className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee7c519d53b?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-slate-950/90 via-slate-950/60 to-slate-950" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
              OFFICIAL TICKETING PLATFORM
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
              Witness Football <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">History Unfold</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Secure your place at the biggest sporting event on the planet. Premium seating, dynamic pricing, and unforgettable moments await.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToMatches}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Find Tickets <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all">
                VIP Packages
              </button>
            </div>
          </motion.div>

          <CountdownTimer />
        </div>
      </section>

      {/* FEATURED MATCHES SECTION */}
      <section id="matches" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-emerald-400">Matches</span></h2>
              <p className="text-slate-400 text-lg">High-demand fixtures. Secure your seats before they sell out.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              View All Matches <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATCHES.map((match, index) => (
              <motion.div 
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/50"
              >
                {/* Card Header - Teams */}
                <div className="bg-slate-800/50 p-6 flex items-center justify-between border-b border-slate-800">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">{match.flag1}</span>
                    <span className="font-bold text-sm text-slate-300">{match.team1}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-emerald-500 tracking-widest uppercase">vs</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">{match.flag2}</span>
                    <span className="font-bold text-sm text-slate-300">{match.team2}</span>
                  </div>
                </div>

                {/* Card Body - Details */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-full mb-6">
                    {match.stage}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Calendar className="w-5 h-5 text-emerald-500/70" />
                      <span className="text-sm">{match.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock className="w-5 h-5 text-emerald-500/70" />
                      <span className="text-sm">{match.time}</span>
                    </div>
                    <div className="flex items-start gap-3 text-slate-400">
                      <MapPin className="w-5 h-5 text-emerald-500/70 shrink-0" />
                      <span className="text-sm leading-tight">{match.venue}</span>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Starting Price</p>
                      <p className="text-xl font-bold text-white">{match.price}</p>
                    </div>
                    <button 
                      onClick={() => navigate('/select-tickets')}
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40"
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="mt-8 w-full md:hidden flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 py-4 rounded-xl text-emerald-400 font-medium">
            View All Matches <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Ticket className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-bold tracking-tight text-white">WorldCup<span className="text-emerald-400">Tix</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Ticketing FAQ</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a>
          </div>

          <p className="text-slate-600 text-sm">
            © 2026 WorldCupTix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}