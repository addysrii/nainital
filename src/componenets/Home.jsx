import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Github, Linkedin, Twitter, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import p1 from "../../public/p1.png"
import img from "../../public/image.png"
import p2 from "../../public/p2.png"
import emailjs from "@emailjs/browser";
/* ── Project data ─────────────────────────────────────────── */
const PROJECTS = [
  {
    title: 'Meetkats',
    subtitle: 'Social Networking',
    category: 'Web & Mobile',
    year: '2024',
    description: 'A hyperlocal social networking platform for professionals.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'JWT'],
    img: p2,
    color: '#ec4899',
  },
  {
    title: 'AstroDate',
    subtitle: 'Astrology Dating App',
    category: 'Web & Mobile',
    year: '2026',
    description: 'Matchmaking platform that pairs users by horoscope compatibility with a seamless onboarding flow, real-time chat, and detailed compatibility scoring.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    img: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&q=80',
    color: '#a855f7',
  },
  {
    title: 'Society QR Entry',
    subtitle: 'Smart Guard System',
    category: 'App',
    year: '2023',
    description: 'Digital check-in for residential societies with dynamic QR codes, guard scan apps and admin dashboards.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'QR-Gen'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    color: '#10b981',
  },
  {
    title: 'Couples Games Hub',
    subtitle: 'Collaborative Workspace',
    category: 'Web',
    year: '2023',
    description: 'Shared study rooms with real-time timer sync, drawing whiteboard, and a virtual item store for couples.',
    tech: ['Next.js', 'WebSockets', 'MongoDB', 'Tailwind', 'Framer Motion'],
    img: p1,
    color: '#3b82f6',
  },
  {
    title: 'Distribution Lab',
    subtitle: 'Agency Landing Page',
    category: 'Web',
    year: '2024',
    description: 'Pixel-perfect agency replication with mint-green branding, custom form handling and interactive sections.',
    tech: ['React', 'CSS Modules', 'Framer Motion', 'Vite'],
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    color: '#c9a84c',
  },
  {
    title: 'IPL Auction',
    subtitle: 'Real-time Bidding System',
    category: 'Web',
    year: '2026',
    description: 'A full-stack IPL player auction management system with real-time bidding simulation, CSV player imports, and franchise squad tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSV Parser'],
    img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    color: '#fbbf24',
  },
];
const techStack = [
  "React",
  "Node",
  "MongoDB",
  "Python",
  "Next.js",
  "Docker",
  "AWS",
  "AI/ML",
];
const SKILLS = [
  { name: 'React / Next.js', pct: 95 },
  { name: 'Node.js / Express', pct: 88 },
  { name: 'React Native / Expo', pct: 85 },
  { name: 'Python / FastAPI', pct: 78 },
  { name: 'MongoDB / PostgreSQL', pct: 82 },
  // { name: 'Solidity / Web3', pct: 65 },
  // { name: 'IoT / Embedded C++', pct: 72 },
  // { name: 'Three.js / WebGL', pct: 68 },
];

const MARQUEE_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Python', 'Solidity', 'React Native',
  'MongoDB', 'Three.js', 'FastAPI', 'WebSockets', 'IoT', 'Tailwind',
  'Framer Motion', 'Docker', 'PostgreSQL', 'Expo',
];

/* ── tiny helpers ────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
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
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Typewriter text (terminal-style type/delete loop + blinking cursor) ── */
const TypewriterText = ({
  text,
  speed = 60,
  deleteSpeed = 35,
  startDelay = 1200,
  pauseAfterType = 2000,
  pauseAfterDelete = 500,
  loop = true,
}) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let handle;
    let i = 0;

    const typeStep = () => {
      handle = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(handle);
          if (loop) handle = setTimeout(deleteStep, pauseAfterType);
        }
      }, speed);
    };

    const deleteStep = () => {
      handle = setInterval(() => {
        i -= 1;
        setDisplayed(text.slice(0, i));
        if (i <= 0) {
          clearInterval(handle);
          handle = setTimeout(typeStep, pauseAfterDelete);
        }
      }, deleteSpeed);
    };

    const startHandle = setTimeout(typeStep, startDelay);

    return () => {
      clearTimeout(startHandle);
      clearTimeout(handle);
      clearInterval(handle);
    };
  }, [text, speed, deleteSpeed, startDelay, pauseAfterType, pauseAfterDelete, loop]);

  return (
    <span className="relative">
      {displayed}
      <motion.span
        className="inline-block w-[3px] h-[0.95em] ml-1 -mb-0.5 bg-[#c9a84c]"
        style={{ boxShadow: '0 0 10px rgba(201,168,76,0.9)' }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
      />
    </span>
  );
};

/* ── Project Card ────────────────────────────────────────── */
const ProjectCard = ({ p, i }) => (
  <ScaleIn delay={i * 0.08}>
    <div className="glass glass-hover h-full flex flex-col overflow-hidden" style={{ borderRadius: '16px' }}>
      <div className="project-card-img">
        <img src={p.img} alt={p.title} loading="lazy" />
        <div className="absolute inset-0 z-10 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)' }}>
          <span className="badge" style={{ borderColor: `${p.color}40`, backgroundColor: `${p.color}12`, color: p.color }}>
            {p.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display font-bold text-xl text-white leading-tight">{p.title}</h3>
            <p className="text-sm mt-0.5" style={{ color: p.color }}>{p.subtitle}</p>
          </div>
          <span className="font-mono text-xs text-[#555] mt-1">{p.year}</span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.tech.map(t => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/8 text-gray-500">
              {t}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-xs font-semibold mt-2 transition-colors hover:gap-2 duration-200"
          style={{ color: p.color }}
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          Discuss Project <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </ScaleIn>
);

/* ── Main Component ──────────────────────────────────────── */
const Home = () => {
  const [filter, setFilter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const FILTERS = ['All', 'Web', 'Mobile', 'Systems'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category.includes(filter));



  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      // Email to you
      await emailjs.send(
        "service_aj96e49",
        "template_hk7l1si",
        templateParams,
        "EP_FosyJ_snc2iP_I"
      );

      // Auto-reply to visitor
      await emailjs.send(
        "service_aj96e49",
        "template_yrv9uod",
        templateParams,
        "EP_FosyJ_snc2iP_I"
      );

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);

    } catch (error) {
      console.log("STATUS:", error.status);
      console.log("TEXT:", error.text);
      console.log(error);

      alert(error.text);
    }
  };

  return (
    <div className="grain relative">

      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] pt-4 lg:pt-12 flex items-center overflow-hidden"
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(201,168,76,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,.15) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/10 blur-[150px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 w-full"
        >
          {/* System Boot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-[#c9a84c] mb-10"
          >
            <div>INITIALIZING ADITYA.OS...</div>
          </motion.div>

          {/* Main OS Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass border border-[#c9a84c]/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              <span className="ml-4 font-mono text-xs text-gray-500">
                ADITYA.OS v2026
              </span>
            </div>

            {/* Big Title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8">
              ADITYA
              <span className="text-gold-gradient">.OS</span>
            </h1>

            {/* Boot Sequence */}
            <div className="space-y-3 font-mono text-sm md:text-base mb-10">
              <p className="text-green-400">
                ✓ Full Stack Engineer
              </p>

              <p className="text-green-400">
                ✓ AI Builder
              </p>

              <p className="text-green-400">
                ✓ Startup Explorer
              </p>

              <p className="text-green-400">
                ✓ Problem Solver
              </p>
            </div>

            {/* Mission */}
            <div className="border-l-2 border-[#c9a84c] pl-6 mb-10">
              <p className="font-mono text-xs text-gray-500 uppercase mb-2">
                Current Mission
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Building products that create
                real-world impact.
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl">
                Full Stack Developer specializing in MERN,
                React Native and AI-powered applications.
                Turning ideas into scalable digital products.
              </p>
            </div>

            {/* Rotating Status Text */}
            <div className="mb-10">
              <div className="font-mono text-[#c9a84c] text-lg">
                <span className="text-gray-500 mr-2">
                  STATUS:
                </span>

                <TypewriterText
                  text="BUILDING PRODUCTS..."
                  speed={70}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-gold">
                Launch Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              {
                value: "20+",
                label: "PROJECTS BUILT",
              },
              {
                value: "3+",
                label: "YEARS CODING",
              },
              {
                value: "AIR 6791",
                label: "GATE DA",
              },
              {
                value: "ONLINE",
                label: "SYSTEM STATUS",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-5 text-center"
              >
                <p className="text-[#c9a84c] font-bold text-2xl">
                  {item.value}
                </p>

                <p className="font-mono text-xs text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Prompt */}
          <div className="text-center mt-16">
            <p className="font-mono text-xs tracking-[0.3em] text-gray-600">
              ▼ ACCESS MODULES ▼
            </p>
          </div>
        </motion.div>
      </section>
      {/* ── TICKER ────────────────────────────────────────────── */}
      <div className="py-6 border-y border-white/5 overflow-hidden bg-[#111]">
        <div className="ticker-wrap">
          <div className="ticker-inner animate-marquee gap-12 flex items-center">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-4 font-mono text-xs text-[#444] uppercase tracking-widest whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* image column */}
          {/* image column */}
          <ScaleIn>
            <div className="relative overflow-visible">

              {/* Profile Image */}
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt="Aditya"
                    className="w-full h-[520px] object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-52">
                    <span className="badge">Full-Stack Engineer</span>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#c9a84c]/20"
              />

              {/* Projects Developed Card */}
              <motion.div
                className="absolute -top-16 -right-10 z-30 glass px-5 py-4 rounded-xl border border-[#c9a84c]/20 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="font-display text-3xl font-bold text-[#c9a84c]">
                  10+
                </p>
                <p className="text-xs text-blue-400 mt-0.5">
                  Projects Developed
                </p>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className="absolute -bottom-10 -left-10 z-30 glass px-5 py-4 rounded-xl border border-white/8 shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <p className="font-display text-3xl font-bold text-white">
                  3+
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Years Experience
                </p>
              </motion.div>

            </div>
          </ScaleIn>

          {/* text column */}
          <div className="space-y-8">
            <FadeUp>
              <span className="section-label">About Me</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mt-2">
                Engineer by craft,<br /> creator by nature
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Hi, I'm <span className="text-white font-semibold">Aditya</span> — a full-stack software engineer based in Kanpur,Uttar Pradesh, India. I build high-quality web and mobile applications, work with AI models, tinker with embedded hardware, and occasionally write poetry.
              </p>
              <p className="text-gray-400 leading-relaxed text-[15px] mt-4">
                My stack spans React, Node.js, Python, React Native, Solidity, and ESP32 — whatever the problem needs, I'll figure it out.
              </p>
            </FadeUp>

            {/* info grid */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Uttar Pradesh, India', icon: <MapPin className="w-4 h-4" /> },
                  { label: 'Email', value: 'adityasrivastava9406@gmail.com', icon: <Mail className="w-4 h-4" /> },
                  { label: 'Interests', value: 'Hiking · Poetry · Music' },
                  { label: 'Education', value: 'B.Tech Computer Science' },
                ].map(item => (
                  <div key={item.label} className="glass rounded-xl p-4">
                    <p className="section-label mb-1" style={{ marginBottom: '4px' }}>{item.label}</p>
                    <p className="text-sm text-white font-medium flex items-center gap-1.5">
                      {item.icon} {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* skills */}
            <FadeUp delay={0.3}>
              <div className="space-y-3">
                {SKILLS.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300 font-medium">{s.name}</span>
                      <span className="font-mono text-[#c9a84c]">{s.pct}%</span>
                    </div>
                    <div className="h-[3px] bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex gap-3 pt-2">
                {[
                  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/addysrii' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/aditya-srivastava-07752527b/' },

                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    className="glass rounded-lg p-2.5 text-gray-400 hover:text-[#c9a84c] transition-colors border border-white/8 hover:border-[#c9a84c]/30">
                    {s.icon}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="divider mx-6 md:mx-24" />

      {/* ── SERVICES / PILLAR CARDS ───────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="section-label">What I Build</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Core Expertise</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                path: '/webdev', label: 'Web Development', dot: 'bg-sky-400',
                desc: 'Full-stack React/Next.js apps, REST APIs, real-time features and production-grade deployments.',
                img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'
              },
              {
                path: '/mobdev', label: 'Mobile Apps', dot: 'bg-pink-400',
                desc: 'Cross-platform iOS & Android apps with React Native, Expo and smooth native integrations.',
                img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
              },
              {
                path: '/aiml', label: 'AI / Machine Learning', dot: 'bg-purple-400',
                desc: 'Predictive models, LLM integrations, RAG pipelines and intelligent automation systems.',
                img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80'
              },
              // {
              //   path: '/blockchain', label: 'Blockchain / Web3', dot: 'bg-emerald-400',
              //   desc: 'Solidity smart contracts, DApps, token systems and security auditing on EVM chains.',
              //   img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80'
              // },
              // {
              //   path: '/iot', label: 'IoT & Embedded', dot: 'bg-amber-400',
              //   desc: 'ESP32 firmware, sensor telemetry, MQTT brokers and real-time control dashboards.',
              //   img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
              // },
              // {
              //   path: '/travel', label: 'Travelogue', dot: 'bg-teal-400',
              //   desc: 'Immersive travel stories, photography and cultural reflections from across India.',
              //   img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80'
              // },
            ].map((item, i) => (
              <ScaleIn key={item.path} delay={i * 0.07}>
                <Link to={item.path} className="group block glass glass-hover h-full overflow-hidden" style={{ borderRadius: '16px' }}>
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                      <h3 className="text-white font-semibold group-hover:text-[#c9a84c] transition-colors">{item.label}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#c9a84c] font-mono">
                      explore <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="divider mx-6 md:mx-24" />

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Portfolio</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Featured Work</h2>
            </div>
            <div className="flex gap-2">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${filter === f
                    ? 'bg-[#c9a84c] text-[#0d0d0d]'
                    : 'glass text-gray-400 hover:text-white border border-white/8'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} p={p} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* divider */}
      <div className="divider mx-6 md:mx-24" />

      {/* ── TRAVEL TEASER ─────────────────────────────────────── */}
      <section id="travel" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="section-label">Travel Diaries</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-5">
              Nainital — Lake City Chronicles
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              Winding mountain roads, misty mornings at Naini Lake, Himalayan chai and the silence between pine trees. An immersive travelogue of my journey through Uttarakhand.
            </p>
            <Link to="/travel" className="btn-gold">
              Read Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <ScaleIn>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=900&q=80"
                alt="Nainital"
                className="w-full h-[480px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass px-5 py-4 rounded-xl border border-white/8">
                  <p className="text-white font-semibold">Nainital, Uttarakhand</p>
                  <p className="text-xs text-[#c9a84c] mt-0.5 font-mono">2,084 m elevation</p>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── POETRY TEASER ────────────────────────────────────── */}
      {/* <section id="poetry" className="py-28 px-6 bg-[#111]/60">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScaleIn className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=900&q=80"
                alt="Night sky"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-[#0d0d0d]/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="glass px-8 py-6 rounded-2xl border border-white/10 max-w-xs">
                  <p className="font-display text-white italic text-lg leading-relaxed">
                    "Between binary lines,<br />a quiet whisper blooms…"
                  </p>
                  <p className="text-[#c9a84c] font-mono text-xs mt-3">— Binary Whispers</p>
                </div>
              </div>
            </div>
          </ScaleIn>

          <FadeUp className="order-1 lg:order-2">
            <span className="section-label">Creative Writing</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-5">
              3D Poetry Universe
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              An interactive Three.js workspace where a rotating holographic Earth serves as canvas for verses on code, nature and life.
            </p>
            <Link to="/poetry" className="btn-outline">
              Enter the Universe <ExternalLink className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section> */}

      {/* divider */}
      <div className="divider mx-6 md:mx-24" />

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label">Let's Connect</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Start a Conversation</h2>
            <p className="text-gray-400 mt-4 text-[15px]">
              Got a project in mind? Need a collaborator or a full-time engineer? I'd love to hear from you.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-2xl p-8 md:p-12 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="section-label mb-2 block">Name</label>
                  <input
                    type="text" required placeholder="Your Name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-[#c9a84c]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label mb-2 block">Email</label>
                  <input
                    type="email" required placeholder="you@example.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-[#c9a84c]/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="section-label mb-2 block">Message</label>
                <textarea
                  required rows={5} placeholder="Tell me about your project…"
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-[#c9a84c]/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-gold w-full justify-center !py-3.5">
                {submitted ? '✓ Message Sent!' : <>Send Message <Mail className="w-4 h-4" /></>}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-display text-2xl font-bold text-white">
            A<span className="text-[#c9a84c]">.</span>
          </Link>
          <p className="text-gray-600 font-mono text-xs">
            © {new Date().getFullYear()} Aditya. Crafted with React + Vite.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            {['Home', 'Projects', 'Travel', 'Poetry'].map(l => (
              <a key={l} href={l === 'Home' ? '/' : `#${l.toLowerCase()}`} className="hover:text-[#c9a84c] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
