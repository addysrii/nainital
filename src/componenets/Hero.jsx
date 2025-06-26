// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronDown, MapPin, Camera, Heart, Mountain, Sunrise, Play, Pause, Volume2, Star, ArrowRight, Eye } from 'lucide-react';
// import img1 from "../assets/nn1.jpg"
// import img2 from "../assets/nn2.jpg"
// import img3 from "../assets/nn3.jpg"
// import img4 from "../assets/nn4.jpg"
// import img5 from "../assets/nn5.jpg"
// const NainitalStory = () => {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setScrollProgress(progress);
//     };

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
          
//           if (entry.isIntersecting) {
//             const sectionIndex = parseInt(entry.target.id.split('-')[1]) || 0;
//             setCurrentSection(sectionIndex);
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//       observer.disconnect();
//     };
//   }, []);

//   const scrollToNext = () => {
//     const nextSection = document.getElementById(`section-${currentSection + 1}`);
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const storyData = [
//     {
//       id: 'hero',
//       title: "Nainital",
//       subtitle: "Where dreams float on mountain lakes",
//       description: "A journey through the emerald jewel of Uttarakhand",
//       image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&h=900&fit=crop",
//       type: 'hero'
//     },
//     {
//       id: 'arrival',
//       title: "The Winding Path",
//       content: "Arriving through the curves of lands to the mountains in a death nearing bus ride the driver aimed to make us feel the adventure. But enternig the heven is always adventures",
//       // details: "47 hairpin bends • 2,084m elevation • 3 hours of pure anticipation",
//       image:  `${img1}`,
//       icon: MapPin,
//       color: "from-emerald-500 to-teal-600",
//       type: 'story'
//     },
//     {
//       id: 'lake',
//       title: "The First Destination",
//       content: "Lover’s Bridge stretched out like a quiet promise suspended in time. Each step across its weathered planks felt like walking through a memory whispered by the wind. Below, the gentle stream caught the fading light, mirroring the golden hush of twilight. Hand-carved railings bore initials of stories long passed, etched deep like confessions only the mountains could keep. It wasn’t just a bridge—it was where hearts paused, lingered, and sometimes left pieces behind.",
//       // details: "1,938m above sea level • 0.5km² of pure serenity • Legend of Sati's eye",
//       image:  `${img2}`,
//       icon: Heart,
//       color: "from-blue-500 to-cyan-600",
//       type: 'story'
//     },
//     {
//       id: 'peaks',
//       title: "Naini Lake",
//       content: "Nainital Lake lies nestled in the heart of the hills, like a jewel cradled by the Himalayas. Its surface, calm and glassy, mirrors the drifting clouds above and the whispered dreams of those who walk its shores. Shaped like an eye, it watches over the town with a serene gaze, holding centuries of legends and longing in its depths. As wooden boats glide across the water, they carry more than travelers—they carry moments paused in time. In the early morning mist or the golden hue of sunset, the lake becomes a canvas where nature and nostalgia quietly meet.",
//       // details: "2,270m peak height • 7 Himalayan ranges visible • 360° panoramic views",
//       image:  `${img3}`,
//       icon: Mountain,
//       color: "from-purple-500 to-indigo-600",
//       type: 'story'
//     },
//     {
//       id: 'sunrise',
//       title: "Dawn's Symphony",
//       content: "Nainital was peace in the morning mist and adventure on the winding trails. From quiet lakeside moments to heart-racing hill climbs, it gave me calm and chaos in the most beautiful balance.",
//       image:  `${img4}`,
//       icon: Sunrise,
//       color: "from-orange-500 to-pink-600",
//       type: 'story'
//     },
//     {
//       id: 'memories',
//       title: "Love Affair of pahads",
//       content: "Every cobblestone on Mall Road, every ripple on the lake, every cloud that kissed the peaks became a treasured memory. These moments, captured not just in photographs but in the heart, would forever echo with the magic of Nainital.",
//       details: "∞ memories created • 247 photos taken • 1 heart forever changed",
//       image: `${img5}`,
//       icon: Camera,
//       color: "from-rose-500 to-red-600",
//       type: 'story'
//     }
//   ];

//   const ParallaxElement = ({ children, speed = 0.5, className = "" }) => {
//     const elementRef = useRef(null);

//     useEffect(() => {
//       const handleScroll = () => {
//         if (elementRef.current) {
//           const scrolled = window.pageYOffset;
//           const rate = scrolled * -speed;
//           elementRef.current.style.transform = `translateY(${rate}px)`;
//         }
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, [speed]);

//     return (
//       <div ref={elementRef} className={className}>
//         {children}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Navigation Dots */}
//       <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
//         {storyData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               const section = document.getElementById(`section-${index}`);
//               if (section) section.scrollIntoView({ behavior: 'smooth' });
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSection === index 
//                 ? 'bg-white scale-125 shadow-lg shadow-white/50' 
//                 : 'bg-white/30 hover:bg-white/60'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Custom Cursor */}
//       <div 
//         className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//           transform: 'translate3d(0, 0, 0)'
//         }}
//       >
//         <div className="w-full h-full bg-white rounded-full opacity-50 animate-pulse" />
//       </div>

//       {/* Hero Section */}
//       <section id="section-0" className="h-screen relative flex items-center justify-center overflow-hidden" data-animate>
//         {/* Background with Parallax */}
//         <ParallaxElement speed={0.3} className="absolute inset-0">
//           <div 
//             className="w-full h-120 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${storyData[0].image})`
//             }}
//           />
//         </ParallaxElement>
        
//         {/* Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
        
//         {/* Floating Particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`
//             }}
//           />
//         ))}

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-6 max-w-6xl">
//           <div className="mb-8">
//             <span className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
//               <Eye className="w-4 h-4" />
//               <span>A Visual Journey</span>
//             </span>
//           </div>
          
//           <h1 className="text-8xl md:text-9xl font-black mb-6 relative">
//             <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
//               NAINITAL
//             </span>
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
//           </h1>
          
//           <p className="text-2xl md:text-3xl mb-4 text-blue-100 font-light tracking-wide">
//             {storyData[0].subtitle}
//           </p>
          
//           <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//             {storyData[0].description}
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <button 
//               onClick={scrollToNext}
//               className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 font-semibold"
//             >
//               <span>Begin Journey</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
            
//             <button 
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="group bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
//             >
//               {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//               <span>Ambient Sounds</span>
//             </button>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
//           <span className="text-sm text-gray-400">Scroll to explore</span>
//           <ChevronDown className="w-6 h-6 text-white/60" />
//         </div>
//       </section>

//       {/* Story Sections */}
//       {storyData.slice(1).map((section, index) => {
//         const sectionIndex = index + 1;
//         const isEven = sectionIndex % 2 === 0;
//         const IconComponent = section.icon;
        
//         return (
//           <section 
//             key={section.id}
//             id={`section-${sectionIndex}`}
//             className="min-h-screen flex items-center py-24 relative overflow-hidden"
//             data-animate
//           >
//             {/* Background Elements */}
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
//             <ParallaxElement speed={0.2} className="absolute inset-0 opacity-5">
//               <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500" />
//             </ParallaxElement>

//             <div className="container mx-auto px-6 relative z-10">
//               <div className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
//                 {/* Image Side */}
//                 <div className="lg:w-1/2">
//                   <div 
//                     className={`relative group transform transition-all duration-1000 ${
//                       isVisible[`section-${sectionIndex}`] 
//                         ? 'translate-y-0 opacity-100 scale-100' 
//                         : 'translate-y-32 opacity-0 scale-95'
//                     }`}
//                   >
//                     {/* Gradient Background */}
//                     <div className={`absolute -inset-8 bg-gradient-to-r ${section.color} opacity-20 group-hover:opacity-30 transition-all duration-500 blur-2xl rounded-3xl`} />
                    
//                     {/* Main Image */}
//                     <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 group-hover:scale-105 transition-transform duration-700">
//                       <img 
//                         src={section.image}
//                         alt={section.title}
//                         className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
//                       />
                      
//                       {/* Overlay Elements */}
//                       <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm p-4 rounded-2xl">
//                         <IconComponent className="w-8 h-8 text-white mb-2" />
//                         <div className="text-xs text-gray-300 font-medium">Chapter {sectionIndex}</div>
//                       </div>
                      
//                       {/* Stats Overlay */}
//                       <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm p-4 rounded-2xl">
//                         <div className="text-xs text-gray-300 leading-relaxed">
//                           {section.details}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Side */}
//                 <div className="lg:w-1/2">
//                   <div 
//                     className={`transform transition-all duration-1000 delay-300 ${
//                       isVisible[`section-${sectionIndex}`] 
//                         ? 'translate-x-0 opacity-100' 
//                         : `${isEven ? 'translate-x-32' : '-translate-x-32'} opacity-0`
//                     }`}
//                   >
//                     {/* Chapter Badge */}
//                     <div className="mb-8">
//                       <span className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${section.color} bg-opacity-20 border border-white/10 rounded-full text-sm font-medium`}>
//                         <Star className="w-4 h-4" />
//                         <span>Chapter {sectionIndex}</span>
//                       </span>
//                     </div>
                    
//                     {/* Title */}
//                     <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
//                       <span className={`bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
//                         {section.title}
//                       </span>
//                     </h2>
                    
//                     {/* Content */}
//                     <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8 font-light">
//                       {section.content}
//                     </p>

//                     {/* Decorative Line */}
//                     <div className={`h-1 w-24 bg-gradient-to-r ${section.color} rounded-full mb-8`} />

//                     {/* Action Button */}
//                     <button className="group flex items-center space-x-3 text-white hover:text-gray-300 transition-colors">
//                       <span className="text-lg font-medium">Continue Reading</span>
//                       <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                         <ArrowRight className="w-5 h-5 text-white" />
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         );
//       })}

//       {/* Epic Closing Section */}
//       <section className="py-32 bg-gradient-to-t from-black via-gray-900 to-black relative overflow-hidden">
//         <ParallaxElement speed={0.1} className="absolute inset-0">
//           <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
//         </ParallaxElement>
        
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-6xl lg:text-7xl font-black mb-8">
//               <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//                 Until We Meet Again
//               </span>
//             </h2>
            
//             <p className="text-2xl text-gray-300 leading-relaxed mb-16 font-light">
//               As the mountain mists embraced our departure, Nainital whispered a promise—
//               that its magic would live forever in our hearts, calling us back to its 
//               serene shores and snow-kissed peaks.
//             </p>
            
//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {[
//                 { number: '∞', label: 'Memories Created', icon: Heart },
//                 { number: '247', label: 'Photos Captured', icon: Camera },
//                 { number: '1', label: 'Heart Forever Changed', icon: Star }
//               ].map((stat, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
//                     <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
//                     <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
//                     <div className="text-lg text-gray-400 font-medium">{stat.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Final CTA */}
//             <div className="space-y-6">
//               <p className="text-lg text-gray-400">Share your own mountain story</p>
//               <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
//                 Create Your Journey
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NainitalStory;
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Camera, Heart, Mountain, Sunset, Star } from 'lucide-react';
import img1 from "../assets/nn1.jpg"
import img2 from "../assets/nn2.jpg"
import img3 from "../assets/nn3.jpg"
import img4 from "../assets/nn4.jpg"
import img5 from "../assets/nn5.jpg"
import img6 from "../assets/nn6.jpeg"
import img7 from "../assets/nn7.jpeg"
import img8 from "../assets/nn10.jpg"
import img9 from "../assets/nn11.jpg"
import img10 from "../assets/nn12.jpg"
import img11 from "../assets/nn13.jpg"
import img12 from "../assets/nn14.jpg"
import img13 from "../assets/nn15.jpg"
import img14 from "../assets/nn16.jpg"
import imgb1 from "../assets/nb1.jpg"
import imgb2 from "../assets/nb2.jpg"
import imgb3 from "../assets/nb3.jpg"
import imgb5 from "../assets/imb5.jpg"
const NainitalStory = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const storyData = [
    {
      title: "The Journey Begins",
      icon: <MapPin className="w-8 h-8" />,
      content: "Arriving through the curves of lands to the mountains in a death nearing bus ride the driver aimed to make us feel the adventure. But enternig the heven is always adventures",
      bgImage:`${img8}`,
      storyImage: `${img1}`,
      overlay: "bg-black/40",
      point : "Just saw my death when on a sharp turn the bus was to collide with an army truck "
    },
    {
      title: "Hanuman Gadhi - The Peace You Want",
      icon: <Heart className="w-8 h-8" />,
      content: "After an exciting journey and settling into a cozy room, we decided to step out and embrace the magic of Nainital. Our first stop was the serene Hanuman Garhi Mandir, where perfect peace seemed to be waiting just for us. Temples, after all, are more than just places to visit — they are sanctuaries of hope and emotion, where the soul finds quiet strength.",
      bgImage: `${img9}`,
      storyImage: `${imgb1}`,
      overlay: "bg-blue-900/30",
      point : "Due to lack of cash and non of acceptance of digital payments we were not able to buy prashad. Stil got lot of blessings "
    },
    {
      title: "Moving Forward",
      icon: <Camera className="w-8 h-8" />,
      content: "Lover’s Bridge stretched out like a quiet promise suspended in time. Each step across its weathered planks felt like walking through a memory whispered by the wind. Below, the gentle stream caught the fading light, mirroring the golden hush of twilight. Hand-carved railings bore initials of stories long passed, etched deep like confessions only the mountains could keep. It wasn’t just a bridge—it was where hearts paused, lingered, and sometimes left pieces behind.",
      bgImage: `${img10}`,
     storyImage:  `${img2}`,
      overlay: "bg-powderblue-900/35",
      point :"Out of nowhere, a group of Haryanvi singers pulled up in their car and burst into a powerful verse of a Haryanvi song, leaving us completely stunned and speechless. It was the most unexpected—and electrifying—moment of the day"


    },
    {
      title: "Khurpatal Lakefront",
      icon: <Heart className="w-8 h-8" />,
      content: "From the Khurpatal Lakefront, it felt like the entire Nainital unfolded before our eyes. The view was nothing short of poetic—hills layered like verses, the lake shimmering like a quiet rhyme. For a moment, we just stood there, soaking in a scene that felt straight out of a dream",
      bgImage: `${img11}`,
      storyImage:`${imgb2}`,
      overlay: "bg-teal-900/30",
     point : " On our guide's advice, we filled our bottles from a stream flowing straight from the mountains. It tasted so pure—it felt like nature’s own energy drink, instantly refreshing us like nothing else could."
    },
    {
      title: "When Water Healed",
      icon: <Mountain className="w-8 h-8" />,
      content: "Standing by the waterfall in Nainital, it felt like the water was speaking straight to my soul—splashing onto me as if saying, 'There’s no such thing as stress if you truly love nature.' That moment, so raw and pure, took me back to my childhood—to those carefree days when my mother used to pour water over my head while bathing me. It wasn’t just water; it was joy, memory, and healing, all at once",
      bgImage: `${img14}`,
      storyImage: `${imgb3}`,
      overlay: "bg-slate-800/40",
      point:"We watched kids splashing in the icy water, carefree and full of joy, untouched by the fear of falling ill. It reminded me that when your mind is free, your soul knows how to truly enjoy life."
    },
    {
      title: "Golden Hour Reflections",
      icon: <Sunset className="w-8 h-8" />,
      content: "Nainital Lake lies nestled in the heart of the hills, like a jewel cradled by the Himalayas. Its surface, calm and glassy, mirrors the drifting clouds above and the whispered dreams of those who walk its shores. Shaped like an eye, it watches over the town with a serene gaze, holding centuries of legends and longing in its depths. As wooden boats glide across the water, they carry more than travelers—they carry moments paused in time. In the early morning mist or the golden hue of sunset, the lake becomes a canvas where nature and nostalgia quietly meet",
      bgImage: `${img13}`,
      storyImage:  `${imgb5}`,
      overlay: "bg-amber-900/25",
            point:"We were about to leave nainital with a frustated mind without doing the boating but somehow we convinced each other to give it a try and yes the decision of spending an hour in lake gave us the best memory of the day ."
    },
    {
  title: "Carrying Nainital Home",
  icon: <Star className="w-8 h-8" />,
  content: "Leaving Nainital felt strangely hollow — like leaving a part of yourself behind. The late-night mountain drive to Haldwani was both eerie and exhilarating, with the winding roads whispering goodbye through the darkness. At the moment, it didn't sting much — like how we leave childhood behind without realizing its weight. But now, with every breath of flatland air, I miss that quiet chaos, that misty charm. Nainital isn't just a place — it's a memory that blooms brighter in absence",
  bgImage: `${img12}`,
  storyImage: `${img4}`,
  overlay: "bg-black/40",
  point:"While driving down to Haldwani at night, our driver bhaiya suddenly said, \"Yaha janwaron ka bhi khatra hai.\" In that instant, the fun turned into fear — the dark forest felt alive, and every sound outside made our hearts race."

}
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
         style={{ backgroundImage: `url(${img7})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 drop-shadow-2xl">
            Nainital
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
            A journey through the lake city that stole my heart
          </p>
          <button 
            onClick={() => scrollToSection(0)}
            className="group bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Begin the Story
            <ChevronDown className="inline ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>

      {/* Story Sections */}
      {storyData.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          className="min-h-screen flex items-center justify-center py-20 relative"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${section.bgImage}')`
            }}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 ${section.overlay}`} />
          
          {/* Parallax Effect Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={`transform transition-all duration-1000 ${
                isVisible[`section-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
                        {section.title}
                      </h2>
                      <div className="flex items-center space-x-3 mt-2 text-white/80">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Nainital, Uttarakhand</span>
                        <span className="w-2 h-2 bg-white/60 rounded-full" />
                        <span className="text-sm">Chapter {index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content with Photo Layout */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Photo Section */}
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className="relative group">
                        <img
                          src={section.storyImage}
                          alt={section.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] border border-white/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                        
                        {/* Floating timestamp */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 backdrop-blur-lg rounded-full px-3 py-1 border border-white/20">
                            <span className="text-white/90 text-xs font-medium">Chapter {index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Story Content */}
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <div className="space-y-6">
                        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg">
                          <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light italic">
                            "{section.content}"
                          </p>
                        </div>
                        
                        {/* Story Details */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                            <span className="text-white/90 font-medium">Story Moment</span>
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">
                          {section.point}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce" />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {storyData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              isVisible[`section-${index}`] 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            title={`Chapter ${index + 1}`}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h3 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
            Until Next Time
          </h3>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every journey leaves footprints on our hearts. Nainital left mountains of memories, 
            reflections in pristine waters, and whispers of the wind through pine trees.
          </p>
          
          {/* Story Navigation */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold mb-6 text-white">Relive the Journey</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {storyData.slice(0, 4).map((story, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-white/80 group-hover:text-white mb-2">
                    {story.icon}
                  </div>
                  <p className="text-sm text-white/80 group-hover:text-white font-medium">
                    {story.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NainitalStory;