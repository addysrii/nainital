import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { Feather, ArrowLeft, BookOpen, Sparkles, Compass } from 'lucide-react';

const PoetryPage = () => {
  const mountRef = useRef(null);
  const [activePoem, setActivePoem] = useState(0);

  const poems = [
    {
      title: "Binary Whispers",
      subtitle: "On Code & Creation",
      icon: <Sparkles className="w-5 h-5 text-orange-400" />,
      content: [
        "Between the lines of binary code,",
        "A quiet whisper starts to bloom,",
        "We write the paths that others rode,",
        "And craft a garden in the gloom.",
        "",
        "A compilation of our dreams,",
        "Resolved in structures clean and true,",
        "Flowing like the mountain streams,",
        "Underneath a sky of blue."
      ]
    },
    {
      title: "Reflections of Nainital",
      subtitle: "On Nature & Solitude",
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      content: [
        "The wind that blows from northern heights,",
        "Carries secrets of the pine,",
        "Nainital under golden lights,",
        "A quiet lake, a silent sign.",
        "",
        "We leave our steps upon the road,",
        "But take the mountains in our soul,",
        "Lighter is the heavy load,",
        "When nature makes the broken whole."
      ]
    },
    {
      title: "The Digital Loom",
      subtitle: "On Time & Technology",
      icon: <Feather className="w-5 h-5 text-purple-400" />,
      content: [
        "We weave the thread of light and screen,",
        "Into a tapestry of age,",
        "A quiet space, a world unseen,",
        "Transcribed upon a glowing page.",
        "",
        "For though the iron gears may turn,",
        "And silica may learn to think,",
        "It is the human heart that burns,",
        "Standing at the water's brink."
      ]
    }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Procedural Earth Texture Generation (No 404 placeholders)
    const createProceduralTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      // Space / Ocean backdrop
      const gradient = ctx.createLinearGradient(0, 0, 0, 512);
      gradient.addColorStop(0, '#0a0b10');
      gradient.addColorStop(0.5, '#121420');
      gradient.addColorStop(1, '#0a0b10');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1024, 512);

      // Continent blobs
      ctx.fillStyle = '#1e293b';
      for (let i = 0; i < 35; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const radius = 30 + Math.random() * 90;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Edge wrapping
        if (x + radius > 1024) {
          ctx.beginPath();
          ctx.arc(x - 1024, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        if (x - radius < 0) {
          ctx.beginPath();
          ctx.arc(x + 1024, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Tech Grid Lines overlaying the planet
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 1024; i += 64) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();
      }
      for (let j = 0; j < 512; j += 64) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(1024, j);
        ctx.stroke();
      }

      // Clouds / Atmosphere
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * 1024;
        const y = 100 + Math.random() * 312;
        ctx.beginPath();
        ctx.ellipse(x, y, 120 + Math.random() * 180, 15 + Math.random() * 30, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createProceduralTexture();

    // Earth Sphere
    const geometry = new THREE.SphereGeometry(4, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      shininess: 15,
      specular: new THREE.Color('#3b82f6'),
      bumpScale: 0.05
    });

    // Add grid wireframe helper for tech look
    const earth = new THREE.Mesh(geometry, material);

    earth.position.x = -2.5;
    earth.position.y = 0;

    scene.add(earth);
    // Holographic atmosphere glow ring
    const glowGeo = new THREE.SphereGeometry(4.1, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const glowRing = new THREE.Mesh(glowGeo, glowMat);

    glowRing.position.x = -2.5;
    glowRing.position.y = 0;

    scene.add(glowRing);
    // Stars Particles
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.07,
      transparent: true,
      opacity: 0.8
    });

    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 1500;
      const y = (Math.random() - 0.5) * 1500;
      const z = (Math.random() - 0.5) * 1500;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(ambientLight, dirLight);

    camera.position.z = 9;

    // Animation Loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      earth.rotation.y += 0.0012;
      glowRing.rotation.y -= 0.0006;
      glowRing.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#050508]">
      {/* 3D Canvas Background Container */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Grid overlay for tech look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Foreground Content Container */}
      <div className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 z-20 pointer-events-none">

        {/* Top Header */}
        <div className="flex items-center justify-between w-full mt-16 pointer-events-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Creative Archive</span>
          </div>
        </div>

        {/* Center Poetry Area */}
        <div className="max-w-xl ml-auto mr-4 lg:mr-16 w-full my-auto py-12 pointer-events-auto">
          <div className="backdrop-blur-xl bg-black/10 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-orange-500/50 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-orange-500/50 rounded-br-xl" />

            <div className="flex items-center gap-3 mb-4">
              {poems[activePoem].icon}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">{poems[activePoem].title}</h2>
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">{poems[activePoem].subtitle}</p>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            <div className="space-y-4 font-serif text-lg md:text-xl text-gray-200 leading-relaxed italic">
              {poems[activePoem].content.map((line, idx) => (
                <p key={idx} className={line === "" ? "h-4" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Pagination */}
        <div className="w-full flex justify-center gap-4 mt-auto pb-4 pointer-events-auto">
          {poems.map((poem, idx) => (
            <button
              key={idx}
              onClick={() => setActivePoem(idx)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${activePoem === idx
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                }`}
            >
              0{idx + 1}. {poem.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoetryPage;