'use client';

import React from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { BookOpen, Globe2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types ---
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

// --- Constants ---
const NAV_LINKS = [
  { href: '#mission', label: 'Mission' },
  { href: '#how-it-works', label: 'How it Works' },
] as const;

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Native Mastery',
    description: 'Master pronunciation with high-fidelity audio from native Ibibio speakers.',
  },
  {
    icon: CheckCircle2,
    title: 'Interactive Play',
    description: 'Short, gamified lessons designed to fit into your busy daily schedule.',
  },
  {
    icon: Globe2,
    title: 'Community First',
    description: 'Connect with a global network of learners reclaiming their Ibibio roots.',
  },
] as const;

// --- Components ---

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-[2rem] bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,100,80,0.05)] transition-all duration-500"
    >
      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const WaitlistForm: React.FC = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xbdaoojo");

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-10 rounded-[2rem] text-center"
      >
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Mọmọ!</h3>
        <p className="font-medium opacity-80">You're on the list. We’ll notify you the moment we launch.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="group">
        <input 
          id="full-name"
          name="name" 
          type="text" 
          required 
          placeholder="Your Name"
          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-slate-800 placeholder:text-slate-400"
        />
      </div>
      
      <div>
        <input 
          id="email"
          name="email" 
          type="email" 
          required 
          placeholder="email@example.com"
          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-slate-800 placeholder:text-slate-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-2 ml-2" />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting} 
        className="w-full group bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate-200 disabled:opacity-50"
      >
        {state.submitting ? 'Joining...' : (
          <>
            Secure Early Access
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-900 selection:bg-emerald-100 font-sans selection:text-emerald-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFDFC]/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
              
              <div className="text-2xl font-black tracking-tighter text-emerald-800">Mfi.</div>
                     
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
                {label}
              </a>
            ))}
            <a href="#join" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-md">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-0 right-[-5%] w-[30%] h-[30%] bg-orange-50 rounded-full blur-[100px] opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 border border-emerald-100"
          >
            <Sparkles size={16} />
            The Future of Heritage
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[7rem] font-serif font-medium tracking-tight mb-8 leading-[0.85] text-slate-900"
          >
            Learn Ibibio the <br />
            <span className="italic font-light text-emerald-600">modern way.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Built for the diaspora and the home-grown. Reclaiming our heritage through code, culture, and community.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <a href="#join" className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-200 transition-all inline-block">
              Secure My Early Access
            </a>
          </motion.div>
        </div>
      </header>

      {/* Mission Section */}
      <section id="mission" className="py-32 bg-slate-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Language is the <span className="text-emerald-400 italic">DNA</span> of our culture.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Mfi isn't just an app; it's a digital sanctuary for the Ibibio language. We’re bridging the gap between generations with tools that make learning feel like play.
            </p>
            <div className="flex gap-4 items-center text-emerald-400 font-bold">
              <div className="w-12 h-px bg-emerald-400/30" />
              Built for Uyo and the World
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-emerald-800/20 rounded-[3rem] border border-emerald-500/20 overflow-hidden flex items-center justify-center p-12">
                <span className="text-[10rem] opacity-20 select-none">Mfi</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent" />
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-medium mb-4">Why Mfi?</h2>
          <p className="text-slate-500">Traditional learning meets modern technology.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto bg-emerald-50 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-serif italic text-emerald-900/20 absolute top-10 left-1/2 -translate-x-1/2 select-none">
            Nsido?
          </h2>
          <div className="relative z-10">
            <p className="text-3xl md:text-5xl font-serif text-emerald-900 leading-tight max-w-4xl mx-auto">
              "We are losing our languages to time and distance. Mfi is our way of saying: <span className="text-emerald-600 underline decoration-emerald-300 underline-offset-8">Not on our watch.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center bg-white p-4 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-stone-100">
          <div>
            <h2 className="text-4xl font-serif mb-6 text-slate-900">Start your journey.</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Join over 500+ early supporters. No spam, just progress updates and an invitation to our private beta.
            </p>
            <div className="space-y-4">
               {['Early access to lessons', 'Community badge', 'Lifetime discount'].map((item) => (
                 <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                   <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                 </div>
               ))}
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold mb-6 italic text-slate-300">Mfi.</div>
          <p className="text-slate-400 font-medium mb-2">&copy; {new Date().getFullYear()} Mfi Project. Built for the Ibibio People.</p>
          <p className="text-emerald-600/50 font-bold text-sm tracking-widest uppercase italic">Sosongo (Thank You)</p>
        </div>
      </footer>
    </div>
  );
}