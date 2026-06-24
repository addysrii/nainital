import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
const ScaleIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.93 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const PROJECTS = [
  {
    title: 'Meetkats',
    subtitle: 'Social Networking Site',
    year: '2024',
    description:"Smarter Connections, Seamless Networking Concept Overview: MeetKats is a smart networking and crowd management platform designed to eliminate the chaos of traditional event experiences",    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'JWT'],
    img: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?w=800&q=80',
    color: '#ec4899',
  },
  // {
  //   title: 'AstroAura',
  //   subtitle: 'Astrology Dating App',
  //   year: '2024',
  //   description: 'Horoscope-based matchmaking with real-time chat, profile swipe UI and detailed compatibility scoring.',
  //   tech: ['React Native', 'FastAPI', 'WebSockets', 'Python'],
  //   img: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80',
  //   color: '#a855f7',
  // },
  {
    title: 'Society QR Entry',
    subtitle: 'Guard & Resident App',
    year: '2024',
    description: 'Mobile QR scanner for guards and resident management portal. Syncs with backend via Socket.io.',
    tech: ['React Native', 'Expo', 'Node.js', 'Socket.io'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: '#10b981',
  },
];

const MobDev = () => (
  <div className="grain bg-[#0d0d0d] min-h-screen text-white pt-24">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80" alt="Mobile Dev" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 to-[#0d0d0d]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#c9a84c] transition-colors mb-12 font-mono">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <FadeUp>
          <span className="section-label">Expertise Area</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mt-2 leading-tight">
            Mobile<br /><span className="text-gold-gradient animate-shimmer">Development</span>
          </h1>
          <p className="text-gray-400 max-w-xl mt-6 text-[15px] leading-relaxed">
            Cross-platform iOS & Android apps with React Native and Expo — native performance, polished UX and seamless hardware integrations.
          </p>
        </FadeUp>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-12">
          <span className="section-label">Featured Builds</span>
          <h2 className="font-display text-3xl font-bold text-white mt-1">Mobile Projects</h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ScaleIn key={p.title} delay={i * 0.1}>
              <div className="glass glass-hover h-full flex flex-col overflow-hidden" style={{ borderRadius: '16px' }}>
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="badge text-xs" style={{ borderColor: `${p.color}40`, background: `${p.color}12`, color: p.color }}>{p.subtitle}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex justify-between">
                    <h3 className="font-display font-bold text-xl text-white">{p.title}</h3>
                    <span className="font-mono text-xs text-[#555]">{p.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 text-gray-500">{t}</span>)}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Have a Mobile App Idea?</h2>
          <p className="text-gray-400 mb-8">Let's design and ship a cross-platform app your users will love.</p>
          <a href="/#contact" className="btn-gold">Get in Touch <ArrowRight className="w-4 h-4" /></a>
        </FadeUp>
      </div>
    </section>
  </div>
);

export default MobDev;