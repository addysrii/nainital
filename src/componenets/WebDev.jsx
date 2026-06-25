import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
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
    title: 'AstroDate',
    subtitle: 'Astrology Dating App',
    year: '2026',
    description: 'A matchmaking web & mobile application that pairs users by horoscope compatibility with a custom onboarding workflow, real-time messaging, and profile management dashboards.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    img: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80',
    link: '#'
  },
  {
    title: 'IPL Auction',
    subtitle: 'Real-time Bidding Dashboard',
    year: '2026',
    description: 'A full-stack IPL player auction management system with real-time bidding simulation, CSV player database imports, and franchise squad budget tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSV Parser'],
    img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    link: '#'
  },
  {
    title: 'Distribution Lab Landing Page',
    subtitle: 'Agency Website Replication',
    year: '2024',
    description: 'Pixel-perfect recreation of a professional agency website with mint-green branding, interactive forms and animated sections. Built with React and CSS Modules.',
    tech: ['React', 'CSS Modules', 'Framer Motion', 'Vite'],
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    link: '#'
  },
  {
    title: 'Couples Games Hub',
    subtitle: 'Collaborative Web Platform',
    year: '2023',
    description: 'Full-stack shared workspace for couples with real-time study timer sync, drawing whiteboard, to-do lists and a virtual item store.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    link: '#'
  },
  {
    title: 'Society QR Entry System',
    subtitle: 'Residential Management Dashboard',
    year: '2023',
    description: 'Web admin panel with real-time entry logs, resident management, guard dashboard and dynamic QR validation — all synced via Socket.io.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    link: '#'
  },
];

const STACK = [
  { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Next.js', img: 'https://static.cdnlogo.com/logos/n/80/next-js.svg' },
  { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
  { name: 'Tailwind', img: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { name: 'Vite', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' },
];

const WebDev = () => (
  <div className="grain bg-[#0d0d0d] min-h-screen text-white pt-24">

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80"
          alt="Web Dev"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 to-[#0d0d0d]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#c9a84c] transition-colors mb-12 font-mono">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <FadeUp>
          <span className="section-label">Expertise Area</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mt-2 leading-tight">
            Web<br />
            <span className="text-gold-gradient animate-shimmer">Development</span>
          </h1>
          <p className="text-gray-400 max-w-xl mt-6 text-[15px] leading-relaxed">
            From concept to deployment — building performant, accessible and visually stunning web applications using modern full-stack technologies.
          </p>
        </FadeUp>
      </div>
    </section>

    {/* Projects */}
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-12">
          <span className="section-label">Featured Builds</span>
          <h2 className="font-display text-3xl font-bold text-white mt-1">Web Projects</h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ScaleIn key={p.title} delay={i * 0.1}>
              <div className="glass glass-hover h-full flex flex-col overflow-hidden" style={{ borderRadius: '16px' }}>
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                      <p className="text-xs text-sky-400 mt-0.5">{p.subtitle}</p>
                    </div>
                    <span className="font-mono text-xs text-[#555]">{p.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 text-gray-500">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>

    {/* Stack */}
    <section className="py-20 px-6 bg-[#111]/60">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-10 text-center">
          <span className="section-label">Technology Stack</span>
          <h2 className="font-display text-3xl font-bold text-white mt-1">Tools I Use</h2>
        </FadeUp>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {STACK.map((s, i) => (
            <ScaleIn key={s.name} delay={i * 0.07}>
              <div className="glass glass-hover flex flex-col items-center gap-3 p-5 rounded-xl text-center">
                <img src={s.img} alt={s.name} className="w-10 h-10 object-contain" />
                <span className="text-xs font-mono text-gray-400">{s.name}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Have a Web Project?</h2>
          <p className="text-gray-400 mb-8">Let's design and ship a web application that stands out.</p>
          <a href="/#contact" className="btn-gold">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  </div>
);

export default WebDev;