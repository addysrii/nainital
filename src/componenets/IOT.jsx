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

const PILLARS = [
  { title: 'Embedded Firmware', desc: 'Optimised C++ firmware for ESP32, ESP8266, STM32 with low-power state management.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
  { title: 'Sensor Telemetry', desc: 'I2C, SPI and UART sensor integrations for environmental, motion and biometric data.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
  { title: 'Real-time Dashboards', desc: 'WebSocket-powered control panels and live data visualisations for IoT systems.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
];

const IOT = () => (
  <div className="grain bg-[#0d0d0d] min-h-screen text-white pt-24">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" alt="IoT" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 to-[#0d0d0d]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#c9a84c] transition-colors mb-12 font-mono">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <FadeUp>
          <span className="section-label">Expertise Area</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mt-2 leading-tight">
            IoT &<br /><span className="text-gold-gradient animate-shimmer">Embedded</span>
          </h1>
          <p className="text-gray-400 max-w-xl mt-6 text-[15px] leading-relaxed">
            Bridging hardware and software — from microcontroller firmware to cloud-connected real-time dashboards.
          </p>
        </FadeUp>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((p, i) => (
            <ScaleIn key={p.title} delay={i * 0.1}>
              <div className="glass glass-hover overflow-hidden h-full" style={{ borderRadius: '16px' }}>
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeUp>
          <div className="glass border border-white/8 rounded-2xl p-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">Hardware Stack</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1 mb-6">IoT Toolkit</h3>
              <div className="grid grid-cols-2 gap-3">
                {['ESP32 / ESP8266', 'Arduino / PlatformIO', 'C++ Firmware', 'MQTT / Mosquitto', 'Node-RED', 'Raspberry Pi', 'I2C / SPI / UART', 'WebSockets'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1601984845798-44b10f90c361?w=600&q=80"
              alt="IoT hardware"
              className="rounded-xl w-full h-56 object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Connect Physical Systems</h2>
          <p className="text-gray-400 mb-8">Need a smart hardware solution? Let's design and build it together.</p>
          <a href="/#contact" className="btn-gold">Get in Touch <ArrowRight className="w-4 h-4" /></a>
        </FadeUp>
      </div>
    </section>
  </div>
);

export default IOT;