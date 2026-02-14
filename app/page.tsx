'use client';

import React from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { BookOpen, Users, Globe2, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xbdaoojo");

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-emerald-100 font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Mfi Logo" 
            width={32} 
            height={32} 
            priority
            className="rounded-lg object-contain"
          />
          <div className="text-2xl font-black tracking-tighter text-emerald-800">Mfi.</div>
        </div>
        <a 
          href="#join" 
          className="hidden sm:block text-sm font-bold bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100 hover:bg-emerald-100 transition"
        >
          Get Early Access
        </a>
      </nav>

      <header className="px-6 pt-16 pb-24 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
          Learn Ibibio the <br />
          <span className="text-emerald-600 italic">modern way.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
          Africa’s language platform built for us, by us. Reclaiming our heritage through code and culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#join" 
            className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-200"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* --- 2. WHAT IS MFI --- */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6">
            The Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Language is the DNA of our culture.</h2>
          <p className="text-xl leading-relaxed text-slate-600">
            Mfi is an interactive platform designed to make learning Ibibio intuitive and fun. Whether you’re in Uyo or the Diaspora, we’re building the tools to help you speak, write, and understand your mother tongue with confidence.
          </p>
        </div>
      </section>

      {/* --- 3. HOW IT WORKS --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="text-emerald-700" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Native Mastery</h3>
            <p className="text-slate-600">Master pronunciation with high-fidelity audio from native Ibibio speakers.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="text-orange-700" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Interactive Play</h3>
            <p className="text-slate-600">Short, gamified lessons designed to fit into your busy daily schedule.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe2 className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-slate-600">Connect with a global network of learners reclaiming their Ibibio roots.</p>
          </div>
        </div>
      </section>

      {/* --- 4. WHY IT MATTERS (The Hook) --- */}
      <section className="mx-6 my-12 py-20 bg-emerald-900 rounded-[3rem] text-white overflow-hidden relative">
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8 italic text-emerald-400">"Nsido?"</h2>
          <p className="text-2xl md:text-3xl font-light opacity-90 leading-tight">
            We are losing our languages to time and distance. Mfi is our way of saying: <span className="text-emerald-300 font-medium italic underline decoration-emerald-500 underline-offset-8">Not on our watch.</span>
          </p>
        </div>
      </section>

      {/* --- 5. WAITLIST FORM --- */}
      <section id="join" className="py-32 px-6">
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-100 border border-emerald-50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Be the first to know.</h2>
            <p className="text-slate-500 font-medium text-sm md:text-base">Sign up for early access and project updates.</p>
          </div>

          {state.succeeded ? (
            <div className="bg-emerald-50 text-emerald-700 p-8 rounded-2xl text-center">
              <p className="font-black text-xl mb-2">Mọmọ!</p>
              <p className="font-medium">You've been added to the waitlist. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                <input 
                  id="full-name"
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Abasiama"
                  className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your@email.com"
                  className="w-full p-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-2 ml-1" />
              </div>
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-lg shadow-emerald-100 disabled:opacity-50"
              >
                {state.submitting ? 'Adding you...' : 'Secure My Spot'}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Mfi Project. Built for the Ibibio People.</p>
      </footer>
    </div>
  );
}