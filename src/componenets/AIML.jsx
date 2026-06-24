import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);
const ScaleIn = ({ children, delay = 0, className = '' }) => (
  <motion.div initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const HIGHLIGHTS = [
  { title: 'Predictive Models', desc: 'Custom regression, classification and clustering for operational analytics.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { title: 'LLM Integrations', desc: 'RAG pipelines, semantic search and agentic workflows with Hugging Face.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80' },
  { title: 'Computer Vision', desc: 'Real-time object detection and segmentation with PyTorch and OpenCV.', img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80' },
];

const AIML = () => (
  <div className="grain bg-[#0d0d0d] min-h-screen text-white pt-24">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80" alt="AI ML" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 to-[#0d0d0d]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#c9a84c] transition-colors mb-12 font-mono">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <FadeUp>
          <span className="section-label">Expertise Area</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mt-2 leading-tight">
            AI & Machine<br /><span className="text-gold-gradient animate-shimmer">Learning</span>
          </h1>
          <p className="text-gray-400 max-w-xl mt-6 text-[15px] leading-relaxed">
            Building intelligent systems — from predictive models and NLP pipelines to computer vision and LLM-powered agents.
          </p>
        </FadeUp>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-12">
          <span className="section-label">Capabilities</span>
          <h2 className="font-display text-3xl font-bold text-white mt-1">What I Build in AI</h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <ScaleIn key={h.title} delay={i * 0.1}>
              <div className="glass glass-hover overflow-hidden h-full" style={{ borderRadius: '16px' }}>
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img src={h.img} alt={h.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-16">
          <div className="glass border border-white/8 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">Stack</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1 mb-4">AI / ML Toolkit</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'FastAPI', 'OpenCV', 'Pandas'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80"
              alt="AI visualisation"
              className="rounded-xl w-full h-56 object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Integrate Intelligence</h2>
          <p className="text-gray-400 mb-8">Ready to embed AI into your product? Let's build something smart.</p>
          <a href="/#contact" className="btn-gold">Start a Conversation <ArrowRight className="w-4 h-4" /></a>
        </FadeUp>
      </div>
    </section>
  </div>
);

export default AIML;