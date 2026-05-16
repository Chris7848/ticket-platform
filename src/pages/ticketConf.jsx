import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, ShieldCheck, ChevronRight, Info } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'vip',
    name: 'VIP Hospitality',
    price: 1400,
    available: 34,
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    desc: 'Pitchside suite access, fine dining, exclusive lounge.'
  },
  {
    id: 'premium',
    name: 'Premium (Category 1)',
    price: 700,
    available: 156,
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    desc: 'Prime halfway line views, lower bowl seating.'
  },
  {
    id: 'standard',
    name: 'Standard (Category 2)',
    price: 200,
    available: 412,
    color: 'bg-cyan-500',
    borderColor: 'border-cyan-500',
    desc: 'Great atmosphere, corner and behind-goal views.'
  }
];

export default function TicketSelectionPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const activeCategory = CATEGORIES.find(c => c.id === selectedCategory);
  const totalPrice = activeCategory ? activeCategory.price * ticketCount : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* NAVBAR */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Matches
          </button>
          <div className="text-center hidden sm:block">
            <h1 className="text-lg font-bold">Argentina vs Spain</h1>
            <p className="text-xs text-slate-400">June 15, 2026 • MetLife Stadium</p>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN - STADIUM MOCK VISUALIZATION */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-slate-900/50 rounded-3xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 -z-10" />
          
          <h2 className="text-xl font-bold mb-12 text-slate-300 tracking-widest uppercase">Select Zone</h2>
          
          {/* Abstract Stadium Graphic */}
          <div className="relative w-full max-w-md aspect-4/3 flex items-center justify-center">
            
            {/* The Pitch */}
            <div className="absolute w-1/2 h-2/3 bg-emerald-900/20 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="w-full h-px bg-emerald-500/30 absolute" />
              <div className="w-12 h-12 border border-emerald-500/30 rounded-full absolute" />
            </div>

            {/* Stands / Zones Grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
              {/* North Stand - Standard */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory('standard')}
                className={`col-start-2 row-start-1 rounded-t-2xl border-t-4 transition-all ${selectedCategory === 'standard' ? 'bg-cyan-500/20 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
              />
              
              {/* West Stand - VIP & Premium */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory('vip')}
                className={`col-start-1 row-start-2 rounded-l-2xl border-l-4 transition-all ${selectedCategory === 'vip' ? 'bg-yellow-500/20 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
              />
              
              {/* East Stand - Premium */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory('premium')}
                className={`col-start-3 row-start-2 rounded-r-2xl border-r-4 transition-all ${selectedCategory === 'premium' ? 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
              />

              {/* South Stand - Standard */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory('standard')}
                className={`col-start-2 row-start-3 rounded-b-2xl border-b-4 transition-all ${selectedCategory === 'standard' ? 'bg-cyan-500/20 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
              />
            </div>
          </div>

          <div className="mt-12 flex gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500" /> VIP</span>
            <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /> Premium</span>
            <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-500" /> Standard</span>
          </div>
        </div>

        {/* RIGHT COLUMN - CATEGORY SELECTION & CHECKOUT */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="text-2xl font-bold mb-6">Select Tickets</h3>
          
          <div className="space-y-4 mb-8 grow">
            {CATEGORIES.map((cat) => (
              <motion.div 
                key={cat.id}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${selectedCategory === cat.id ? `bg-slate-900 ${cat.borderColor} shadow-lg` : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${cat.color}`} />
                    <h4 className="font-bold text-lg">{cat.name}</h4>
                  </div>
                  <span className="text-xl font-bold">${cat.price}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4 ml-7">{cat.desc}</p>
                <div className="flex items-center justify-between ml-7">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 flex items-center gap-1.5">
                    <Users className="w-3 h-3" /> {cat.available} Seats Left
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checkout Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sticky bottom-6 shadow-2xl">
            {selectedCategory ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Quantity</p>
                    <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-lg p-1">
                      <button 
                        onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-white"
                      >-</button>
                      <span className="font-bold w-4 text-center">{ticketCount}</span>
                      <button 
                        onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                        className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-white"
                      >+</button>
                    </div>  
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Total</p>
                    <p className="text-3xl font-extrabold text-white">${totalPrice}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/payment')}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  Proceed to Payment <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-center flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-4">
                  <ShieldCheck className="w-4 h-4" /> Official FIFA Ticketing Platform
                </p>
              </motion.div>
            ) : (
              <div className="text-center py-6 text-slate-500 flex flex-col items-center">
                <Info className="w-8 h-8 mb-2 opacity-50" />
                <p>Select a stadium zone or category to view pricing and proceed.</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}